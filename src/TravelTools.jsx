import { useEffect, useState } from 'react';
import { dayForDate, directions, japanDate } from './travelState.js';
import './travel-tools.css';

export function TravelTools({onToday}) {
  const [online,setOnline]=useState(navigator.onLine);
  const [ready,setReady]=useState(false);
  const [waiting,setWaiting]=useState(null);
  const [storageError,setStorageError]=useState(false);
  const [now,setNow]=useState(new Date());
  useEffect(()=>{
    const onlineChange=()=>setOnline(navigator.onLine);
    const error=()=>setStorageError(true);
    window.addEventListener('online',onlineChange);window.addEventListener('offline',onlineChange);window.addEventListener('travel-storage-error',error);
    const timer=setInterval(()=>setNow(new Date()),60000);
    let alive=true;
    if(import.meta.env.PROD && 'serviceWorker' in navigator){
      navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(reg=>{
        if(!alive)return;
        if(reg.waiting)setWaiting(reg.waiting);
        reg.addEventListener('updatefound',()=>{
          const worker=reg.installing;
          worker?.addEventListener('statechange',()=>{if(alive&&worker.state==='installed'&&navigator.serviceWorker.controller)setWaiting(worker);});
        });
        navigator.serviceWorker.ready.then(()=>{if(alive)setReady(true);});
        reg.update().catch(()=>{});
      }).catch(()=>{});
    }
    return()=>{alive=false;clearInterval(timer);window.removeEventListener('online',onlineChange);window.removeEventListener('offline',onlineChange);window.removeEventListener('travel-storage-error',error);};
  },[]);
  function update(){
    navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});
    waiting.postMessage({type:'SKIP_WAITING'});
  }
  const today=dayForDate(now);
  return <section className="travel-tools">
    <div className="travel-toolbar"><button onClick={()=>onToday(today??1)}>{today===null?'Preview trip':'Today in Japan'}</button><span>{japanDate(now)} · {now.toLocaleTimeString('en-US',{timeZone:'Asia/Tokyo',hour:'numeric',minute:'2-digit'})} JST</span></div>
    <p className="travel-small">{online?'Online':'Offline'} · {ready?'Itinerary saved for offline use':import.meta.env.DEV?'Local preview: offline cache is enabled in the production build':'Preparing offline copy; open once with internet'} · Build {__BUILD_TIME__}</p>
    {waiting&&<button onClick={update}>New version ready · update now</button>}
    {storageError&&<p role="alert">Your browser could not save changes. Keep a separate copy of important notes.</p>}
    <details><summary>Hotel, emergencies & practical help</summary>
      <h3>Caption by Hyatt Kabutocho Tokyo</h3>
      <p lang="ja">キャプション by Hyatt 兜町 東京<br/>〒103-0026 東京都中央区日本橋兜町12-1</p>
      <p>12-1 Nihonbashi Kabutocho, Chuo-ku, Tokyo</p>
      <div className="travel-links"><a href={directions('Caption by Hyatt Kabutocho Tokyo')}>Train back to hotel ↗</a><a href={directions('Caption by Hyatt Kabutocho Tokyo',null,'walking')}>Walk back ↗</a><a href="tel:+81345881234">Call hotel</a><a href="https://www.hyatt.com/caption-by-hyatt/en-US/tyocp-caption-by-hyatt-kabutocho-tokyo/hotel-info" target="_blank" rel="noreferrer">Hotel source ↗</a></div>
      <p>In Japan: <a href="tel:110">110 Police</a> · <a href="tel:119">119 Ambulance / Fire</a><br/><a href="tel:+815038162787">JNTO visitor hotline: +81 50-3816-2787</a> (24 hours). <a href="https://www.japan.travel/en/plan/hotline/" target="_blank" rel="noreferrer">Official information ↗</a></p>
      <p>Rain plan: shorten outdoor browsing; use Solamachi on Saturday, Tokyo Midtown on Sunday and indoor Shibuya shops Tuesday. Confirm kart weather/cancellation policy and Shibuya Sky rooftop status directly. Never substitute a new paid activity automatically.</p>
      <p className="travel-small">Checkboxes and receipt amounts stay only in this browser/device, not shared with your spouse. Clearing browser data removes them. Offline saves the itinerary and guide text, not external photos, live train directions or third-party tickets. Keep QR codes privately in Photos/Wallet, never in this public repository.</p>
      <p className="travel-small">Phone shortcut must use the public HTTPS website, not localhost. Open online after each deployment; use “update now” when offered. Test airplane mode before leaving.</p>
    </details>
  </section>;
}

export function StopDirections({activity,previous}){
  if(!activity.mapQuery)return null;
  return <div className="travel-links">
    <a href={directions(activity.mapQuery,null,'transit')} target="_blank" rel="noreferrer">Train from here ↗</a>
    <a href={directions(activity.mapQuery,null,'walking')} target="_blank" rel="noreferrer">Walk from here ↗</a>
    {previous?.mapQuery&&<a href={directions(activity.mapQuery,previous.mapQuery,'transit')} target="_blank" rel="noreferrer">From previous stop ↗</a>}
    {activity.source&&<a href={activity.source} target="_blank" rel="noreferrer">Official details / booking ↗</a>}
    <small>“From here” asks Google Maps to use your location. Check the resolved venue and station exits; area placeholders are not exact restaurant addresses.</small>
  </div>;
}
