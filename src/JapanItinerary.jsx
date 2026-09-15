import { useState } from "react";

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
        "name": "Caption by Hyatt Kabutocho — 6 nights (5th Night Free)",
        "free": true,
        "freeLabel": "125k pts",
        "detail": "Transfer 125,000 Chase UR → World of Hyatt. 6 nights at 25,000 pts/night: pay for nights 1-4 (100k), night 5 is FREE (5th Night Free benefit), pay for night 6 (25k) = 125,000 total. Confirm the 5th night shows as free in the booking checkout before completing the transfer."
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
        "name": "Airalo Japan eSIM × 2 people",
        "cost": 40,
        "range": [
          30,
          50
        ],
        "detail": "Download Airalo app before leaving Tampa. ~$15-20/person for 10-15 days unlimited data. Installs digitally, activates on landing. No counter pickup at the airport."
      },
      {
        "name": "International Driving Permits (AAA × 2 drivers)",
        "cost": 40,
        "range": [
          40,
          40
        ],
        "detail": "$20 per permit, $40 for both drivers, plus any passport-photo or delivery charges. Confirm AAA processing and JAPANKART's original-document requirements before booking."
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
        "name": "Ride-share to TPA — departing (Thu Oct 22, 4:15am)",
        "cost": 30,
        "range": [
          20,
          55
        ],
        "detail": "Very early morning — pre-book an Uber the night before so it's confirmed. You need to be at TPA by 4:15am for the 6:15am departure."
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
        "name": "Ride-share from TPA — returning (Thu Oct 29, ~10:45pm)",
        "cost": 30,
        "range": [
          20,
          55
        ],
        "detail": "Late Thursday night return. Pre-book the ride home before you leave so it's confirmed."
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
        "cost": 70,
        "range": [
          55,
          85
        ],
        "detail": "This is the one shared local-transit allowance: load about ¥6,000 each in Apple Wallet, then top up only if needed. It covers your Haneda arrival and departure trains, DisneySea train/Resort Line, and nearly all Tokyo subway/JR/bus rides. Do not add the individual Tokyo train fares elsewhere—those rides are paid from this balance, not on top of it."
      },
      {
        "name": "Hakone Romancecar reserved tickets — round trip (× 2)",
        "cost": 66,
        "range": [
          60,
          75
        ],
        "detail": "Separate from Suica: reserved Romancecar fare for two, round trip between Shinjuku and Hakone-Yumoto. Your subway ride to/from Shinjuku and the free Hakone Yuryo shuttle are already covered by Suica/free, so do not buy the Hakone Freepass."
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
        "name": "Sat: Sumida Aquarium (× 2)",
        "cost": 36,
        "range": [
          32,
          42
        ],
        "detail": "The panda replacement: a compact, design-forward aquarium in Tokyo Skytree Town with penguins and jellyfish. Buy a timed ticket online if you want certainty."
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
        "name": "Sat: JAPANKART 60-minute Akihabara / Asakusa (× 2)",
        "cost": 133,
        "range": [
          133,
          164
        ],
        "detail": "The booking page shows ¥10,000 per adult for Oct 24 at 3:30pm (¥20,000 for two), including guide, kart, insurance, fuel, costume and photos. The higher figure is the ¥12,285 list price if the date price changes."
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
        "name": "Shibuya Sky observation deck (× 2)",
        "cost": 46,
        "range": [
          42,
          52
        ],
        "detail": "Evening web entry is currently ¥3,400/person. Book the blue-hour slot online; October pricing and availability should be reconfirmed when tickets open."
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
        "name": "Hakone Yuryo Type 1 private onsen — 120 min",
        "cost": 70,
        "range": [
          68,
          82
        ],
        "detail": "Verified weekday rate for one Type 1 room for two: ¥10,400 total. Towels and bath amenities are included; optional yukata rental is ¥100/person."
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
        "name": "Fri: KABEAT dinner (×2)",
        "cost": 60,
        "range": [
          40,
          80
        ],
        "detail": "Allowance of ¥3,000–6,000 each for à la carte plates and a drink; KABEAT publishes no set dinner price. Reserve a seat-only booking."
      },
      {
        "name": "Sat: Talk Shop American breakfast (×2)",
        "cost": 38.13,
        "range": [
          38.13,
          38.13
        ],
        "detail": "Published ¥2,860 each, ¥5,720 for two, including coffee and juice. Paid separately from the room."
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
        "detail": "Sandwich or onigiri, yogurt and a drink each, ¥900–1,500 per person."
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
        "name": "Mon: 7-Eleven breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from the 24-hour Kabutocho Tosho-mae store, ¥900–1,500 per person."
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
        "name": "Mon: Ristorante di Canaletto dinner (×2)",
        "cost": 70,
        "range": [
          60,
          90
        ],
        "detail": "Set menus and pasta or pizza mains are roughly ¥3,900–5,500 each plus a drink; confirm the current menu in the Disney app when Priority Seating opens."
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
        "detail": "Grab and go from KABUTO ONE (opens 6:00), ¥900–1,500 per person."
      },
      {
        "name": "Wed: Hachiri irori lunch (×2)",
        "cost": 87,
        "range": [
          87,
          113
        ],
        "detail": "Published seasonal course ¥6,500 each (¥13,000 for two), tax included; the top of the range is the limited ¥8,500 special course. Drinks extra. Reserve with the spa."
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
  {label:"🏨 Transfer to Hyatt (Caption, 6 nights)",pts:"−125,000",sub:"25k/night × 5 paid + 1 free (5th Night Free) = 125k",warn:true},
  {label:"📊 Total Chase Used",pts:"345,000 / 444,000",sub:"",bold:true},
  {label:"✅ Buffer Remaining",pts:"99,000",sub:"Growing ~20k/month from business spend",green:true},
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
        "detail": "Use your airline confirmations as the source of truth; no new points transfer or flight purchase needed."
      },
      {
        "id": "p4",
        "text": "Caption by Hyatt Kabutocho: Oct 23–29 — confirmed",
        "detail": "Hotel fixed. Save the existing confirmation; no new hotel booking or points transfer needed."
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
        "id": "b1",
        "text": "TODAY · Akiba Fukurou owl café — Sun Oct 25, 1:00pm",
        "detail": "Official site only: akiba2960.com/en. As of September 14 the 1:00pm session was the only Sunday slot left for two. ¥3,800 each. Arrive 10 minutes early; the door does not open once a session starts. Fallback if it is gone: Small Worlds miniature museum (¥3,200, no booking needed).",
        "links": [
          {
            "label": "Book the 1:00pm session",
            "url": "https://akiba2960.com/reservation/"
          },
          {
            "label": "English info",
            "url": "https://akiba2960.com/en/"
          }
        ]
      },
      {
        "id": "b2",
        "text": "JAPANKART go-karts — Sat Oct 24, 3:30pm",
        "detail": "Book at japankart.com (“Book now”, Akihabara / Asakusa 60min, Azumabashi shop). Oct 24 times are 12:00, 3:30 and 7:00pm; ¥10,000 each. Full refund if cancelled 24+ hours ahead.",
        "links": [
          {
            "label": "Book the Akihabara / Asakusa 60min tour",
            "url": "https://widgets.bokun.io/online-sales/42b9f122-22b1-4f6f-8e5f-f8b98311a262/experience/885784"
          }
        ]
      },
      {
        "id": "b3",
        "text": "International Driving Permits for both drivers (AAA)",
        "detail": "Required for JAPANKART: the 1949 Geneva Convention IDP from AAA, carried with your original US license (no temporary or paper licenses) and passport. Same day at an AAA branch, or allow a few weeks by mail. Missing documents means no driving and no refund.",
        "links": [
          {
            "label": "AAA International Driving Permit",
            "url": "https://www.aaa.com/vacation/idpf.html"
          }
        ]
      },
      {
        "id": "b4",
        "text": "Hakone Yuryo massages — Wed Oct 28, 1:45pm for two",
        "detail": "Booked separately from the private bath (TableCheck, Sep 27) and lunch (phone, Sep 27). Choose 2 people at 1:45pm on the English booking page; free account, ¥7,900 each, paid on site, no card needed.",
        "links": [
          {
            "label": "Book massages (English)",
            "url": "https://online.peakmanager.com/en/s3n0u2/book"
          }
        ]
      },
      {
        "id": "b5",
        "text": "KABEAT — Fri Oct 23, 7:00pm",
        "detail": "TableCheck: tablecheck.com/shops/kabeat/reserve. Choose the weekday seat-only plan. Reducing the party size on the day costs ¥3,000 per person; 15+ minutes late without calling may cancel.",
        "links": [
          {
            "label": "Book on TableCheck (English)",
            "url": "https://www.tablecheck.com/en/shops/kabeat/reserve"
          }
        ]
      },
      {
        "id": "b6",
        "text": "Call Tenichi — Sat Oct 24, 5:45pm",
        "detail": "Phone only: +81-3-3272-3677. They answer 11:00am–9:30pm Japan time, which is 10:00pm–8:30am Eastern. Ask for a table for two.",
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
      },
      {
        "id": "b7",
        "text": "Manten Sushi — Sun Oct 25, 5:00pm omakase",
        "detail": "TableCheck: tablecheck.com/en/shops/manten-sushi-nihonbashi/reserve. Pick the 5:00pm 90-minute omakase. Card required; same-day cancellation is charged the full course price.",
        "links": [
          {
            "label": "Book on TableCheck (English)",
            "url": "https://www.tablecheck.com/en/shops/manten-sushi-nihonbashi/reserve"
          }
        ]
      },
      {
        "id": "b8",
        "text": "Yakiniku Ushigoro Shinjuku 3-chome — Wed Oct 28, 5:30pm",
        "detail": "TableCheck: tablecheck.com/shops/ushigoro-shinjukusanchome/reserve. Seasonal Master course ¥15,800 each plus 5% service. Cancel or change by phone only (03-3358-4129); 30+ minutes late cancels.",
        "links": [
          {
            "label": "Book on TableCheck (English)",
            "url": "https://www.tablecheck.com/en/shops/ushigoro-shinjukusanchome/reserve"
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
        "text": "TPA rides both ways (Uber Reserve)",
        "detail": "Schedule the ~3:30am pickup on Thu Oct 22 and the ~10:45pm pickup at TPA on Thu Oct 29. Uber Reserve takes bookings up to 90 days ahead.",
        "links": [
          {
            "label": "Uber Reserve",
            "url": "https://www.uber.com/us/en/ride/uber-reserve/"
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
        "id": "c1",
        "text": "Wed Sep 23, 11am ET · Sumida Aquarium tickets (Sat Oct 24)",
        "detail": "Online tickets go on sale 30 days before. ¥2,700 each, non-refundable but the date can be changed. Optional: buying at the door on a normal Saturday is fine.",
        "links": [
          {
            "label": "Aquarium tickets (English)",
            "url": "https://en.sumida-aquarium.com/about/ticket/"
          }
        ]
      },
      {
        "id": "c2",
        "text": "Fri Sep 25, 9pm ET · Ristorante di Canaletto Priority Seating (Mon Oct 26, 5:00pm)",
        "detail": "Opens at 10:00am Japan time one month before, on the Tokyo Disney Resort Online Reservations site or app (MyDisney account). No fee; free cancellation up to 1 hour before.",
        "links": [
          {
            "label": "Disney Priority Seating (English)",
            "url": "https://reserve.tokyodisneyresort.jp/en/restaurant/search/"
          }
        ]
      },
      {
        "id": "c3",
        "text": "Sun Sep 27, 11am ET · Hakone Yuryo private bath (Wed Oct 28, 10:00am)",
        "detail": "Booked separately from the massages and lunch. Opens one month before (hour not published); if 10:00 is not selectable at 11am ET, try again at 4pm ET. Type 1, 120 minutes, ¥10,400 for the room; a card holds the booking and you pay on site.",
        "links": [
          {
            "label": "Book the private bath on TableCheck (English)",
            "url": "https://www.tablecheck.com/en/shops/hakoneyuryo/reserve"
          }
        ]
      },
      {
        "id": "c4",
        "text": "Sun Sep 27, 9pm ET · Romancecar both ways (Wed Oct 28)",
        "detail": "EMot Online Tickets (smartphone): Hakone 41 at 7:37am from Shinjuku (arrives 9:22) and Hakone 36 at 3:13pm from Hakone-Yumoto (arrives 4:46). About ¥2,470 each way per person. Changes free until departure; ¥100 per seat to refund.",
        "links": [
          {
            "label": "EMot Online Tickets (phone, English)",
            "url": "https://www.emot-tickets.jp/express-menu?language=en"
          },
          {
            "label": "e-Romancecar (computer, English)",
            "url": "https://www.web-odakyu.com/e-romancecar/?language=en"
          }
        ]
      },
      {
        "id": "c5",
        "text": "Sun Sep 27, 10:30pm ET · Call Hachiri for lunch (Wed Oct 28, 12:30pm)",
        "detail": "Phone only: +81-460-85-8411 (restaurant bookings 11:30am–7:00pm Japan time, from one month before). Autumn Irori Course ¥6,500 each.",
        "links": [
          {
            "label": "Call +81-460-85-8411",
            "url": "tel:+81460858411"
          },
          {
            "label": "Restaurant page (English)",
            "url": "https://www.hakoneyuryo.jp/english/restaurant/"
          }
        ]
      },
      {
        "id": "c6",
        "text": "Mon Oct 12, 11am ET · Shibuya Sky (Tue Oct 27, 4:00–4:40pm entry)",
        "detail": "Online sales open at midnight Japan time two weeks before, and sunset slots sell out within hours, so be online right at 11am ET. The ticket page is in Japanese; tickets for entry after 3pm are ¥3,400 each. Free cancellation until the day before.",
        "links": [
          {
            "label": "Shibuya Sky tickets",
            "url": "https://www.shibuya-scramble-square.com/sky/ticket/"
          }
        ]
      },
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
        "detail": "Talk Shop breakfast, Nakamise stalls, Hokkaido Milk Bar, Rokurinsha, FamilyMart and 7-Eleven mornings, Gyukatsu Ichinisan, Tsukiji market, Gyozaro, I’m donut? and Marion Crepes, Uobei, Hoshino Coffee, and DisneySea lunch in the app."
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
        "detail": "Add Suica to Apple Wallet before you leave and top it up with your US card; no physical card or ticket machines needed. Use the shared transit allowance for airport, Disney and Tokyo trains; top-ups are not extra fares on top of those journeys. Verify the actual data plan and device compatibility.",
        "links": [
          {
            "label": "Airalo Japan eSIM",
            "url": "https://www.airalo.com/japan-esim"
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
];;;

const PACK_DATA=[
  {cat:"📄 Documents & Money",items:[
    {id:"k1",text:"Both passports (valid through April 2027+)"},
    {id:"k2",text:"International Driving Permit (IDP) — for go-kart",detail:"Keep with your US driver's license. You need both documents at the go-kart rental counter."},
    {id:"k3",text:"US Driver's License (alongside IDP)"},
    {id:"k4",text:"Credit cards — Chase Sapphire + 1 backup",detail:"Chase Sapphire Reserve earns 3x on dining and travel — use it for all Japan spending to earn points back. Bring a Visa and a Mastercard if possible since acceptance varies."},
    {id:"k5",text:"Flight + hotel confirmations (offline / printed)"},
    {id:"k6",text:"All activity confirmations (screenshots or printed)"},
    {id:"k7",text:"Small amount of yen cash",detail:"Get ¥20,000-30,000 from a 7-Eleven ATM in Japan on arrival — most reliable option for foreign cards. Alternatively get a small amount (~$100) exchanged at home before leaving."},
  ]},
  {cat:"📱 Tech",items:[
    {id:"k8",text:"Both iPhones — eSIM installed, Suica loaded in Wallet",detail:"eSIM should be installed (Airalo) but not yet activated. Suica in Apple Wallet with ¥6,000 loaded. Double-check both before leaving the house."},
    {id:"k9",text:"Portable charger / power bank (fully charged)",detail:"Essential. Long days in Tokyo mean heavy phone use for Google Maps, translations, Tokyo Disney app, and photos. Bring a power bank that holds at least 2 full phone charges."},
    {id:"k10",text:"Charging cables (USB-C + any other needed)"},
    {id:"k11",text:"Power brick / wall charger",detail:"No adapter needed — Japan uses Type A plugs, identical to US outlets. Your US charger works directly. Japan runs on 100V (vs US 110V) but all modern electronics handle this without issue."},
    {id:"k12",text:"Noise-canceling headphones",detail:"Essential for the 13.5-hour DTW→HND flight and the 11-hour return. Worth packing regardless of space."},
    {id:"k13",text:"Neck pillow (for the long-haul flights)"},
  ]},
  {cat:"👟 Clothing — Late Oct Tokyo (~59–72°F / 15–22°C)",items:[
    {id:"k14",text:"Comfortable walking shoes — slip-on/off preferred",detail:"You'll walk 10-15 miles per day easily. And you'll remove your shoes multiple times throughout the trip (restaurants, spas, some experiences). Easy slip-on shoes over lace-up sneakers is the right call."},
    {id:"k15",text:"Light jacket or fleece for evenings",detail:"Late October daytime is 15-22°C (59-72°F) — comfortable. But evenings drop. A light jacket or medium fleece covers this perfectly."},
    {id:"k16",text:"Comfortable layering tops",detail:"Days can be warm (especially inside DisneySea, walking Tsukiji early morning). Layers you can tie around your waist are practical."},
    {id:"k17",text:"Workout clothes + gym shoes",detail:"You're working out daily. Bring enough for 5 workout sessions. Hotel laundry is available if needed."},
    {id:"k18",text:"1 nicer outfit for the omakase farewell dinner",detail:"Omakase sushi is not formal, but it's an occasion. Smart casual is appropriate — no athletic wear. One nicer outfit covers this."},
    {id:"k19",text:"Shorts or easy-change pants for teamLab water room",detail:"The water room at teamLab Planets gets your legs wet to the knee. Wear shorts or bring a separate change of pants in your day bag for Sunday."},
    {id:"k20",text:"Plenty of socks (more than you think)",detail:"You'll remove your shoes often. Having clean socks matters more in Japan than most destinations. Pack extra."},
    {id:"k21",text:"Disney day outfit — ultra comfortable",detail:"You'll walk 20,000+ steps at DisneySea. Prioritize your most comfortable shoes and clothes for Monday Oct 26."},
  ]},
  {cat:"🎒 Day Bag Essentials",items:[
    {id:"k22",text:"Small backpack or crossbody bag",detail:"Necessary for daily activities — carries your power bank, water, snacks from convenience stores, activity tickets, and any purchases. Something you can carry all day comfortably."},
    {id:"k23",text:"Reusable tote bag",detail:"Japan charges for plastic bags at convenience stores and many shops. A reusable bag takes up no space and is useful constantly."},
    {id:"k24",text:"Collapsible water bottle",detail:"Vending machines with cold/hot drinks are everywhere in Japan (every few hundred feet). But having your own bottle for water is still useful, especially at DisneySea where drink prices are high."},
    {id:"k25",text:"Small zip-lock bags (2-3)",detail:"For snacks, wet items from teamLab, collecting trash between bins, and keeping things dry if it rains."},
  ]},
  {cat:"💊 Health & Toiletries",items:[
    {id:"k26",text:"Any prescription medications",detail:"Bring in original labeled bottles. Some common US medications are restricted in Japan (certain ADHD medications, some cold medications with pseudoephedrine). Check the Japan customs website if you're unsure about specific prescriptions."},
    {id:"k27",text:"Sunscreen",detail:"October sun in Tokyo is mild but you'll be outside a lot. SPF 30 minimum."},
    {id:"k28",text:"Motion sickness medication (optional)",detail:"If you're prone to motion sickness, bring Dramamine or similar for the go-kart and potentially turbulent DisneySea rides (Tower of Terror is a drop ride). Easy to take 30 min before."},
    {id:"k29",text:"Basic personal toiletries",detail:"Hotels provide: shampoo, conditioner, body wash, toothbrush, toothpaste, razor, comb. Bring anything specific you prefer (face wash, moisturizer, contact lens supplies)."},
    {id:"k30",text:"Small hand sanitizer for food market days",detail:"Useful at Tsukiji and Ameya-Yokocho when you're eating from stalls and vendors."},
  ]},
  {cat:"✈️ Flight Comfort (13.5 hrs in economy)",items:[
    {id:"k31",text:"Compression socks — wear on both long-haul legs",detail:"Genuinely reduces swelling and discomfort on 13+ hour flights. Wear them from departure, not just when you feel uncomfortable."},
    {id:"k32",text:"Eye mask",detail:"The cabin lights go down but never fully off. An eye mask gets you to actual sleep on the overnight portions."},
    {id:"k33",text:"Snacks from home",detail:"Delta economy meal service covers the basics but bring 2-3 snacks you enjoy for the 13.5-hour haul. Protein bars, nuts, anything compact."},
    {id:"k34",text:"Empty water bottle for the flight",detail:"Fill after security at TPA and DTW. Flight attendants are attentive but having your own bottle means you don't have to wait for service when you're thirsty at 2am over the Pacific."},
    {id:"k35",text:"Lip balm + hand lotion",detail:"Aircraft air is extremely dry. A small tube of each makes a 13-hour flight noticeably more comfortable."},
  ]},
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
  if(/Caption by Hyatt|Hotel Gym|Hotel Full Meal|Quick Hotel|Check In/i.test(title))return "Caption by Hyatt Kabutocho Tokyo";
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
  const[planChecked,setPlanChecked]=useState(new Set(["p1","p4","p5","p10"]));
  const[packChecked,setPackChecked]=useState(new Set());
  const day=DAYS[activeDay];
  const theme=THEME[day.type]||THEME.tokyo;
  const{low,high,mid}=calcBudgetTotal();
  const togglePlan=(id)=>{const n=new Set(planChecked);n.has(id)?n.delete(id):n.add(id);setPlanChecked(n);};
  const togglePack=(id)=>{const n=new Set(packChecked);n.has(id)?n.delete(id):n.add(id);setPackChecked(n);};
  const planTotal=PLAN_DATA.reduce((s,ph)=>s+ph.items.length,0);
  const packTotal=PACK_DATA.reduce((s,cat)=>s+cat.items.length,0);

  return(
    <div style={{fontFamily:"system-ui,-apple-system,sans-serif",background:"#f8fafc",minHeight:"100vh"}}>
      <div style={{background:view==="budget"?"#1e293b":theme.headerBg,padding:"20px 16px 14px",transition:"background 0.3s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{color:"#fff",fontSize:20,fontWeight:700,letterSpacing:"-0.3px"}}>🇯🇵 Japan Anniversary</div>
            <div style={{color:"rgba(255,255,255,0.7)",fontSize:13,marginTop:2}}>Oct 22–29 · Delta via Virgin Atlantic · Caption by Hyatt</div>
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
            🚨 DO NOW: Transfer 220,000 Chase → Virgin Atlantic Flying Club while 30% bonus is live. Book Delta flights immediately after transfer clears.
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"10px 12px",marginTop:8,fontSize:12,color:"#14532d",lineHeight:1.5}}>
            🏨 THEN: Transfer 125,000 Chase → World of Hyatt. Book Caption by Hyatt Kabutocho Oct 23–29 (6 nights). Confirm 5th Night Free shows in checkout before completing transfer.
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
            <div style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4}}>{planChecked.size} of {planTotal} items done · tap any item to check off</div>
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
                  const done=planChecked.has(item.id);
                  return(
                    <div key={item.id} style={{borderTop:`1px solid #f1f5f9`}}>
                      <button onClick={()=>togglePlan(item.id)} style={{width:"100%",textAlign:"left",padding:"12px 16px",background:"none",border:"none",cursor:"pointer",display:"flex",gap:12,alignItems:"flex-start"}}>
                        <div style={{width:20,height:20,borderRadius:6,border:`2px solid ${done?"#059669":"#d1d5db"}`,background:done?"#059669":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                          {done&&<span style={{color:"#fff",fontSize:12,fontWeight:700}}>✓</span>}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:13,fontWeight:500,color:done?"#9ca3af":"#374151",textDecoration:done?"line-through":"none",lineHeight:1.4}}>{item.text}</div>
                          {item.detail&&!done&&<div style={{fontSize:11,color:"#9ca3af",marginTop:3,lineHeight:1.4}}>{item.detail}</div>}
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
            <div style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4}}>{packChecked.size} of {packTotal} packed · tap to check off</div>
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
