function showDemo(type){
  clearInterval(timerInterval);

  if(type==='survival'){
    currentMode='survival';
    examQuestions=selectSurvivalQuestions();
    userAnswers=new Array(examQuestions.length).fill(null);
    // ~40% correct — a rough run through the trap gauntlet
    const targetPts=Math.round(MODES.survival.totalPts*0.40);
    let earned=0;
    examQuestions.forEach((q,i)=>{
      const pts=qPoints(q);
      if(earned+pts<=targetPts){
        userAnswers[i]=q.type==='multiple'?[...q.answer]:q.answer;
        earned+=pts;
      } else {
        userAnswers[i]=(q.answer+1)%4;
      }
    });
    secondsLeft=0;
    const rb=$('btn-retry-same');
    rb.className='btn-retry survival';
    rb.textContent='Nochmal antreten';
  } else {
    // Quick mode for fail (50%) and pass (70%) demos
    currentMode='quick';
    const cfg=MODES[currentMode];
    examQuestions=selectQuestions(currentMode);
    userAnswers=new Array(examQuestions.length).fill(null);
    const targetPts=Math.round(cfg.totalPts*(type==='fail'?0.50:0.70));
    let earned=0;
    examQuestions.forEach((q,i)=>{
      const pts=qPoints(q);
      if(earned+pts<=targetPts){
        userAnswers[i]=q.type==='multiple'?[...q.answer]:q.answer;
        earned+=pts;
      } else {
        if(q.type==='multiple'){
          userAnswers[i]=[(q.answer[0]+1)%4];
        } else {
          userAnswers[i]=(q.answer+1)%4;
        }
      }
    });
    secondsLeft=0;
    const rb=$('btn-retry-same');
    rb.className='btn-retry quick';
    rb.textContent='Nochmals';
  }

  finishExam();
}

// ═══════════════════════════════════════════════════════════════
//  PRINT / PDF EXPORT
// ═══════════════════════════════════════════════════════════════
function printResults(){
  // Set a page title so the PDF filename is meaningful
  const origTitle=document.title;
  document.title='CPRE-FL Prüfungsergebnis — '+new Date().toLocaleDateString('de-DE');
  window.print();
  document.title=origTitle;
}
