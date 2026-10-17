import { useState } from "react";
import { useSavedState, refreshApp, BUILD_LABEL } from "./travelState.js";

import { DAYS, DAY_TRANSIT } from './itineraryData.js';

const BUDGET_CATEGORIES=[
  {
    "id": "points",
    "icon": "✨",
    "title": "Covered by Points",
    "accent": "#059669",
    "totalLabel": "~$5,000–8,000 VALUE",
    "totalColor": "#059669",
    "items": [
      {
        "name": "Virgin Atlantic → Delta flights (both, round trip)",
        "free": true,
        "freeLabel": "220k pts",
        "detail": "Transfer 220,000 Chase UR → Virgin Atlantic Flying Club using the 30% transfer bonus (220k × 1.3 = 286k Virgin Points — covers 285k needed). Book Delta flights through Virgin Atlantic's award portal. Delta A350-900 on the long haul — one of the best economy aircraft flying."
      },
      {
        "name": "Checked bags — 1 per person, international legs",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Delta economy international includes 1 checked bag per person on the long-haul legs. No separate bag fee. 2nd bag would be $100/person if needed."
      },
      {
        "name": "Meals on international flights",
        "free": true,
        "freeLabel": "Included",
        "detail": "Full meal service on Delta international economy flights. Served on both the outbound (DTW→HND) and return (HND→MSP) long-haul legs."
      },
      {
        "name": "Hyatt Centric Ginza — 6 nights — BOOKED",
        "free": true,
        "freeLabel": "Points",
        "detail": "Booked with World of Hyatt points, Oct 23–29 (check-out noon Thursday). Service charge, tax and the ¥200/night accommodation tax are covered on award nights; incidentals are not."
      },
      {
        "name": "Hotel gym access — all week",
        "free": true,
        "freeLabel": "Included",
        "detail": "Fitness center included in hotel stay. Confirm hours at check-in to plan morning workout sessions."
      }
    ]
  },
  {
    "id": "pretrip",
    "icon": "📋",
    "title": "Pre-Trip & Admin",
    "accent": "#6366f1",
    "totalLabel": null,
    "items": [
      {
        "name": "Award ticket taxes & fees — PAID ✅",
        "free": true,
        "freeLabel": "$110.86 paid",
        "detail": "$110.86 already paid at booking — taxes and fees for both passengers round trip. No further flight fees beyond baggage."
      },
      {
        "name": "Checked bag — 1 per person included (23kg/50lbs)",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Your Virgin Atlantic booking screen confirmed: 1 x 23kg checked bag included per person for the international itinerary. The domestic connection legs (TPA→DTW and MSP→TPA) are covered because they're part of an international ticket."
      },
      {
        "name": "Carry-on — 1 per person included (10kg max)",
        "free": true,
        "freeLabel": "FREE",
        "detail": "1 x 10kg hand baggage included per person. Max dimensions 56 x 36 x 23cm. Note: 10kg is stricter than typical US domestic carry-on rules — pack accordingly."
      },
      {
        "name": "2nd checked bag — if needed",
        "cost": 0,
        "optional": true,
        "optionalNote": "$100/person if needed",
        "detail": "A 2nd 23kg checked bag costs $100 per person if you need it. For a week in Tokyo, one bag each should be plenty."
      },
      {
        "name": "Ubigi Japan Unlimited eSIM, 8 days × 2 people",
        "cost": 43,
        "range": [
          43,
          50
        ],
        "detail": "$25 per phone list price (checked Oct 11). With Ubigi’s codes: $22.50 for the first phone (WELCOME10) and $20 for the second (your referral code, 20% off), so about $42.50 total. 5 GB a day at full speed, then 2 Mbps. Docomo + KDDI. The 8 days start when it first connects in Japan."
      },
      {
        "name": "International Driving Permits (AAA × 2 drivers) — DONE",
        "cost": 40,
        "range": [
          40,
          40
        ],
        "detail": "$20 per permit, $40 for both drivers, plus any passport photos."
      },
      {
        "name": "Travel insurance — both passengers",
        "cost": 200,
        "range": [
          150,
          300
        ],
        "optional": true,
        "detail": "Check your Chase Sapphire card first — many include trip cancellation and travel medical automatically. Buy separately only if your card doesn't cover it."
      }
    ]
  },
  {
    "id": "airport_tampa",
    "icon": "🛫",
    "title": "Tampa Airport",
    "accent": "#7c3aed",
    "totalLabel": null,
    "items": [
      {
        "name": "Uber to TPA — Thu Oct 22, 4:00am — BOOKED",
        "cost": 15,
        "range": [
          15,
          20
        ],
        "detail": "UberX reserved for a 4:00am pickup, quoted $14.95. You reach TPA about 4:10 for the 6:00am flight."
      },
      {
        "name": "Bag check at TPA and DTW hub",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Delta economy international includes 1 checked bag per person. No fee at TPA or the Detroit connection."
      },
      {
        "name": "TSA PreCheck (if you don't have it)",
        "cost": 0,
        "optional": true,
        "optionalNote": "$78/person if needed",
        "detail": "5-year membership at tsa.gov. Worth it for future travel too."
      },
      {
        "name": "Uber home from TPA (Thu Oct 29, ~11:30pm)",
        "cost": 20,
        "range": [
          15,
          35
        ],
        "detail": "You land at 11:10pm. Book it in Uber Reserve before you leave; the outbound ride was quoted $14.95."
      }
    ]
  },
  {
    "id": "transport_japan",
    "icon": "🚆",
    "title": "Ground Transport — Japan",
    "accent": "#0891b2",
    "totalLabel": null,
    "items": [
      {
        "name": "Suica / local trains & buses — all week (× 2)",
        "cost": 55,
        "range": [
          55,
          85
        ],
        "detail": "This is the one shared local-transit allowance: load about ¥6,000 each in Apple Wallet, then top up only if needed. It covers the DisneySea train and Resort Line and nearly all Tokyo subway/JR rides. The two airport train rides are listed separately. Do not add the individual Tokyo train fares elsewhere—those rides are paid from this balance, not on top of it."
      },
      {
        "name": "Airport train, both ways (× 2)",
        "cost": 15,
        "range": [
          15,
          15
        ],
        "detail": "Keikyu/Toei Asakusa Line, no changes: Haneda T3 ⇄ Higashi-ginza, ¥547 each way per person by Suica. ¥2,188 for both of you both ways, about $15 at ¥150/$1."
      },
      {
        "name": "Hakone Romancecar round trip (× 2) — BOOKED",
        "cost": 65,
        "range": [
          65,
          65
        ],
        "detail": "Paid: ¥4,600 for reserved seats both ways. Plus the base fare on Suica, about ¥1,270 each per ride (¥5,080 for four rides). About ¥9,680 total, $65 at ¥150/$1."
      }
    ]
  },
  {
    "id": "act_tokyo",
    "icon": "🏙️",
    "title": "Activities — All Days",
    "accent": "#3730a3",
    "totalLabel": null,
    "items": [
      {
        "name": "Tsukiji Outer Market — entry",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Free to enter and walk. Pay only for what you eat (in food budget)."
      },
      {
        "name": "Senso-ji Temple, Asakusa — entry",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Free to enter grounds, gate, pagoda, and main hall."
      },
      {
        "name": "Sat: Sumida Aquarium (× 2) — BOOKED",
        "cost": 36,
        "range": [
          32,
          42
        ],
        "detail": "Paid: ¥5,400 for two tickets at ¥2,700 each, about $36 at ¥150/$1."
      },
      {
        "name": "teamLab Planets, Toyosu (× 2) — BOOKED",
        "cost": 72,
        "range": [
          64,
          78
        ],
        "booked": true,
        "detail": "Booked for 8:00am on Sun Oct 25. Keep this planning amount until you add the exact receipt total; enter barefoot and allow 1.5–2 hours."
      },
      {
        "name": "Sat: JAPANKART 60-minute go-karts (× 2) — BOOKED",
        "cost": 133,
        "range": [
          133,
          133
        ],
        "booked": true,
        "detail": "Paid: ¥20,000 for the 60-minute tour for two, about $133 at ¥150/$1. Includes guide, kart, insurance, fuel, costumes and photos."
      },
      {
        "name": "JAPANKART costumes + guide photos (included)",
        "cost": 0,
        "range": [
          0,
          0
        ],
        "free": true,
        "freeLabel": "INCLUDED",
        "detail": "Included in the selected JAPANKART tour; no separate costume or guide-photo charge."
      },
      {
        "name": "Sun: Akiba Fukurou owl café (× 2)",
        "cost": 51,
        "range": [
          51,
          51
        ],
        "detail": "Published ¥3,800 each, tax included (¥7,600 for two); the site advertises 10% off online. Book the 1:00pm Sunday session on the official site now."
      },
      {
        "name": "Shibuya Sky observation deck (× 2) — BOOKED",
        "cost": 45,
        "range": [
          45,
          45
        ],
        "detail": "Paid: ¥6,800 for two adult tickets (¥3,400 each, 3pm-or-later entry), about $45 at ¥150/$1."
      },
      {
        "name": "Tokyo DisneySea — 1-Day Passport (× 2) — BOOKED",
        "cost": 130,
        "range": [
          110,
          150
        ],
        "booked": true,
        "detail": "Tickets purchased for Mon Oct 26. Keep this planning amount until you add the exact receipt total; add both tickets to the Tokyo Disney Resort app before arriving."
      },
      {
        "name": "DisneySea Premier Access — optional",
        "cost": 53,
        "range": [
          40,
          80
        ],
        "optional": true,
        "detail": "Paid skip-the-line passes are ¥1,500–2,000 per person per ride. Two rides for two people (Fantasy Springs plus Soaring) is about ¥6,000–8,000; three rides about ¥12,000. Optional."
      },
      {
        "name": "Hakone Yuryo private onsen — 120 min — BOOKED",
        "cost": 70,
        "range": [
          68,
          82
        ],
        "detail": "Booked for Wed Oct 28, 10:00am: ¥10,400 for the room, paid on site. Towels and amenities included; optional yukata ¥100 each."
      },
      {
        "name": "Hakone Yuryo full-body massages — 60 min (× 2)",
        "cost": 105,
        "range": [
          100,
          122
        ],
        "detail": "Verified Hogushian Yururuka rate: ¥7,900/person, ¥15,800 total. Request two therapists at the same time when reserving."
      },
      {
        "name": "Hotel gym access — all week",
        "free": true,
        "freeLabel": "Included",
        "detail": "Fitness center included in the hotel stay. Confirm hours at check-in."
      }
    ]
  },
  {
    "id": "food_all",
    "icon": "🍣",
    "title": "Food — for two, at ¥150 per $1",
    "accent": "#3730a3",
    "totalLabel": null,
    "items": [
      {
        "name": "Fri: Kushiyaki Bistro Fukumimi yakitori (×2)",
        "cost": 60,
        "range": [
          55,
          67
        ],
        "detail": "Skewers à la carte or the ¥3,850-per-person set, plus a drink each: about ¥8,000–10,000 for two."
      },
      {
        "name": "Sat: Furutoshi hotel breakfast (×2)",
        "cost": 37.33,
        "range": [
          37.33,
          40
        ],
        "detail": "About ¥2,800 each (¥5,600 for two), walk-in."
      },
      {
        "name": "Sat: Nakamise street snacks (×2)",
        "cost": 11,
        "range": [
          7,
          16
        ],
        "detail": "Two or three snacks each at ¥200–600 apiece (ningyo-yaki, fried manju, senbei, melon-pan)."
      },
      {
        "name": "Sat: Hokkaido Milk Bar (×2)",
        "cost": 12,
        "range": [
          9,
          15
        ],
        "detail": "Soft serve, milk pudding (¥650) or the milk tasting flight (¥880); about ¥700–1,100 each."
      },
      {
        "name": "Sat: Rokurinsha tsukemen (×2)",
        "cost": 23,
        "range": [
          20,
          27
        ],
        "detail": "Published bowls ¥1,200–1,500 plus a topping or egg each. Walk-in."
      },
      {
        "name": "Sat: Tenichi tempura dinner (×2)",
        "cost": 60,
        "range": [
          51,
          97
        ],
        "detail": "Published Fuji table set ¥3,850 each (¥7,700 for two); the top of the range is two counter courses at ¥7,260. Drinks extra. Reserve."
      },
      {
        "name": "Sun: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person."
      },
      {
        "name": "Sun: Gyukatsu Ichinisan lunch (×2)",
        "cost": 27,
        "range": [
          22,
          37
        ],
        "detail": "Published sets ¥1,630–2,760 each (¥3,260–5,520 for two), tax included. Walk-in."
      },
      {
        "name": "Sun: Manten Sushi omakase (×2)",
        "cost": 117,
        "range": [
          117,
          161
        ],
        "detail": "Published omakase ¥8,800 each (¥17,600 for two); ¥12,100 each with drinks included. Tax included. Reserve on TableCheck."
      },
      {
        "name": "Mon: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person."
      },
      {
        "name": "Mon: DisneySea lunch + snacks, via the app (×2)",
        "cost": 44,
        "range": [
          31,
          60
        ],
        "detail": "Counter-service sets run ¥1,300–1,800 each; add ¥1,000–2,500 each for popcorn, churros and drinks through the day."
      },
      {
        "name": "Mon: Horizon Bay Restaurant dinner (×2) — BOOKED",
        "cost": 55,
        "range": [
          35,
          70
        ],
        "detail": "Priority Seating booked for 5:20pm; you pay at the restaurant. Set menus run roughly ¥2,500–4,500 each, plus drinks."
      },
      {
        "name": "Tue: Tsukiji market breakfast (×2)",
        "cost": 27,
        "range": [
          20,
          33
        ],
        "detail": "Grazing: tamagoyaki ¥300–600, onigiri ¥500–1,000, coffee ¥400–800, Shouro sando ¥800. About ¥1,500–2,500 each."
      },
      {
        "name": "Tue: Harajuku Gyozaro lunch (×2)",
        "cost": 16,
        "range": [
          13,
          21
        ],
        "detail": "Gyoza plates are about ¥350–400 for six; two plates, rice and a drink each is roughly ¥1,200 per person. Walk-in."
      },
      {
        "name": "Tue: I’m donut? + Marion Crepes (×2)",
        "cost": 15,
        "range": [
          11,
          19
        ],
        "detail": "A doughnut (¥300–500) and a crêpe (¥550–900) each."
      },
      {
        "name": "Tue: Uobei conveyor belt sushi (×2)",
        "cost": 30,
        "range": [
          20,
          40
        ],
        "detail": "Plates from ¥110 (¥132–297 tiers); ¥1,500–3,000 each for a full meal. Walk-in."
      },
      {
        "name": "Wed: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person."
      },
      {
        "name": "Wed: Hachiri irori lunch (×2) — BOOKED",
        "cost": 80,
        "range": [
          80,
          90
        ],
        "detail": "Seasonal course booked at ¥6,000 each (¥12,000 for two), paid on site. Drinks extra."
      },
      {
        "name": "Wed: Ushigoro wagyu yakiniku (×2)",
        "cost": 160,
        "range": [
          130,
          221
        ],
        "detail": "Published courses ¥9,760–16,590 each (¥19,520–33,180 for two) before drinks; a service charge may apply. Reserve."
      },
      {
        "name": "Thu: Hoshino Coffee soufflé pancakes (×2)",
        "cost": 23,
        "range": [
          20,
          27
        ],
        "detail": "Soufflé pancakes about ¥1,000–1,300 plus coffee ¥600 each. Walk-in."
      },
      {
        "name": "Thu: Bincho hitsumabushi lunch (×2)",
        "cost": 73,
        "range": [
          60,
          87
        ],
        "detail": "Hitsumabushi sets are roughly ¥4,500–6,500 each at Ginza Mitsukoshi; confirm the current menu on arrival."
      },
      {
        "name": "All-week snacks + drinks (×2)",
        "cost": 53,
        "range": [
          40,
          73
        ],
        "detail": "Convenience-store drinks, vending machines, airport snacks and small extras across the week."
      }
    ]
  },
  {
    "id": "misc",
    "icon": "💳",
    "title": "Hotel & Miscellaneous",
    "accent": "#475569",
    "totalLabel": null,
    "items": [
      {
        "name": "Hotel incidental hold (credit card)",
        "free": true,
        "freeLabel": "Hold only",
        "detail": "~$100-200 hold placed at check-in. Released at checkout if unused. Not a charge."
      },
      {
        "name": "Hotel incidental spend (optional)",
        "cost": 60,
        "range": [
          0,
          200
        ],
        "optional": true,
        "detail": "Room service or other in-hotel charges. Optional."
      },
      {
        "name": "Yen ATM fees (~5 withdrawals)",
        "cost": 20,
        "range": [
          15,
          28
        ],
        "detail": "Use 7-Eleven bank ATMs — reliably accept foreign cards. ~$3-5 fee per withdrawal."
      },
      {
        "name": "Tips",
        "free": true,
        "freeLabel": "$0",
        "detail": "Tipping is not customary in Japan. Zero expected anywhere — restaurants, hotels, taxis, everywhere."
      }
    ]
  },
  {
    "id": "souvenirs",
    "icon": "🎁",
    "title": "Souvenirs & Shopping (Variable)",
    "accent": "#92400e",
    "totalLabel": "Budget separately",
    "items": [
      {
        "name": "Nakamise-dori, Asakusa",
        "cost": 60,
        "variable": true,
        "detail": "Traditional fans, chopstick sets, ceramic items, Japanese snack boxes, matcha goods."
      },
      {
        "name": "Tokyo Solamachi / Akihabara / Harajuku",
        "cost": 50,
        "variable": true,
        "detail": "Japanese souvenirs and snacks, novelty items, Gundam and character goods, vintage fashion."
      },
      {
        "name": "Haneda Airport duty-free (HND)",
        "cost": 75,
        "variable": true,
        "detail": "Japanese Kit Kat varieties (50+ flavors), Japanese whisky (Nikka, Suntory), premium skincare. Haneda has excellent duty-free."
      }
    ]
  }
];

