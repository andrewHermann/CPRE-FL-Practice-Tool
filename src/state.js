// ── Mutable exam state ──────────────────────────────────────────
let examQuestions=[];
let currentQ=0;
let userAnswers=[];
let answered=false;
let timerInterval;
let secondsLeft=0;
let selectedMulti=[];
let currentMode='full'; // 'quick' | 'full' | 'survival'
let lastBlueprint=null;
