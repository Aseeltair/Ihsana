/* Ihsana · shared behaviour and renderers for the inner pages.
   Content comes from assets/content.js (articles, case studies, Maqasid) and assets/data.js (report metadata). */
(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const CONTACT='index.html#contact';
  const DASH='../dashboard/index.html';
  const ARROW='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
  const BACK='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg>';
  const ARTICLES=(window.IHSANA_ARTICLES||[]).slice().sort((a,b)=>new Date(b.dateISO)-new Date(a.dateISO));
  const CASES=window.IHSANA_CASES||[];
  const MAQ=window.IHSANA_MAQASID||[];
  const maqLabel=k=>{const m=MAQ.find(x=>x.key===k);return m?m.full:k};

  /* header menu */
  const menuBtn=$('#menuBtn'),links=$('#navLinks');
  if(menuBtn&&links){
    menuBtn.onclick=()=>{const o=links.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)};
    links.onclick=e=>{if(e.target.closest('a')){links.classList.remove('open');menuBtn.setAttribute('aria-expanded',false)}};
  }

  /* shared markup */
  const labelsHTML=(a,withCountry)=>'<div class="labels">'+(a.maqasid||[]).map(k=>'<span>'+esc(maqLabel(k))+'</span>').join('')+
    (a.type?'<span class="type">'+esc(a.type)+'</span>':'')+(withCountry&&a.countries?'<span class="country">'+esc(a.countries)+'</span>':'')+'</div>';
  const coverHTML=(src,alt,tag,cls)=>'<div class="cover'+(cls?' '+cls:'')+'">'+(src?'<img src="'+esc(src)+'" alt="'+esc(alt||'')+'" loading="lazy" decoding="async">':'')+(tag?'<span class="tag">'+esc(tag)+'</span>':'')+'</div>';
  const articleHref=a=>'article.html?id='+encodeURIComponent(a.id);
  const caseHref=c=>'case-study.html?id='+encodeURIComponent(c.id);
  const articleCard=a=>'<a class="article-card" href="'+articleHref(a)+'">'+coverHTML(a.cover,'','Article')+
    '<div class="card-body">'+labelsHTML(a)+'<h3>'+esc(a.title)+'</h3>'+(a.countries?'<p>Countries: '+esc(a.countries)+'</p>':'')+
    '<span class="more">Read the article →</span></div></a>';
  const caseCard=(c,quote)=>'<a class="case-card" href="'+caseHref(c)+'">'+coverHTML(c.cover,'',c.pillar)+
    '<div class="card-body"><div class="labels"><span>'+esc(c.pillar)+'</span><span class="type">'+esc(c.client)+'</span></div>'+
    '<h3>'+esc(c.title)+'</h3><p>'+esc(c.whatWeDid)+'</p><p class="result"><b>Illustrative result:</b> '+esc(c.result)+'</p>'+
    (quote&&c.quote?'<blockquote>Sample client quote · “'+esc(c.quote)+'”</blockquote>':'')+
    '<span class="more">Read the case study →</span></div></a>';

  /* ---------- Insights page ---------- */
  const start=$('[data-start-here]');
  if(start){
    start.innerHTML=[
      {n:'1 · Who we are',id:'who-is-ihsana',t:'Who is Ihsana?',s:'Our vision and mission for guiding Muslim donors to give where it matters most.'},
      {n:'2 · Our framework',id:'five-maqasid',t:'The five Maqasid and our priorities',s:'How the Maqasid al-Sharia guide our priorities in health, education and the economy.'}
    ].map(c=>'<a class="start-card" href="article.html?id='+c.id+'"><span class="n">'+esc(c.n)+'</span><h3>'+esc(c.t)+'</h3><p>'+esc(c.s)+'</p><span class="link-arrow">Read the article '+ARROW+'</span></a>').join('');
  }
  const reports=$('[data-reports]'),meta=window.IHSANA_META;
  if(reports&&meta&&meta.report){
    const r=meta.report;
    reports.innerHTML='<article class="report-card">'+coverHTML('assets/report.svg','Illustrated atlas cover for the Ihsana campaign report',r.label)+
      '<div class="report-body"><div class="labels"><span>Campaign 1</span><span class="type">'+esc(r.date)+'</span></div>'+
      '<h3>'+esc(r.title)+'</h3><p>'+esc(r.description)+'</p><p class="report-pages">'+esc(r.pages)+'-page PDF · no sign-up required</p>'+
      '<a class="btn btn-primary" href="'+esc(r.file)+'" download>Download PDF <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 3v8M5 8l3 3 3-3M3 13h10"/></svg></a>'+
      '<p class="sample-note">Sample report created for this local preview.</p></div></article>';
  }
  const featured=$('[data-featured]');
  if(featured&&ARTICLES.length){
    const a=ARTICLES.find(x=>x.featured)||ARTICLES[0];
    featured.innerHTML='<div class="featured"><a href="'+articleHref(a)+'" aria-label="Read '+esc(a.title)+'">'+coverHTML(a.cover,a.coverAlt,'Featured article')+'</a>'+
      '<div class="featured-copy"><span class="eyebrow">Featured article</span>'+labelsHTML(a,true)+'<h2>'+esc(a.title)+'</h2><p>'+esc(a.summary)+'</p>'+
      '<a class="btn btn-primary" href="'+articleHref(a)+'">Read the article '+ARROW+'</a></div></div>';
  }
  const filterWrap=$('[data-article-filters]'),grid=$('[data-article-grid]');
  if(filterWrap&&grid){
    const PAGE=6,st={maq:'all',type:'all',n:PAGE};
    const results=$('[data-results-line]'),loadWrap=$('[data-load-more-wrap]'),loadBtn=$('[data-load-more]');
    filterWrap.innerHTML='<div class="filter-row"><span>Maqsad</span><button type="button" data-maq="all" aria-pressed="true">All</button>'+
      MAQ.map(m=>'<button type="button" data-maq="'+esc(m.key)+'" aria-pressed="false">'+esc(m.full)+'</button>').join('')+'</div>'+
      '<div class="filter-row"><span>Type</span><button type="button" data-type="all" aria-pressed="true">All</button>'+
      (window.IHSANA_ARTICLE_TYPES||[]).map(t=>'<button type="button" data-type="'+esc(t)+'" aria-pressed="false">'+esc(t)+'</button>').join('')+'</div>';
    const ok=a=>(st.maq==='all'||(a.maqasid||[]).includes(st.maq))&&(st.type==='all'||a.type===st.type);
    const press=()=>{$$('[data-maq]',filterWrap).forEach(b=>b.setAttribute('aria-pressed',b.dataset.maq===st.maq));$$('[data-type]',filterWrap).forEach(b=>b.setAttribute('aria-pressed',b.dataset.type===st.type))};
    function render(){
      const f=ARTICLES.filter(ok),shown=f.slice(0,st.n);
      grid.innerHTML=shown.length?shown.map(articleCard).join(''):'<div class="empty"><b>No articles match those filters yet.</b><p>Try another Maqsad or article type.</p><button class="btn btn-ghost" type="button" data-reset>Reset filters</button></div>';
      if(results)results.innerHTML=f.length===ARTICLES.length?'Showing <strong>'+f.length+'</strong> articles':'Showing <strong>'+shown.length+'</strong> of '+f.length+' matching articles';
      if(loadWrap)loadWrap.hidden=f.length<=st.n;
      const r=$('[data-reset]',grid);if(r)r.onclick=()=>{st.maq='all';st.type='all';st.n=PAGE;press();render()};
    }
    filterWrap.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.maq)st.maq=b.dataset.maq;if(b.dataset.type)st.type=b.dataset.type;st.n=PAGE;press();render()};
    if(loadBtn)loadBtn.onclick=()=>{st.n+=PAGE;render()};
    render();
  }

  /* ---------- Case Studies page ---------- */
  const caseGrid=$('[data-case-grid]');
  if(caseGrid)caseGrid.innerHTML=CASES.map(c=>caseCard(c,true)).join('');

  /* ---------- Article page ---------- */
  const artMount=$('[data-article]');
  if(artMount){
    const id=new URLSearchParams(location.search).get('id');
    const a=(window.IHSANA_ARTICLES||[]).find(x=>x.id===id)||ARTICLES.find(x=>x.featured)||ARTICLES[0];
    if(!a){artMount.innerHTML='<section><div class="wrap"><div class="empty"><b>Article not found.</b><a class="btn btn-ghost" href="insights.html">Back to Insights</a></div></div></section>'}
    else{
      document.title=a.title+' · Ihsana';
      const md=$('meta[name="description"]');if(md)md.setAttribute('content',a.summary||'');
      const fig=c=>c?'<figure class="figure"><button type="button" data-zoom data-src="'+esc(c.src)+'" data-alt="'+esc(c.alt)+'" data-caption="'+esc(c.caption||'')+'" aria-label="View the chart full size"><img src="'+esc(c.src)+'" alt="'+esc(c.alt)+'" loading="lazy"></button>'+
        '<figcaption>'+esc(c.caption||'')+' '+(c.source?(c.sourceUrl?'<a href="'+esc(c.sourceUrl)+'" target="_blank" rel="noopener">'+esc(c.source)+'</a>':esc(c.source)):'')+'</figcaption></figure>':'';
      const block=s=>'<div class="reading-block"><div class="reading"><h2>'+esc(s.h)+'</h2>'+s.html+fig(s.chart)+'</div>'+
        (s.facts&&s.facts.length?'<aside class="keyfacts"><h2>Key facts</h2><ul>'+s.facts.map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul></aside>':'<div></div>')+'</div>';
      const refs=a.references&&a.references.length?'<section class="references" style="padding:28px 0 0"><h2>References and sources</h2><ol>'+a.references.map(r=>'<li><a href="'+esc(r.url)+'" target="_blank" rel="noopener">'+esc(r.label)+'</a></li>').join('')+'</ol></section>':'';
      const related=ARTICLES.filter(x=>x.id!==a.id).map(x=>({x,s:(x.maqasid||[]).filter(k=>(a.maqasid||[]).includes(k)).length*3+(x.tags||[]).filter(t=>(a.tags||[]).includes(t)).length}))
        .filter(e=>e.s>0).sort((p,q)=>q.s-p.s||new Date(q.x.dateISO)-new Date(p.x.dateISO)).slice(0,3).map(e=>e.x);
      artMount.innerHTML='<article><header class="article-hero"><div class="wrap">'+
        '<a class="back-link" href="insights.html">'+BACK+'Back to Insights</a>'+
        '<div class="article-head">'+labelsHTML(a)+'<h1>'+esc(a.title)+'</h1>'+(a.dek?'<p class="dek">'+esc(a.dek)+'</p>':'')+
        '<div class="byline"><span>By <strong>'+esc(a.author)+'</strong></span><span><time datetime="'+esc(a.dateISO)+'">'+esc(a.date)+'</time></span><span>'+esc(a.readTime)+' min read</span>'+(a.countries?'<span>Countries: '+esc(a.countries)+'</span>':'')+'</div>'+
        '<p class="sample-note" style="margin:0">Sample article for local preview · figures and unlinked references are illustrative.</p></div>'+
        (a.cover?'<div class="article-cover">'+coverHTML(a.cover,a.coverAlt,a.type||'Article')+(a.coverCaption?'<p class="cover-caption">'+esc(a.coverCaption)+'</p>':'')+'</div>':'')+
        '</div></header>'+
        '<div class="wrap"><div class="article-body">'+a.sections.map(block).join('')+refs+'</div></div>'+
        (related.length?'<section class="alt"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Related articles</span><h2>Keep reading</h2></div><p class="lede">Chosen automatically by shared Maqasid and tags.</p></div><div class="article-grid">'+related.map(articleCard).join('')+'</div></div></section>':'')+
        '<section class="tight"><div class="wrap"><div class="continue"><div><span class="eyebrow">Continue with Ihsana</span><h2>Turn reading into a giving decision.</h2></div><div class="continue-links">'+
          '<a href="'+DASH+'"><div><span>Explore the data</span>Priorities Dashboard</div>'+ARROW+'</a>'+
          '<a href="methodology.html"><div><span>How we work</span>Read our methodology</div>'+ARROW+'</a>'+
          '<a href="'+CONTACT+'"><div><span>Planning your giving?</span>Get in Touch</div>'+ARROW+'</a>'+
        '</div></div></div></section></article>';
    }
  }

  /* ---------- Case study page ---------- */
  const caseMount=$('[data-case-study]');
  if(caseMount){
    const id=new URLSearchParams(location.search).get('id');
    const c=CASES.find(x=>x.id===id)||CASES[0];
    if(!c){caseMount.innerHTML='<section><div class="wrap"><div class="empty"><b>Case study not found.</b><a class="btn btn-ghost" href="cases.html">Back to Case Studies</a></div></div></section>'}
    else{
      document.title=c.title+' · Ihsana';
      const md=$('meta[name="description"]');if(md)md.setAttribute('content',c.summary||'');
      const more=CASES.filter(x=>x.id!==c.id);
      caseMount.innerHTML='<article><header class="article-hero"><div class="wrap">'+
        '<a class="back-link" href="cases.html">'+BACK+'Back to Case Studies</a>'+
        '<div class="article-head"><div class="labels"><span>'+esc(c.pillar)+'</span><span class="type">'+esc(c.client)+'</span></div>'+
        '<h1>'+esc(c.title)+'</h1><p class="dek">'+esc(c.summary)+'</p>'+
        '<dl class="case-meta"><div><dt>Client</dt><dd>'+esc(c.client)+'</dd></div><div><dt>Duration</dt><dd>'+esc(c.duration)+'</dd></div><div><dt>Geography</dt><dd>'+esc(c.geography)+'</dd></div><div><dt>Date</dt><dd>'+esc(c.date)+'</dd></div></dl>'+
        '<p class="sample-note" style="margin:0">'+esc(c.sampleNote)+'</p></div>'+
        '<div class="article-cover">'+coverHTML(c.cover,c.coverAlt,c.pillar)+'</div>'+
        '</div></header>'+
        '<section><div class="wrap"><div class="case-body">'+
          '<div class="result-callout"><span class="eyebrow">The result</span><strong>'+esc(c.result)+'</strong></div>'+
          c.sections.map(s=>'<div><h2>'+esc(s.h)+'</h2>'+s.html+'</div>').join('')+
          '<blockquote class="case-quote">“'+esc(c.quote)+'”<footer>— '+esc(c.client)+'</footer></blockquote>'+
          '<div><h2>What we learned</h2><ul class="lessons">'+c.lessons.map(l=>'<li>'+esc(l)+'</li>').join('')+'</ul></div>'+
          '<div class="case-closing"><p>If you are interested in investing in lasting change and achieving similar results.</p><a class="btn btn-light" href="'+CONTACT+'">Get in Touch '+ARROW+'</a></div>'+
        '</div></div></section>'+
        (more.length?'<section class="alt"><div class="wrap"><div class="section-head"><div><span class="eyebrow">More case studies</span><h2>See how other clients give.</h2></div></div><div class="case-grid two">'+more.map(x=>caseCard(x)).join('')+'</div></div></section>':'')+
        '</article>';
    }
  }

  /* image viewer (charts and covers) */
  document.addEventListener('click',e=>{
    const t=e.target.closest('[data-zoom]');if(!t)return;
    let d=$('#viewer');
    if(!d){d=document.createElement('dialog');d.id='viewer';d.className='viewer';d.innerHTML='<div class="viewer-head"><h2></h2><button type="button" aria-label="Close image">×</button></div><figure><img alt=""><figcaption></figcaption></figure>';document.body.appendChild(d);
      $('button',d).onclick=()=>d.close();d.addEventListener('click',ev=>{if(ev.target===d)d.close()})}
    $('h2',d).textContent=t.dataset.alt||'Image';$('img',d).src=t.dataset.src;$('img',d).alt=t.dataset.alt||'';$('figcaption',d).textContent=t.dataset.caption||'';
    d.showModal();
  });

  /* newsletter (not wired to a mailing-list provider yet) */
  $$('form[data-newsletter]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();
    const inp=$('input[type=email]',f),msg=$('.news-msg',f);msg.hidden=false;
    if(!inp.checkValidity()||!inp.value){msg.textContent='Enter a valid email address, like name@example.com.';inp.focus();return}
    // TODO: connect to the newsletter provider
    msg.textContent='Thank you. You’re on the list.';inp.value='';
  }));

  /* copy buttons */
  $$('.copy').forEach(b=>b.onclick=()=>{
    const done=()=>{b.textContent='Copied';b.classList.add('ok');setTimeout(()=>{b.textContent='Copy';b.classList.remove('ok')},1600)};
    const sel=()=>{const v=b.previousElementSibling.querySelector('.v'),r=document.createRange();r.selectNodeContents(v);const s=getSelection();s.removeAllRanges();s.addRange(r)};
    try{navigator.clipboard.writeText(b.dataset.copy).then(done,sel)}catch(e){sel()}
  });
})();
