import { useEffect, useRef, useState } from "react";
import { DAYS } from "./itineraryData.js";
import { BUDGET_CATEGORIES, PLAN_DATA, PACK_DATA } from "./tripPlanningData.js";
import { useSavedState, dayForDate, japanDate, directions, BUILD_LABEL } from "./travelState.js";
import "./itinerary.css";
import { offlineDocument } from "./offlineDocument.js";
import "./print.css";

const HOTEL="Hyatt Centric Ginza Tokyo";
const yen=n=>"¥"+Math.round(n).toLocaleString();
const usd=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);
const booked=a=>/booked/i.test(a.status||"");
const queryFor=(a)=>a.mapQuery||(a.kind==="hotel"?HOTEL:a.title);
const stationMode=a=>/\bwalk\b|on foot/i.test(a.title)?"walking":"transit";
const tabs=["Trip","Plan","Budget","Pack","Help"];
const dayColors=["#506e83","#a3565c","#a36a36","#726091","#416a91","#9b5e79","#41746a","#947448"];
const paymentToCheck=new Set(["pretrip-4"]);
function readSession(){try{return JSON.parse(sessionStorage.getItem("japan-travel-view"))||{};}catch{return {};}}
function initialState(){
  const p=new URLSearchParams(location.search),saved=readSession();
  const resumedOldDay=saved.date&&saved.date!==japanDate()&&Number(p.get("day"))===saved.day&&dayForDate()!==null;
  const explicit=!resumedOldDay&&p.has("day")&&Number.isInteger(Number(p.get("day")))&&Number(p.get("day"))>=0&&Number(p.get("day"))<DAYS.length;
  const sameDate=saved.date===japanDate();
  const day=explicit?Number(p.get("day")):sameDate&&Number.isInteger(saved.day)&&saved.day>=0&&saved.day<DAYS.length?saved.day:dayForDate()??1;
  const allowedTabs=tabs;
  const tab=allowedTabs.includes(p.get("tab"))?p.get("tab"):sameDate&&allowedTabs.includes(saved.tab)?saved.tab:"Trip";
  return {day,tab,stop:resumedOldDay?null:p.get("stop")||(sameDate?saved.stop:null),scroll:sameDate?saved.scroll:0};
}
function budgetTotals(){
  const all=BUDGET_CATEGORIES.flatMap(c=>c.items);
  return {
    paid:all.reduce((n,i)=>n+(i.paidUsd||0),0),
    due:all.filter(i=>!i.optional&&!i.variable).reduce((n,i)=>n+(i.dueUsd||0),0),
    low:all.filter(i=>!i.optional&&!i.variable).reduce((n,i)=>n+(i.dueRange?.[0]??i.dueUsd??0),0),
    high:all.filter(i=>!i.optional&&!i.variable).reduce((n,i)=>n+(i.dueRange?.[1]??i.dueUsd??0),0),
    optional:all.filter(i=>i.optional||i.variable).reduce((n,i)=>n+(i.cost||0),0)
    ,unconfirmed:all.filter(i=>paymentToCheck.has(i.id)).reduce((n,i)=>n+(i.dueUsd||0),0)
  };
}
function StopBody({a}){
  return <div className="stop-body">
    <p>{a.detail}</p>
    {a.critical&&<p className="important"><strong>Keep in mind</strong>{a.critical}</p>}
    {a.steps?.length>0&&<section><h3>Getting there</h3><ol>{a.steps.map((s,i)=><li key={i}>{s}</li>)}</ol></section>}
    {a.food&&<section><h3>Food & cost</h3><p>{a.food}</p></section>}
    {a.tip&&<section><h3>Good to know</h3><p>{a.tip}</p></section>}
    <div className="action-row">
      <a href={directions(queryFor(a),null,stationMode(a))} target="_blank" rel="noreferrer">Directions ↗</a>
      {stationMode(a)!=="walking"&&a.kind!=="flight"&&<a href={directions(queryFor(a),null,"walking")} target="_blank" rel="noreferrer">Walk ↗</a>}
      {a.phone&&<a href={"tel:"+a.phone}>Call venue</a>}
      {a.bookUrl&&<a href={a.bookUrl} target="_blank" rel="noreferrer">{a.bookLabel||"Booking page"} ↗</a>}
      {a.source&&<a href={a.source} target="_blank" rel="noreferrer">Official information ↗</a>}
    </div>
  </div>;
}
function zoneLabel(day,a){
  if(day.id===0)return "EDT";
  if(day.id===7&&a.title.includes("Minneapolis (MSP) →"))return "CDT";
  if(day.id===7&&a.title.includes("Layover"))return "CDT";
  return "JST";
}
function Checklist({groups,saved,onChange,locked=[]}){
  return <>{groups.map((g,i)=><section className="panel checklist" key={g.phase||g.cat}><h2>{(g.phase||g.cat).replace(/^[^A-Za-z]+/,"")}</h2>
    {g.items.map(item=><label className="check-row" key={item.id}><input type="checkbox" checked={saved.includes(item.id)||locked.includes(item.id)} disabled={locked.includes(item.id)} onChange={()=>onChange(item.id)}/>
      <span><strong>{item.text}</strong><span className="check-detail">{item.detail}</span>{item.links&&<span className="action-row">{item.links.map(l=><a href={l.url} key={l.url} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>{l.label} ↗</a>)}</span>}</span></label>)}
  </section>)}</>;
}
export default function JapanItinerary(){
  const [initial]=useState(initialState);
  const [dayId,setDay]=useState(initial.day);
  const [tab,setTab]=useState(initial.tab);
  const [open,setOpen]=useState(initial.stop);
  const [plan,setPlan]=useSavedState("plan-checked",[]);
  const [pack,setPack]=useSavedState("pack-checked",[]);
  const [now,setNow]=useState(new Date());
  const [online,setOnline]=useState(navigator.onLine);
  const [offlineReady,setOfflineReady]=useState(false);
  const [offlineFailed,setOfflineFailed]=useState(false);
  const [update,setUpdate]=useState(null);
  const [storageError,setStorageError]=useState(false);
  const [message,setMessage]=useState("");
  const printRef=useRef(null);
  const stateRef=useRef({});
  const day=DAYS[dayId], totals=budgetTotals();
  stateRef.current={day:dayId,tab,stop:open,date:japanDate()};
  const fixed=PLAN_DATA[0].items.map(i=>i.id);
  const remaining=PLAN_DATA.filter(g=>g.phase==="Finish before departure").flatMap(g=>g.items).filter(i=>!plan.includes(i.id)).length;
  useEffect(()=>{
    const save=()=>{try{sessionStorage.setItem("japan-travel-view",JSON.stringify({...stateRef.current,scroll:window.scrollY}));}catch{}};
    const visibility=()=>{save();setNow(new Date());};
    const network=()=>setOnline(navigator.onLine);
    const ready=()=>setOfflineReady(true);
    const failure=()=>setOfflineFailed(true);
    const pending=e=>setUpdate(e.detail);
    const storage=()=>setStorageError(true);
    window.addEventListener("pagehide",save);document.addEventListener("visibilitychange",visibility);
    window.addEventListener("online",network);window.addEventListener("offline",network);
    window.addEventListener("travel-offline-ready",ready);window.addEventListener("travel-offline-failed",failure);
    window.addEventListener("travel-update",pending);window.addEventListener("travel-storage-error",storage);
    if(import.meta.env.PROD&&"serviceWorker" in navigator){
      navigator.serviceWorker.getRegistration().then(r=>{if(r?.waiting&&r.active)setUpdate(r);});
      navigator.serviceWorker.ready.then(ready);
    }
    const timer=setInterval(()=>setNow(new Date()),60000);
    const restore=requestAnimationFrame(()=>{if(initial.stop)document.getElementById(initial.stop)?.scrollIntoView({block:"center"});else window.scrollTo(0,initial.scroll||0);});
    return()=>{save();clearInterval(timer);cancelAnimationFrame(restore);window.removeEventListener("pagehide",save);document.removeEventListener("visibilitychange",visibility);window.removeEventListener("online",network);window.removeEventListener("offline",network);window.removeEventListener("travel-offline-ready",ready);window.removeEventListener("travel-offline-failed",failure);window.removeEventListener("travel-update",pending);window.removeEventListener("travel-storage-error",storage);};
  },[]);
  useEffect(()=>{
    const url=new URL(location.href);url.searchParams.set("day",dayId);url.searchParams.set("tab",tab);
    if(open)url.searchParams.set("stop",open);else url.searchParams.delete("stop");
    history.replaceState(null,"",url);
    try{sessionStorage.setItem("japan-travel-view",JSON.stringify({...stateRef.current,scroll:window.scrollY}));}catch{}
  },[dayId,tab,open]);
  function selectDay(id){setDay(id);setTab("Trip");setOpen(null);window.scrollTo({top:0,behavior:"instant"});}
  function selectTab(value){setTab(value);window.scrollTo({top:0,behavior:"instant"});}
  function toggle(set,id){set(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);}
  async function copyLink(a){
    const u=new URL(location.href);u.searchParams.set("day",dayId);u.searchParams.set("tab","Trip");u.searchParams.set("stop",a.id);
    try{await navigator.clipboard.writeText(u.href);setMessage("Stop link copied. Paste it into your calendar event.");}catch{setMessage("Copy the address from your browser after opening this stop.");}
  }
  function download(){
    const html=offlineDocument(printRef.current.innerHTML);
    const url=URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="Japan-itinerary-offline.html";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    setMessage("Offline itinerary downloaded. Save it to Files on both phones. External maps and booking pages still need internet.");
  }
  function printDocument(){
    const preview=window.open("", "_blank");
    if(!preview){setMessage("Allow the print preview to open, or download the offline itinerary and print that file.");return;}
    preview.document.open();preview.document.write(offlineDocument(printRef.current.innerHTML));preview.document.close();
    preview.opener=null;
  }
  function applyUpdate(){
    const worker=update?.waiting;if(!worker){location.reload();return;}
    navigator.serviceWorker.addEventListener("controllerchange",()=>location.reload(),{once:true});worker.postMessage({type:"SKIP_WAITING"});
  }
  const today=dayForDate(now);
  return <div className="travel-app" style={{"--day-accent":dayColors[dayId]}}>
    <header className="app-header"><a className="brand" href="./" onClick={e=>{e.preventDefault();selectDay(today??1);}}><span className="brand-kicker">AARON & ASHLEY</span>Japan, together.<span>Our anniversary adventure · October 2026</span></a>
      {today!==null?<button className="quiet" onClick={()=>selectDay(today)}>Today</button>:<span className="trip-seal" aria-hidden="true">日本<span>♡</span></span>}
    </header>
    {update&&<div className="notice">A newer itinerary is ready. <button onClick={applyUpdate}>Update now</button></div>}
    {!online&&<div className="notice">Offline. {offlineReady?"Saved itinerary is available.":"Use your downloaded backup if a reload fails."} Maps and live information need internet.</div>}
    {storageError&&<div className="notice">This browser could not save your latest changes. Export any memories and keep a separate copy of checklist progress.</div>}
    <main>
    {tab==="Trip"&&<>
      <nav className="day-nav" aria-label="Trip dates">{DAYS.map((d,i)=><button key={d.id} aria-current={dayId===i?"date":undefined} onClick={()=>selectDay(i)}><span>{d.dayName}</span><strong>{d.date.replace("Oct ","")}</strong></button>)}</nav>
      <div className="day-heading"><p className="eyebrow">{day.dayName}, {day.date} · {day.id===0?"Eastern time":day.id===7?"Japan, then U.S. local times":"Japan time"}</p><h1>{day.title}</h1></div>
      <div className="timeline">{day.activities.map(a=><article id={a.id} className={"stop "+(open===a.id?"is-open":"")} key={a.id}>
        <button className="stop-heading" aria-expanded={open===a.id} aria-controls={a.id+"-body"} onClick={()=>setOpen(open===a.id?null:a.id)}>
          <span className="stop-time">{a.time} {day.id===7&&<small>{zoneLabel(day,a)}</small>}</span>
          <span className="stop-title"><span className="stop-icon" aria-hidden="true">{a.icon}</span><span className="stop-name">{a.title}</span><span className="chevron" aria-hidden="true">{open===a.id?"−":"+"}</span></span>
          {(a.arriveBy||booked(a)||a.status==="Book now"||a.status==="Optional")&&<span className={"stop-meta "+(a.status==="Book now"?"needs-action":"")}>{a.arriveBy?"Arrive by "+a.arriveBy:booked(a)?"Reserved":a.status==="Optional"?"Optional · skip if running late":"Still to book"}{a.arriveBy&&booked(a)?" · Reserved":""}</span>}
        </button>
        <div id={a.id+"-body"} hidden={open!==a.id}><StopBody a={a}/><div className="stop-footer"><button className="text-button" onClick={()=>copyLink(a)}>Copy link for calendar</button></div></div>
      </article>)}</div>
      <p className="footnote">Booked entries are fixed. Other times are flexible. Live signs and operator instructions take priority over saved directions.</p>
    </>}
    {tab==="Plan"&&<><div className="section-heading"><p className="eyebrow">Before you leave</p><h1>The final details</h1><p>{remaining} remaining priority tasks. Checked items stay on this device only; they do not cancel or book anything.</p></div>
      <Checklist groups={PLAN_DATA.filter(g=>g!==PLAN_DATA[0]&&g.phase!=="Walk-in plans")} saved={plan} onChange={id=>toggle(setPlan,id)}/>
      <details className="panel"><summary>Confirmed arrangements</summary><Checklist groups={[PLAN_DATA[0]]} saved={plan} locked={fixed}/></details>
      <details className="panel"><summary>Walk-in plans</summary><Checklist groups={PLAN_DATA.filter(g=>g.phase==="Walk-in plans")} saved={plan} onChange={id=>toggle(setPlan,id)}/></details></>}
    {tab==="Pack"&&<><div className="section-heading"><p className="eyebrow">Ready to go</p><h1>Your packing list</h1><p>{pack.length} items checked. Progress stays on this device; it is not shared between phones.</p></div><Checklist groups={PACK_DATA} saved={pack} onChange={id=>toggle(setPack,id)}/></>}
    {tab==="Budget"&&<><div className="section-heading"><p className="eyebrow">For both of you</p><h1>Money, made clear</h1><p>Dollar estimates use ¥150 = $1, not a live exchange rate. These are spending allowances, not outstanding invoices.</p></div>
      <div className="budget-summary"><div><span>Recorded paid*</span><strong>{usd(totals.paid)}</strong></div><div><span>Future spending estimate</span><strong>{usd(totals.due-totals.unconfirmed)}</strong></div><div><span>Check if already paid</span><strong>{usd(totals.unconfirmed)}</strong></div></div>
      <p className="footnote">*Recorded paid includes estimated ticket amounts and may omit other prepayments. Future spending includes meals, snacks and transport allowances, not just bookings. Optional activities and shopping: {usd(totals.optional)} separately. Points cover the hotel and award airfare, not incidentals.</p>
      <details className="panel"><summary>Payment notes</summary><p>Manten Sushi and Ushigoro are recorded prepaid based on your recollection; confirm the receipts show full payment, not just a deposit. Owl café is recorded paid. The paid Uber is assigned to Thursday’s airport pickup. These four items are no longer included in future spending; amounts remain estimates.</p>{BUDGET_CATEGORIES.flatMap(c=>c.items).filter(i=>paymentToCheck.has(i.id)).map(i=><p key={i.id}><strong>{i.name}</strong><br/>{usd(i.dueUsd)} estimate · Confirm whether already purchased.</p>)}<p>The saved Hakone confirmations explicitly say the bath, massages and lunch are paid on site. Restaurant drinks or other extras beyond your prepaid courses may still be charged.</p></details>
      {BUDGET_CATEGORIES.map(c=><details className="panel" key={c.id}><summary>{c.title.replace(" — all week","")}</summary>{c.items.map(i=><div className="budget-item" key={i.id}><h3>{i.name}</h3><div className="money-row">
        {i.paidUsd>0&&<span>Paid: {i.paidYen?yen(i.paidYen)+" · ":""}{usd(i.paidUsd)}{i.paidEstimated?" estimate":""}</span>}
        {i.optional||i.variable?<span>Optional allowance: {usd(i.cost||0)}</span>:i.dueUsd>0?<span>{paymentToCheck.has(i.id)?"Payment unconfirmed":"Spending allowance"}: {i.dueYen?yen(i.dueYen)+" · ":""}{usd(i.dueUsd)}</span>:!i.paidUsd&&<span>{i.freeLabel||"Included"}</span>}
      </div><p>{i.detail}</p>{(i.paidUsd>0||i.dueUsd>0)&&<p className="footnote">{i.paymentNote}</p>}</div>)}</details>)}
      <section className="panel"><h2>One rule for Suica</h2><p>Count the journey once. Loading money is not a separate travel expense. Local travel, airport trains and Hakone base fares have separate allowances here; all may be paid from the same Suica balance.</p><p>Keep a modest emergency buffer separate from the main plan. Check actual card coverage and merchant charges; no insurance or exchange rate is guaranteed.</p></section></>}
    {tab==="Help"&&<><div className="section-heading"><p className="eyebrow">Always within reach</p><h1>Hotel & travel essentials</h1></div>
      <section className="panel"><h2>Hyatt Centric Ginza Tokyo</h2><p lang="ja">ハイアット セントリック 銀座 東京<br/>東京都中央区銀座6-6-7</p><p>Reception on 4F · Check-out noon, Oct 29</p><div className="action-row"><a href={directions(HOTEL)} target="_blank" rel="noreferrer">Train to hotel ↗</a><a href={directions(HOTEL,null,"walking")} target="_blank" rel="noreferrer">Walk to hotel ↗</a><a href="tel:+81368371234">Call hotel</a></div></section>
      <section className="panel"><h2>Your offline backup</h2><p>{offlineReady?"This version is saved for offline use in this browser.":offlineFailed?"Offline saving failed. Download the standalone copy below.":import.meta.env.DEV?"Local preview: automatic offline saving is tested in the production build.":"Preparing offline copy. Keep this page open with internet, then test airplane mode."}</p><p>Browser storage can be cleared or evicted. Keep a downloaded copy on both phones too. Ticket QR codes and confirmations must be saved separately and privately.</p><div className="action-row"><button onClick={download}>Download offline itinerary</button><button onClick={printDocument}>Open printable guide</button></div><p className="footnote">The downloaded file has all eight days and requires no internet to read. Maps, calls, tickets and booking websites are not bundled.</p></section>
      <section className="panel"><h2>If you need help</h2><div className="action-row"><a href="tel:119">119 · Ambulance / fire</a><a href="tel:110">110 · Police</a><a href="tel:+815038162787">JNTO visitor hotline</a></div><p>JNTO: +81 50-3816-2787. Keep your insurer's assistance number and policy privately on both phones. For non-emergencies, the hotel can help you contact a venue.</p><a href="https://www.japan.travel/en/plan/hotline/" target="_blank" rel="noreferrer">Official visitor assistance ↗</a></section>
      <section className="panel"><h2>Travel-day notes</h2><p>Japan bookings use JST (Asia/Tokyo). Departure-day U.S. times are EDT; Minneapolis on the return is CDT. Verify all flight times in the airline app.</p><p>At Minneapolis, follow immigration, baggage/customs and connecting-flight security instructions. Do not assume bags transfer automatically; ask Delta about your specific arrival.</p><p>Carry your original passport securely. Keep medicines in their original packaging and check their active ingredients against Japan's rules.</p><div className="action-row"><a href="https://www.vjw.digital.go.jp/" target="_blank" rel="noreferrer">Visit Japan Web ↗</a><a href="https://www.ncd.mhlw.go.jp/en/application2.html" target="_blank" rel="noreferrer">Medication rules ↗</a><a href="https://www.delta.com/us/en/baggage/carry-on-baggage" target="_blank" rel="noreferrer">Delta baggage ↗</a></div></section>
      <details className="panel"><summary>All destinations</summary>{DAYS.map(d=><section key={d.id}><h3>{d.dayName} {d.date}</h3>{d.activities.filter(a=>!["travel","flight","layover"].includes(a.kind)).map(a=><p key={a.id}><a href={directions(queryFor(a))} target="_blank" rel="noreferrer">{a.title} ↗</a></p>)}</section>)}</details>
      <p className="footnote">Built {BUILD_LABEL}. Checklist progress is local to this browser, not synchronized with your wife or Google Calendar. This public site contains no private ticket or passport files.</p>
    </>}
    </main>
    {message&&<div className="toast" role="status">{message}<button aria-label="Dismiss message" onClick={()=>setMessage("")}>×</button></div>}
    <nav className="bottom-nav" aria-label="Main navigation">{tabs.map(name=><button key={name} aria-current={tab===name?"page":undefined} onClick={()=>selectTab(name)}>{name}</button>)}</nav>
    <div className="print-copy" ref={printRef}><h1>Aaron &amp; Ashley<br/>Japan, together.</h1><p><strong>October 22–29, 2026 · Our anniversary adventure</strong></p><p>Offline itinerary · exported {BUILD_LABEL}. Bookings are recorded from your itinerary, not independently authenticated. All times are local as labeled. Live signs and operator instructions take priority.</p><h2>Hotel</h2><p>Hyatt Centric Ginza Tokyo · +81-3-6837-1234<br/>ハイアット セントリック 銀座 東京 · 東京都中央区銀座6-6-7</p><p>Emergency: 119 ambulance/fire · 110 police. Carry original passports securely. Save private tickets and confirmations separately.</p>{DAYS.map(d=><section key={d.id}><h2>{d.dayName} {d.date}: {d.title}</h2>{d.activities.map(a=><article key={a.id}><h3>{a.time} {zoneLabel(d,a)} · {a.title}</h3>{a.arriveBy&&<p><strong>Arrive by {a.arriveBy}</strong></p>}<StopBody a={a}/></article>)}</section>)}</div>
  </div>;
}
