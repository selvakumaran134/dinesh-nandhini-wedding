/* ===== CONFIG — every value below is taken from the original patrika (assets/invitation.png). Empty = not printed on it. ===== */
const CONFIG = {
  groom: "V. Dinesh", bride: "V. Nandhini",
  weddingDate: "20 November 2026", weddingDay: "Friday",
  tamilDate: "கார்த்திகை 04-ஆம் தேதி (20.11.2026) வெள்ளிக்கிழமை",
  weddingTime: "காலை 6.00 மணிக்குமேல் 7.30 மணிக்குள் (விருச்சக லக்கனம்)",
  weddingVenue: "அருள்மிகு ஸ்ரீ பொய்யாமொழி விநாயகர் ஆலயம்",
  weddingAddress: "தீவனூர்",
  receptionDate: "அன்று (20.11.2026, வெள்ளிக்கிழமை)",
  receptionTime: "மாலை 6.00 மணிக்கு மேல்",
  receptionVenue: "ஸ்ரீ புவனேஸ்வரி திருமண மண்டபம்",
  receptionAddress: "கூட்டேரிப்பட்டு",
  rsvpUrl: "",   /* ← PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE (ends with /exec) */
  googleMapsUrl: "",          /* no map link on the patrika — the button searches the printed venue name instead */
  receptionMapsUrl: "",
  familyDetails: `
<h3>மணமகன் வீட்டார்</h3><p class="c">விழுப்புரம் மாவட்டம், திண்டிவனம் வட்டம், சின்னநெற்குணம் கிராமம்<br>தெய்வத்திருவாளர்கள் D.ஆறுமுகசெட்டியார் - ராஜேஸ்வரி அம்மாள் இவர்களின் மகன் வழி பேரனும், வந்தவாசி வட்டம், ஓசூர் கிராமம், தெய்வத்திருவாளர்கள் D.கிருஷ்ணன்செட்டியார் - சூரியாகாந்தி அம்மாள் இவர்களின் மகள் வழி பேரனும், கூட்டேரிப்பட்டு, நெ.4, கிருஷ்ண நகர்,<br><b>A.விநாயகம் செட்டியார் - மலர்</b><br>இவர்களின் இளைய குமாரன் திருநிறைச்செல்வன்<br><b>V.தினேஷ் BCA.,</b> என்கிற வரனுக்கும்</p>
<h3>மணமகள் வீட்டார்</h3><p class="c">புதுவை மாநிலம், கணபதி செட்டிகுளம்<br>தெய்வத்திருவாளர்கள் R.ஆறுமுகசெட்டியார் - பாஞ்சாலி அம்மாள் இவர்களின் மகன் வழி பேத்தியும், புதுவை மாநிலம், வம்புப்பட்டு தெய்வத்திரு K.மண்ணாங்கட்டிசெட்டியார் - நலமுடன் சீத்தாலட்சுமி இவர்களின் மகள் வழி பேத்தியும், புதுவை மாநிலம், செல்லிப்பட்டு<br><b>A.வினாயகமூர்த்தி செட்டியார் - முனியம்மாள் (எ) சரசு</b><br>இவர்களின் குமாரத்தி திருநிறைச்செல்வி<br><b>V.நந்தினி B.A.,</b> என்கிற கன்னிகைக்கும்</p>
<h3>அழைப்பு</h3><p class="c">திருமணம் செய்ய பெரியோர்களால் நிச்சயித்தவண்ணம் மேற்படி திருமணம் தீவனூர், அருள்மிகு ஸ்ரீ பொய்யாமொழி விநாயகர் ஆலயத்தில் திருமணமும், அதனை தொடர்ந்து அன்று மாலை 6.00 மணிக்கு மேல், கூட்டேரிப்பட்டு, ஸ்ரீ புவனேஸ்வரி திருமண மண்டபத்தில் நடைபெறும் திருமண வரவேற்பு விழாவிற்கு தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.</p>
<h3>அன்புடன் அழைப்பவர்கள்</h3><p>A.வெங்கடேஷ் செட்டியார், சித்ரா வெங்கடேசன் — கணபதி செட்டிகுளம்<br>A.வினாயகமூர்த்தி செட்டியார், முனியம்மாள் (எ) சரசு வினாயகமூர்த்தி — செல்லிப்பட்டு<br>செல் : 9585148392, 9787644162</p>
<p>AR Sons : A.விநாயகம் செட்டியார் - மலர், A.நித்தியானந்தம் செட்டியார் - பத்மாவதி, A.முருகன் செட்டியார் - உஷாராணி — கூட்டேரிப்பட்டு<br>செல் : 9976995499</p>
<h3>அழைத்து மகிழும்</h3><p>V.கலைவாணன் B.Tech., தீபலட்சுமி கலைவாணன் B.E., V.ஸ்ரீராம் M.Sc., MBA., V.ஆதித்யன்<br>V.பாலாஜி B.E., ஆனந்தி பாலாஜி B.Sc., N.வளர்மதி B.Com., N.கலைச்செல்வி B.Com., M.செல்வகுமரன் B.E., N.புகழேந்தி B.E., M.காமேஷ்குமார் D.EEE.</p>`
};
/* ================================================================ */
const $=s=>document.querySelector(s),C=CONFIG;
const tick=()=>{const d=new Date();$('#clk').textContent=(d.getHours()%12||12)+':'+String(d.getMinutes()).padStart(2,'0')};tick();setInterval(tick,20000);
$('#reveal').innerHTML=`<small>${C.weddingDay}</small><strong>${C.weddingDate.toUpperCase()}</strong>`;
/* unlock */
function unlock(){if(!$('#lock'))return;$('#lock').classList.add('gone');$('#app').hidden=false;$('#nav').hidden=false;
  paint();watch();burst(innerWidth/2,innerHeight/2,30);if(!userOff)playM();setTimeout(()=>{$('#lock')&&$('#lock').remove();scrollTo(0,0)},900)}
