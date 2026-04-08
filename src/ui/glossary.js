function buildGlossary(){_glossaryFiltered=GLOSSARY;renderGlossary();}

function filterGlossary(q){
  const lq=q.toLowerCase();
  _glossaryFiltered=q?GLOSSARY.filter(g=>
    g.en.toLowerCase().includes(lq)||
    g.de.toLowerCase().includes(lq)||
    g.def.toLowerCase().includes(lq)
  ):GLOSSARY;
  renderGlossary();
}

function renderGlossary(){
  const tb=$('glossary-body');tb.innerHTML='';
  _glossaryFiltered.forEach(g=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td><span class="g-term">${g.en}</span><span class="g-de">${g.de}</span></td><td>${g.def}</td>`;
    tb.appendChild(tr);
  });
}

