import { useEffect, useState } from 'react';

export function useSavedState(key, fallback) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`japan-v1-${key}`)) ?? fallback; }
    catch { return fallback; }
  });
  useEffect(() => {
    try { localStorage.setItem(`japan-v1-${key}`, JSON.stringify(value)); }
    catch { window.dispatchEvent(new Event('travel-storage-error')); }
  }, [key, value]);
  return [value, setValue];
}

export function japanDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Tokyo', year:'numeric', month:'2-digit', day:'2-digit'}).format(now);
}
export function dayForDate(now = new Date()) {
  const date = japanDate(now);
  return date >= '2026-10-22' && date <= '2026-10-29' ? Number(date.slice(-2))-22 : null;
}
export function directions(destination, origin, mode='transit') {
  const p = new URLSearchParams({api:'1',destination,travelmode:mode});
  if (origin) p.set('origin',origin);
  return `https://www.google.com/maps/dir/?${p}`;
}

// Reload into the newest deploy whenever the app is opened or brought back to
// the foreground. Home-screen web apps on iPhone resume the old page from memory
// and have no refresh button, so without this they keep showing stale bookings.
export function startAutoUpdate() {
  if (!import.meta.env.PROD) return;
  let busy = false;
  const check = async () => {
    if (busy || document.visibilityState !== 'visible') return;
    busy = true;
    try {
      const res = await fetch(`./version.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) return;
      const { build } = await res.json();
      if (!build || build === __BUILD_ID__) return;
      try {
        if (sessionStorage.getItem('japan-reloaded-for') === build) return; // one try per deploy, never a loop
        sessionStorage.setItem('japan-reloaded-for', build);
      } catch {}
      refreshApp(build);
    } catch {
      // offline or blocked: keep showing what we have
    } finally {
      busy = false;
    }
  };
  check();
  document.addEventListener('visibilitychange', check);
  window.addEventListener('pageshow', check);
  setInterval(check, 5 * 60 * 1000);
}

// A new query string makes GitHub Pages' cache hand back the latest page.
export function refreshApp(build = String(Date.now())) {
  const url = new URL(location.href);
  url.searchParams.set('v', build);
  location.replace(url);
}

export const BUILD_LABEL = new Date(Number(__BUILD_ID__)).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