$('#unlockBtn').onclick=unlock;
let sy=0;$('#lock').addEventListener('touchstart',e=>sy=e.touches[0].clientY,{passive:true});$('#lock').addEventListener('touchend',e=>{if(sy-e.changedTouches[0].clientY>60)unlock()});
/* music: assets/music.mp3 — starts only after a user tap (unlock or the Music button) */
const aud=$('#aud'),mb=$('#music'),mt=$('#musicTxt');let missing=false,userOff=false;
aud.volume=0;aud.addEventListener('error',()=>{missing=true;setM('add')});
function setM(st){const on=st==='on';mb.classList.toggle('on',on);mb.setAttribute('aria-pressed',on);
 mt.textContent=st==='on'?'Music On':st==='add'?'Add music':'Music Off';mb.setAttribute('aria-label',mt.textContent)}
function fade(to){clearInterval(fade.t);fade.t=setInterval(()=>{const v=aud.volume+(to>aud.volume?.05:-.05);aud.volume=Math.min(.8,Math.max(0,v));if(Math.abs(aud.volume-to)<.06){aud.volume=to;clearInterval(fade.t);if(!to)aud.pause()}},80)}
function playM(){if(missing){setM('add');return}aud.play().then(()=>{setM('on');fade(.8)}).catch(()=>setM(missing?'add':'off'))}
mb.onclick=()=>{if(missing){setM('add');return}if(!aud.paused){userOff=true;fade(0);setM('off')}else{userOff=false;playM()}};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!aud.paused){aud.pause();setM('off')}});
function watch(){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.2});document.querySelectorAll('.rv').forEach(el=>io.observe(el))}
/* details */
const pend='Details as mentioned in the wedding invitation';
const line=a=>a.filter(Boolean).join('<br>')||pend;
const card=(t,b)=>`<div class="card"><h3>${t}</h3><p>${b}</p></div>`;
$('#details').innerHTML=card('Wedding Ceremony',line([`${C.weddingDay}, ${C.weddingDate}`,C.tamilDate,C.weddingTime?'⏰ '+C.weddingTime:'',C.weddingVenue?'📍 '+C.weddingVenue+(C.weddingAddress?', '+C.weddingAddress:''):'']))
 +card('Wedding Reception',line([C.receptionDate?'📅 '+C.receptionDate:'',C.receptionTime?'⏰ '+C.receptionTime:'',C.receptionVenue?'📍 '+C.receptionVenue+(C.receptionAddress?', '+C.receptionAddress:''):'']));