const THEME={
  travel:{headerBg:"#334155",tabActiveBg:"#475569",tabActiveText:"#ffffff",tabInactiveBg:"#f1f5f9",tabInactiveText:"#475569",badgeBg:"#f1f5f9",badgeText:"#334155",borderColor:"#cbd5e1",timeBg:"#e2e8f0",timeText:"#475569"},
  tokyo:{headerBg:"#3730a3",tabActiveBg:"#4f46e5",tabActiveText:"#ffffff",tabInactiveBg:"#eef2ff",tabInactiveText:"#4338ca",badgeBg:"#eef2ff",badgeText:"#3730a3",borderColor:"#c7d2fe",timeBg:"#e0e7ff",timeText:"#4338ca"},
};

const POINTS_DATA=[
  {label:"💳 Current balance",pts:"444,000",sub:"Chase Ultimate Rewards"},
  {label:"✈️ Transfer to Virgin Atlantic (30% bonus)",pts:"−220,000",sub:"220k × 1.3 = 286,000 VA pts → covers 285k needed",warn:true},
  {label:"🏨 Hyatt Centric Ginza, 6 nights — BOOKED",pts:"Points ✓",sub:"Booked with World of Hyatt points; the exact total is in the Hyatt app. Caption’s points come back about 3 days after it is cancelled.",green:true},
];

