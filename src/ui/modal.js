const MODAL_CFG={
  quick:{
    accent:'#1a5fb4',
    icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><polyline points="12 9 12 13 14.5 15.5"/><line x1="9" y1="3" x2="15" y2="3"/><line x1="12" y1="3" x2="12" y2="5"/></svg>',
    title:'Schnelldurchlauf',
    body:'Blueprint-gesteuert und ausgewogen über alle 9 Kapitel. Geeignet für Selbsteinschätzung und Auffrischung.',
    bullets:['20 Fragen · 30 Minuten','Alle drei Fragetypen (Einfach, Mehrfach, K-Typ)','Lehrplan-gewichtete Auswahl','Abschluss-Coverage-Report'],
    note:null,
    btnText:'Schnelldurchlauf starten →'
  },
  full:{
    accent:'#1d9e6e',
    icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>',
    title:'Vollständige Prüfung',
    body:'Echtzeitnahe Prüfungssimulation. Blueprint-gewichtete Abdeckung aller 9 Lerneinheiten mit punktbasierter Auswertung.',
    bullets:['46 Fragen · 75 Minuten','Gewichtete Kapitelabdeckung (alle 9 LE)','Alle drei Fragetypen','Detaillierter Abschlussbericht mit Coverage-Analyse'],
    note:null,
    btnText:'Vollständige Prüfung starten →'
  },
  survival:{
    accent:'#c0392b',
    icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    title:'Survival Mode',
    body:'Nicht lehrplangesteuert. Absichtlich unausgewogen, fallengewichtet und zeitkritisch. Konzipiert für Fallenresistenz-Training.',
    bullets:['Keine Blueprint-Verteilung — Fallen-Clustering by design','Kein Mehrfachauswahl-Sicherheitsnetz','32 Minuten, kein Easy-Recovery','Jeder Fehler wird explizit als Trap-Typ benannt'],
    note:'Nutze diesen Modus erst, wenn Quick- oder Full-Modus erfolgreich abgeschlossen wurde.',
    btnText:'Ich verstehe — starten →'
  }
};

let _pendingMode=null;

function showModeModal(mode){
  _pendingMode=mode;
  const cfg=MODAL_CFG[mode];
  const wrap=document.getElementById('mode-modal-wrap');
  const box=document.getElementById('mode-modal-box');
  box.style.borderTopColor=cfg.accent;
  const ico=document.getElementById('modal-icon');
  ico.innerHTML=cfg.icon;
  ico.style.color=cfg.accent;
  const ttl=document.getElementById('modal-title');
  ttl.textContent=cfg.title;
  ttl.style.color=cfg.accent;
  document.getElementById('modal-body').textContent=cfg.body;
  document.getElementById('modal-bullets').innerHTML=cfg.bullets.map(b=>`<li>${b}</li>`).join('');
  const note=document.getElementById('modal-note');
  if(cfg.note){note.textContent=cfg.note;note.style.display='';}
  else{note.style.display='none';}
  const btn=document.getElementById('modal-confirm');
  btn.style.background=cfg.accent;
  btn.textContent=cfg.btnText;
  wrap.style.display='flex';
}

function closeModeModal(){
  document.getElementById('mode-modal-wrap').style.display='none';
  _pendingMode=null;
}

function confirmModeModal(){
  const mode=_pendingMode;
  closeModeModal();
  startExam(mode);
}