$('#venueCard').innerHTML=`<h3>${C.weddingVenue||''}</h3><p>${C.weddingAddress||pend}</p>`;
$('#recCard').innerHTML=line([C.receptionDate?'📅 '+C.receptionDate:'',C.receptionTime?'⏰ '+C.receptionTime:'',C.receptionVenue?'📍 '+C.receptionVenue:'',C.receptionAddress||'']);
const maps=(u,v,a)=>u||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent((v+' '+a).trim());
$('#mapBtn').href=maps(C.googleMapsUrl,C.weddingVenue,C.weddingAddress);$('#recMapBtn').href=maps(C.receptionMapsUrl,C.receptionVenue,C.receptionAddress);
C.familyDetails?$('#famCard').innerHTML=C.familyDetails:$('#famCard').remove();
/* lightbox: pinch (native), buttons, swipe-down to close */
let z=1;const lb=$('#lb'),li=$('#lbimg');
const setZ=v=>{z=Math.min(6,Math.max(1,v));li.style.width=(z*100)+'%'};
function open(){setZ(1);lb.hidden=false;lb.scrollTo(0,0);document.body.style.overflow='hidden'}
function close(){lb.hidden=true;document.body.style.overflow=''}
$('#openInv').onclick=$('#inviteCard').onclick=open;$('#lbx').onclick=close;$('#zi').onclick=()=>setZ(z+.75);$('#zo').onclick=()=>setZ(z-.75);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lb.hidden)close()});
let ty=0;lb.addEventListener('touchstart',e=>ty=e.touches.length===1?e.touches[0].clientY:-1,{passive:true});
lb.addEventListener('touchend',e=>{if(z===1&&ty>=0&&e.changedTouches[0].clientY-ty>110)close()});
li.addEventListener('dblclick',()=>setZ(z>1?1:2.5));
/* scratch card */
const sc=$('#scratch'),ctx=sc.getContext('2d');let done=false,down=false,n=0;
function paint(){if(done)return;const r=sc.getBoundingClientRect();if(!r.width)return;sc.width=r.width*2;sc.height=r.height*2;
 const g=ctx.createLinearGradient(0,0,sc.width,sc.height);g.addColorStop(0,'#e8b4a0');g.addColorStop(.5,'#f7d7cc');g.addColorStop(1,'#b76e79');ctx.globalCompositeOperation='source-over';ctx.fillStyle=g;ctx.fillRect(0,0,sc.width,sc.height);
 ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='600 40px Jost,sans-serif';ctx.fillText('✨ Scratch here ✨',sc.width/2,sc.height/2+14)}
