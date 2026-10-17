// Existing checklist ids are retained to preserve saved progress.
export const BUDGET_CATEGORIES = [
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
        "detail": "Already booked through Virgin Atlantic for 285,000 points plus paid taxes. The earlier plan used a 30% transfer bonus; this is historical information, not an instruction to transfer more points or a current offer.",
        "id": "points-0",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Checked bags — 1 per person, international legs",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Delta economy international includes 1 checked bag per person on the long-haul legs. No separate bag fee. 2nd bag would be $100/person if needed.",
        "id": "points-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Meals on international flights",
        "free": true,
        "freeLabel": "Included",
        "detail": "Full meal service on Delta international economy flights. Served on both the outbound (DTW→HND) and return (HND→MSP) long-haul legs.",
        "id": "points-2",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Hyatt Centric Ginza — 6 nights — BOOKED",
        "free": true,
        "freeLabel": "Points",
        "detail": "Booked with World of Hyatt points, Oct 23–29 (check-out noon Thursday). Service charge, tax and the ¥200/night accommodation tax are covered on award nights; incidentals are not.",
        "id": "points-3",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Hotel gym access — all week",
        "free": true,
        "freeLabel": "Included",
        "detail": "Fitness center included in hotel stay. Confirm hours at check-in to plan morning workout sessions.",
        "id": "points-4",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
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
        "detail": "$110.86 already paid at booking — taxes and fees for both passengers round trip. No further flight fees beyond baggage.",
        "id": "pretrip-0",
        "paidUsd": 110.86,
        "dueUsd": 0,
        "paymentNote": "Recorded paid in the itinerary.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Checked bag — 1 per person included (23kg/50lbs)",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Your Virgin Atlantic booking screen confirmed: 1 x 23kg checked bag included per person for the international itinerary. The domestic connection legs (TPA→DTW and MSP→TPA) are covered because they're part of an international ticket.",
        "id": "pretrip-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Carry-on + personal item — check Delta allowance",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Check Delta's operating-carrier allowance and your ticket. Published carry-on dimensions: 56 × 35 × 23cm including wheels/handles, plus one personal item. Do not assume a Virgin Atlantic 10kg cap applies to Delta-operated flights. https://www.delta.com/us/en/baggage/carry-on-baggage",
        "id": "pretrip-2",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "2nd checked bag — if needed",
        "cost": 0,
        "optional": true,
        "optionalNote": "$100/person if needed",
        "detail": "A 2nd 23kg checked bag costs $100 per person if you need it. For a week in Tokyo, one bag each should be plenty.",
        "id": "pretrip-3",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Ubigi Japan Unlimited eSIM, 8 days × 2 people",
        "cost": 43,
        "range": [
          43,
          50
        ],
        "detail": "$25 per phone list price (checked Oct 11). With Ubigi’s codes: $22.50 for the first phone (WELCOME10) and $20 for the second (your referral code, 20% off), so about $42.50 total. 5 GB a day at full speed, then 2 Mbps. Docomo + KDDI. The 8 days start when it first connects in Japan.",
        "id": "pretrip-4",
        "paidUsd": 0,
        "dueUsd": 43,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          43,
          50
        ]
      },
      {
        "name": "International Driving Permits (AAA × 2 drivers) — DONE",
        "cost": 40,
        "range": [
          40,
          40
        ],
        "detail": "$20 per permit, $40 for both drivers, plus any passport photos.",
        "id": "pretrip-5",
        "paidUsd": 40,
        "dueUsd": 0,
        "paymentNote": "Recorded obtained; $40 allowance, excludes photos. Verify receipt.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Travel insurance — both passengers",
        "cost": 200,
        "range": [
          150,
          300
        ],
        "optional": true,
        "detail": "Verify actual medical, evacuation and activity coverage in your policy/card benefits, including public-road go-karting. No coverage is assumed here. Budget is a placeholder, not a quote.",
        "id": "pretrip-6",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          150,
          300
        ]
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
        "detail": "UberX reserved for a 4:00am pickup, quoted $14.95. You reach TPA about 4:10 for the 6:00am flight.",
        "id": "airport_tampa-0",
        "paidUsd": 14.95,
        "paidEstimated": true,
        "dueUsd": 0,
        "paymentNote": "Reported one Uber paid; assigned to Thursday airport pickup based on your earlier message. Amount uses the quote, not a receipt.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Bag check at TPA and DTW hub",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Delta economy international includes 1 checked bag per person. No fee at TPA or the Detroit connection.",
        "id": "airport_tampa-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "TSA PreCheck (if you don't have it)",
        "cost": 0,
        "optional": true,
        "optionalNote": "$78/person if needed",
        "detail": "5-year membership at tsa.gov. Worth it for future travel too.",
        "id": "airport_tampa-2",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Uber home from TPA (Thu Oct 29, ~11:30pm)",
        "cost": 20,
        "range": [
          15,
          35
        ],
        "detail": "Choose a flight-linked pickup with a baggage buffer or request after collecting bags. Do not assume you can be outside 20 minutes after landing.",
        "id": "airport_tampa-3",
        "paidUsd": 0,
        "dueUsd": 20,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          15,
          35
        ]
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
        "cost": 80,
        "range": [
          55,
          85
        ],
        "detail": "Local transit allowance: ¥12,000 for two (¥6,000 each), about $80 at the planning rate. This excludes separately budgeted airport rides and Hakone base fares. Suica is the payment method for all of these; top-ups are not additional spending. Unused balance is not a fare.",
        "id": "transport_japan-0",
        "paidUsd": 0,
        "dueUsd": 80,
        "paymentNote": "Allowance, not a card purchase or confirmed fare total.",
        "dueRange": [
          55,
          85
        ]
      },
      {
        "name": "Airport train, both ways (× 2)",
        "cost": 15,
        "range": [
          15,
          15
        ],
        "detail": "Keikyu/Toei Asakusa Line, no changes: Haneda T3 ⇄ Higashi-ginza, ¥547 each way per person by Suica. ¥2,188 for both of you both ways, about $15 at ¥150/$1.",
        "id": "transport_japan-1",
        "paidUsd": 0,
        "dueUsd": 15,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          15,
          15
        ]
      },
      {
        "name": "Hakone Romancecar round trip (× 2) — BOOKED",
        "cost": 65,
        "range": [
          65,
          65
        ],
        "detail": "Paid: ¥4,600 for reserved seats both ways. Plus the base fare on Suica, about ¥1,270 each per ride (¥5,080 for four rides). About ¥9,680 total, $65 at ¥150/$1.",
        "id": "transport_japan-2",
        "paidUsd": 30.666666666666668,
        "dueUsd": 33.86666666666667,
        "paymentNote": "Reserved-seat tickets paid; estimated base fares still due on Suica.",
        "dueRange": [
          33.86666666666667,
          33.86666666666667
        ],
        "paidYen": 4600,
        "dueYen": 5080
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
        "detail": "Free to enter and walk. Pay only for what you eat (in food budget).",
        "id": "act_tokyo-0",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Senso-ji Temple, Asakusa — entry",
        "free": true,
        "freeLabel": "FREE",
        "detail": "Free to enter grounds, gate, pagoda, and main hall.",
        "id": "act_tokyo-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Sat: Sumida Aquarium (× 2) — BOOKED",
        "cost": 36,
        "range": [
          32,
          42
        ],
        "detail": "Paid: ¥5,400 for two tickets at ¥2,700 each, about $36 at ¥150/$1.",
        "id": "act_tokyo-2",
        "paidUsd": 36,
        "dueUsd": 0,
        "paymentNote": "Recorded paid: ¥5,400.",
        "dueRange": [
          0,
          0
        ],
        "paidYen": 5400,
        "dueYen": 0
      },
      {
        "name": "teamLab Planets, Toyosu (× 2) — BOOKED",
        "cost": 72,
        "range": [
          64,
          78
        ],
        "booked": true,
        "detail": "Booked for 8:00am on Sun Oct 25. Keep this planning amount until you add the exact receipt total; enter barefoot and allow 1.5–2 hours.",
        "id": "act_tokyo-3",
        "paidUsd": 72,
        "dueUsd": 0,
        "paymentNote": "Already purchased; amount is still an estimate. Replace with receipt total.",
        "dueRange": [
          0,
          0
        ],
        "paidEstimated": true
      },
      {
        "name": "Sat: JAPANKART 60-minute go-karts (× 2) — BOOKED",
        "cost": 133,
        "range": [
          133,
          133
        ],
        "booked": true,
        "detail": "Paid: ¥20,000 for the 60-minute tour for two, about $133 at ¥150/$1. Includes guide, kart, insurance, fuel, costumes and photos.",
        "id": "act_tokyo-4",
        "paidUsd": 133.33333333333334,
        "dueUsd": 0,
        "paymentNote": "Recorded paid: ¥20,000.",
        "dueRange": [
          0,
          0
        ],
        "paidYen": 20000,
        "dueYen": 0
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
        "detail": "Included in the selected JAPANKART tour; no separate costume or guide-photo charge.",
        "id": "act_tokyo-5",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Sun: Akiba Fukurou owl café (× 2)",
        "cost": 51,
        "range": [
          51,
          51
        ],
        "detail": "Booked for Sunday at 1:00pm. You confirmed this is already paid. ¥7,600 for two remains an estimate until the receipt amount is added.",
        "id": "act_tokyo-6",
        "paidUsd": 50.666666666666664,
        "paidEstimated": true,
        "dueUsd": 0,
        "paymentNote": "Payment confirmed by you; amount estimated at ¥7,600 / ¥150 per dollar.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Shibuya Sky observation deck (× 2) — BOOKED",
        "cost": 45,
        "range": [
          45,
          45
        ],
        "detail": "Paid: ¥6,800 for two adult tickets (¥3,400 each, 3pm-or-later entry), about $45 at ¥150/$1.",
        "id": "act_tokyo-7",
        "paidUsd": 45.333333333333336,
        "dueUsd": 0,
        "paymentNote": "Recorded paid: ¥6,800.",
        "dueRange": [
          0,
          0
        ],
        "paidYen": 6800,
        "dueYen": 0
      },
      {
        "name": "Tokyo DisneySea — 1-Day Passport (× 2) — BOOKED",
        "cost": 130,
        "range": [
          110,
          150
        ],
        "booked": true,
        "detail": "Tickets purchased for Mon Oct 26. Keep this planning amount until you add the exact receipt total; add both tickets to the Tokyo Disney Resort app before arriving.",
        "id": "act_tokyo-8",
        "paidUsd": 130,
        "dueUsd": 0,
        "paymentNote": "Already purchased; amount is still an estimate. Replace with receipt total.",
        "dueRange": [
          0,
          0
        ],
        "paidEstimated": true
      },
      {
        "name": "DisneySea Premier Access — optional",
        "cost": 53,
        "range": [
          40,
          80
        ],
        "optional": true,
        "detail": "Paid skip-the-line passes are ¥1,500–2,000 per person per ride. Two rides for two people (Fantasy Springs plus Soaring) is about ¥6,000–8,000; three rides about ¥12,000. Optional.",
        "id": "act_tokyo-9",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          40,
          80
        ]
      },
      {
        "name": "Hakone Yuryo private onsen — 120 min — BOOKED",
        "cost": 70,
        "range": [
          68,
          82
        ],
        "detail": "Booked for Wed Oct 28, 10:00am: ¥10,400 for the room, paid on site. Towels and amenities included; optional yukata ¥100 each.",
        "id": "act_tokyo-10",
        "paidUsd": 0,
        "dueUsd": 69.33333333333333,
        "paymentNote": "Booked; room fee payable on site.",
        "dueRange": [
          69.33333333333333,
          69.33333333333333
        ],
        "paidYen": 0,
        "dueYen": 10400
      },
      {
        "name": "Hakone Yuryo full-body massages — 60 min (× 2)",
        "cost": 105,
        "range": [
          100,
          122
        ],
        "detail": "Verified Hogushian Yururuka rate: ¥7,900/person, ¥15,800 total. Request two therapists at the same time when reserving.",
        "id": "act_tokyo-11",
        "paidUsd": 0,
        "dueUsd": 105.33333333333333,
        "paymentNote": "Booked; two treatments payable on site.",
        "dueRange": [
          105.33333333333333,
          105.33333333333333
        ],
        "paidYen": 0,
        "dueYen": 15800
      },
      {
        "name": "Hotel gym access — all week",
        "free": true,
        "freeLabel": "Included",
        "detail": "Fitness center included in the hotel stay. Confirm hours at check-in.",
        "id": "act_tokyo-12",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
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
        "name": "Fri: Kushiyaki Bistro Fukumimi yakitori (×2) — BOOKED",
        "cost": 60,
        "range": [
          55,
          67
        ],
        "detail": "Booked, seats only. ¥880 Tabelog fee already paid; at the restaurant, skewers or the ¥3,850-per-person set plus a ¥660-per-person table charge and drinks: about ¥8,000–10,000 for two.",
        "id": "food_all-0",
        "paidUsd": 5.866666666666666,
        "dueUsd": 60,
        "paymentNote": "¥880 booking fee paid; meal and table charges still due.",
        "dueRange": [
          55,
          67
        ],
        "paidYen": 880
      },
      {
        "name": "Sat: Furutoshi hotel breakfast (×2)",
        "cost": 37.33,
        "range": [
          37.33,
          40
        ],
        "detail": "About ¥2,800 each (¥5,600 for two), walk-in.",
        "id": "food_all-1",
        "paidUsd": 0,
        "dueUsd": 37.33,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          37.33,
          40
        ]
      },
      {
        "name": "Sat: Nakamise street snacks (×2)",
        "cost": 11,
        "range": [
          7,
          16
        ],
        "detail": "Two or three snacks each at ¥200–600 apiece (ningyo-yaki, fried manju, senbei, melon-pan).",
        "id": "food_all-2",
        "paidUsd": 0,
        "dueUsd": 11,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          7,
          16
        ]
      },
      {
        "name": "Sat: Hokkaido Milk Bar (×2)",
        "cost": 12,
        "range": [
          9,
          15
        ],
        "detail": "Soft serve, milk pudding (¥650) or the milk tasting flight (¥880); about ¥700–1,100 each.",
        "id": "food_all-3",
        "paidUsd": 0,
        "dueUsd": 12,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          9,
          15
        ]
      },
      {
        "name": "Sat: Rokurinsha tsukemen (×2)",
        "cost": 23,
        "range": [
          20,
          27
        ],
        "detail": "Published bowls ¥1,200–1,500 plus a topping or egg each. Walk-in.",
        "id": "food_all-4",
        "paidUsd": 0,
        "dueUsd": 23,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          20,
          27
        ]
      },
      {
        "name": "Sat: Tenichi tempura dinner (×2)",
        "cost": 60,
        "range": [
          51,
          97
        ],
        "detail": "Published Fuji table set ¥3,850 each (¥7,700 for two); the top of the range is two counter courses at ¥7,260. Drinks extra. Planned walk-in; calling the branch is optional.",
        "id": "food_all-5",
        "paidUsd": 0,
        "dueUsd": 60,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          51,
          97
        ]
      },
      {
        "name": "Sun: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person.",
        "id": "food_all-6",
        "paidUsd": 0,
        "dueUsd": 16,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          12,
          20
        ]
      },
      {
        "name": "Sun: Gyukatsu Ichinisan lunch (×2)",
        "cost": 27,
        "range": [
          22,
          37
        ],
        "detail": "Published sets ¥1,630–2,760 each (¥3,260–5,520 for two), tax included. Walk-in.",
        "id": "food_all-7",
        "paidUsd": 0,
        "dueUsd": 27,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          22,
          37
        ]
      },
      {
        "name": "Sun: Manten Sushi omakase (×2)",
        "cost": 117,
        "range": [
          117,
          161
        ],
        "detail": "Recorded prepaid based on your recollection. The ¥17,600 food-only course for two is the estimate, not a verified receipt. Check whether your payment includes drinks or was only a deposit.",
        "id": "food_all-8",
        "paidUsd": 117.33333333333333,
        "paidEstimated": true,
        "dueUsd": 0,
        "paymentNote": "Reported likely prepaid; removed full meal allowance from future spending. Confirm full payment and any extras separately.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Mon: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person.",
        "id": "food_all-9",
        "paidUsd": 0,
        "dueUsd": 16,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          12,
          20
        ]
      },
      {
        "name": "Mon: DisneySea lunch + snacks, via the app (×2)",
        "cost": 44,
        "range": [
          31,
          60
        ],
        "detail": "Counter-service sets run ¥1,300–1,800 each; add ¥1,000–2,500 each for popcorn, churros and drinks through the day.",
        "id": "food_all-10",
        "paidUsd": 0,
        "dueUsd": 44,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          31,
          60
        ]
      },
      {
        "name": "Mon: Horizon Bay Restaurant dinner (×2) — BOOKED",
        "cost": 55,
        "range": [
          35,
          70
        ],
        "detail": "Priority Seating booked for 5:20pm; you pay at the restaurant. Set menus run roughly ¥2,500–4,500 each, plus drinks.",
        "id": "food_all-11",
        "paidUsd": 0,
        "dueUsd": 55,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          35,
          70
        ]
      },
      {
        "name": "Tue: Tsukiji market breakfast (×2)",
        "cost": 27,
        "range": [
          20,
          33
        ],
        "detail": "Grazing: tamagoyaki ¥300–600, onigiri ¥500–1,000, coffee ¥400–800, Shouro sando ¥800. About ¥1,500–2,500 each.",
        "id": "food_all-12",
        "paidUsd": 0,
        "dueUsd": 27,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          20,
          33
        ]
      },
      {
        "name": "Tue: Harajuku Gyozaro lunch (×2)",
        "cost": 16,
        "range": [
          13,
          21
        ],
        "detail": "Gyoza plates are about ¥350–400 for six; two plates, rice and a drink each is roughly ¥1,200 per person. Walk-in.",
        "id": "food_all-13",
        "paidUsd": 0,
        "dueUsd": 16,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          13,
          21
        ]
      },
      {
        "name": "Tue: I’m donut? + Marion Crepes (×2)",
        "cost": 15,
        "range": [
          11,
          19
        ],
        "detail": "A doughnut (¥300–500) and a crêpe (¥550–900) each.",
        "id": "food_all-14",
        "paidUsd": 0,
        "dueUsd": 15,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          11,
          19
        ]
      },
      {
        "name": "Tue: Uobei conveyor belt sushi (×2)",
        "cost": 30,
        "range": [
          20,
          40
        ],
        "detail": "Plates from ¥110 (¥132–297 tiers); ¥1,500–3,000 each for a full meal. Walk-in.",
        "id": "food_all-15",
        "paidUsd": 0,
        "dueUsd": 30,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          20,
          40
        ]
      },
      {
        "name": "Wed: FamilyMart breakfast (×2)",
        "cost": 16,
        "range": [
          12,
          20
        ],
        "detail": "Grab and go from FamilyMart Ginza Miyuki-dori (24 hours), ¥900–1,500 per person.",
        "id": "food_all-16",
        "paidUsd": 0,
        "dueUsd": 16,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          12,
          20
        ]
      },
      {
        "name": "Wed: Hachiri irori lunch (×2) — BOOKED",
        "cost": 80,
        "range": [
          80,
          90
        ],
        "detail": "Seasonal course booked at ¥6,000 each (¥12,000 for two), paid on site. Drinks extra.",
        "id": "food_all-17",
        "paidUsd": 0,
        "dueUsd": 80,
        "paymentNote": "Booked course for two; drinks extra.",
        "dueRange": [
          80,
          80
        ],
        "paidYen": 0,
        "dueYen": 12000
      },
      {
        "name": "Wed: Ushigoro wagyu yakiniku (×2)",
        "cost": 160,
        "range": [
          130,
          221
        ],
        "detail": "Recorded prepaid based on your recollection. $180 is the previous planning allowance, not the actual charge. Confirm the selected course, full payment versus deposit, and whether service and drinks are included.",
        "id": "food_all-18",
        "paidUsd": 180,
        "paidEstimated": true,
        "dueUsd": 0,
        "paymentNote": "Reported likely prepaid; removed full meal allowance from future spending. Actual charge and any extras still need the receipt.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Thu: Hoshino Coffee soufflé pancakes (×2)",
        "cost": 23,
        "range": [
          20,
          27
        ],
        "detail": "Soufflé pancakes about ¥1,000–1,300 plus coffee ¥600 each. Walk-in.",
        "id": "food_all-19",
        "paidUsd": 0,
        "dueUsd": 23,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          20,
          27
        ]
      },
      {
        "name": "Thu: Bincho hitsumabushi lunch (×2)",
        "cost": 73,
        "range": [
          60,
          87
        ],
        "detail": "Hitsumabushi sets are roughly ¥4,500–6,500 each at Ginza Mitsukoshi; confirm the current menu on arrival.",
        "id": "food_all-20",
        "paidUsd": 0,
        "dueUsd": 73,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          60,
          87
        ]
      },
      {
        "name": "All-week snacks + drinks (×2)",
        "cost": 53,
        "range": [
          40,
          73
        ],
        "detail": "Convenience-store drinks, vending machines, airport snacks and small extras across the week.",
        "id": "food_all-21",
        "paidUsd": 0,
        "dueUsd": 53,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          40,
          73
        ]
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
        "detail": "~$100-200 hold placed at check-in. Released at checkout if unused. Not a charge.",
        "id": "misc-0",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Hotel incidental spend (optional)",
        "cost": 60,
        "range": [
          0,
          200
        ],
        "optional": true,
        "detail": "Room service or other in-hotel charges. Optional.",
        "id": "misc-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          200
        ]
      },
      {
        "name": "Yen ATM fees (~5 withdrawals)",
        "cost": 20,
        "range": [
          15,
          28
        ],
        "detail": "Use 7-Eleven bank ATMs — reliably accept foreign cards. ~$3-5 fee per withdrawal.",
        "id": "misc-2",
        "paidUsd": 0,
        "dueUsd": 20,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          15,
          28
        ]
      },
      {
        "name": "Tips",
        "free": true,
        "freeLabel": "$0",
        "detail": "Tipping is not customary in Japan. Zero expected anywhere — restaurants, hotels, taxis, everywhere.",
        "id": "misc-3",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
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
        "detail": "Traditional fans, chopstick sets, ceramic items, Japanese snack boxes, matcha goods.",
        "id": "souvenirs-0",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Tokyo Solamachi / Akihabara / Harajuku",
        "cost": 50,
        "variable": true,
        "detail": "Japanese souvenirs and snacks, novelty items, Gundam and character goods, vintage fashion.",
        "id": "souvenirs-1",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      },
      {
        "name": "Haneda Airport duty-free (HND)",
        "cost": 75,
        "variable": true,
        "detail": "Japanese Kit Kat varieties (50+ flavors), Japanese whisky (Nikka, Suntory), premium skincare. Haneda has excellent duty-free.",
        "id": "souvenirs-2",
        "paidUsd": 0,
        "dueUsd": 0,
        "paymentNote": "Planning allowance; confirm actual bill.",
        "dueRange": [
          0,
          0
        ]
      }
    ]
  }
];
export const PLAN_DATA = [
  {
    "phase": "Confirmed arrangements",
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
        "detail": "Leave the Ginza hotel at 7:05am, arrive around 7:40–7:45 for 8:00 entry. Keep tickets privately available offline."
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
      },
      {
        "id": "b13",
        "text": "Kushiyaki Bistro Fukumimi — Fri Oct 23, 7:30pm — BOOKED",
        "detail": "Seats only for 2, booked on Tabelog (¥880 booking fee paid). Shoes off at the door, card only, table released after 15 minutes."
      }
    ]
  },
  {
    "phase": "Finish before departure",
    "bg": "#fef2f2",
    "border": "#fecaca",
    "text": "#7f1d1d",
    "items": [
      {
        "id": "final-caption",
        "text": "Verify old Caption hotel cancellation",
        "detail": "The itinerary still notes a cancellation deadline of Oct 21, 10:59am Eastern. Check the original confirmation for the actual deadline and retain the cancellation receipt. Do not cancel the booked Hyatt Centric Ginza."
      },
      {
        "id": "final-kabeat",
        "text": "Verify KABEAT cancellation",
        "detail": "Fukumimi is the booked Friday dinner. Check TableCheck for the superseded KABEAT booking and retain its cancellation confirmation."
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
        "detail": "Do not set an inflexible 11:30pm pickup for an 11:10 landing with checked bags. Choose an appropriate flight-linked airport pickup or request a car once bags are collected.",
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
    "phase": "At the park",
    "bg": "#fefce8",
    "border": "#fde68a",
    "text": "#713f12",
    "items": [
      {
        "id": "c7",
        "text": "Mon Oct 26 · Disney app and optional Premier Access",
        "detail": "Link both admission tickets and confirm the app works on both phones. After entering, choose optional Premier Access based on live availability and your 5:20pm dinner. Fantasy Springs currently has ordinary queues. Check current closures; Indiana Jones is closed during this trip.",
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
    "phase": "Walk-in plans",
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
        "detail": "Link both admission tickets and confirm the app works on both phones. After entering, choose optional Premier Access based on live availability and your 5:20pm dinner. Fantasy Springs currently has ordinary queues. Check current closures; Indiana Jones is closed during this trip.",
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
      },
      {
        "id": "final-calendar",
        "text": "Check calendar time zones and leave-by alerts",
        "detail": "Japanese appointments should be entered in Asia/Tokyo. Flight times use each airport's local zone. Add a leave-by reminder and a direct itinerary stop link. Your personal travel calendar has not been independently reconciled here."
      },
      {
        "id": "final-insurance",
        "text": "Verify medical, evacuation and kart coverage",
        "detail": "Read your actual policy/card benefits; do not assume general trip protection includes overseas medical care or public-road go-karting. Save the insurer's assistance number privately."
      },
      {
        "id": "final-pancakes",
        "text": "Confirm Thursday pancake breakfast menu",
        "detail": "Ask Hoshino Coffee Yaesu whether full soufflé pancakes are available at 8:30. Otherwise use a filling morning set; do not delay lunch or airport travel."
      },
      {
        "id": "final-offline",
        "text": "Test both phones with airplane mode",
        "detail": "Open the published itinerary online, wait for the offline-ready message under Help, then test reloading it without internet. Download the separate offline itinerary too. Save tickets privately; map routing and live availability still need internet."
      },
      {
        "id": "final-weather",
        "text": "Check outdoor plans and one simple rain fallback",
        "detail": "Check JAPANKART and Shibuya Sky operating notices the evening before and that morning. Preserve indoor shopping/rest as a fallback; follow the operator's booking terms rather than assuming automatic refunds."
      }
    ]
  }
];
export const PACK_DATA = [
  {
    "cat": "🛂 Documents & money — keep on you, never in a checked bag",
    "items": [
      {
        "id": "k1",
        "text": "Both passports",
        "detail": "Carry your original passports securely with you while in Japan; do not leave them in the hotel safe during outings. Keep backup copies separately. Confirm validity for your full stay."
      },
      {
        "id": "k36",
        "text": "Visit Japan Web QR codes — screenshot both",
        "detail": "Complete Visit Japan Web for both travelers and save each traveler's combined immigration/customs QR code privately offline. It is no longer a separate immigration code and customs code."
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
        "detail": "Save the hotel address privately and in the offline itinerary: ハイアット セントリック 銀座 東京（東京都中央区銀座6-6-7）. Hotel +81-3-6837-1234."
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
        "detail": "Check the appliance's rated voltage and manufacturer instructions. Japan uses 100V; do not assume every US styling tool is suitable simply because its plug fits."
      },
      {
        "id": "k60",
        "text": "Razor, nail clippers, feminine products",
        "detail": "Pack according to TSA and airline rules for the exact razor/blade type; do not assume all razors or nail clippers must be checked."
      }
    ]
  },
  {
    "cat": "💊 Medicine & first aid — carry-on",
    "items": [
      {
        "id": "k61",
        "text": "Japan medicine rules — check before you pack",
        "detail": "Check each medicine by active ingredient using Japan's official guidance: https://www.ncd.mhlw.go.jp/en/application2.html . Some substances are prohibited and others require advance permission even for short stays. Do not rely on a blanket one-month allowance; consult the authorities and your prescriber if uncertain."
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
