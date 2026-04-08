// ── Timer ────────────────────────────────────────────────────────
function startTimer(){
  const warnAt=currentMode==='survival'?90:currentMode==='quick'?180:300;
  timerInterval=setInterval(()=>{
    secondsLeft--;
    $('timer').textContent=formatTime(secondsLeft);
    if(secondsLeft<=warnAt)$('timer-box').classList.add('warning');
    if(secondsLeft<=0){clearInterval(timerInterval);finishExam();}
  },1000);
}

// ── Start / Retry / Menu ─────────────────────────────────────────
function startExam(mode){
  if(mode) currentMode=mode;
  const cfg=MODES[currentMode];
  examQuestions=currentMode==='survival'?selectSurvivalQuestions():selectQuestions(currentMode);
  currentQ=0;
  userAnswers=new Array(examQuestions.length).fill(null);
  secondsLeft=cfg.seconds;
  $('timer').textContent=formatTime(secondsLeft);
  $('timer-box').classList.remove('warning');
  $('header-badge').textContent=cfg.label;
  const rb=$('btn-retry-same');
  rb.className='btn-retry '+(currentMode==='survival'?'survival':currentMode==='quick'?'quick':'full');
  rb.textContent=currentMode==='survival'?'Nochmal antreten':'Nochmals';
  showScreen('exam-screen');
  renderQuestion();
  startTimer();
}
function retryExam(){clearInterval(timerInterval);startExam();}
function goToMenu(){clearInterval(timerInterval);$('header-badge').textContent='374 Fragen im Pool';showScreen('start-screen');}

// ── Next question / finish ───────────────────────────────────────
function nextQuestion(){
  if(!answered)userAnswers[currentQ]=null;
  if(currentQ<examQuestions.length-1){currentQ++;renderQuestion();}
  else finishExam();
}