const pos=e=>{const r=sc.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return[(p.clientX-r.left)*sc.width/r.width,(p.clientY-r.top)*sc.height/r.height]};
function scr(e){if(!down||done)return;e.preventDefault();const[x,y]=pos(e);ctx.globalCompositeOperation='destination-out';ctx.beginPath();ctx.arc(x,y,34,0,7);ctx.fill();check()}
function check(){if(++n%6)return;const d=ctx.getImageData(0,0,sc.width,sc.height).data;let c=0,t=0;for(let i=3;i<d.length;i+=64){t++;if(!d[i])c++}
 if(c/t>.4){done=true;sc.style.opacity=0;sc.style.pointerEvents='none';const r=sc.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,90);$('#reveal').animate([{transform:'scale(.85)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:900})}}
['mousedown','touchstart'].forEach(v=>sc.addEventListener(v,e=>{down=true;scr(e)},{passive:false}));
['mouseup','mouseleave','touchend','touchcancel'].forEach(v=>sc.addEventListener(v,()=>down=false));
['mousemove','touchmove'].forEach(v=>sc.addEventListener(v,scr,{passive:false}));
addEventListener('resize',()=>{if(!done&&n===0)paint()});
/* petals, hearts, confetti */
const cv=$('#fx'),c=cv.getContext('2d');let P=[];const sz=()=>{cv.width=innerWidth;cv.height=innerHeight};sz();addEventListener('resize',sz);
const E=['🌸','🩷','✨','🌹'],K=['#c9506e','#e8b4a0','#f9d5dd','#b76e79','#ffd166'];
function mk(x,y,b){const cf=b&&Math.random()<.4;return{x,y,vx:b?(Math.random()-.5)*9:(Math.random()-.5),vy:b?-Math.random()*9-2:Math.random()*.8+.4,s:14+Math.random()*14,e:E[Math.random()*4|0],k:cf?K[Math.random()*5|0]:null,life:b?120:1e9}}
for(let i=0;i<(innerWidth<500?14:26);i++)P.push(mk(Math.random()*innerWidth,Math.random()*innerHeight,0));
function burst(x,y,m){for(let i=0;i<m;i++)P.push(mk(x,y,1))}
(function loop(){c.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.life>0);
 for(const p of P){p.x+=p.vx+Math.sin(p.y/40)*.4;p.y+=p.vy;p.life--;
  if(p.life>1e8){if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width}c.globalAlpha=.7}else{p.vy+=.25;c.globalAlpha=Math.min(1,p.life/30)}
  if(p.k){c.fillStyle=p.k;c.fillRect(p.x,p.y,7,4)}else{c.font=p.s+'px serif';c.fillText(p.e,p.x,p.y)}}
 requestAnimationFrame(loop)})();

/* ===== RSVP ===== */
const st={n:2},$n=$('#gNum');let loaded=false;
const clampN=v=>Math.min(20,Math.max(1,v));
$('#gMinus').onclick=()=>{st.n=clampN(st.n-1);$n.textContent=st.n};$('#gPlus').onclick=()=>{st.n=clampN(st.n+1);$n.textContent=st.n};
function countUp(el,to){if(typeof to!=='number'){el.textContent='–';return}const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}
function showCounts(d){countUp($('#cM'),d&&d.marriage);countUp($('#cR'),d&&d.reception);countUp($('#cB'),d&&d.both);countUp($('#cT'),d&&d.total)}
async function loadCounts(){
 if(!C.rsvpUrl){showCounts(null);$('#cNote').textContent='Live counts appear once the RSVP sheet is connected.';return}
 try{const r=await fetch(C.rsvpUrl,{cache:'no-store'});const d=await r.json();showCounts(d);$('#cNote').textContent=''}
 catch(e){showCounts(null);$('#cNote').textContent='Guest count is unavailable right now.'}}
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){loadCounts();o.disconnect()}},{threshold:.2}).observe($('#countCard'));
const key='dn_rsvp_v1';
function rsvpDone(name,att,n,saved){$('#rsvpForm').hidden=true;$('#rsvpDone').hidden=false;
 $('#doneT').textContent='Thank you, '+name+'! 💖';
 $('#doneP').textContent='We have noted '+n+' guest'+(n>1?'s':'')+' for '+({marriage:'the Marriage',reception:'the Reception',both:'the Marriage and Reception'})[att]+'. We look forward to celebrating with you.';
 $('#doneN').textContent=saved?'':'Preview mode — not saved yet. Connect the Google Sheet (see README).';
 burst(innerWidth/2,innerHeight*.6,50)}
try{const p=JSON.parse(localStorage.getItem(key)||'null');if(p&&p.saved)rsvpDone(p.name,p.att,p.n,true)}catch(e){}
$('#again').onclick=()=>{$('#rsvpDone').hidden=true;$('#rsvpForm').hidden=false;$('#gName').value=''};
$('#rsvpBtn').onclick=async()=>{
 const name=$('#gName').value.trim().replace(/\s+/g,' '),att=(document.querySelector('input[name=att]:checked')||{}).value,err=$('#rsvpErr'),btn=$('#rsvpBtn');
 err.textContent='';if($('#hp').value)return;
 if(name.length<2){err.textContent='Please enter your name.';$('#gName').focus();return}
 if(!C.rsvpUrl){rsvpDone(name,att,st.n,false);return}
 btn.disabled=true;btn.textContent='Sending…';
 try{await fetch(C.rsvpUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({name,attendance:att,guests:st.n})});
  try{localStorage.setItem(key,JSON.stringify({saved:1,name,att,n:st.n}))}catch(e){}
  rsvpDone(name,att,st.n,true);setTimeout(loadCounts,2500)}
 catch(e){err.textContent='Could not send. Please check your connection and try again.'}
 btn.disabled=false;btn.textContent='❤️ Confirm Attendance'};
