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
