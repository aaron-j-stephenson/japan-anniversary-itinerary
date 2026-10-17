// A standalone document: never inherit app gradients, fixed navigation or filters.
export const documentStyles = `
@page { size: A5; margin: 13mm 12mm 15mm; }
* { box-sizing: border-box; }
html { color-scheme: light; background: #fff; }
body { margin: 0 auto; padding: 26px 22px; max-width: 660px; background: #fff; color: #202020; font: 16px/1.55 Arial, sans-serif; }
h1,h2,h3 { line-height: 1.25; }
h1 { font: 32px/1.15 Georgia,serif; margin: 0 0 16px; }
h2 { font: 26px/1.2 Georgia,serif; border-bottom: 2px solid #88565d; padding-bottom: 10px; margin: 30px 0 18px; }
h3 { font-size: 18px; margin: 0 0 12px; }
p { margin: 8px 0 12px; }
article { border-top: 1px solid #ccc; padding-top: 16px; margin-top: 20px; }
article h3 { break-after: avoid; }
article .stop-body h3 { font-size: 14px; margin: 16px 0 6px; }
ol { padding-left: 22px; margin: 6px 0 12px; }
li { margin: 6px 0; padding-left: 3px; }
a { color: #254f70; overflow-wrap: anywhere; }
.important { border-left: 3px solid #88565d; padding: 8px 12px; }
.important strong { display: block; margin-bottom: 5px; }
.action-row { display: flex; flex-wrap: wrap; gap: 10px 16px; font-size: 13px; margin: 14px 0; }
.document-tools { padding: 14px; background: #f5eee9; margin-bottom: 24px; font-size: 14px; }
.document-tools button { font: inherit; padding: 10px 16px; background: white; border: 1px solid #88565d; border-radius: 6px; }
.document-index { margin-top: 24px; }
.document-index h2 { margin-top: 0; }
.document-index a { display: block; padding: 5px 0; font-size: 14px; text-decoration: none; }
@media print {
  html,body { background: #fff !important; color: #202020 !important; }
  body { padding: 0; max-width: none; font-size: 11pt; line-height: 1.42; }
  .document-tools { display: none; }
  h1 { font-size: 25pt; } h2 { font-size: 19pt; margin-top: 0; } h3 { font-size: 12pt; }
  body>section { break-before: page; }
  p,li { orphans: 3; widows: 3; }
  h1,h2,h3 { break-after: avoid; }
  article { padding-top: 10pt; margin-top: 12pt; }
  article .stop-body h3 { font-size: 10pt; margin-top: 10pt; }
  .action-row { display: none; }
  article>p { break-after: avoid; }
  .important { break-inside: avoid; }
}
`;

export function offlineDocument(content) {
  const copy=document.createElement("div"); copy.innerHTML=content;
  const days=[...copy.children].filter(el=>el.tagName==="SECTION");
  const index=document.createElement("nav"); index.className="document-index";
  const heading=document.createElement("h2"); heading.textContent="Our days in Japan"; index.append(heading);
  days.forEach((day,i)=>{day.id=`day-${i}`;const link=document.createElement("a");link.href=`#day-${i}`;link.textContent=day.querySelector("h2").textContent;index.append(link);});
  if(days.length)copy.insertBefore(index,days[0]);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Aaron and Ashley - Japan travel guide</title><style>${documentStyles}</style></head><body><aside class="document-tools"><button onclick="window.print()">Print / save PDF</button><p>Phone-friendly A5 layout. In print options, turn off headers and footers if available. Maps and website links need internet; all itinerary text is included.</p></aside>${copy.innerHTML}</body></html>`;
}
