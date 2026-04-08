// ── Render current question ──────────────────────────────────────
function renderQuestion(){
  answered=false;selectedMulti=[];
  const q=examQuestions[currentQ];
  const pct=Math.round((currentQ/examQuestions.length)*100);

  $('prog-fill').style.width=pct+'%';
  $('q-counter').textContent=`${currentQ+1} / ${examQuestions.length}`;
  $('chapter-tag').textContent=LE_TITLES[q.le]||q.chapter;
  $('lz-tag').textContent=q.lz;
  $('k-tag').textContent=q.kLevel;

  const tt=$('type-tag');
  if(q.type==='single'){tt.textContent='Einfachauswahl';tt.className='type-tag single';}
  else if(q.type==='multiple'){tt.textContent='Mehrfachauswahl';tt.className='type-tag multi';}
  else{tt.textContent='K-Typ';tt.className='type-tag ktype';}

  const kb=$('ktype-block-container');
  if(q.type==='ktype'){
    kb.innerHTML=`<div class="ktype-block"><div class="k-label">Behauptung <span class="en-tag">Assertion</span></div><div class="k-text">${injectTerms(q.assertion)}</div><div class="k-weil">— weil — <span style="font-size:.7rem;font-style:normal;opacity:.6">(because)</span></div><div class="k-label">Begründung <span class="en-tag">Reason</span></div><div class="k-text">${injectTerms(q.reason)}</div></div>`;
    $('question-text').textContent='Beurteilen Sie die Richtigkeit von Behauptung und Begründung:';
  } else {
    kb.innerHTML='';
    $('question-text').innerHTML=`${currentQ+1}. ${injectTerms(q.text)}`;
  }

  const dg=$('question-diagram');
  if(q.diagram){dg.innerHTML=q.diagram;dg.style.display='';}
  else{dg.style.display='none';dg.innerHTML='';}

  const pt=$('pts-tag');
  if(pt) pt.textContent=q.type==='single'?'1 Pkt':'2 Pkt';

  const mh=$('multi-hint');
  if(q.type==='multiple'){mh.style.display='block';mh.textContent=`Wählen Sie alle zutreffenden Antworten aus. (${q.answer.length} korrekte Antworten)`;}
  else{mh.style.display='none';}

  const fb=$('feedback-box');fb.className='feedback-box';fb.textContent='';

  const opts=q.type==='ktype'?KTYPE_OPTIONS:q.options;
  const letters=['A','B','C','D'];
  const cnt=$('options-container');cnt.innerHTML='';
  opts.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';btn.dataset.idx=i;
    btn.innerHTML=`<span class="letter">${letters[i]}</span><span>${injectTerms(opt)}</span>`;
    if(q.type==='multiple')btn.onclick=()=>toggleMulti(i,btn);
    else btn.onclick=()=>selectSingle(i);
    cnt.appendChild(btn);
  });

  const cb=$('btn-confirm');
  cb.style.display=q.type==='multiple'?'inline-block':'none';
  cb.disabled=true;

  const nb=$('btn-next');
  const isLast=currentQ===examQuestions.length-1;
  nb.textContent=isLast?'Prüfung beenden':'Weiter →';
  nb.className='btn-nav '+(isLast?'btn-finish':'btn-next');
  nb.disabled=true;
}

// ── Answer handlers ──────────────────────────────────────────────
function selectSingle(idx){
  if(answered)return;
  answered=true;userAnswers[currentQ]=idx;
  const q=examQuestions[currentQ];
  const btns=$('options-container').querySelectorAll('.option-btn');
  btns.forEach((btn,i)=>{
    btn.disabled=true;
    if(i===idx&&i===q.answer)btn.classList.add('correct');
    else if(i===idx)btn.classList.add('incorrect');
    else if(i===q.answer)btn.classList.add('reveal-correct');
  });
  showFeedback(idx===q.answer,q.explanation);
  $('btn-next').disabled=false;
}

function toggleMulti(idx,btn){
  if(answered)return;
  const pos=selectedMulti.indexOf(idx);
  if(pos===-1){selectedMulti.push(idx);btn.classList.add('selected');}
  else{selectedMulti.splice(pos,1);btn.classList.remove('selected');}
  $('btn-confirm').disabled=selectedMulti.length===0;
}

function confirmMulti(){
  if(answered||selectedMulti.length===0)return;
  answered=true;userAnswers[currentQ]=[...selectedMulti];
  const q=examQuestions[currentQ];
  const correctSet=new Set(q.answer),selectedSet=new Set(selectedMulti);
  const isRight=[...correctSet].every(a=>selectedSet.has(a))&&[...selectedSet].every(a=>correctSet.has(a));
  const btns=$('options-container').querySelectorAll('.option-btn');
  btns.forEach((btn,i)=>{
    btn.disabled=true;
    if(selectedSet.has(i)&&correctSet.has(i))btn.classList.add('correct');
    else if(selectedSet.has(i)&&!correctSet.has(i))btn.classList.add('incorrect');
    else if(correctSet.has(i)&&!selectedSet.has(i))btn.classList.add('reveal-correct');
  });
  showFeedback(isRight,q.explanation);
  $('btn-confirm').disabled=true;
  $('btn-next').disabled=false;
}

function showFeedback(isRight,text){
  const fb=$('feedback-box');
  fb.classList.add('show',isRight?'correct-fb':'incorrect-fb');
  if(!isRight&&currentMode==='survival'){
    const label=getTrapLabel(examQuestions[currentQ]);
    fb.innerHTML=`<span class="trap-label">${label}</span><strong>Falsch</strong> — ${injectTerms(text)}`;
  } else {
    fb.innerHTML=(isRight?'<strong>Richtig</strong> — ':'<strong>Falsch</strong> — ')+injectTerms(text);
  }
}