const PLAN_DATA=[
  {
    "phase": "✅ Already booked",
    "bg": "#f0fdf4",
    "border": "#bbf7d0",
    "text": "#14532d",
    "items": [
      {
        "id": "p1",
        "text": "Airfare: Oct 22 outbound / Oct 29 return — confirmed",
        "detail": "Delta adjusted the times: Tampa departure now 6:00am Thu Oct 22 (Haneda arrival still 4:15pm Fri). Home: Haneda 5:20pm Thu Oct 29, landing in Tampa at 11:10pm. Your airline confirmations are the source of truth."
      },
      {
        "id": "p4",
        "text": "Hyatt Centric Ginza: Oct 23–29 — BOOKED",
        "detail": "Booked with points (confirmation in your email from Oct 15). Check-in from 3:00pm, check-out by noon. Make sure Caption is cancelled before Oct 21, 10:59am ET."
      },
      {
        "id": "p5",
        "text": "teamLab: Sun Oct 25, 8am — BOOKED",
        "detail": "Leave around 6:55am; aim for 7:45am arrival. Save QR codes offline."
      },
      {
        "id": "p10",
        "text": "DisneySea: Mon Oct 26 — BOOKED",
        "detail": "Add tickets to the app; meals and optional ride add-ons remain separate."
      },
      {
        "id": "b1",
        "text": "Owl café — Sun Oct 25, 1:00pm — BOOKED",
        "detail": "Akiba Fukurou, ¥3,800 each. Arrive by 12:50; the door does not open once a session starts."
      },
      {
        "id": "b7",
        "text": "Manten Sushi — Sun Oct 25, 5:00pm — BOOKED",
        "detail": "90-minute counter omakase, ¥8,800 each. Same-day cancellation is charged the full course price."
      },
      {
        "id": "b4",
        "text": "Hakone Yuryo massages — Wed Oct 28, 1:45pm — BOOKED",
        "detail": "Two 60-minute massages at Yururuka, ¥7,900 each. Nothing was charged because you pay at the spa."
      },
      {
        "id": "b8",
        "text": "Yakiniku Ushigoro — Wed Oct 28, 5:30pm — BOOKED",
        "detail": "Courses ¥9,760–16,590 each plus 5% service. Changes and cancellations by phone only: +81-3-3358-4129."
      },
      {
        "id": "b2",
        "text": "JAPANKART go-karts — Sat Oct 24, 3:30pm — BOOKED",
        "detail": "60-minute tour for two, ¥20,000 paid through Google Pay after their card form kept failing. Be at 2-18-15 Azumabashi by 3:15. Both drivers need original license, IDP and passport, or no driving and no refund."
      },
      {
        "id": "b3",
        "text": "International Driving Permits — both drivers — DONE",
        "detail": "Both in hand. Pack them with your original US licenses and passports for JAPANKART on Saturday."
      },
      {
        "id": "c1",
        "text": "Sumida Aquarium — Sat Oct 24 — BOOKED",
        "detail": "Tickets bought, ¥2,700 each. Non-refundable, but the date can be changed."
      },
      {
        "id": "c3",
        "text": "Hakone Yuryo private bath — Wed Oct 28, 10:00am — BOOKED",
        "detail": "120 minutes, ¥10,400 for the room, paid on site. Arriving 15+ minutes late without calling cancels it."
      },
      {
        "id": "c4",
        "text": "Romancecar both ways — Wed Oct 28 — BOOKED",
        "detail": "Out: Hakone 41, 7:37am Shinjuku, car 6 seats 12C/12D. Back: Hakone 36, 3:13pm Hakone-Yumoto, car 5 seats 5C/5D. ¥2,300 each way for two, paid by credit card (bring that card on Wednesday). Base fare goes on Suica."
      },
      {
        "id": "c6",
        "text": "Shibuya Sky — Tue Oct 27, 3:40pm entry — BOOKED",
        "detail": "2 adult tickets, ¥6,800 paid on Webket. Screenshot the QR code; the email cannot be resent."
      },
      {
        "id": "b12",
        "text": "Uber to TPA — Thu Oct 22, 4:00am pickup — BOOKED",
        "detail": "UberX via Uber Reserve, quoted $14.95. Free cancellation up to 1 hour before."
      },
      {
        "id": "c2",
        "text": "Horizon Bay Restaurant, DisneySea — Mon Oct 26, 5:20pm — BOOKED",
        "detail": "Priority Seating for 2, booked in Ashley's Disney account. Pay at the restaurant. Change or cancel online up to 1 hour before."
      },
      {
        "id": "c5",
        "text": "Hachiri lunch, Hakone Yuryo — Wed Oct 28, 12:30pm — BOOKED",
        "detail": "Seasonal course for two, ¥6,000 each, paid on site. 15+ minutes late without contacting them cancels it; no same-day cancellation."
      }
    ]
  },
  {
    "phase": "🔴 Book now — this week",
    "bg": "#fef2f2",
    "border": "#fecaca",
    "text": "#7f1d1d",
    "items": [
      {
        "id": "b13",
        "text": "Kushiyaki Bistro Fukumimi — Fri Oct 23, 7:30pm (book on Tabelog)",
        "detail": "Yakitori, 5–6 minutes from the hotel. Choose \"Seat reservation\" for 2; free cancellation until 5:59am Oct 23 Japan time. Then cancel KABEAT on TableCheck (no fee).",
        "links": [
          {
            "label": "Book on Tabelog",
            "url": "https://tabelog.com/en/tokyo/A1301/A130101/13307478/"
          }
        ]
      },
      {
        "id": "b9",
        "text": "Hitsumabushi Bincho — Thu Oct 29, 11:00am",
        "detail": "Online on ebica (link on hitsumabushi.co.jp, Ginza Mitsukoshi branch). 11:00 is the first lunch seating. 15+ minutes late without calling cancels.",
        "links": [
          {
            "label": "Book on ebica",
            "url": "https://booking.ebica.jp/webrsv/search/e020034301/21802?isfixshop=true"
          }
        ]
      },
      {
        "id": "b10",
        "text": "Uber home from TPA — Thu Oct 29, ~11:30pm pickup",
        "detail": "The 4:00am ride to the airport is booked. Still to do: schedule the ride home in Uber Reserve for about 11:30pm on Thu Oct 29 (you land at 11:10pm).",
        "links": [
          {
            "label": "Uber Reserve",
            "url": "https://www.uber.com/us/en/ride/how-it-works/reserve/"
          }
        ]
      }
    ]
  },
  {
    "phase": "📅 Booking calendar — windows that open later (Eastern time)",
    "bg": "#fefce8",
    "border": "#fde68a",
    "text": "#713f12",
    "items": [
      {
        "id": "c7",
        "text": "Mon Oct 26, in the park · Disney Premier Access and Standby Pass",
        "detail": "Only available in the Tokyo Disney Resort app after you enter the park. Grab Fantasy Springs and Soaring first. Premier Access is about ¥1,500–2,500 per person per ride; Standby Pass is free.",
        "links": [
          {
            "label": "How the Disney app works",
            "url": "https://faq-en.tokyodisneyresort.jp/answer/680ba05101fdf7431bafb6b0/"
          }
        ]
      }
    ]
  },
  {
    "phase": "🚶 Walk-in — nothing to book",
    "bg": "#f8fafc",
    "border": "#e2e8f0",
    "text": "#334155",
    "items": [
      {
        "id": "w1",
        "text": "No reservations needed for these",
        "detail": "Furutoshi breakfast (Sat, arrive 7:00), Nakamise stalls, Hokkaido Milk Bar, Rokurinsha, FamilyMart mornings, Gyukatsu Ichinisan, Tsukiji market, Gyozaro, I’m donut? and Marion Crepes, Uobei, Hoshino Coffee, the airport trains, and DisneySea lunch in the app."
      },
      {
        "id": "b6",
        "text": "Tenichi — Sat Oct 24, walk in around 5:20pm",
        "detail": "This branch has no online booking. Walk in straight from the go-karts; early on a Saturday beats the rush. Calling is optional if you want a table locked in.",
        "links": [
          {
            "label": "Call +81-3-3272-3677",
            "url": "tel:+81332723677"
          },
          {
            "label": "Restaurant page",
            "url": "https://tenichi.co.jp/shop/nihonbashi-takashimaya/"
          }
        ]
      }
    ]
  },
  {
    "phase": "📱 Before departure",
    "bg": "#eff6ff",
    "border": "#bfdbfe",
    "text": "#1e3a8a",
    "items": [
      {
        "id": "p14",
        "text": "Set up Suica and mobile data for both phones",
        "detail": "Add Suica to Apple Wallet before you leave and top it up with your US card; no physical card or ticket machines needed. Use the shared transit allowance for airport, Disney and Tokyo trains; top-ups are not extra fares on top of those journeys. Verify the actual data plan and device compatibility. eSIM: in the Ubigi app on your phone, buy Japan Unlimited 8 days with code WELCOME10 (10% off). Then open Refer in your app for your personal code; your wife makes her own Ubigi account in the app on her phone and enters that code for 20% off hers (referral codes only work in the app). Install each one at home on Wi-Fi.",
        "links": [
          {
            "label": "Ubigi Japan Unlimited 8 days",
            "url": "https://cellulardata.ubigi.com/rates-and-coverage/japan-data-plans/japan-unlimited-8-days/?wmc-currency=USD"
          }
        ]
      },
      {
        "id": "p25",
        "text": "Tokyo Disney Resort app: link both tickets before Mon Oct 26",
        "detail": "Install the app, link both tickets, and find where Standby Pass and Premier Access live. At park opening, grab passes for the Fantasy Springs rides and Soaring first; they go within minutes.",
        "links": [
          {
            "label": "How the Disney app works",
            "url": "https://faq-en.tokyodisneyresort.jp/answer/680ba05101fdf7431bafb6b0/"
          }
        ]
      },
      {
        "id": "p19",
        "text": "Register on Visit Japan Web before you fly",
        "detail": "Enter passport and flight details for each traveler to get the immigration and customs QR code; it speeds up arrival at Haneda. Check current entry requirements and keep passports and the QR codes accessible.",
        "links": [
          {
            "label": "Visit Japan Web",
            "url": "https://www.vjw.digital.go.jp/"
          }
        ]
      },
      {
        "id": "p16",
        "text": "Save tickets, hotel address and route screenshots offline",
        "detail": "Download map areas, but keep mobile data for live walking/transit directions. Offline map downloads do not replace live transit routing."
      },
      {
        "id": "p21",
        "text": "Reconfirm every actual booking and operating hours",
        "detail": "Keep confirmed tickets distinct from planning windows. Check attraction closures, restaurant hours and live train routes."
      }
    ]
  }
];;;;;;

