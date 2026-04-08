// ── Finish exam & show results ───────────────────────────────────
function finishExam(){
  clearInterval(timerInterval);
  const cfg=MODES[currentMode];
  let earnedPts=0,correctCount=0,skipped=0;
  examQuestions.forEach((q,i)=>{
    if(userAnswers[i]===null){skipped++;}
    else if(isCorrectAnswer(q,userAnswers[i])){correctCount++;earnedPts+=qPoints(q);}
  });
  const incorrect=examQuestions.length-correctCount-skipped;
  const totalPts=cfg.totalPts;
  const pct=Math.round((earnedPts/totalPts)*100);
  const passed=pct>=70;

  const modeLabel=currentMode==='survival'?'Survival Mode':currentMode==='quick'?'Schnelldurchlauf':'Vollständige Prüfung';

  const passIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2a9d5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>`;
  const failIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  const survivalPassIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  $('result-icon').innerHTML=currentMode==='survival'?survivalPassIcon:(passed?passIcon:failIcon);

  if(currentMode==='survival'){
    $('result-heading').textContent=passed?`Survival bestanden — ${pct}% Fallenresistenz`:`Survival nicht bestanden — ${pct}% Fallenresistenz`;
    $('score-pts').textContent=`${earnedPts} / ${totalPts} Fragen richtig`;
    $('score-sub').textContent=`${incorrect} Fallen geschnappt · Erkannte Muster: ${correctCount} von ${examQuestions.length}`;
  } else {
    $('result-heading').textContent=passed?'Übungstest bestanden (≥ 70 %)':'Übungstest nicht bestanden (< 70 %)';
    $('score-pts').textContent=`${earnedPts} / ${totalPts} Punkte`;
    $('score-sub').textContent=`${correctCount} von ${examQuestions.length} Fragen richtig · ${modeLabel}`;
  }
  $('score-pct').textContent=pct+'%';
  const badge=$('pass-fail-badge');
  badge.className='pass-fail-badge '+(passed?'pass-badge':'fail-badge');
  badge.textContent=currentMode==='survival'?(passed?'ÜBERLEBT':'ELIMINATION'):passed?'ZIEL ERREICHT':'ZIEL VERFEHLT';
  $('r-correct').textContent=correctCount;$('r-incorrect').textContent=incorrect;$('r-skipped').textContent=skipped;

  buildCoverageReport();
  buildErrorBuckets();
  buildWeakChapters();
  buildGlossary();
  buildReview();
  showScreen('results-screen');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── Blueprint coverage report ────────────────────────────────────
function buildCoverageReport(){
  const summary=$('coverage-summary');
  const leList=$('coverage-le-list');
  const kList=$('coverage-k-list');
  const note=$('coverage-note');
  const lzNote=$('coverage-lz-note');
  if(!summary||!lastBlueprint) return;
  summary.innerHTML=''; leList.innerHTML=''; kList.innerHTML='';

  if(currentMode==='survival'){
    const trapQ=examQuestions.filter(q=>q.errorType==='trap');
    const termQ=examQuestions.filter(q=>q.errorType==='terminology');
    const trapCorrect=trapQ.filter((q,i)=>isCorrectAnswer(q,userAnswers[examQuestions.indexOf(q)])).length;
    const termCorrect=termQ.filter(q=>isCorrectAnswer(q,userAnswers[examQuestions.indexOf(q)])).length;
    const patternStats=[
      {lbl:'Kognitive Fallen',hit:trapCorrect,total:trapQ.length},
      {lbl:'Terminologie-Fallen',hit:termCorrect,total:termQ.length},
    ];
    patternStats.forEach(s=>{
      const el=document.createElement('div');el.className='coverage-stat';
      el.innerHTML=`<div class="num">${s.hit}/${s.total}</div><div class="lbl">${s.lbl}</div>`;
      summary.appendChild(el);
    });
    const el2=document.createElement('div');el2.className='coverage-stat';
    el2.innerHTML=`<div class="num">Failure-driven</div><div class="lbl">Auswahlmodell</div>`;
    summary.appendChild(el2);
    if(note) note.textContent='Survival Mode: Keine Lehrplan-Gewichtung — Fallen- und Musterfokus.';
    if(lzNote) lzNote.textContent='';
    return;
  }

  const uniqueLZ=[...new Set(examQuestions.map(q=>q.lz))].sort();
  const missingLE=ALL_LES.filter(le=>!examQuestions.some(q=>q.le===le));
  const leCovered=ALL_LES.length-missingLE.length;
  const leStat=[
    {num:`${leCovered}/${ALL_LES.length}`, lbl:'LEs abgedeckt'},
    {num:`${uniqueLZ.length}/${ALL_LZ.length}`, lbl:'LZ-Stichprobe'},
    {num:`${lastBlueprint.counts.k.K1||0}/${lastBlueprint.counts.k.K2||0}/${lastBlueprint.counts.k.K3||0}`, lbl:'K1 / K2 / K3'},
    {num:'Constrained', lbl:'Sampling-Modell'}
  ];
  leStat.forEach(s=>{
    const el=document.createElement('div');
    el.className='coverage-stat';
    el.innerHTML=`<div class="num">${s.num}</div><div class="lbl">${s.lbl}</div>`;
    summary.appendChild(el);
  });

  ALL_LES.forEach(le=>{
    const actual=examQuestions.filter(q=>q.le===le).length;
    const target=lastBlueprint.leTargets[le]||0;
    const pct=target?Math.min(100,Math.round((actual/target)*100)):100;
    const row=document.createElement('div');
    const cls=actual>=target?'good':(actual>0?'warn':'bad');
    row.className=`coverage-row ${cls}`;
    row.innerHTML=`<div>${LE_TITLES[le]}</div><div class="mini-bar-wrap"><div class="mini-bar" style="width:${pct}%"></div></div><div>${actual} / ${target}</div>`;
    leList.appendChild(row);
  });

  ['K1','K2','K3'].forEach(k=>{
    const actual=lastBlueprint.counts.k[k]||0;
    const target=lastBlueprint.kTargets[k]||0;
    const pct=target?Math.min(100,Math.round((actual/target)*100)):100;
    const row=document.createElement('div');
    const cls=actual>=target?'good':(actual>0?'warn':'bad');
    row.className=`coverage-row ${cls}`;
    row.innerHTML=`<div>${k}</div><div class="mini-bar-wrap"><div class="mini-bar" style="width:${pct}%"></div></div><div>${actual} / ${target}</div>`;
    kList.appendChild(row);
  });

  const lzFamilies=Object.entries(examQuestions.reduce((acc,q)=>{acc[q.lz]=(acc[q.lz]||0)+1;return acc;},{})).sort((a,b)=>b[1]-a[1]);
  const top=lzFamilies.slice(0,6).map(([lz,n])=>`<span class="coverage-pill present">${lz} · ${n}</span>`).join('');
  lzNote.innerHTML=`<div style="margin-bottom:8px;">Häufigste LZ-Familien im aktuellen Test:</div><div class="coverage-pill-row">${top||'<span class="coverage-pill">Keine Daten</span>'}</div>`;
  note.innerHTML=`Die Prüfungsauswahl nutzt jetzt eine <strong>Blueprint-gesteuerte Stichprobe</strong>: LE-Abdeckung wird erzwungen, LZ-Duplikate reduziert, K-Stufen ausbalanciert und reine Zufallsselektion ersetzt. ${missingLE.length?('Nicht abgedeckte LEs in dieser Stichprobe: <span class="coverage-pill-row">'+missingLE.map(le=>`<span class="coverage-pill missing">${LE_TITLES[le]}</span>`).join(' ')+'</span>'):'Alle 9 LEs sind in dieser Stichprobe vertreten.'}`;
}

// ── Weak chapter analysis ────────────────────────────────────────
function buildWeakChapters(){
  const wrong={}, total={};
  examQuestions.forEach((q,i)=>{
    const ch=q.chapter;
    total[ch]=(total[ch]||0)+1;
    if(!isCorrectAnswer(q,userAnswers[i])) wrong[ch]=(wrong[ch]||0)+1;
  });

  const ranked=Object.keys(wrong)
    .filter(ch=>wrong[ch]>0)
    .sort((a,b)=>wrong[b]-wrong[a]);

  const wl=$('weak-list');wl.innerHTML='';
  if(ranked.length===0){
    wl.innerHTML='<div class="weak-none">Keine Schwächen — alle Kapitel korrekt beantwortet!</div>';
    return;
  }

  const maxWrong=wrong[ranked[0]];
  ranked.forEach(ch=>{
    const w=wrong[ch],t=total[ch];
    const barPct=Math.round((w/maxWrong)*100);
    const row=document.createElement('div');row.className='weak-row';
    row.innerHTML=`
      <div class="weak-chapter">${ch}</div>
      <div class="weak-bar-wrap"><div class="weak-bar" style="width:${barPct}%"></div></div>
      <div class="weak-count">${w} / ${t} falsch</div>`;
    wl.appendChild(row);
  });
}

// ── Error bucket classification ──────────────────────────────────
function buildErrorBuckets(){
  const counts={terminology:0,method:0,scenario:0,trap:0,timepressure:0};
  const indices={terminology:[],method:[],scenario:[],trap:[],timepressure:[]};
  examQuestions.forEach((q,i)=>{
    if(!isCorrectAnswer(q,userAnswers[i])){
      const t=inferErrorType(q);
      if(counts[t]!==undefined){counts[t]++;indices[t].push(i);}
    }
  });
  const total=Object.values(counts).reduce((a,b)=>a+b,0);
  const bg=$('bucket-grid'); bg.innerHTML='';
  if(total===0){
    bg.innerHTML='<div style="color:var(--green);font-weight:600;font-size:.88rem;">Keine Fehler — perfekte Punktzahl!</div>';
    return;
  }
  Object.entries(ERROR_BUCKETS).forEach(([key,meta])=>{
    const c=counts[key];
    const div=document.createElement('div');
    div.className='bucket-item '+meta.css+(c===0?' zero':'');
    div.title=meta.desc;
    let linksHTML='';
    if(c>0){
      const links=indices[key].map(idx=>{
        return `<a href="#review-q-${idx}" onclick="scrollToReview(${idx})">Q${idx+1}</a>`;
      }).join('');
      linksHTML=`<div class="bucket-qlinks">${links}</div>`;
    }
    div.innerHTML=`<div class="bucket-name">${meta.label}</div><div class="bucket-count">${c}</div>${linksHTML}`;
    bg.appendChild(div);
  });
}

function scrollToReview(idx){
  setTimeout(()=>{
    const el=document.getElementById('review-q-'+idx);
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});}
  },80);
}

// ── Full question review ─────────────────────────────────────────
function buildReview(){
  const letters=['A','B','C','D'];
  const rc=$('review-container');rc.innerHTML='';

  const indices=examQuestions.map((_,i)=>i);
  indices.sort((a,b)=>{
    const aOk=isCorrectAnswer(examQuestions[a],userAnswers[a]);
    const bOk=isCorrectAnswer(examQuestions[b],userAnswers[b]);
    if(aOk===bOk)return a-b;
    return aOk?1:-1;
  });

  let addedWrongHeader=false, addedCorrectHeader=false;

  indices.forEach((i)=>{
    const q=examQuestions[i];
    const ua=userAnswers[i];
    const correct=isCorrectAnswer(q,ua);
    const skip=ua===null;

    if(!correct&&!addedWrongHeader){
      addedWrongHeader=true;
      const hdr=document.createElement('div');
      hdr.style.cssText='font-weight:800;font-size:.82rem;color:var(--red);text-transform:uppercase;letter-spacing:.5px;margin:4px 0 8px;';
      hdr.textContent='⚠ Falsch / Übersprungen';
      rc.appendChild(hdr);
    }
    if(correct&&!addedCorrectHeader){
      addedCorrectHeader=true;
      const hdr=document.createElement('div');
      hdr.style.cssText='font-weight:800;font-size:.82rem;color:var(--green);text-transform:uppercase;letter-spacing:.5px;margin:16px 0 8px;';
      hdr.textContent='✓ Richtig beantwortet';
      rc.appendChild(hdr);
    }

    const div=document.createElement('div');
    div.className='review-item';
    div.id='review-q-'+i;

    const statusPill=skip?'<span class="pill skip-pill">Übersprungen</span>':
      correct?'<span class="pill correct-pill">Richtig</span>':
              '<span class="pill incorrect-pill">Falsch</span>';

    let ursachePill='';
    if(!correct){
      const et=inferErrorType(q);
      const etLabel=ERROR_BUCKETS[et]?ERROR_BUCKETS[et].label:'';
      ursachePill=`<span class="ursache-pill ${et}" title="${ERROR_BUCKETS[et]?ERROR_BUCKETS[et].desc:''}">${etLabel}</span>`;
    }

    const opts=q.type==='ktype'?KTYPE_OPTIONS:q.options;

    const diagramHTML=q.diagram?`<div style="background:#f7f8fb;border:1px solid #dde2ea;border-radius:8px;padding:12px 10px;margin-bottom:12px;text-align:center;overflow-x:auto;">${q.diagram}</div>`:'';
    let qDisplay=q.type==='ktype'?
      `<div class="ktype-mini"><div class="km-label">Behauptung <span class="en-tag">Assertion</span></div><div>${injectTerms(q.assertion)}</div><div class="km-weil">— weil — <span style="font-size:.72rem;opacity:.6">(because)</span></div><div class="km-label">Begründung <span class="en-tag">Reason</span></div><div>${injectTerms(q.reason)}</div></div><div class="q-text">Beurteilen Sie die Richtigkeit von Behauptung und Begründung:</div>`:
      `${diagramHTML}<div class="q-text">${injectTerms(q.text)}</div>`;

    let yourHTML='';
    if(skip){yourHTML='<div class="answer-row"><span class="pill skip-pill">Übersprungen</span></div>';}
    else if(q.type==='multiple'&&Array.isArray(ua)){
      yourHTML=`<div class="answer-row"><span class="pill your-pill">Ihre Antwort</span><span style="color:${correct?'var(--green)':'var(--red)'}">${ua.map(a=>letters[a]+'. '+injectTerms(opts[a])).join(' | ')}</span></div>`;
    } else {
      yourHTML=`<div class="answer-row"><span class="pill your-pill">Ihre Antwort</span><span style="color:${correct?'var(--green)':'var(--red)'}">${letters[ua]}. ${injectTerms(opts[ua])}</span></div>`;
    }

    let correctHTML='';
    if(!correct||skip){
      if(q.type==='multiple'){
        correctHTML=`<div class="answer-row no-print-answer"><span class="pill correct-pill">Richtige Antwort</span><span style="color:var(--green)">${q.answer.map(a=>letters[a]+'. '+injectTerms(opts[a])).join(' | ')}</span></div>`;
      } else {
        correctHTML=`<div class="answer-row no-print-answer"><span class="pill correct-pill">Richtige Antwort</span><span style="color:var(--green)">${letters[q.answer]}. ${injectTerms(opts[q.answer])}</span></div>`;
      }
    }

    const pts=qPoints(q);
    const earned=isCorrectAnswer(q,ua)?pts:0;
    const ptsPill=`<span class="pill" style="background:#f4f4f4;color:#555;">${earned} / ${pts} Pkt</span>`;
    div.innerHTML=`<div class="q-num">${LE_TITLES[q.le]||q.chapter} &nbsp;·&nbsp; ${q.lz} &nbsp;·&nbsp; ${q.kLevel} &nbsp;·&nbsp; Frage ${i+1} &nbsp;${statusPill} &nbsp;${ptsPill}${ursachePill?'&nbsp;'+ursachePill:''}</div>${qDisplay}${yourHTML}${correctHTML}<div class="no-print-answer" style="font-size:.84rem;color:var(--muted);margin-top:8px;line-height:1.55;">${injectTerms(q.explanation)}</div>`;
    rc.appendChild(div);
  });
}
