import { useEffect, useState } from "react";
import { sections, maps } from "./restaurantGuideData.js";
import "./restaurant-guide.css";

const DAYS = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
const DATES = { Fri: "Oct 23", Sat: "Oct 24", Sun: "Oct 25", Mon: "Oct 26", Tue: "Oct 27", Wed: "Oct 28", Thu: "Oct 29" };
// When each meal happens, from the Trip tab. Keyed by section id.
const WHEN = {
  0: "~7:00pm · near the hotel after check-in",
  16: "7:00am · at the hotel before Asakusa",
  2: "~9:30am · Asakusa, on the way out of the temple",
  3: "Noon · Solamachi, after the aquarium",
  4: "5:45pm · direct train from the go-karts",
  17: "6:15am · grab and go before teamLab",
  15: "11:15am · Akihabara, before the owl café",
  11: "5:00pm · walk from the hotel after changing",
  18: "6:30am · grab and go before DisneySea",
  14: "When hungry · inside DisneySea",
  8: "5:00pm · inside DisneySea, before leaving around 7:30",
  19: "7:30am · graze two or three stops at the market",
  9: "12:30pm · on the Harajuku / Omotesando shopping route",
  10: "~11:00am · during the Harajuku shopping window",
  5: "6:00pm · Shibuya, right after Shibuya Sky",
  20: "6:15am · eaten on the 7:37 Romancecar",
  12: "12:30pm · Hakone Yuryo, after the 10:00 bath",
  7: "5:30pm · Shinjuku, off the 3:13 Romancecar",
  1: "9:00am · Ginza, before shopping",
  13: "11:00am · Ginza Mitsukoshi, before collecting bags",
};
const mealOrder = s => /breakfast/i.test(s.meal) ? 0 : /Asakusa/i.test(s.meal) ? 1 : /dessert/i.test(s.meal) ? 2 : /lunch/i.test(s.meal) ? 3 : 4;
const isDecided = s => Boolean(s.decided || s.options.some(o => o.selected));
function travelLabel(value) {
  if (value === "S") return "Free shuttle · ~3 min ride + wait";
  return `${value.startsWith("W") ? "Walk" : "Train + walk"} · ~${value.slice(1)} min`;
}
function bookingKind(status = "") {
  if (/^walk-in|no reservations|^queue|treat|buy ahead|no booking|counter service|ask hotel/i.test(status)) return { label: /buy ahead/i.test(status) ? "Buy ahead" : "Walk-in", cls: "rg-ok" };
  if (/reserv|call to|book|priority seating|registration|course for two|coordinate/i.test(status)) return { label: "Reservation needed", cls: "rg-res" };
  return { label: "Confirm policy", cls: "rg-unsure" };
}
function decidedSummary(s) {
  if (s.decided) return { text: s.decided, tag: { label: "No booking", cls: "rg-ok" } };
  const sel = s.options.filter(o => o.selected);
  const needs = sel.some(o => bookingKind(o.bookingStatus).cls === "rg-res");
  return { text: sel.map(o => o.name).join(" + "), tag: needs ? { label: "Reservation needed", cls: "rg-res" } : { label: "Walk-in", cls: "rg-ok" } };
}
function VenuePhoto({ option, onOpen }) {
  const [failed, setFailed] = useState(false);
  if (option.photo && !failed) return <div className="rg-photo">
    <button className="rg-photo-button" onClick={() => onOpen(option.photo)} aria-label={`Enlarge photo of ${option.name}`}>
      <img src={option.photo.src} alt={option.photo.caption} loading="lazy" onError={() => setFailed(true)} />
    </button>
    <a className="rg-credit" href={option.photo.source} target="_blank" rel="noreferrer">{option.photo.caption} ↗</a>
  </div>;
  return <div className="rg-photo"><a className="rg-gallery" href={option.tabelog || maps(option.name)} target="_blank" rel="noreferrer">
    <span aria-hidden="true">📷</span>
    <strong>{option.tabelog ? "See photos on Tabelog ↗" : "See photos on Google Maps ↗"}</strong>
    <small>{option.tabelog ? "Food, interior and menu photos from diners" : "No Tabelog page found, so Google Maps photos instead"}</small>
  </a></div>;
}
export default function RestaurantGuide() {
  const params = new URLSearchParams(location.search);
  const mealSection = params.has("meal") ? sections.find(s => s.id === Number(params.get("meal"))) : null;
  const firstOpenDay = DAYS.find(d => sections.some(s => s.day === d && !isDecided(s))) || "Fri";
  const [day, setDay] = useState(mealSection?.day || (DAYS.includes(params.get("day")) ? params.get("day") : firstOpenDay));
  const [showDecided, setShowDecided] = useState(Boolean(mealSection && isDecided(mealSection)));
  const [lessSoup, setLessSoup] = useState(false);
  const [nearby, setNearby] = useState(false);
  const [photo, setPhoto] = useState(null);
  const meals = sections.filter(s => s.day === day).sort((a, b) => mealOrder(a) - mealOrder(b));
  const decided = meals.filter(isDecided);
  const open = meals.filter(s => !isDecided(s));
  const shown = showDecided ? meals : open;
  const openCount = d => sections.filter(s => s.day === d && !isDecided(s)).length;
  const totalOpen = sections.filter(s => !isDecided(s)).length;
  useEffect(() => { if (!mealSection) return; const id = setTimeout(() => document.getElementById(`meal-${mealSection.id}`)?.scrollIntoView({ block: "start" }), 80); return () => clearTimeout(id); }, []);
  function choose(d) {
    setDay(d);
    const url = new URL(location.href);
    url.searchParams.set("day", d);
    url.searchParams.delete("meal");
    history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });
  }
  return <div className="rg">
    <header className="rg-header"><div className="rg-wrap">
      <a className="rg-back" href="./">← Back to itinerary</a>
      <p className="rg-eyebrow">MEALS STILL TO DECIDE · {totalOpen} LEFT</p>
      <h1>A table for two.</h1>
      <p className="rg-intro">Only the meals that still need a decision are shown, with photos via Tabelog. Send your picks in chat, for example “Sun lunch: Jugoya”, and they move to the decided list.</p>
    </div></header>
    <main className="rg-wrap">
      <nav className="rg-days" aria-label="Choose a day">{DAYS.map(d => { const n = openCount(d); return <button key={d} aria-pressed={day === d} onClick={() => choose(d)}><span>{d}</span><small>{DATES[d]}</small><b className={n ? "rg-open" : "rg-done"}>{n ? `${n} to decide` : "done"}</b></button>; })}</nav>
      {decided.length > 0 && <section className="rg-decided" aria-label="Decided meals">
        <p className="rg-eyebrow">DECIDED · {day.toUpperCase()}</p>
        <ul>{decided.map(s => { const d = decidedSummary(s); return <li key={s.id}><span className="rg-meal-name">{s.meal}</span><span>{d.text}</span><span className={`rg-tag ${d.tag.cls}`}>{d.tag.label}</span></li>; })}</ul>
        <label className="rg-toggle rg-small"><input type="checkbox" checked={showDecided} onChange={e => setShowDecided(e.target.checked)} />Show the options for decided meals too</label>
      </section>}
      {open.length > 0 && <div className="rg-controls">
        <p className="rg-open-note"><strong>{open.length === 1 ? "1 meal to decide" : `${open.length} meals to decide`}</strong> on {day}: {open.map(s => s.meal).join(", ")}.</p>
        <div className="rg-filters">
          <label className="rg-toggle"><input type="checkbox" checked={lessSoup} onChange={e => setLessSoup(e.target.checked)} />Hide broth / stew-centered</label>
          <label className="rg-toggle"><input type="checkbox" checked={nearby} onChange={e => setNearby(e.target.checked)} />Hide detours / timing compromises</label>
        </div>
      </div>}
      {open.length === 0 && !showDecided && <p className="rg-nothing">Nothing left to decide on {day}. Pick another day above.</p>}
      {shown.map(section => {
        const visible = section.options.filter(o => (!lessSoup || o.style !== "Broth / stew-centered") && (!nearby || !o.detour))
          .slice().sort((a, b) => Number(Boolean(b.selected)) - Number(Boolean(a.selected)) || Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)) || Number(Boolean(a.detour)) - Number(Boolean(b.detour)));
        return <section key={section.id} id={`meal-${section.id}`} className="rg-meal">
          <div className="rg-results">
            <div><p className="rg-eyebrow">{day.toUpperCase()} · {section.meal.toUpperCase()} · {WHEN[section.id] || section.originLabel}{isDecided(section) ? " · DECIDED" : ""}</p><h2>{section.theme}</h2><p className="rg-advice">{section.advice}</p></div>
            <span>{visible.length} of {section.options.length} options · travel measured from {section.originLabel}</span>
          </div>
          <div className="rg-grid">{visible.map(option => { const bk = bookingKind(option.bookingStatus); return <article key={option.name} className={`rg-card ${option.recommended || option.selected ? "rg-recommended" : ""}`}>
            <VenuePhoto option={option} onOpen={setPhoto} />
            <div className="rg-card-body">
              <div className="rg-tags">
                <span className={bk.cls}>{bk.label}</span>
                {option.selected ? <span className="rg-pick">{option.selectedStatus}</span> : option.recommended ? <span className="rg-pick">Suggested</span> : null}
                {option.experience && <span className="rg-exp">✨ {option.experience}</span>}
                {option.detour && <span className="rg-warning">Detour / timing compromise</span>}
              </div>
              <h3>{option.name}</h3>
              <p className="rg-foodstyle">{option.style}</p>
              <p className="rg-description">{option.description}</p>
              <dl className="rg-facts">
                <div><dt>Per-person budget</dt><dd>{option.budget}</dd><small>{option.priceNote}</small></div>
                <div><dt>Getting there</dt><dd>{travelLabel(option.travel)}</dd><small>from {section.originLabel}</small></div>
                <div><dt>Booking</dt><dd>{option.bookingStatus}</dd></div>
              </dl>
              <div className="rg-verdict"><p><strong>Why consider it:</strong> {option.reason}</p><p><strong>Trade-off:</strong> {option.tradeoff}</p><p><strong>Variety check:</strong> {option.variety}</p></div>
              <div className="rg-links">
                {option.tabelog ? <a className="rg-tabelog" href={option.tabelog} target="_blank" rel="noreferrer">Tabelog: photos, menu, reviews ↗</a> : <a href={maps(option.name)} target="_blank" rel="noreferrer">Google Maps photos ↗</a>}
                {option.sources?.[0] && <a href={option.sources[0].url} target="_blank" rel="noreferrer">Official site ↗</a>}
                {option.travel !== "S" && <a href={maps(option.name, section.origin, option.travel.startsWith("T") ? "transit" : "walking")} target="_blank" rel="noreferrer">Directions ↗</a>}
              </div>
              <details><summary>Booking details & sources</summary><p>{option.booking}</p><p>{option.sources.map((s, i) => <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></span>)}</p>
                <p className="rg-small">{option.verification}. Reviewed {option.checked}.</p>
              </details>
            </div>
          </article>; })}</div>
          {!visible.length && <p>No options match both filters. Turn off a filter to see the full comparison.</p>}
        </section>;
      })}
      <footer className="rg-notes"><p>Amber means we need a reservation; green means walk in or buy ahead. Decided meals are listed at the top of each day and marked in the Trip tab; turn on “show the options” to reconsider one.</p><p className="rg-small">Tabelog photos are diners' photos and may show seasonal dishes. External photos and maps require internet. Travel ranges are estimates; special closures, menus, fees and availability need a final check before reserving. Other than explicitly published prices, budgets are allowances.</p></footer>
    </main>
    {photo && <div className="rg-lightbox" role="dialog" aria-modal="true" aria-label="Restaurant photo" onClick={() => setPhoto(null)} onKeyDown={e => { if (e.key === "Escape") setPhoto(null); }}><div onClick={e => e.stopPropagation()}><button autoFocus onClick={() => setPhoto(null)}>Close photo ×</button><img src={photo.src} alt={photo.caption} /><p><a href={photo.source} target="_blank" rel="noreferrer">{photo.caption} ↗</a></p></div></div>}
  </div>;
}