const PACK_DATA=[
  {
    "cat": "🛂 Documents & money — keep on you, never in a checked bag",
    "items": [
      {
        "id": "k1",
        "text": "Both passports",
        "detail": "US passports: no visa needed for a visit this short. Keep them on you through the airports; at the hotel, lock them in the room safe."
      },
      {
        "id": "k36",
        "text": "Visit Japan Web QR codes — screenshot both",
        "detail": "One for immigration and one for customs, for each of you. Screenshot them before the flight, because the airport Wi-Fi can be slow."
      },
      {
        "id": "k37",
        "text": "Delta boarding passes in the Fly Delta app / Apple Wallet",
        "detail": "Both outbound legs (TPA→DTW→HND) and both return legs."
      },
      {
        "id": "k2",
        "text": "International Driving Permits ×2 — for the go-karts",
        "detail": "Paper booklets, originals only. JAPANKART checks them Saturday at 3:15 with your licenses and passports. No permit means no driving and no refund."
      },
      {
        "id": "k3",
        "text": "US driver’s licenses ×2 — the real cards",
        "detail": "No temporary or paper licenses. Needed with the permits on Saturday."
      },
      {
        "id": "k4",
        "text": "Credit cards: your main no-foreign-fee card + a backup",
        "detail": "Bring a Visa and a Mastercard if you can, since acceptance varies. On Wednesday, carry the credit card you paid for the Romancecar tickets with (your Visa card): train staff can ask to see it with the ticket. Keep the backup card in a different bag from the main one."
      },
      {
        "id": "k7",
        "text": "Yen cash: about ¥20,000–30,000 for the two of you",
        "detail": "Take it out at a 7-Eleven ATM after you land; they accept US cards. Small shops, shrines and some food stalls are cash only."
      },
      {
        "id": "k38",
        "text": "Coin purse",
        "detail": "Japan uses ¥100 and ¥500 coins constantly, and you will collect a lot of them. A small zip pouch keeps them from piling up in your pockets."
      },
      {
        "id": "k6",
        "text": "Booking QR codes — screenshot them all into one phone album",
        "detail": "Shibuya Sky (Webket can’t resend the email), teamLab, Sumida Aquarium, both Romancecar purchase pages, and the JAPANKART confirmation. Disney tickets live in the Disney app."
      },
      {
        "id": "k5",
        "text": "Hotel confirmation + hotel address in Japanese",
        "detail": "The app has the address in Japanese for taxi drivers: ハイアット セントリック 銀座 東京（東京都中央区銀座6-6-7）."
      },
      {
        "id": "k39",
        "text": "Photo of each passport’s photo page, saved privately",
        "detail": "Keep it in your phone’s hidden album or Notes. It makes replacing a lost passport much faster."
      }
    ]
  },
  {
    "cat": "✈️ Under-the-seat bag — the 13½-hour flight kit (each)",
    "items": [
      {
        "id": "k13",
        "text": "Neck pillow",
        "detail": "Clip it to the outside of your bag so it doesn’t use up space."
      },
      {
        "id": "k32",
        "text": "Eye mask + foam earplugs",
        "detail": "The cabin lights dim but never go fully dark."
      },
      {
        "id": "k12",
        "text": "Noise-canceling headphones + a wired backup",
        "detail": "Bring wired earbuds too, in case the seat screen won’t pair with Bluetooth."
      },
      {
        "id": "k31",
        "text": "Compression socks — wear them from takeoff",
        "detail": "They noticeably cut ankle swelling on both long flights (13½ hours out, 11 hours back)."
      },
      {
        "id": "k40",
        "text": "Warm layer: hoodie or zip sweater",
        "detail": "Long-haul cabins get cold, especially overnight."
      },
      {
        "id": "k41",
        "text": "Easy slip-on shoes",
        "detail": "Easy to kick off on the plane and at security. They also make the Japanese shoes-off places quick."
      },
      {
        "id": "k34",
        "text": "Empty water bottle",
        "detail": "Fill it after security at TPA and again at DTW."
      },
      {
        "id": "k33",
        "text": "Snacks: 3–4 each",
        "detail": "Protein bars, nuts, crackers. Meals come on a fixed schedule, and you will be hungry in between."
      },
      {
        "id": "k35",
        "text": "Lip balm, hand lotion, eye drops, face mist",
        "detail": "Cabin air is very dry. Liquids must be 3.4 oz (100 ml) or less, in your clear quart bag."
      },
      {
        "id": "k42",
        "text": "Toothbrush, small toothpaste, deodorant, face wipes",
        "detail": "You can freshen up before landing, since you go straight to the train and dinner."
      },
      {
        "id": "k43",
        "text": "Gum or mints",
        "detail": "Helps your ears on takeoff and landing."
      },
      {
        "id": "k44",
        "text": "Phone downloads done at home",
        "detail": "Shows and movies on Netflix or Disney+, music, Google Maps offline areas for Tokyo and Hakone, and Google Translate’s Japanese pack."
      },
      {
        "id": "k45",
        "text": "Glasses + contacts case and solution (if you wear them)",
        "detail": "Sleeping in contacts on a 13-hour flight is rough. Switch to glasses after dinner."
      }
    ]
  },
  {
    "cat": "🧳 Carry-on bag — what you can’t lose if a suitcase is late",
    "items": [
      {
        "id": "k46",
        "text": "One full change of clothes each + underwear and socks",
        "detail": "If a checked bag misses the Detroit connection, you still have clothes for dinner and the next day."
      },
      {
        "id": "k26",
        "text": "All prescription medicines",
        "detail": "In their original labeled bottles, with a copy of the prescription. See the medicine section below for what Japan doesn’t allow."
      },
      {
        "id": "k47",
        "text": "Clear quart bag with the liquids you need first",
        "detail": "Each item 3.4 oz / 100 ml or less: skincare, contact solution, travel-size shampoo. The full-size bottles go in the checked bag."
      },
      {
        "id": "k9",
        "text": "Power banks — carry-on only, never checked",
        "detail": "Each must be under 100 Wh (most 10,000–20,000 mAh banks are). Keep them in your bag or pocket, not loose in the overhead bin. Bring one that holds about 2 full phone charges."
      },
      {
        "id": "k48",
        "text": "Jewelry, AirPods, anything expensive",
        "detail": "Never in a checked bag."
      }
    ]
  },
  {
    "cat": "👕 Clothes — checked suitcase (per person, 7 days)",
    "items": [
      {
        "id": "k49",
        "text": "Weather: highs about 66–70°F, lows about 55°F, some rain",
        "detail": "Late October Tokyo is mild. Mornings and evenings are cool, and Hakone runs a few degrees colder. Dress in layers."
      },
      {
        "id": "k16",
        "text": "6 tops",
        "detail": "T-shirts and long-sleeve tops you can layer. Breathable, because you walk 15,000–25,000 steps a day."
      },
      {
        "id": "k50",
        "text": "3 pants or jeans",
        "detail": "At least one pair that rolls up above the knee for teamLab’s water rooms."
      },
      {
        "id": "k15",
        "text": "1 light jacket, water-resistant if possible",
        "detail": "Enough for the evenings and a rainy day. A heavy coat isn’t needed."
      },
      {
        "id": "k51",
        "text": "1–2 sweaters or cardigans",
        "detail": "For layering on cool mornings (Tsukiji at 7:30am, the 6:45am Disney start) and in heavily air-conditioned trains."
      },
      {
        "id": "k18",
        "text": "2 nicer smart-casual outfits",
        "detail": "For Manten omakase on Sunday and Ushigoro wagyu on Wednesday. Dark jeans and a nice top are fine; skip athletic wear."
      },
      {
        "id": "k52",
        "text": "8 pairs of underwear",
        "detail": "7 days plus a spare."
      },
      {
        "id": "k20",
        "text": "9 pairs of socks, no holes",
        "detail": "You take your shoes off at some restaurants, fitting rooms and the spa, so socks get seen. Pack an extra pair in the day bag."
      },
      {
        "id": "k53",
        "text": "Pajamas / sleepwear",
        "detail": "The hotel may provide a robe, but bring your own."
      },
      {
        "id": "k17",
        "text": "Workout clothes + gym shoes, if you will use the hotel gym",
        "detail": "Pack for the number of sessions you will actually do. The hotel has laundry if needed."
      },
      {
        "id": "k54",
        "text": "Swimsuit: not needed",
        "detail": "The Hakone private bath is used without swimsuits, and towels are provided."
      }
    ]
  },
  {
    "cat": "👟 Shoes (per person)",
    "items": [
      {
        "id": "k14",
        "text": "2 pairs of broken-in walking shoes",
        "detail": "Swap pairs every other day so they dry out and your feet don’t get sore. Brand-new shoes cause blisters."
      },
      {
        "id": "k55",
        "text": "Closed-toe shoes for go-karts (Saturday)",
        "detail": "JAPANKART doesn’t allow sandals, high heels or long skirts. Your walking shoes are perfect."
      },
      {
        "id": "k56",
        "text": "Dinner shoes, comfortable enough to walk 15 minutes",
        "detail": "You walk to Manten Sunday and from the train to Ushigoro Wednesday."
      }
    ]
  },
  {
    "cat": "🧴 Toiletries — checked bag",
    "items": [
      {
        "id": "k29",
        "text": "What the hotel provides vs. what to bring",
        "detail": "Japanese hotels usually provide shampoo, conditioner, body wash, toothbrushes, a hair dryer and slippers. Bring your own face wash, skincare, makeup and anything you are particular about."
      },
      {
        "id": "k57",
        "text": "Deodorant — bring enough for the week",
        "detail": "Japanese deodorants are much milder than US ones."
      },
      {
        "id": "k27",
        "text": "Sunscreen SPF 30+",
        "detail": "You are outdoors most days: Asakusa, Disney, Harajuku, the Shibuya Sky rooftop."
      },
      {
        "id": "k58",
        "text": "Hair ties, hairbrush, styling products",
        "detail": "Hair ties matter for the onsen and the go-kart helmet."
      },
      {
        "id": "k59",
        "text": "Hair straightener or curling iron (optional)",
        "detail": "Your US one plugs straight in. Japan runs on 100V, so it heats a little more slowly."
      },
      {
        "id": "k60",
        "text": "Razor, nail clippers, feminine products",
        "detail": "Nail clippers and razors go in the checked bag."
      }
    ]
  },
  {
    "cat": "💊 Medicine & first aid — carry-on",
    "items": [
      {
        "id": "k61",
        "text": "Japan medicine rules — check before you pack",
        "detail": "Adderall and other amphetamine-based ADHD medicines are banned even with a prescription. Cold medicines with pseudoephedrine (Sudafed, Claritin-D, Zyrtec-D, Allegra-D, Vicks inhaler) aren’t allowed, so bring the plain non-D versions instead. Up to 1 month of other prescriptions and 2 months of over-the-counter medicine is fine without a permit."
      },
      {
        "id": "k62",
        "text": "Pain reliever (Tylenol or Advil)",
        "detail": "Japanese pharmacies sell different brands and doses, so bring what you know works."
      },
      {
        "id": "k63",
        "text": "Allergy pills (non-D) + stomach meds",
        "detail": "Claritin or Zyrtec plain, plus Pepto tablets or Imodium for new foods."
      },
      {
        "id": "k28",
        "text": "Motion sickness pills (optional)",
        "detail": "For the go-karts, DisneySea’s Tower of Terror, or a bumpy flight."
      },
      {
        "id": "k64",
        "text": "Blister kit: Band-Aids + moleskin or Compeed",
        "detail": "Your daily step counts will be very high. Put one in the day bag."
      },
      {
        "id": "k30",
        "text": "Hand sanitizer (small)",
        "detail": "For Tsukiji’s food stalls and before snacks on the go."
      }
    ]
  },
  {
    "cat": "🔌 Tech",
    "items": [
      {
        "id": "k8",
        "text": "Both iPhones: Ubigi eSIM installed + Suica in Wallet",
        "detail": "Install the Ubigi eSIM at home on Wi-Fi; it starts when it first connects in Japan. Put Suica in Apple Wallet and load about ¥6,000 each. Turn on the Ubigi line when you land."
      },
      {
        "id": "k11",
        "text": "Wall charger with 2+ USB-C ports",
        "detail": "Japan has the same two-flat-prong plugs as the US. One charger for both phones saves outlet space."
      },
      {
        "id": "k65",
        "text": "One 3-prong-to-2-prong adapter (only if something has a third, round prong)",
        "detail": "Some Japanese outlets only take two flat prongs. Most phone and laptop chargers are already two-prong."
      },
      {
        "id": "k10",
        "text": "Charging cables ×3 (one is a spare)",
        "detail": "Phone, Apple Watch, earbuds."
      },
      {
        "id": "k66",
        "text": "Apple Watch charger (if you wear one)",
        "detail": "Easy to forget."
      },
      {
        "id": "k67",
        "text": "AirTag in each checked suitcase (optional)",
        "detail": "Lets you see where a delayed bag is."
      }
    ]
  },
  {
    "cat": "🎒 Daily day bag in Tokyo",
    "items": [
      {
        "id": "k22",
        "text": "Small crossbody or backpack",
        "detail": "Wear backpacks on your front on crowded trains. That’s the local etiquette."
      },
      {
        "id": "k68",
        "text": "Small hand towel or handkerchief",
        "detail": "Many Japanese restrooms have no paper towels or dryers. Locals carry a small towel."
      },
      {
        "id": "k69",
        "text": "Pocket tissues",
        "detail": "Some restrooms are out of paper, and you will be eating street food."
      },
      {
        "id": "k70",
        "text": "Small trash bag",
        "detail": "Public trash cans are rare in Japan. You carry your trash until you find one, usually at a convenience store."
      },
      {
        "id": "k23",
        "text": "Foldable tote bag",
        "detail": "Stores charge for bags, and you will be shopping in Solamachi, Harajuku and Ginza."
      },
      {
        "id": "k24",
        "text": "Water bottle",
        "detail": "Refill at the hotel. Vending machines are everywhere too."
      },
      {
        "id": "k71",
        "text": "Compact umbrella",
        "detail": "Or buy a clear one for about ¥700 at any convenience store if it rains."
      },
      {
        "id": "k25",
        "text": "2–3 zip bags",
        "detail": "For snacks, wet things after teamLab, and keeping your phone dry in rain."
      }
    ]
  },
  {
    "cat": "🗓️ Special days — pack the night before",
    "items": [
      {
        "id": "k72",
        "text": "Sat — go-karts: licenses + permits + passports, closed-toe shoes",
        "detail": "All three documents for both drivers. JAPANKART lends costumes that go over your clothes. No alcohol before driving."
      },
      {
        "id": "k19",
        "text": "Sun — teamLab: pants that roll above the knee (or shorts)",
        "detail": "You walk barefoot through knee-deep water. Some floors are mirrored, so skip skirts and dresses. Lockers hold your shoes and bags."
      },
      {
        "id": "k21",
        "text": "Mon — DisneySea: your comfiest shoes, power bank, light rain jacket",
        "detail": "Tickets linked in the Disney app the night before. The app uses a lot of battery all day."
      },
      {
        "id": "k73",
        "text": "Wed — Hakone: change of underwear, hair tie, small makeup kit",
        "detail": "The private bath provides towels and amenities. Bring the credit card you paid for the Romancecar tickets with (your Visa card), and keep the purchase pages on your phone."
      },
      {
        "id": "k74",
        "text": "Thu — departure: bags packed and weighed the night before",
        "detail": "Leave the bags with the front desk after breakfast. Keep passports and boarding passes on you."
      }
    ]
  },
  {
    "cat": "✅ Before you zip the suitcases",
    "items": [
      {
        "id": "k75",
        "text": "Leave about a third of each suitcase empty",
        "detail": "Or pack a foldable duffel. You will bring back snacks, souvenirs and shopping."
      },
      {
        "id": "k76",
        "text": "Weigh each checked bag: 50 lb (23 kg) maximum",
        "detail": "Your Delta tickets include one 50 lb bag each. A second bag is $100 per person. A small luggage scale helps on the way home."
      },
      {
        "id": "k77",
        "text": "Luggage tags with your phone + email, and a photo of each bag",
        "detail": "The photo helps if a bag goes missing."
      }
    ]
  }
];

