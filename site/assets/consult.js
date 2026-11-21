/* Ihsana · "Request a Consultation" popup, shared by every page.
   Any link to #contact or index.html#contact opens it; without JavaScript the link
   still scrolls to the contact section on the homepage.

   Where requests go. When the site goes live, set ONE of these:
   - Hosted on Netlify: FORM_MODE='netlify'. Netlify finds the form on deploy (the hidden
     copy in index.html); set the notification email under Site settings > Forms.
   - Formspree: FORM_MODE='formspree' and FORMSPREE_URL='https://formspree.io/f/xxxx'.
   Until then ('email'), sending opens a pre-filled email to TO_EMAIL. */
(function(){
  const FORM_MODE='email', FORMSPREE_URL='', TO_EMAIL='hassan@ihsana.org';
  const TYPES=['Family office','Private foundation','Individual donor','Wealth advisor','Institutional giver','Endowment or waqf','Other'];

  const css=`
.cm{border:0;padding:0;background:transparent;max-width:min(620px,calc(100vw - 32px));width:100%;max-height:calc(100dvh - 32px);color:var(--ink);font-family:var(--sans)}
.cm::backdrop{background:rgba(15,23,39,.55);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px)}
.cm-box{background:var(--paper);border-radius:24px;padding:clamp(20px,4vw,30px);box-shadow:0 30px 80px -30px rgba(10,20,40,.55);max-height:calc(100dvh - 32px);overflow:auto}
.cm-top{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.cm h2{font-family:var(--serif);font-weight:500;font-size:clamp(24px,3.4vw,30px);line-height:1.15;margin:0}
.cm-sub{margin:6px 0 0;font-size:15px;color:var(--ink-soft)}
.cm-x{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--ink);font-size:20px;line-height:1;cursor:pointer;display:grid;place-items:center}
.cm-x:hover{border-color:var(--olive)}
.cm form{display:grid;gap:14px;margin-top:20px}
.cm-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cm label{display:grid;gap:7px;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-soft)}
.cm input,.cm select,.cm textarea{font:inherit;font-size:15px;font-weight:500;letter-spacing:0;text-transform:none;color:var(--ink);background:var(--paper);border:1.5px solid var(--line);border-radius:999px;padding:12px 18px;width:100%;min-width:0}
.cm select{appearance:none;-webkit-appearance:none;background-image:linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%);background-position:calc(100% - 22px) 50%,calc(100% - 16px) 50%;background-size:6px 6px;background-repeat:no-repeat;padding-right:40px;cursor:pointer}
.cm textarea{border-radius:18px;resize:vertical;min-height:96px}
.cm input:focus,.cm select:focus,.cm textarea:focus{outline:none;border-color:var(--olive);box-shadow:0 0 0 3px var(--tint)}
.cm [aria-invalid="true"]{border-color:var(--maroon)}
.cm-note{margin:0;font-size:13px;color:var(--ink-faint)}
.cm-msg{margin:0;font-size:14px;font-weight:700;color:var(--olive)}
.cm-msg.err{color:var(--maroon)}
.cm-send{border:0;border-radius:999px;background:var(--maroon);color:#fff;font:700 16px var(--sans);padding:16px 22px;cursor:pointer;width:100%;box-shadow:0 12px 26px -14px var(--maroon);transition:background .2s}
.cm-send:hover{background:var(--maroon-2)}
.cm-send:disabled{opacity:.6;cursor:wait}
.cm-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
@media (max-width:560px){.cm-row{grid-template-columns:1fr}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  const dlg=document.createElement('dialog');
  dlg.className='cm';dlg.setAttribute('aria-labelledby','cmTitle');
  dlg.innerHTML=`<div class="cm-box">
  <div class="cm-top"><div><h2 id="cmTitle">Request a Consultation</h2>
    <p class="cm-sub">A short, confidential first conversation. Tell us what you are trying to achieve.</p></div>
    <button type="button" class="cm-x" aria-label="Close">×</button></div>
  <form name="consultation" novalidate>
    <p class="cm-hp" aria-hidden="true"><label>Leave this empty <input name="website" tabindex="-1" autocomplete="off"></label></p>
    <div class="cm-row">
      <label>Name<input name="name" required autocomplete="name"></label>
      <label>Email<input name="email" type="email" required autocomplete="email"></label>
    </div>
    <div class="cm-row">
      <label>Organisation (optional)<input name="organisation" autocomplete="organization"></label>
      <label>You are<select name="giver_type" required><option value="">Select one</option>${TYPES.map(t=>`<option>${t}</option>`).join('')}</select></label>
    </div>
    <label>What would you like to discuss? (optional)<textarea name="message" rows="3"></textarea></label>
    <p class="cm-note">Your details are used only to reply to your request.</p>
    <p class="cm-msg" role="status" hidden></p>
    <button class="cm-send" type="submit">Send request</button>
  </form></div>`;
  document.body.appendChild(dlg);

  const f=dlg.querySelector('form'),msg=dlg.querySelector('.cm-msg'),send=dlg.querySelector('.cm-send');
  const say=(t,err)=>{msg.hidden=false;msg.textContent=t;msg.classList.toggle('err',!!err)};
  function open(){
    msg.hidden=true;
    if(typeof dlg.showModal==='function'){dlg.showModal()}else{dlg.setAttribute('open','')}
    f.elements.name.focus();
  }
  const close=()=>{if(dlg.open)dlg.close()};
  dlg.querySelector('.cm-x').onclick=close;
  dlg.addEventListener('click',e=>{if(e.target===dlg)close()}); // click on the backdrop

  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');if(!a)return;
    const h=a.getAttribute('href');
    if(h==='#contact'||h==='index.html#contact'){e.preventDefault();open()}
  });
  if(location.hash==='#consult')open();

  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const req=[...f.querySelectorAll('[required]')];
    req.forEach(x=>x.setAttribute('aria-invalid',!x.checkValidity()));
    const bad=req.find(x=>!x.checkValidity());
    if(bad){say(bad.type==='email'&&bad.value?'Enter a valid email address, like name@example.com.':'Please fill in your name, email and who you are.',true);bad.focus();return}
    if(f.elements.website.value)return; // spam trap
    const d=new FormData(f);d.append('form-name','consultation');
    if(FORM_MODE==='email'){
      const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nOrganisation: ${d.get('organisation')||'-'}\nI am: ${d.get('giver_type')}\n\n${d.get('message')||''}`;
      location.href=`mailto:${TO_EMAIL}?subject=${encodeURIComponent('Consultation request · '+d.get('name'))}&body=${encodeURIComponent(body)}`;
      say('Your email app should open with the request ready to send.');return;
    }
    send.disabled=true;say('Sending…');
    try{
      const r=FORM_MODE==='netlify'
        ?await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d).toString()})
        :await fetch(FORMSPREE_URL,{method:'POST',body:d,headers:{Accept:'application/json'}});
      if(!r.ok)throw new Error(r.status);
      f.reset();say('Thank you. We’ll be in touch soon.');
    }catch(err){say('Sorry, that didn’t send. Please email us at hassan@ihsana.org.',true)}
    finally{send.disabled=false}
  });
})();
