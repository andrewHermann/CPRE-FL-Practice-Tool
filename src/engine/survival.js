function selectSurvivalQuestions(){
  const N=28;
  // Only single + ktype — no multiple-choice (removes partial-credit safety net)
  const pool=shuffle([...allQuestions.filter(q=>q.type!=='multiple')]);
  const sel=[];const used=new Set();

  function pick(filter,n){
    let c=0;
    for(const q of pool){
      if(c>=n)break;
      if(!used.has(q.qid)&&filter(q)){sel.push(q);used.add(q.qid);c++;}
    }
  }

  // Wave 1 — explicit cognitive traps (~25%)
  pick(q=>q.errorType==='trap',7);
  // Wave 2 — terminology traps (~28%)
  pick(q=>q.errorType==='terminology',8);
  // Wave 3 — validation vs verification pattern (~14%)
  pick(q=>q.lz==='LZ 3-3'||(q.le==='LE7'&&q.errorType==='terminology'),4);
  // Wave 4 — actor/system boundary (~11%)
  pick(q=>['LZ 2-1','LZ 2-2','LZ 2-3','LZ 5-2'].includes(q.lz),3);
  // Wave 5 — method K2/K3 (avoids easy K1 recall as padding)
  pick(q=>q.errorType==='method'&&q.kLevel!=='K1',N-sel.length);
  // Last resort fill
  pick(q=>true,N-sel.length);

  // Guarantee at least one diagram question
  if(!sel.some(q=>q.diagram)){
    const diagQ=pool.find(q=>q.diagram&&!used.has(q.qid));
    if(diagQ){
      const replIdx=sel.findIndex(q=>!q.diagram&&!['trap','terminology'].includes(q.errorType));
      if(replIdx>=0){sel.splice(replIdx,1,diagQ);used.add(diagQ.qid);}
    }
  }

  // Cluster into waves: traps → terminology → patterns → rest
  // Small shuffle within each wave to avoid mechanical repetition
  const trapWave  =shuffle(sel.filter(q=>q.errorType==='trap'));
  const termWave  =shuffle(sel.filter(q=>q.errorType==='terminology'&&q.errorType!=='trap'));
  const otherWave =shuffle(sel.filter(q=>!['trap','terminology'].includes(q.errorType)));

  // Set lastBlueprint stub so coverage screen doesn't crash
  lastBlueprint={
    mode:'survival',leTargets:{},kTargets:{},quotas:{single:20,multiple:0,ktype:8},
    selectedLZ:[...new Set(sel.map(q=>q.lz))].sort(),allLZ:ALL_LZ,
    counts:{le:{},k:{},type:{single:0,multiple:0,ktype:0}},
    coverageLE:[],missingLE:[]
  };

  return [...trapWave,...termWave,...otherWave].slice(0,N);
}

// ═══════════════════════════════════════════════════════════════
//  SURVIVAL TRAP LABEL — meta-feedback on wrong answer
// ═══════════════════════════════════════════════════════════════