function calcBudgetTotal(){
  let low=0,high=0,mid=0;
  BUDGET_CATEGORIES.forEach(cat=>{cat.items.forEach(item=>{
    if(item.free||item.optional||item.variable)return;
    const c=item.cost||0,r=item.range||[c,c];
    low+=r[0];high+=r[1];mid+=c;
  });});
  return{low,high,mid};
}

function mapsUrl(query){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapQueryForActivity(activity,day){
  if(activity.mapQuery)return activity.mapQuery;
  const title=activity.title;
  if(/Hyatt Centric|Hotel Gym|Hotel Full Meal|Quick Hotel|Check In/i.test(title))return "Hyatt Centric Ginza Tokyo";
  if(/Tampa|TPA/i.test(title))return "Tampa International Airport";
  if(/Detroit|DTW/i.test(title))return "Detroit Metropolitan Wayne County Airport";
  if(/Haneda|HND/i.test(title))return "Tokyo Haneda Airport";
  if(/Return.*Airport|Depart.*Tokyo/i.test(title))return "Tokyo Haneda Airport";
  return `${title.replace(/^(Breakfast|Lunch|Dinner|Afternoon Snack):\s*/i,"").replace(/\s+—.*$/,"")} ${day.location}`;
}

const KIND_STYLE={
  travel:{label:"Travel",color:"#334155",bg:"#f1f5f9",border:"#cbd5e1"},
  flight:{label:"Flight",color:"#0369a1",bg:"#f0f9ff",border:"#bae6fd"},
  layover:{label:"Layover",color:"#0369a1",bg:"#f0f9ff",border:"#bae6fd"},
  breakfast:{label:"Breakfast",color:"#c2410c",bg:"#fff7ed",border:"#fed7aa"},
  lunch:{label:"Lunch",color:"#c2410c",bg:"#fff7ed",border:"#fed7aa"},
  dinner:{label:"Dinner",color:"#c2410c",bg:"#fff7ed",border:"#fed7aa"},
  treat:{label:"Treat",color:"#be185d",bg:"#fdf2f8",border:"#fbcfe8"},
  activity:{label:"Activity",color:"#6d28d9",bg:"#faf5ff",border:"#ddd6fe"},
  hotel:{label:"Hotel",color:"#0f766e",bg:"#f0fdfa",border:"#99f6e4"},
  free:{label:"Free time",color:"#15803d",bg:"#f0fdf4",border:"#bbf7d0"},
};
const MEAL_KINDS=new Set(["breakfast","lunch","dinner","treat"]);

function activityMapLabel(activity){
  return MEAL_KINDS.has(activity.kind)?`${KIND_STYLE[activity.kind].label}: ${activity.title}`:activity.title;
}

function statusStyle(status){
  if(/booked ✓/i.test(status))return {color:"#047857",bg:"#ecfdf5",border:"#a7f3d0"};
  if(/^(Book today|Book now|Call now)/.test(status))return {color:"#b91c1c",bg:"#fef2f2",border:"#fecaca"};
  if(/^(Book|Call|Buy|Reserve|To book|Priority Seating|Confirm seating|Pick a spot)/.test(status))return {color:"#b45309",bg:"#fffbeb",border:"#fde68a"};
  if(/^(Walk-in|No booking)/.test(status))return {color:"#047857",bg:"#ecfdf5",border:"#a7f3d0"};
  return {color:"#475569",bg:"#f8fafc",border:"#e2e8f0"};
}

function Chip({tone,children}){
  return <span style={{fontSize:10,fontWeight:750,letterSpacing:"0.02em",color:tone.color,background:tone.bg,border:`1px solid ${tone.border}`,padding:"3px 7px",borderRadius:20,whiteSpace:"nowrap"}}>{children}</span>;
}

export default function JapanItinerary(){
  const[view,setView]=useState("itinerary");
  const[activeDay,setActiveDay]=useState(1);
  const[expandedIdx,setExpandedIdx]=useState(null);
  const[showPoints,setShowPoints]=useState(false);
  const[expandedCat,setExpandedCat]=useState(null);
  const[expandedItem,setExpandedItem]=useState(null);
  const[planSaved,setPlanSaved]=useSavedState("plan-checked",[]);
  const[packSaved,setPackSaved]=useSavedState("pack-checked",[]);
  const bookedIds=new Set((PLAN_DATA.find(p=>p.phase.startsWith("✅"))?.items||[]).map(i=>i.id));
  const planChecked=new Set([...planSaved,...bookedIds]);
  const packChecked=new Set(packSaved);
  const day=DAYS[activeDay];
  const theme=THEME[day.type]||THEME.tokyo;
  const{low,high,mid}=calcBudgetTotal();
  const flip=(id)=>s=>s.includes(id)?s.filter(x=>x!==id):[...s,id];
  const togglePlan=(id)=>{if(!bookedIds.has(id))setPlanSaved(flip(id));};
  const togglePack=(id)=>setPackSaved(flip(id));
  const planTotal=PLAN_DATA.reduce((s,ph)=>s+ph.items.length,0);
  const packTotal=PACK_DATA.reduce((s,cat)=>s+cat.items.length,0);
  const planDone=PLAN_DATA.reduce((s,ph)=>s+ph.items.filter(i=>planChecked.has(i.id)).length,0);
  const packDone=PACK_DATA.reduce((s,cat)=>s+cat.items.filter(i=>packChecked.has(i.id)).length,0);

  return(
    <div style={{fontFamily:"system-ui,-apple-system,sans-serif",background:"#f8fafc",minHeight:"100vh"}}>
      <div style={{background:view==="budget"?"#1e293b":theme.headerBg,padding:"20px 16px 14px",transition:"background 0.3s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{color:"#fff",fontSize:20,fontWeight:700,letterSpacing:"-0.3px"}}>🇯🇵 Japan Anniversary</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:13,marginTop:2}}>Oct 22–29 · Delta via Virgin Atlantic · Hyatt Centric Ginza</div>
            <button onClick={()=>refreshApp()} style={{background:"none",border:"none",padding:0,marginTop:4,color:"rgba(255,255,255,0.55)",fontSize:11,cursor:"pointer"}}>Updated {BUILD_LABEL} · tap to refresh</button>
          </div>
          <button onClick={()=>setShowPoints(!showPoints)} style={{background:"rgba(255,255,255,0.18)",border:"none",borderRadius:10,padding:"8px 14px",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer"}}>💳 Points</button>
        </div>
      </div>

      {showPoints&&(
        <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",padding:"16px"}}>
          <div style={{fontWeight:700,fontSize:15,marginBottom:12,color:"#1e293b"}}>Points Breakdown</div>
          {POINTS_DATA.map((row,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"9px 0",borderTop:i===3?"1px solid #e2e8f0":undefined,marginTop:i===3?4:undefined}}>
              <div style={{fontSize:13,color:row.warn?"#b45309":row.bold?"#1e293b":row.green?"#059669":"#475569",fontWeight:row.bold||row.warn||row.green?700:400}}>{row.label}</div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:13,fontWeight:700,color:row.warn?"#b45309":row.green?"#059669":"#1e293b"}}>{row.pts}</div>
                {row.sub&&<div style={{fontSize:11,color:row.warn?"#b45309":row.green?"#059669":"#94a3b8"}}>{row.sub}</div>}
              </div>
            </div>
          ))}
          <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:10,padding:"10px 12px",marginTop:10,fontSize:12,color:"#7f1d1d",lineHeight:1.5}}>
            ✈️ DONE: Delta flights booked through Virgin Atlantic Flying Club for 285,000 points plus taxes.
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"10px 12px",marginTop:8,fontSize:12,color:"#14532d",lineHeight:1.5}}>
            🏨 DONE: Hyatt Centric Ginza, Oct 23–29 (6 nights), booked with points. Check-out is noon on Thursday.
          </div>
        </div>
      )}

      <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",padding:"10px 12px",display:"flex",gap:6}}>
        {[{id:"itinerary",label:"📅 Trip"},{id:"maps",label:"📍 Map List"},{id:"budget",label:"💰 Budget"},{id:"plan",label:"📋 Plan"},{id:"pack",label:"🧳 Pack"}].map(v=>(
          <button key={v.id} onClick={()=>{setView(v.id);setShowPoints(false);}}
            style={{flex:1,padding:"8px 0",borderRadius:10,border:"none",cursor:"pointer",fontWeight:700,fontSize:12,background:view===v.id?"#1e293b":"#f1f5f9",color:view===v.id?"#fff":"#64748b"}}>
            {v.label}
          </button>
        ))}
      </div>

      {view==="itinerary"&&(
        <>
          <div style={{background:"#fff",borderBottom:"1px solid #e2e8f0",overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
            <div style={{display:"flex",gap:8,padding:"12px 16px",width:"max-content"}}>
              {DAYS.map((d,i)=>{
                const isActive=activeDay===i;const t=THEME[d.type]||THEME.tokyo;
                return(
                  <button key={i} onClick={()=>{setActiveDay(i);setExpandedIdx(null);setShowPoints(false);}}
                    style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 12px",borderRadius:12,border:"none",cursor:"pointer",background:isActive?t.tabActiveBg:t.tabInactiveBg,color:isActive?t.tabActiveText:t.tabInactiveText,fontWeight:isActive?700:500,transition:"all 0.2s",boxShadow:isActive?"0 2px 8px rgba(0,0,0,0.15)":"none",transform:isActive?"scale(1.05)":"scale(1)"}}>
                    <span style={{fontSize:16}}>{d.emoji}</span>
                    <span style={{fontSize:11,fontWeight:700,marginTop:2}}>{d.dayName}</span>
                    <span style={{fontSize:10}}>{d.date}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{margin:"14px 16px 0",background:theme.badgeBg,border:`1px solid ${theme.borderColor}`,borderRadius:16,padding:"16px",boxShadow:"0 2px 10px rgba(15,23,42,0.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
              <div style={{fontSize:18,fontWeight:750,color:theme.headerBg,lineHeight:1.2}}>{day.title}</div>
              <div style={{flexShrink:0,fontSize:11,fontWeight:800,letterSpacing:"0.04em",color:theme.headerBg,background:"rgba(255,255,255,0.7)",border:`1px solid ${theme.borderColor}`,padding:"5px 8px",borderRadius:20}}>DAY {activeDay+1}</div>
            </div>
            <div style={{fontSize:13,color:"#64748b",marginTop:2}}>{day.location}</div>
            {day.hotel&&<div style={{fontSize:12,fontWeight:600,color:theme.headerBg,marginTop:6}}>🏨 {day.hotel}</div>}
            <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:6,fontSize:11,color:theme.headerBg,marginTop:10,fontWeight:650}}>
              <span>{day.activities.length} planned stops</span><span style={{opacity:0.45}}>•</span><span>Tap a stop for helpful details and directions</span>
            </div>
            <div style={{fontSize:11,color:"#64748b",marginTop:4}}>Times are planning windows. Check live travel and opening hours before leaving.</div>
          </div>
          <div style={{margin:"10px 16px 0",background:"#fff",border:"1px solid #cbd5e1",borderRadius:14,padding:"13px 14px",boxShadow:"0 1px 3px rgba(15,23,42,0.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
              <div>
                <div style={{fontSize:11,fontWeight:800,color:"#475569",letterSpacing:"0.05em"}}>🚆 LEAVE + STATIONS</div>
                <div style={{fontSize:14,fontWeight:750,color:"#1e293b",marginTop:4}}>{DAY_TRANSIT[day.id].leaveBy}</div>
                <div style={{fontSize:12,color:"#475569",marginTop:4,lineHeight:1.45}}>{DAY_TRANSIT[day.id].from} <span style={{color:"#94a3b8"}}>→</span> {DAY_TRANSIT[day.id].to}</div>
                <div style={{fontSize:11,color:"#64748b",marginTop:3}}>{DAY_TRANSIT[day.id].route} · Check Google Maps live before leaving.</div>
              </div>
              <a href={mapsUrl(DAY_TRANSIT[day.id].mapQuery)} target="_blank" rel="noreferrer" style={{flexShrink:0,color:theme.headerBg,fontSize:11,fontWeight:750,textDecoration:"none",padding:"7px 9px",borderRadius:8,background:theme.badgeBg,border:`1px solid ${theme.borderColor}`}}>Map start ↗</a>
            </div>
          </div>
          <div style={{padding:"12px 16px 48px",display:"flex",flexDirection:"column",gap:10}}>
            {day.activities.map((act,idx)=>{
              const isOpen=expandedIdx===idx;
              const mapQuery=mapQueryForActivity(act,day);
              const kind=KIND_STYLE[act.kind]||KIND_STYLE.activity;
              return(
                <div key={idx} style={{background:"#fff",borderRadius:16,border:`1px solid ${isOpen?theme.borderColor:"#e2e8f0"}`,overflow:"hidden",boxShadow:isOpen?"0 6px 18px rgba(30,41,59,0.09)":"0 1px 3px rgba(0,0,0,0.04)",transition:"box-shadow 0.2s,border-color 0.2s"}}>
                  <button onClick={()=>setExpandedIdx(isOpen?null:idx)} style={{width:"100%",textAlign:"left",padding:"15px 16px",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit"}}>
                    <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                      <span style={{fontSize:22,lineHeight:1,marginTop:1}}>{act.icon}</span>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}>
                          <div style={{fontSize:14,fontWeight:600,color:"#1e293b",lineHeight:1.3}}>{act.title}</div>
                          <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
                            <span style={{background:theme.timeBg,color:theme.timeText,fontSize:10,fontWeight:600,padding:"3px 8px",borderRadius:20,whiteSpace:"nowrap"}}>{act.time}</span>
                            <span style={{color:"#94a3b8",fontSize:12}}>{isOpen?"▲":"▼"}</span>
                          </div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginTop:6}}>
                          <Chip tone={kind}>{kind.label.toUpperCase()}{act.duration?` · ${act.duration}`:""}</Chip>
                          {act.status&&<Chip tone={statusStyle(act.status)}>{act.status}</Chip>}
                        </div>
                      </div>
                    </div>
                  </button>
                  {isOpen&&(
                    <div style={{padding:"0 16px 16px",display:"flex",flexDirection:"column",gap:10}}>
                      <p style={{fontSize:13,color:"#374151",lineHeight:1.6,margin:0}}>{act.detail}</p>
                      {act.steps&&<ol style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:8}}>{act.steps.map((step,si)=>(
                        <li key={si} style={{display:"flex",gap:10,alignItems:"flex-start",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"9px 11px"}}>
                          <span style={{flexShrink:0,width:22,height:22,borderRadius:11,background:theme.headerBg,color:"#fff",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>{si+1}</span>
                          <span style={{fontSize:13.5,color:"#1e293b",lineHeight:1.5}}>{step}</span>
                        </li>
                      ))}</ol>}
                      {act.food&&<div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"10px 12px"}}><div style={{fontSize:11,fontWeight:700,color:"#c2410c",marginBottom:4}}>🍽️ FOOD</div><p style={{fontSize:12,color:"#7c2d12",lineHeight:1.5,margin:0}}>{act.food}</p></div>}
                      {act.tip&&<div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 12px"}}><div style={{fontSize:11,fontWeight:700,color:"#1d4ed8",marginBottom:4}}>💡 TIP</div><p style={{fontSize:12,color:"#1e3a8a",lineHeight:1.5,margin:0}}>{act.tip}</p></div>}
                      {act.bookUrl&&<a href={act.bookUrl} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-start",background:"#fffbeb",color:"#92400e",border:"1px solid #fcd34d",textDecoration:"none",fontSize:12,fontWeight:750,padding:"9px 12px",borderRadius:9}}>{act.bookUrl.startsWith("tel:")?"📞":"🔗"} {act.bookLabel} ↗</a>}
                      {mapQuery&&<a href={mapsUrl(mapQuery)} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-start",background:theme.headerBg,color:"#fff",textDecoration:"none",fontSize:12,fontWeight:750,padding:"9px 12px",borderRadius:9,boxShadow:"0 2px 5px rgba(15,23,42,0.14)"}}>📍 Open destination in Google Maps ↗</a>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {view==="maps"&&(
        <div style={{padding:"14px 16px 48px",display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#ecfeff",border:"1px solid #a5f3fc",borderRadius:16,padding:"16px"}}>
            <div style={{fontSize:17,fontWeight:800,color:"#155e75"}}>Shared Google Maps list</div>
            <p style={{fontSize:13,color:"#164e63",lineHeight:1.55,margin:"6px 0 0"}}>Use this as your save queue. Open a place, tap <strong>Save</strong> in Google Maps, add it to a new list called <strong>Japan Anniversary 2026</strong>, then share that list with each other. Google keeps personal lists inside your account, so this gives you the exact places without relying on a separate document.</p>
          </div>
          <div style={{fontSize:12,color:"#64748b",lineHeight:1.5}}>Save the essentials first: hotel, each booked restaurant, teamLab, DisneySea, Hakone Yuryo, and both airports. The remaining places are easy to add whenever you have a few minutes.</div>
          {DAYS.map((mapDay)=>{
            const stops=mapDay.activities.map((activity)=>({activity,query:mapQueryForActivity(activity,mapDay)}));
            return(
              <div key={mapDay.id} style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,padding:"14px",boxShadow:"0 1px 3px rgba(15,23,42,0.04)"}}>
                <div style={{display:"flex",alignItems:"baseline",gap:7,marginBottom:9}}><span style={{fontSize:17}}>{mapDay.emoji}</span><span style={{fontSize:14,fontWeight:800,color:"#1e293b"}}>{mapDay.dayName} · {mapDay.title}</span></div>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                  {stops.map(({activity,query},idx)=><a key={idx} href={mapsUrl(query)} target="_blank" rel="noreferrer" style={{textDecoration:"none",fontSize:11,fontWeight:650,color:"#155e75",background:"#f0fdfa",border:"1px solid #ccfbf1",padding:"7px 9px",borderRadius:9}}>📍 {activityMapLabel(activity)} ↗</a>)}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {view==="budget"&&(
        <div style={{padding:"14px 16px 48px",display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#1e293b",borderRadius:16,padding:"18px",color:"#fff"}}>
            <div style={{fontSize:13,color:"rgba(255,255,255,0.6)",marginBottom:4}}>ESTIMATED OUT-OF-POCKET</div>
            <div style={{fontSize:32,fontWeight:800,letterSpacing:"-0.5px"}}>${mid.toLocaleString()}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",marginTop:2}}>Range: ${low.toLocaleString()} – ${high.toLocaleString()}</div>
            <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.12)"}}>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:2}}>✨ POINTS COVER (estimated cash value)</div>
              <div style={{fontSize:16,fontWeight:700,color:"#4ade80"}}>~$5,000–8,000 in flights & hotel</div>
            </div>
            <div style={{marginTop:10,fontSize:11,color:"rgba(255,255,255,0.4)"}}>Excludes optional items and souvenirs. Tap categories to expand, items for full detail.</div>
          </div>
          {BUDGET_CATEGORIES.map((cat,ci)=>{
            const isOpen=expandedCat===ci;
            const catTotal=cat.items.reduce((s,item)=>s+(item.free||item.optional||item.variable?0:(item.cost||0)),0);
            return(
              <div key={ci} style={{background:"#fff",borderRadius:14,border:"1px solid #e2e8f0",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                <button onClick={()=>{setExpandedCat(isOpen?null:ci);setExpandedItem(null);}} style={{width:"100%",textAlign:"left",padding:"14px 16px",background:"none",border:"none",cursor:"pointer"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:20}}>{cat.icon}</span>
                      <div>
                        <div style={{fontSize:14,fontWeight:700,color:"#1e293b"}}>{cat.title}</div>
                        <div style={{fontSize:11,color:"#94a3b8",marginTop:1}}>{cat.items.length} items</div>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      {cat.totalLabel?(
                        <span style={{fontSize:12,fontWeight:700,color:cat.totalColor||cat.accent,background:cat.totalColor?"#f0fdf4":"#f8fafc",padding:"3px 10px",borderRadius:20,border:`1px solid ${cat.totalColor?"#bbf7d0":"#e2e8f0"}`}}>{cat.totalLabel}</span>
                      ):catTotal>0?(
                        <span style={{fontSize:13,fontWeight:700,color:"#1e293b"}}>~${catTotal}</span>
                      ):(
                        <span style={{fontSize:12,fontWeight:700,color:"#059669",background:"#f0fdf4",padding:"3px 10px",borderRadius:20,border:"1px solid #bbf7d0"}}>FREE / POINTS</span>
                      )}
                      <span style={{color:"#94a3b8",fontSize:12}}>{isOpen?"▲":"▼"}</span>
                    </div>
                  </div>
                </button>
                {isOpen&&(
                  <div style={{borderTop:"1px solid #f1f5f9"}}>
                    {cat.items.map((item,ii)=>{
                      const key=`${ci}-${ii}`;const isItemOpen=expandedItem===key;
                      return(
                        <div key={ii} style={{borderBottom:ii<cat.items.length-1?"1px solid #f1f5f9":"none"}}>
                          <button onClick={()=>setExpandedItem(isItemOpen?null:key)} style={{width:"100%",textAlign:"left",padding:"12px 16px",background:"none",border:"none",cursor:"pointer"}}>
                            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
                              <div style={{flex:1,minWidth:0}}>
                                <div style={{fontSize:13,fontWeight:500,color:item.optional?"#94a3b8":"#374151",lineHeight:1.3}}>
                                  {item.name}
                                  {item.optional&&<span style={{fontSize:10,color:"#94a3b8",marginLeft:6}}>(optional)</span>}
                                  {item.variable&&<span style={{fontSize:10,color:"#92400e",marginLeft:6}}>(variable)</span>}
                                  {item.booked&&<span style={{fontSize:10,fontWeight:700,color:"#166534",marginLeft:6}}>(booked)</span>}
                                </div>
                              </div>
                              <div style={{flexShrink:0,textAlign:"right"}}>
                                {item.free?(
                                  <span style={{fontSize:11,fontWeight:700,color:"#059669",background:"#f0fdf4",padding:"2px 8px",borderRadius:20,border:"1px solid #bbf7d0",whiteSpace:"nowrap"}}>{item.freeLabel||"FREE"}</span>
                                ):item.variable?(
                                  <span style={{fontSize:12,fontWeight:600,color:"#92400e"}}>~${item.cost}</span>
                                ):item.optional&&item.optionalNote?(
                                  <span style={{fontSize:11,color:"#94a3b8"}}>{item.optionalNote}</span>
                                ):item.cost!==undefined?(
                                  <div>
                                    <div style={{fontSize:13,fontWeight:700,color:"#1e293b"}}>~${item.cost}</div>
                                    {item.range&&item.range[0]!==item.range[1]&&<div style={{fontSize:10,color:"#94a3b8"}}>${item.range[0]}–${item.range[1]}</div>}
                                  </div>
                                ):null}
                              </div>
                            </div>
                          </button>
                          {isItemOpen&&item.detail&&(
                            <div style={{padding:"0 16px 12px"}}>
                              <p style={{fontSize:12,color:"#6b7280",lineHeight:1.55,margin:0,background:"#f8fafc",borderRadius:8,padding:"10px 12px"}}>{item.detail}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {view==="plan"&&(
        <div style={{padding:"14px 16px 48px",display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#0f4c81",borderRadius:16,padding:"16px",color:"#fff"}}>
            <div style={{fontSize:16,fontWeight:700}}>Pre-Trip Checklist</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4}}>{planDone} of {planTotal} done · tap to check off · saved on this phone</div>
          </div>
          {PLAN_DATA.map((phase,pi)=>{
            const doneInPhase=phase.items.filter(it=>planChecked.has(it.id)).length;
            return(
              <div key={pi} style={{background:"#fff",borderRadius:14,border:`1px solid ${phase.border}`,overflow:"hidden"}}>
                <div style={{background:phase.bg,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:13,fontWeight:700,color:phase.text}}>{phase.phase}</div>
                  <div style={{fontSize:11,color:phase.text,opacity:0.7}}>{doneInPhase}/{phase.items.length}</div>
                </div>
                {phase.items.map((item)=>{
                  const done=planChecked.has(item.id);const isBooked=bookedIds.has(item.id);
                  return(
                    <div key={item.id} style={{borderTop:`1px solid #f1f5f9`}}>
                      <button onClick={()=>togglePlan(item.id)} style={{width:"100%",textAlign:"left",padding:"12px 16px",background:"none",border:"none",cursor:isBooked?"default":"pointer",display:"flex",gap:12,alignItems:"flex-start"}}>
                        <div style={{width:20,height:20,borderRadius:6,border:`2px solid ${done?"#059669":"#d1d5db"}`,background:done?"#059669":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                          {done&&<span style={{color:"#fff",fontSize:12,fontWeight:700}}>✓</span>}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:13,fontWeight:500,color:done&&!isBooked?"#9ca3af":"#374151",textDecoration:done&&!isBooked?"line-through":"none",lineHeight:1.4}}>{item.text}</div>
                          {item.detail&&(!done||isBooked)&&<div style={{fontSize:11,color:"#9ca3af",marginTop:3,lineHeight:1.4}}>{item.detail}</div>}
                        </div>
                      </button>
                      {item.links&&!done&&<div style={{display:"flex",flexWrap:"wrap",gap:6,padding:"0 16px 12px 48px"}}>{item.links.map(l=><a key={l.url} href={l.url} target="_blank" rel="noreferrer" style={{fontSize:11,fontWeight:700,color:"#92400e",background:"#fffbeb",border:"1px solid #fcd34d",borderRadius:8,padding:"6px 9px",textDecoration:"none"}}>{l.url.startsWith("tel:")?"📞":"🔗"} {l.label} ↗</a>)}</div>}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {view==="pack"&&(
        <div style={{padding:"14px 16px 48px",display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#1e293b",borderRadius:16,padding:"16px",color:"#fff"}}>
            <div style={{fontSize:16,fontWeight:700}}>Packing List</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4}}>{packDone} of {packTotal} packed · tap to check off · saved on this phone</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.45)",marginTop:6}}>Late Oct Tokyo: ~59–72°F days, cooler evenings. No power adapter needed (Japan = Type A, same as US).</div>
          </div>
          {PACK_DATA.map((cat,ci)=>{
            const doneCat=cat.items.filter(it=>packChecked.has(it.id)).length;
            return(
              <div key={ci} style={{background:"#fff",borderRadius:14,border:"1px solid #e2e8f0",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                <div style={{padding:"12px 16px",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"#1e293b"}}>{cat.cat}</div>
                  <div style={{fontSize:11,color:"#94a3b8"}}>{doneCat}/{cat.items.length}</div>
                </div>
                {cat.items.map((item)=>{
                  const done=packChecked.has(item.id);
                  return(
                    <div key={item.id} style={{borderTop:"1px solid #f1f5f9"}}>
                      <button onClick={()=>togglePack(item.id)} style={{width:"100%",textAlign:"left",padding:"11px 16px",background:"none",border:"none",cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start"}}>
                        <div style={{width:20,height:20,borderRadius:6,border:`2px solid ${done?"#059669":"#d1d5db"}`,background:done?"#059669":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                          {done&&<span style={{color:"#fff",fontSize:12,fontWeight:700}}>✓</span>}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:13,fontWeight:500,color:done?"#9ca3af":"#374151",textDecoration:done?"line-through":"none",lineHeight:1.4}}>{item.text}</div>
                          {item.detail&&!done&&<div style={{fontSize:11,color:"#9ca3af",marginTop:3,lineHeight:1.4}}>{item.detail}</div>}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
