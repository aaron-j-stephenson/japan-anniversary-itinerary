import { useEffect, useState } from 'react';
export function useSavedState(key, fallback) {
  const [value, setValue] = useState(() => {
    try { const saved=JSON.parse(localStorage.getItem('japan-v1-'+key)); return Array.isArray(fallback) ? (Array.isArray(saved)?saved:fallback) : saved??fallback; } catch { return fallback; }
  });
  useEffect(()=>{try{localStorage.setItem('japan-v1-'+key,JSON.stringify(value));}catch{window.dispatchEvent(new Event('travel-storage-error'));}},[key,value]);
  return [value,setValue];
}
export function japanDate(now=new Date()) {
  return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
}
export function dayForDate(now=new Date()) {
  const date=japanDate(now);
  return date>='2026-10-22'&&date<='2026-10-29'?Number(date.slice(-2))-22:null;
}
export function directions(destination,origin,mode='transit') {
  const p=new URLSearchParams({api:'1',destination,travelmode:mode});if(origin)p.set('origin',origin);
  return 'https://www.google.com/maps/dir/?'+p;
}
export function refreshApp() { location.reload(); }
export const BUILD_LABEL=new Date(Number(__BUILD_ID__)).toLocaleString('en-US',{timeZone:'Asia/Tokyo',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})+' JST';
export function startAutoUpdate() {
  // Never interrupt a traveler reading directions with an automatic reload.
  if(!import.meta.env.PROD||!('serviceWorker' in navigator))return;
  navigator.serviceWorker.register('./sw.js').then(reg=>{
    const signal=()=>{if(reg.waiting&&reg.active)window.dispatchEvent(new CustomEvent('travel-update',{detail:reg}));};
    signal();
    reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed')signal();});});
    navigator.serviceWorker.ready.then(()=>window.dispatchEvent(new Event('travel-offline-ready')));
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')reg.update().catch(()=>{});});
  }).catch(()=>window.dispatchEvent(new Event('travel-offline-failed')));
}
