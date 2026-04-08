function questionMatchesNeed(q, selected, cfg, counts){
  const leMax  = cfg.leTargets[q.le]   || 0;
  const leHave = counts.le[q.le]       || 0;
  const leDeficit   = Math.max(0, leMax - leHave);
  const leRatio     = leMax > 0 ? (leMax - leHave) / leMax : 0;  // 0..1

  const kMax   = cfg.kTargets[q.kLevel] || 0;
  const kHave  = counts.k[q.kLevel]    || 0;
  const kDeficit    = Math.max(0, kMax - kHave);

  const lzCount = selected.filter(x => x.lz === q.lz).length;
  const leCount = selected.filter(x => x.le === q.le).length;

  let score = 0;
  // Weighted by deficit ratio — farther from target = much stronger pull
  if (leDeficit > 0) score += 10 * leRatio + leDeficit * 1.5;
  if (leCount === 0)  score += 6;           // bonus: LE not yet represented
  if (kDeficit > 0)   score += 5 + kDeficit;
  // LZ diversity: strong bonus for new LZ, escalating penalty for repeats
  if (lzCount === 0)      score += 10;      // new LZ: strong bonus
  else if (lzCount === 1) score -= 6;       // already seen once: penalty
  else                    score -= 15;      // seen twice or more: heavy penalty
  score += Math.random() * 1.5;            // small jitter for true randomisation
  return score;
}
function takeBestCandidate(candidates, selected, cfg, counts){
  if(!candidates.length) return null;
  return [...candidates].sort((a,b)=>questionMatchesNeed(b,selected,cfg,counts)-questionMatchesNeed(a,selected,cfg,counts))[0];
}
function incCounts(counts,q){
  counts.type[q.type]=(counts.type[q.type]||0)+1;
  counts.le[q.le]=(counts.le[q.le]||0)+1;
  counts.k[q.kLevel]=(counts.k[q.kLevel]||0)+1;
  counts.lz.add(q.lz);
}
function createCounts(){ return {type:{single:0,multiple:0,ktype:0},le:{},k:{K1:0,K2:0,K3:0},lz:new Set()}; }
function removeQuestion(pool,q){ const i=pool.findIndex(x=>x.qid===q.qid); if(i>=0) pool.splice(i,1); }

function selectQuestions(mode){
  const cfg=MODES[mode];
  const quotas={single:cfg.nSingle,multiple:cfg.nMulti,ktype:cfg.nKtype};
  const pool=shuffle(allQuestions);
  const selected=[];
  const counts=createCounts();

  // 1) guarantee LE coverage where possible
  cfg.minLE.forEach(le=>{
    const candidates=pool.filter(q=>q.le===le && counts.type[q.type] < quotas[q.type]);
    const pick=takeBestCandidate(candidates, selected, cfg, counts);
    if(pick){ selected.push(pick); incCounts(counts,pick); removeQuestion(pool,pick); }
  });

  // 2) fill toward blueprint using weighted constrained random sampling
  while(selected.length < cfg.nSingle + cfg.nMulti + cfg.nKtype){
    const candidates=pool.filter(q=>counts.type[q.type] < quotas[q.type]);
    if(!candidates.length) break;
    const pick=takeBestCandidate(candidates, selected, cfg, counts);
    selected.push(pick); incCounts(counts,pick); removeQuestion(pool,pick);
  }

  // 3) guaranteed LZ diversity: for each LE with ≥2 questions, try to replace
  //    any LZ duplicate with a pool item that brings a new LZ for that LE.
  ALL_LES.forEach(le=>{
    const leQs=selected.filter(q=>q.le===le);
    if(leQs.length<2) return;
    const seenLZ=new Set();
    leQs.forEach(q=>{
      if(seenLZ.has(q.lz)){
        // find a replacement from the remaining pool: same LE, different LZ, same type quota ok
        const alt=pool.filter(r=>r.le===le && !seenLZ.has(r.lz) && counts.type[r.type]<quotas[r.type]);
        if(alt.length>0){
          const repl=alt[Math.floor(Math.random()*alt.length)];
          const idx=selected.indexOf(q);
          // return duplicate back to pool and swap in replacement
          pool.push(q);
          counts.type[q.type]=Math.max(0,(counts.type[q.type]||0)-1);
          counts.le[q.le]=Math.max(0,(counts.le[q.le]||0)-1);
          counts.k[q.kLevel]=Math.max(0,(counts.k[q.kLevel]||0)-1);
          counts.lz.delete(q.lz);
          selected.splice(idx,1,repl);
          incCounts(counts,repl);
          removeQuestion(pool,repl);
          seenLZ.add(repl.lz);
          return;
        }
      }
      seenLZ.add(q.lz);
    });
  });

  // 4) guarantee at least one diagram question per exam
  if(!selected.some(q=>q.diagram)){
    const diagPool=pool.filter(q=>q.diagram && q.type==='single' && counts.type.single < quotas.single+1);
    if(diagPool.length>0){
      const diagQ=diagPool[Math.floor(Math.random()*diagPool.length)];
      // replace a single-type non-diagram question (prefer last added, non-LE-mandatory)
      const replIdx=selected.map((q,i)=>({q,i})).reverse().find(({q})=>q.type==='single'&&!q.diagram);
      if(replIdx){selected.splice(replIdx.i,1,diagQ);}
    }
  }

  lastBlueprint={
    mode,
    leTargets:cfg.leTargets,
    kTargets:cfg.kTargets,
    quotas,
    selectedLZ:[...counts.lz].sort(),
    allLZ:ALL_LZ,
    counts:{
      le:{...counts.le},
      k:{...counts.k},
      type:{...counts.type}
    },
    coverageLE:ALL_LES.filter(le=>selected.some(q=>q.le===le)),
    missingLE:ALL_LES.filter(le=>!selected.some(q=>q.le===le))
  };
  return shuffle(selected);
}

// ═══════════════════════════════════════════════════════════════
//  SURVIVAL MODE — failure-driven, pattern-weighted selector
// ═══════════════════════════════════════════════════════════════
