import { useState } from "react";
import { sections, maps } from "./restaurantGuideData.js";
import "./restaurant-guide.css";

const DAYS = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
const mealOrder = s => /breakfast/i.test(s.meal) ? 0 : /Asakusa/i.test(s.meal) ? 1 : /lunch/i.test(s.meal) ? 2 : /dessert/i.test(s.meal) ? 3 : 4;
function travelLabel(value) {
  if (value === "S") return "Free shuttle · ~3 min ride + wait";
  return `${value.startsWith("W") ? "Walk" : "Train + walk"} · ~${value.slice(1)} min`;
}
function VenuePhoto({ option, onOpen }) {
  const [failed, setFailed] = useState(false);
  return <div className="rg-photo">
    {option.photo && !failed ? <>
      <button className="rg-photo-button" onClick={() => onOpen(option.photo)} aria-label={`Enlarge photo of ${option.name}`}>
        <img src={option.photo.src} alt={option.photo.caption} loading="lazy" onError={() => setFailed(true)} />
      </button>
      <a className="rg-credit" href={option.photo.source} target="_blank" rel="noreferrer">{option.photo.caption} ↗</a>
    </> : <div className="rg-gallery"><strong>Venue photo not available inline</strong><small>No stock or generated substitute.</small><a href={maps(option.name)} target="_blank" rel="noreferrer">View this restaurant's photos ↗</a></div>}
  </div>;
}
export default function RestaurantGuide() {
  const raw = Number(new URLSearchParams(location.search).get("meal") ?? 4);
  const initial = sections.find(s => s.id === (raw === 6 ? 10 : raw)) || sections.find(s => s.id === 4);
  const [active, setActive] = useState(initial.id);
  const [lessSoup, setLessSoup] = useState(false);
  const [nearby, setNearby] = useState(false);
  const [photo, setPhoto] = useState(null);
  const section = sections.find(s => s.id === active);
  const meals = sections.filter(s => s.day === section.day).sort((a,b) => mealOrder(a)-mealOrder(b));
  const visible = section.options.filter(o => (!lessSoup || o.style !== "Broth / stew-centered") && (!nearby || !o.detour))
    .slice().sort((a,b) => Number(Boolean(b.selected))-Number(Boolean(a.selected)) || Number(Boolean(b.recommended))-Number(Boolean(a.recommended)) || Number(Boolean(a.detour))-Number(Boolean(b.detour)));
  function choose(id) {
    setActive(id);
    const url = new URL(location.href);
    url.searchParams.set("meal", id);
    history.replaceState(null, "", url);
  }
  return <div className="rg">
    <header className="rg-header"><div className="rg-wrap">
      <a className="rg-back" href="./">← Back to itinerary</a>
      <p className="rg-eyebrow">RESTAURANT COMPARISONS · OCT 23–29</p>
      <h1>A table for two.</h1>
      <p className="rg-intro">Compare the food, setting, cost and journey. Choose here together; keep the schedule in your itinerary.</p>
    </div></header>
    <main className="rg-wrap">
      <nav className="rg-days" aria-label="Choose a day">{DAYS.map(day => <button key={day} aria-pressed={section.day === day} onClick={() => choose(sections.filter(s => s.day === day).sort((a,b) => mealOrder(a)-mealOrder(b))[0].id)}>{day}</button>)}</nav>
      <div className="rg-controls">
        <label>Meal to compare<select value={active} onChange={e => choose(Number(e.target.value))}>{meals.map(s => <option key={s.id} value={s.id}>{s.meal}{s.options.some(o => o.selected) ? " · choice recorded" : ""}</option>)}</select></label>
        <div className="rg-filters">
          <label className="rg-toggle"><input type="checkbox" checked={lessSoup} onChange={e => setLessSoup(e.target.checked)} />Hide broth / stew-centered</label>
          <label className="rg-toggle"><input type="checkbox" checked={nearby} onChange={e => setNearby(e.target.checked)} />Hide detours / timing compromises</label>
        </div>
      </div>
      <section className="rg-context">
        <div><p className="rg-eyebrow">TRAVEL COMPARED FROM</p><h2>{section.originLabel}</h2><p>{section.advice}</p></div>
        <aside><strong>Planning estimates, not live journeys</strong><p>Times include walking where stated, but exclude queues. Exact last stops and October availability are not confirmed. Prices are per person; allowances and published figures are distinguished.</p></aside>
      </section>
      <div className="rg-results"><h2>{section.label}</h2><span>{visible.length} of {section.options.length} options · no new selection made</span></div>
      <div className="rg-grid">{visible.map(option => <article key={`${active}-${option.name}`} className={`rg-card ${option.recommended || option.selected ? "rg-recommended" : ""}`}>
        <VenuePhoto option={option} onOpen={setPhoto} />
        <div className="rg-card-body">
          <div className="rg-tags">
            {option.selected ? <span className="rg-pick">{option.selectedStatus}</span> : option.recommended ? <span className="rg-pick">Recommended · not selected</span> : null}
            {option.detour && <span className="rg-warning">Detour / timing compromise</span>}
          </div>
          <h3>{option.name}</h3>
          <p className="rg-foodstyle">{option.style}</p>
          <p className="rg-description">{option.description}</p>
          <dl className="rg-facts">
            <div><dt>From the anchor above</dt><dd>{travelLabel(option.travel)}</dd></div>
            <div><dt>Per-person food budget</dt><dd>{option.budget}</dd><small>{option.priceNote}</small></div>
            <div><dt>Reservations</dt><dd>{option.bookingStatus}</dd></div>
          </dl>
          <div className="rg-verdict"><p><strong>Why consider it:</strong> {option.reason}</p><p><strong>Trade-off:</strong> {option.tradeoff}</p><p><strong>Variety check:</strong> {option.variety}</p></div>
          <div className="rg-links">
            <a href={maps(option.name)} target="_blank" rel="noreferrer">Place & photos ↗</a>
            {option.travel !== "S" && <a href={maps(option.name, section.origin, option.travel.startsWith("T") ? "transit" : "walking")} target="_blank" rel="noreferrer">From previous stop ↗</a>}
            <a href={maps(option.name, undefined)} target="_blank" rel="noreferrer" className="rg-hidden-link" aria-hidden="true" tabIndex={-1}>Map</a>
          </div>
          <details><summary>Booking details & sources</summary><p>{option.booking}</p><p>{option.sources.map((s,i) => <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></span>)}</p>
            <p className="rg-small">{option.verification}. Reviewed {option.checked}.</p>
          </details>
        </div>
      </article>)}</div>
      {!visible.length && <p>No options match both filters. Turn off a filter to see the full comparison.</p>}
      <footer className="rg-notes"><p>Selection guide only. Confirmed choices are preserved; recommendations are not bookings. Breakfasts follow your Western-style preference; Tuesday is a Tsukiji Outer Market breakfast. Hotel breakfast is chosen for Saturday only.</p><p className="rg-small">Official photos are examples, not guaranteed October dishes. Some venues do not provide a usable inline photo. External photos and maps require internet. Travel ranges are estimates; special closures, menus, fees and availability need a final check before reserving. Other than explicitly published prices, budgets are allowances.</p></footer>
    </main>
    {photo && <div className="rg-lightbox" role="dialog" aria-modal="true" aria-label="Restaurant photo" onClick={() => setPhoto(null)} onKeyDown={e => {if(e.key === "Escape") setPhoto(null);}}><div onClick={e => e.stopPropagation()}><button autoFocus onClick={() => setPhoto(null)}>Close photo ×</button><img src={photo.src} alt={photo.caption}/><p><a href={photo.source} target="_blank" rel="noreferrer">{photo.caption} ↗</a></p></div></div>}
  </div>;
}
