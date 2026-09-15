// Restaurant comparison data. Travel ranges and unquoted budgets are planning estimates.
export const sections = [
  {
    "id": 0,
    "day": "Fri",
    "meal": "Arrival dinner",
    "label": "Fri · Arrival dinner",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Hotel check-in",
    "advice": "KABEAT is selected. Alternatives are retained only in case you change your mind. Arrival timing is flexible; no restaurant is booked.",
    "options": [
      {
        "name": "KABEAT, Kabutocho / Chuo City",
        "description": "An easy first evening together: a broad Japanese-ingredient menu spanning Japanese, Chinese and Western styles. Choose grilled dishes and other non-soup plates rather than a noodle bowl.",
        "booking": "Weekday seat-only reservations available. Dinner seating maximum 120 minutes, not a required duration. Contact the venue if delayed; avoid a prepaid arrival-night course.",
        "budget": "¥3,000–6,000 allowance, not a menu quote",
        "travel": "W3–5",
        "style": "Non-soup choices",
        "photo": {
          "match": "KABEAT",
          "src": "https://kabeat.jp/assets/images/home/kv/01.jpg",
          "source": "https://kabeat.jp/",
          "caption": "KABEAT · official venue image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official menu",
            "url": "https://kabeat.jp/menu/"
          },
          {
            "label": "Reservations",
            "url": "https://www.tablecheck.com/en/shops/kabeat/reserve"
          }
        ],
        "current": false,
        "bookingStatus": "Seat-only reservations",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Western/Japanese fusion; leave specialist Japanese meals for later days.",
        "selected": true,
        "selectedStatus": "Chosen · to reserve",
        "reason": "Your confirmed choice: near the hotel with flexible non-soup dishes.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13265669/"
      },
      {
        "name": "Godaime Hanayama Udon, Nihonbashi",
        "description": "Very wide, silky onihimokawa noodles. A memorable shape and texture without committing to a long tasting menu.",
        "booking": "Wide-noodle specialist. Confirm dinner service and queue policy; a sellout or line is less forgiving after a flight.",
        "budget": "¥1,500–3,000",
        "travel": "W8–15",
        "style": "Dipping / broth optional",
        "photo": {
          "match": "Hanayama",
          "src": "https://www.hanayamaudon.co.jp/nihonbashi/images/index/syokuji-onihimo.jpg?20220111",
          "source": "https://www.hanayamaudon.co.jp/nihonbashi/",
          "caption": "Hanayama Nihonbashi · wide onihimokawa noodles"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.hanayamaudon.co.jp/nihonbashi/"
          }
        ],
        "current": false,
        "bookingStatus": "Queue / check policy",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "tradeoff": "A second noodle meal if retaining Saturday tsukemen.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13266849/"
      },
      {
        "name": "Nihonbashi Tamai, Main Shop",
        "description": "Anago, or saltwater conger eel, over rice. Traditional wooden-house setting.",
        "booking": "Call the main shop to confirm a dinner table, menu and last order. Do not confuse it with the Muromachi or Ginza branch.",
        "budget": "¥3,000–6,000",
        "travel": "W8–15",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://anago-tamai.com/en/nihonbashi/"
          }
        ],
        "current": false,
        "bookingStatus": "Call to reserve",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Conger eel is different from freshwater unagi, but still overlaps with a Thursday eel lunch.",
        "reason": "Traditional specialty near your hotel.",
        "tradeoff": "Less variety if you also choose eel on Thursday.",
        "photo": {
          "src": "https://anago-tamai.com/images/tenpo/honten/3.png",
          "source": "https://anago-tamai.com/en/nihonbashi/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13019904/"
      },
      {
        "name": "Taimeiken, Nihonbashi",
        "description": "Omurice and other yoshoku: Japan's own interpretation of Western comfort food.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥2,000–4,000",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.taimeiken.co.jp/index.html"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "tradeoff": "Longer walk; confirm current location and dinner service.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13252161/"
      },
      {
        "name": "Tenichi, Nihonbashi Takashimaya",
        "description": "Seafood and vegetable tempura, rice and sides. Choose a table set for value or a counter course to watch the frying.",
        "budget": "¥3,850 Fuji table set; counter from ¥7,260",
        "travel": "W10–15",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://tenichi.co.jp/shop/nihonbashi-takashimaya/"
          }
        ],
        "booking": "Call 03-3272-3677 or use the operator's reservation channel. Table last order 20:00; counter last order 19:30. Confirm your seating/menu and October date.",
        "bookingStatus": "Reserve recommended",
        "priceNote": "Published menu; drinks extra",
        "variety": "Adds tempura after Saturday noodles. Avoid a second tempura dinner Wednesday.",
        "recommended": false,
        "reason": "Best balance of cuisine variety, moderate cost and finishing near your hotel.",
        "tradeoff": "20:00 table last order makes flight delays awkward.",
        "photo": {
          "src": "https://tenichi.co.jp/wp-content/uploads/2026/06/dsc_0208_1024-2-e1786686940467.jpg",
          "source": "https://tenichi.co.jp/shop/nihonbashi-takashimaya/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13247938/",
        "experience": "Chef fries each piece at the counter"
      },
      {
        "name": "Hinozen, Ningyocho Honten",
        "description": "Charcoal-grilled fish skewers and shareable izakaya dishes. Choose a cooked-fish main plus rice, rather than only small nibbles.",
        "budget": "¥3,500–6,000",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://hinozen-ningyocho.com/dinner/"
          }
        ],
        "booking": "Use the official reservation link; confirm Saturday dinner hours, cover charge and menu. Budget allows a meal but not unlimited drinks.",
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "Cooked seafood is distinct from sushi, though charcoal cooking overlaps with Hakone's irori lunch.",
        "reason": "Relaxed shared-plate alternative.",
        "tradeoff": "Ordering is less predictable in cost than a fixed set.",
        "recommended": false,
        "photo": {
          "src": "https://hinozen-ningyocho.com/wp-content/uploads/2026/01/TK1_0507-1024x683.jpg",
          "source": "https://hinozen-ningyocho.com/dinner/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130204/13116078/"
      }
    ],
    "theme": "Modern Japanese small plates, near the hotel"
  },
  {
    "id": 1,
    "day": "Thu",
    "meal": "Breakfast",
    "label": "Thu · Breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel, before Ginza",
    "advice": "Hoshino Coffee is chosen: oven-baked soufflé pancakes from 8:00 in the Yaesu underground mall, then two stops to the Ginza shops. Walk-in.",
    "options": [
      {
        "name": "Hoshino Coffee, Yaesu Underground Mall",
        "description": "Hoshino’s signature oven-baked soufflé pancakes, thick and jiggly, with coffee. A café chain, but the pancakes are the real thing and it opens early.",
        "budget": "¥1,200–1,800",
        "travel": "W15–20",
        "sources": [
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1302/A130201/13262535/"
          },
          {
            "label": "Hoshino Coffee official",
            "url": "https://www.hoshinocoffee.com/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No reservations",
        "booking": "Yaesu Underground Mall (Yaechika) B1, Tokyo Station Yaesu side; open 8:00–21:30 daily. Walk-in. The Kanda branch opens at 7:00 if you want it even earlier. Confirm the pancakes are served with the morning menu when you arrive.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Soufflé pancakes; the Western breakfast of the week.",
        "reason": "The only soufflé pancakes open early enough for your 9:00 breakfast and the Bincho lunch.",
        "tradeoff": "A chain café in an underground mall, not a destination room.",
        "recommended": true,
        "experience": "Oven-baked soufflé pancakes",
        "verification": "Hours checked on Tabelog; pancake availability at 9am likely, confirm on arrival",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130201/13262535/",
        "selected": true,
        "selectedStatus": "Chosen · walk-in"
      },
      {
        "name": "A Happy Pancake, Ginza",
        "description": "The tall, wobbly soufflé pancakes Japan is known for, in Ginza. Sweet stacks with butter cream, or savory ones until 2:30pm.",
        "budget": "¥1,400–2,200",
        "travel": "T15–20",
        "sources": [
          {
            "label": "Official web booking",
            "url": "https://magia.tokyo/reserve/?m=home"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1301/A130101/13215803/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Reservations available",
        "booking": "New Ginza Building 10-gokan 7F-B, Ginza 5-8-5, 170 m from Ginza Station exit A5. Open 10:30am–7:30pm; pancake ¥1,390, drink set +¥390. Weekday web booking on the official site; walk-ins check in by QR code at the 1F elevator.",
        "priceNote": "Published prices",
        "variety": "Soufflé pancakes; the Western breakfast of the week.",
        "reason": "The classic wobbly soufflé pancake, and it takes reservations.",
        "tradeoff": "Opens 10:30, so it becomes brunch and replaces the Bincho lunch; lunch would then be at Haneda.",
        "experience": "Tall wobbly soufflé pancakes",
        "verification": "Hours and prices checked on Tabelog; web booking likely",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1301/A130101/13215803/",
        "selected": false
      },
      {
        "name": "bills, Ginza",
        "description": "Ricotta pancakes or a Western egg breakfast; choose a full dish and drink.",
        "budget": "¥3,000–5,000",
        "travel": "T15–20",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.billsjapan.com/jp/locations/ginza"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Reservations available",
        "booking": "Opens 08:30 daily. Reserve via the official site, not an unapproved reseller. Keeps breakfast in Ginza before your shopping stop.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Backup: famous ricotta pancakes, open from 8:30, but not the tall soufflé kind.",
        "tradeoff": "Fluffy, but not the wobbly soufflé style you asked for.",
        "recommended": false,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1301/A130101/13199825/",
        "selected": false
      }
    ],
    "theme": "Soufflé pancakes"
  },
  {
    "id": 2,
    "day": "Sat",
    "meal": "Optional Asakusa treat",
    "label": "Sat · Optional Asakusa treat",
    "origin": "Sensoji Temple Tokyo",
    "originLabel": "Senso-ji main hall",
    "advice": "Two chosen stops: Nakamise stalls on the way out of the temple (~9:30), then Hokkaido Milk Bar at 10:00 before the walk to Skytree. The others stay as alternatives.",
    "options": [
      {
        "name": "Nakamise street stalls, Asakusa",
        "description": "Snack your way along the approach to Senso-ji: ningyo-yaki (little red-bean sponge cakes), fried manju, grilled senbei, and Kagetsudo’s melon-pan by the gate. Buy, step beside the stall, eat, move on.",
        "budget": "¥500–1,200",
        "travel": "W0–5",
        "sources": [
          {
            "label": "Nakamise shopping street (official)",
            "url": "https://www.asakusa-nakamise.jp/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in treat",
        "booking": "About 90 stalls on the street between Kaminarimon and the temple; most open 9–10am, so snack on the way out around 9:30. No eating while walking.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Street snacks, different from every other treat this week.",
        "reason": "Your pick: the street vendors by the temple.",
        "tradeoff": "Stalls are still opening at 8:15; the treat happens at the end of the temple visit.",
        "selected": true,
        "selectedStatus": "Chosen · walk-in",
        "experience": "Street stalls on the temple approach",
        "verification": "Hours from the street association site; individual stalls vary",
        "checked": "2026-09-14"
      },
      {
        "name": "Hokkaido Milk Bar, Asakusa",
        "description": "All-Hokkaido dairy a few minutes west of the temple on Nishi-Sando: soft serve, milk pudding, a three-milk tasting flight, cream buns and milkshakes.",
        "budget": "¥700–1,100",
        "travel": "W3–5",
        "sources": [
          {
            "label": "Official site (hours)",
            "url": "https://hokkaido-milkbar.com/"
          },
          {
            "label": "Tabelog",
            "url": "https://tabelog.com/en/tokyo/A1311/A131102/13308223/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in treat",
        "booking": "Asakusa 2-7-13, on the Nishi-Sando shopping street, stall 北15. Official hours 10:00–17:00 daily (some listings show 9:00–9:30 weekend openings). Walk-in; small shop, short waits possible.",
        "priceNote": "Published item prices",
        "variety": "Dairy dessert, different from the Nakamise snacks.",
        "reason": "Your pick from the Maps link; slots in at 10:00 before the walk to Skytree.",
        "tradeoff": "Opens at 10:00, so it is the last stop in Asakusa rather than a mid-temple snack.",
        "selected": true,
        "selectedStatus": "Chosen · walk-in",
        "experience": "Hokkaido soft serve and a milk tasting flight",
        "verification": "Hours from the official site; Tabelog page matched",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13308223/"
      },
      {
        "name": "Suzukien, Asakusa",
        "description": "Compare matcha gelato intensities together, from gentler green tea to deeply bitter matcha.",
        "budget": "¥500–1,000",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "current": false,
        "travel": "W5–10",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official store",
            "url": "https://www.suzukien.tokyo/view/company"
          },
          {
            "label": "seven-intensity information",
            "url": "https://suzukien.tokyo/view/news/list"
          }
        ],
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Matcha intensity tasting is the most distinctive shared treat.",
        "tradeoff": "A queue can eat into your aquarium/lunch buffer.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13153620/",
        "experience": "Seven matcha intensities"
      },
      {
        "name": "Asakusa Umezono, Main Shop",
        "description": "Warm awa-zenzai: millet-based mochi with smooth sweet red bean. More traditional and different from your other desserts.",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "budget": "¥800–1,500",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "photo": {
          "match": "Umezono",
          "src": "https://www.asakusa-umezono.co.jp/hpcms/wp-content/uploads/2015/06/awazenzai.jpg",
          "source": "https://www.asakusa-umezono.co.jp/awazenzai/",
          "caption": "Umezono · awa-zenzai, mochi with sweet red bean"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.asakusa-umezono.co.jp/awazenzai/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13003670/"
      },
      {
        "name": "Funawa, Main Shop",
        "description": "Sweet-potato yokan or a Japanese sweets plate.",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "budget": "¥400–1,500",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official café",
            "url": "https://funawa.jp/fr/127"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13003683/"
      },
      {
        "name": "Asakusa Kagetsudo, Kaminarimon branch",
        "description": "Large melon-pan with a crisp, sweet crust. Easy to split.",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "budget": "¥400–900",
        "travel": "W12–18",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Local merchants' listing",
            "url": "https://asakusa-shoren.jp/en/stores/1435/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13161092/"
      },
      {
        "name": "Asakusa Silk Purin",
        "description": "Japanese custard pudding. Black sesame or the listed October pumpkin flavor would add variety; confirm seasonal stock.",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "budget": "¥500–900",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official flavors",
            "url": "https://silkpurin.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13041523/"
      },
      {
        "name": "Kaminari Issa, Asakusa Main Shop",
        "description": "Matcha sweets, with an optional separate tea experience if you want to linger.",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "budget": "¥700–1,500 for a treat",
        "travel": "W10–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Store feature",
            "url": "https://umamibites.com/food_and_drink/kaminari-issa-matcha-sweets-asakusa"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in treat",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one Asakusa sweet, not every stop.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131102/13183530/"
      }
    ],
    "theme": "Asakusa street snacks"
  },
  {
    "id": 3,
    "day": "Sat",
    "meal": "Lunch",
    "label": "Sat · Lunch",
    "origin": "Sumida Aquarium Tokyo",
    "originLabel": "Sumida Aquarium exit",
    "advice": "Rokurinsha is selected. Local alternatives appear first; older detour options are clearly marked so they cannot be mistaken for nearby backups.",
    "options": [
      {
        "name": "Rokurinsha, Tokyo Solamachi",
        "description": "Thick tsukemen noodles dipped into rich broth. A distinct noodle experience.",
        "booking": "Official Solamachi listing says no reservations. Leave enough buffer before the kart tour; switch within the complex if the queue is too long.",
        "budget": "¥1,200–2,000",
        "travel": "W5–10",
        "style": "Dipping / broth optional",
        "photo": {
          "match": "Rokurinsha",
          "src": "https://www.tokyo-solamachi.jp/cms-img/shopinfo/0844454c539e43e4d361d0bba070804d31012620240303284.jpg",
          "source": "https://www.tokyo-solamachi.jp/en/restaurant/303/",
          "caption": "Rokurinsha · Tokyo Solamachi official image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://en.www.tokyo-solamachi.jp/shop/303/"
          }
        ],
        "current": false,
        "bookingStatus": "No reservations",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Your selected noodle meal. Avoid defaulting to ramen again at dinner.",
        "selected": true,
        "selectedStatus": "Chosen · walk-in",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1312/A131203/13137823/"
      },
      {
        "name": "RAMEN EXPRESS Hakata Ippudo, Tokyo Solamachi",
        "description": "Hakata-style pork-bone ramen.",
        "booking": "Food-court alternative in Solamachi. Check the current directory for counter operation; broth-centered ramen.",
        "budget": "¥1,000–1,800",
        "travel": "W5–10",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://stores.ippudo.com/en/1065"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Same noodle category as Rokurinsha; this is a replacement, not an additional meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1312/A131203/13138714/"
      },
      {
        "name": "Tonkatsu Shinjuku Saboten, Tokyo Solamachi",
        "description": "Pork cutlet with rice and cabbage, a filling non-soup set.",
        "budget": "¥1,800–3,000",
        "travel": "W5–10",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.tokyo-solamachi.jp/shop/288/"
          }
        ],
        "booking": "6F Solamachi dining. Confirm October branch menu and reservation policy.",
        "bookingStatus": "Walk-in / confirm reservations",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "If selected, skip a second pork-cutlet meal Tuesday.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1312/A131203/13141234/"
      },
      {
        "name": "Kikanbo, Kanda Main Store",
        "description": "Spicy, numbing miso ramen; choose conservative chili and pepper levels first.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,300–2,500, before any booking fee",
        "travel": "T30–45",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official reservation announcement",
            "url": "https://kikanbo.co.jp/blogs/news/予約サイト開設のお知らせ"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "tradeoff": "Leaves Solamachi for Kanda and adds queue risk before karting; not recommended for this slot.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1310/A131002/13097205/"
      },
      {
        "name": "Menya Musashi Bukotsu, Okachimachi",
        "description": "Pork-bone ramen with white, spicy red or squid-ink black versions.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,200–2,000",
        "travel": "T30–45",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://menya634.co.jp/storelist/okachimachi/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "tradeoff": "Okachimachi detour; keep only if you actively change the lunch location.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131101/13003621/"
      },
      {
        "name": "Soranoiro NIPPON, Tokyo Ramen Street",
        "description": "A different ramen option in Tokyo Station's restaurant district; consult current menu for your preferred bowl.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,200–2,200",
        "travel": "T40–55",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://soranoiro-vege.com/store-menu/soranoiro-nippon/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "tradeoff": "Tokyo Station detour is a poor fit before the kart tour.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130201/13183558/"
      }
    ],
    "theme": "Tsukemen: thick dipping noodles"
  },
  {
    "id": 4,
    "day": "Sat",
    "meal": "Dinner",
    "label": "Sat · Dinner",
    "origin": "Tokyo Solamachi",
    "originLabel": "Tokyo Solamachi (after shopping)",
    "advice": "Tenichi is chosen: reserve a ~5:30pm table (dinner service from 5pm, table last order 8pm). The wagyu options stay here in case Wednesday’s wagyu plan changes.",
    "options": [
      {
        "name": "Tenichi, Nihonbashi Takashimaya",
        "description": "Seafood and vegetable tempura, rice and sides. Choose a table set for value or a counter course to watch the frying.",
        "budget": "¥3,850 Fuji table set; counter from ¥7,260",
        "travel": "T25–30",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://tenichi.co.jp/shop/nihonbashi-takashimaya/"
          }
        ],
        "booking": "Call 03-3272-3677 or use the operator's reservation channel. Table last order 20:00; counter last order 19:30. Confirm your seating/menu and October date.",
        "bookingStatus": "Reserve recommended",
        "priceNote": "Published menu; drinks extra",
        "variety": "Adds tempura after Saturday noodles. Avoid a second tempura dinner Wednesday.",
        "recommended": true,
        "reason": "Best balance of cuisine variety, moderate cost and finishing near your hotel.",
        "tradeoff": "Department-store setting rather than a street-side izakaya.",
        "photo": {
          "src": "https://tenichi.co.jp/wp-content/uploads/2026/06/dsc_0208_1024-2-e1786686940467.jpg",
          "source": "https://tenichi.co.jp/shop/nihonbashi-takashimaya/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13247938/",
        "experience": "Chef fries each piece at the counter",
        "selected": true,
        "selectedStatus": "Chosen · to reserve"
      },
      {
        "name": "Yakiniku Ushigoro, Ginza",
        "description": "A5 wagyu yakiniku grilled at your table in a plush, dim room: tongue, zabuton, and sukiyaki-style beef dipped in egg yolk. Staff will grill and pace the course for you.",
        "budget": "¥7,200–15,800 course + 5% service",
        "travel": "T30–35",
        "sources": [
          {
            "label": "Official branch page",
            "url": "https://ushigoro.com/shop/ginza/"
          },
          {
            "label": "Reservations (TableCheck)",
            "url": "https://www.tablecheck.com/en/shops/ushigoro-ginza/reserve"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Reserve recommended",
        "booking": "ONE GINZA 7F, Ginza 1-8-19, a minute from Ginza-Itchome exit 7 and about 15 minutes from the hotel. Saturday hours 11:30–23:30, open year-round. Book on the official site via TableCheck: instant confirmation, card prepayment, 2-hour seating; cancellation 50% the day before, 100% same day. Tel 03-3538-1129.",
        "priceNote": "Published course prices",
        "variety": "Wagyu yakiniku; keep Tuesday’s dinner non-beef if you choose this.",
        "reason": "The wagyu splurge: an easy direct train from Solamachi, and 15 minutes from the hotel afterward.",
        "tradeoff": "The most expensive Saturday option, prepaid with strict cancellation.",
        "experience": "A5 wagyu grilled at your table",
        "verification": "Hours, prices and booking checked on the official site",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1301/A130101/13263391/",
        "selected": false
      },
      {
        "name": "Yakiniku Like, Akihabara Denkigai",
        "description": "Grill your own meat on an individual tabletop roaster, with rice. Casual and practical, not luxury wagyu omakase.",
        "budget": "¥1,500–3,000",
        "travel": "T30–40",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://yakiniku-like.com/access_akihabara.html"
          }
        ],
        "booking": "Branch lists 11:00–23:00, last order 22:30. Plan to queue; confirm adjacent seating if sitting together matters.",
        "bookingStatus": "Walk-in plan",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "Beef-grill overlap with Motomura or Hikiniku on Tuesday.",
        "reason": "Budget option, but Akihabara is now off your route.",
        "tradeoff": "Fast, individual-roaster format rather than a romantic lingering dinner.",
        "detour": true,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1310/A131001/13232766/",
        "selected": false
      },
      {
        "name": "Aging Beef, WATERRAS Kanda Akihabara",
        "description": "Aged wagyu yakiniku: share different cuts cooked at your table. More of a sit-down dinner than Yakiniku Like.",
        "budget": "¥6,000–10,000",
        "travel": "T30–40",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://agingbeef.jp/"
          }
        ],
        "booking": "The previous English TableCheck reservation link no longer resolves. Use the operator's store finder or call 03-6206-4501; confirm current branch operation and Saturday booking before committing.",
        "bookingStatus": "Confirm booking channel",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "Reserve this for your main beef-grill meal rather than repeating it Tuesday.",
        "reason": "Sit-down beef alternative, but Akihabara is now off your route.",
        "tradeoff": "Current booking link needs reconfirmation; not presented as bookable availability.",
        "detour": true,
        "verification": "Booking link needs reconfirmation",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://agingbeef.jp/img/OGP.jpg",
          "source": "https://agingbeef.jp/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1310/A131002/13153556/",
        "experience": "Aged wagyu, grilled at your table",
        "selected": false
      },
      {
        "name": "Ningyocho Imahan, Ningyocho Honten",
        "description": "Premium beef and vegetables cooked in sweet-savory sukiyaki sauce. An occasion meal, not a bowl of ramen.",
        "budget": "¥12,000–20,000+",
        "travel": "T20–30",
        "style": "Sauce-cooked, not soup",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://restaurant.imahan.com/honten/"
          }
        ],
        "booking": "Use the official site's TableCheck link. Saturday hours listed 11:00–22:00, last order 21:00. Confirm revised course price, service charge and exact building; a new building opened September 2026.",
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "Use as the week's premium beef occasion; avoid also collecting multiple beef-grill meals.",
        "reason": "Most traditional special-occasion alternative.",
        "tradeoff": "Biggest budget jump and potentially a longer dinner.",
        "photo": {
          "src": "https://restaurant.imahan.com/wp-content/uploads/2026/09/k2.png",
          "source": "https://restaurant.imahan.com/honten/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130204/13003059/",
        "experience": "Wagyu sukiyaki cooked at your table",
        "selected": false
      },
      {
        "name": "Nihonbashi Tamai, Main Shop",
        "description": "Anago, or saltwater conger eel, over rice. Traditional wooden-house setting.",
        "booking": "Call the main shop to confirm a dinner table, menu and last order. Do not confuse it with the Muromachi or Ginza branch.",
        "budget": "¥3,000–6,000",
        "travel": "T25–30",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://anago-tamai.com/en/nihonbashi/"
          }
        ],
        "current": false,
        "bookingStatus": "Call to reserve",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Conger eel is different from freshwater unagi, but still overlaps with a Thursday eel lunch.",
        "reason": "Traditional specialty near your hotel.",
        "tradeoff": "Less variety if you also choose eel on Thursday.",
        "photo": {
          "src": "https://anago-tamai.com/images/tenpo/honten/3.png",
          "source": "https://anago-tamai.com/en/nihonbashi/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13019904/",
        "selected": false
      },
      {
        "name": "Hinozen, Ningyocho Honten",
        "description": "Charcoal-grilled fish skewers and shareable izakaya dishes. Choose a cooked-fish main plus rice, rather than only small nibbles.",
        "budget": "¥3,500–6,000",
        "travel": "T20–30",
        "style": "Non-soup choices",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://hinozen-ningyocho.com/dinner/"
          }
        ],
        "booking": "Use the official reservation link; confirm Saturday dinner hours, cover charge and menu. Budget allows a meal but not unlimited drinks.",
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance, not a menu quote",
        "variety": "Cooked seafood is distinct from sushi, though charcoal cooking overlaps with Hakone's irori lunch.",
        "reason": "Relaxed shared-plate alternative.",
        "tradeoff": "Ordering is less predictable in cost than a fixed set.",
        "photo": {
          "src": "https://hinozen-ningyocho.com/wp-content/uploads/2026/01/TK1_0507-1024x683.jpg",
          "source": "https://hinozen-ningyocho.com/dinner/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130204/13116078/",
        "selected": false
      }
    ],
    "theme": "Tempura counter"
  },
  {
    "id": 5,
    "day": "Tue",
    "meal": "Dinner",
    "label": "Tue · Dinner",
    "origin": "Shibuya Sky Tokyo",
    "originLabel": "Shibuya Sky / Shibuya Scramble Square exit",
    "advice": "Uobei is chosen for conveyor belt sushi, a minute from Shibuya Crossing; walk-in, so head straight there after Shibuya Sky. Gyukatsu and the hamburg place stay as alternatives.",
    "options": [
      {
        "name": "Uobei, Shibuya Dogenzaka",
        "description": "Order on the seat-side touchscreen and your sushi races to you on a three-tier express lane. Cheap, fast and fun, a minute from Shibuya Crossing.",
        "budget": "¥1,500–3,000",
        "travel": "W8–12",
        "sources": [
          {
            "label": "Official Genki Sushi site",
            "url": "https://club-genki.info/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1303/A130301/13144109/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No reservations",
        "booking": "Dogenzaka 2-29-11, 1 minute from Shibuya Station. Open 11:00–23:00 weekdays and 10:30–23:00 weekends, no closing days. Walk-in only, 121 seats; a short queue is normal around 6pm. Base plates ¥110, with ¥132–297 tiers.",
        "priceNote": "Published plate prices; allowance for a full meal",
        "variety": "Sushi, but a completely different style from Sunday’s omakase.",
        "reason": "The conveyor belt sushi you asked for, right by Shibuya Sky.",
        "tradeoff": "Quick and casual, not a lingering anniversary dinner.",
        "recommended": true,
        "experience": "Sushi races to you on express lanes",
        "verification": "Hours and prices checked on the official site and Tabelog",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13144109/",
        "selected": true,
        "selectedStatus": "Chosen · walk-in"
      },
      {
        "name": "Gyukatsu Motomura, Shibuya",
        "description": "Breaded beef cutlet that you finish on your own hot stone, with rice and sides.",
        "budget": "¥2,000–4,000",
        "booking": "Choose the exact Shibuya branch on the operator's site; allow a queue and do not buy an unverified third-party reservation.",
        "current": false,
        "travel": "W5–15",
        "style": "Non-soup choices",
        "photo": {
          "match": "Motomura",
          "src": "https://storage.googleapis.com/studio-cms-assets/projects/AXq17Dg2W7/s-660x480_v-fs_webp_79161fe2-ee85-4816-b732-02e7edcffdcf.jpg",
          "source": "https://www.gyukatsu-motomura.com/store/Shibuya",
          "caption": "Motomura Shibuya · official venue image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://www.gyukatsu-motomura.com/store/Shibuya"
          }
        ],
        "bookingStatus": "Walk-in / confirm branch policy",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose if lunch is not another beef-cutlet or patty meal.",
        "reason": "The stone-grill beef experience fits the Shibuya evening, without traveling to Roppongi.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13153853/",
        "experience": "Sear the wagyu cutlet on your own hot stone",
        "selected": false
      },
      {
        "name": "Hikiniku to Come, Shibuya",
        "description": "Freshly grilled beef patties with rice and condiments. Strong counter interaction and a focused tasting.",
        "booking": "Register through the official site. Current advance priority ticket ¥1,000 per seat plus food; dinner 17:00–21:00. Confirm your date's release and cancellation terms.",
        "budget": "¥2,000–4,000, plus applicable priority fee",
        "travel": "W12–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://hikinikutocome.com/en/visit/shibuya/"
          }
        ],
        "current": false,
        "bookingStatus": "Online registration only",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Grilled beef patties. Pick this OR Motomura, not both.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13257261/",
        "experience": "Charcoal hamburg cooked in front of you",
        "selected": false
      },
      {
        "name": "Kiwamiya, Shibuya PARCO",
        "description": "Cook small portions of your hamburg steak on the griddle.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥2,000–4,000",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://shibuya.parco.jp/shop/detail/?cd=025733"
          }
        ],
        "current": false,
        "bookingStatus": "Queue / confirm current policy",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Another personal beef grill; choose instead of Motomura or Hikiniku.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13241227/",
        "selected": false
      },
      {
        "name": "Sushi no Midori, Shibuya",
        "description": "Generous sushi assortments at a more moderate cost. Not equivalent to an intimate omakase counter.",
        "booking": "Use the Shibuya branch's official booking information; confirm whether the menu you want is eligible.",
        "budget": "¥3,000–6,000",
        "travel": "W5–10",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.sushinomidori.co.jp/shops/shibuya/"
          }
        ],
        "current": false,
        "bookingStatus": "Check official reservation menu",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Only choose if Sunday is not already your sushi dinner.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13004624/",
        "selected": false
      },
      {
        "name": "Torigin, Shibuya",
        "description": "Charcoal-grilled chicken skewers and kamameshi rice cooked in an individual pot.",
        "budget": "¥2,000–4,000",
        "booking": "Confirm Tuesday dinner and table availability directly through the operator's branch listing.",
        "current": false,
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official branch directory",
            "url": "https://torigin-ginza.jp/list/"
          }
        ],
        "bookingStatus": "Ask branch about reservations",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Yakitori and rice add variety if beef and sushi are already covered.",
        "detour": false,
        "reason": "Adds chicken skewers and pot rice instead of another beef meal.",
        "tradeoff": "Less theatrical than the personal-grill counters; confirm dinner service before choosing.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13002030/",
        "selected": false
      },
      {
        "name": "Suage, Shibuya",
        "description": "Vegetable-rich Hokkaido soup curry.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,500–2,500",
        "travel": "W5–15",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official branches",
            "url": "https://suage.info/stores/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Soup curry; lower priority for your preferences.",
        "tradeoff": "Soup-centered, even though rice is served separately.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13234526/",
        "selected": false
      },
      {
        "name": "Katsu Midori, Atre Meguro",
        "description": "The Midori group’s conveyor belt branch: oversized cuts on a real belt plus touch-panel ordering. Tokyo’s benchmark for value kaiten sushi.",
        "budget": "¥2,000–4,000",
        "travel": "T15–20",
        "sources": [
          {
            "label": "Official site (live wait time)",
            "url": "https://katumidori.co.jp/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1316/A131601/13004540/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No reservations",
        "booking": "Inside Meguro Station, Atre Meguro 2, 1F; two Yamanote stops from Shibuya. Open 11:00–22:00 daily. Walk-in only with long queues; the official site shows the live wait. Arrive by 5:30.",
        "priceNote": "Published plate prices; allowance for a full meal",
        "variety": "Higher-grade conveyor sushi than Uobei; still casual.",
        "reason": "Better fish than Uobei if you want quality over novelty.",
        "tradeoff": "Off the Shibuya route and a long queue; the Shibuya branch closes September 30, 2026, so only Meguro remains.",
        "detour": true,
        "experience": "Quality conveyor belt sushi",
        "verification": "Hours and prices checked on the official site and Tabelog",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1316/A131601/13004540/",
        "selected": false
      }
    ],
    "theme": "Conveyor belt sushi"
  },
  {
    "id": 7,
    "label": "Wed · Wagyu dinner",
    "origin": "Odakyu Shinjuku Station Tokyo",
    "originLabel": "Odakyu Shinjuku Station (Romancecar arrival)",
    "advice": "Ushigoro Shinjuku 3-chome is chosen: reserve a 5:15–5:30pm table on the official site. The other three stay as alternatives.",
    "options": [
      {
        "style": "Non-soup choices",
        "priceNote": "Published prices",
        "checked": "2026-09-14",
        "verification": "Hours, prices and booking checked on the official site and Tabelog",
        "name": "Yakiniku Ushigoro, Shinjuku 3-chome",
        "description": "A5 kuroge wagyu yakiniku with staff-guided grilling at your table, on the 12th floor beside Kinokuniya. Same group as the Ginza branch.",
        "budget": "¥9,760–16,590 courses",
        "travel": "W8–10",
        "sources": [
          {
            "label": "Official branch page",
            "url": "https://ushigoro.com/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1304/A130401/13258565/"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "booking": "HULIC &New SHINJUKU 12F, Shinjuku 3-17-10, about 8 minutes from the Odakyu west exit through the station passage. Weekdays 17:00–23:30, last order 22:30, open year-round. Book online via the official site (TableCheck) or tel 03-3358-4129; ask for 17:15–17:30.",
        "variety": "Wagyu yakiniku; Saturday is tempura, so no beef repeat.",
        "reason": "Best beef of the four, opens at 5pm, and it is on the way to the subway home.",
        "tradeoff": "Courses run ¥10,000–17,000 each; book ahead, it is a Tabelog Yakiniku TOKYO 100 pick.",
        "recommended": true,
        "experience": "A5 wagyu grilled at your table",
        "tabelog": "https://tabelog.com/en/tokyo/A1304/A130401/13258565/",
        "selected": true,
        "selectedStatus": "Chosen · reserve"
      },
      {
        "style": "Non-soup choices",
        "priceNote": "Published prices",
        "checked": "2026-09-14",
        "verification": "Hours, prices and booking checked on the official site and Tabelog",
        "name": "Teppanyaki Fujita, Shinjuku Washington Hotel",
        "description": "A chef cooks brand wagyu (Saga, Kobe, Yonezawa) on the teppan in front of you at a garden-view counter. The splurge night.",
        "budget": "¥17,600–28,600 courses, tax and service included",
        "travel": "W9–10",
        "sources": [
          {
            "label": "Official site / reservations",
            "url": "https://teppanyaki-fujita.com/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1304/A130401/13029001/"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "booking": "Washington Hotel Annex 1F, Nishi-Shinjuku 3-2-9, about 9 minutes west of the Odakyu south exit along Koshu-kaido. Dinner 17:30–22:30, course last order 20:30, open daily. Book via TableCheck on the official site or tel 03-3344-6109 (desk 10:00–18:00); book the 17:30 opening.",
        "variety": "Wagyu steak, cooked to order; the most “show” of the four.",
        "reason": "The chef-in-front-of-you experience you asked for, with top brand beef.",
        "tradeoff": "The most expensive option and it opens at 5:30, so about 15 minutes later than the others.",
        "experience": "Chef cooks wagyu on the teppan in front of you",
        "tabelog": "https://tabelog.com/en/tokyo/A1304/A130401/13029001/",
        "selected": false
      },
      {
        "style": "Non-soup choices",
        "priceNote": "Published prices",
        "checked": "2026-09-14",
        "verification": "Hours, prices and booking checked on the official site and Tabelog",
        "name": "Rokkasen, Nishi-Shinjuku Main Store",
        "description": "120-minute all-you-can-eat wagyu yakiniku with free-flow drinks, right above the station opposite Keio department store. Order as you go and grill at your table.",
        "budget": "¥12,500–17,600 (Matsusaka ¥29,000, Kobe ¥39,000)",
        "travel": "W2–5",
        "sources": [
          {
            "label": "Official site / reservations",
            "url": "https://www.rokkasen.co.jp/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1304/A130401/13297712/"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "booking": "110 Building 10F, Nishi-Shinjuku 1-10-2, about 2 minutes from the Odakyu west exit. Open 11:00–23:00, last order 22:30, no closing days. Book via TableCheck on the official site or tel 03-3348-8676.",
        "variety": "Wagyu yakiniku, quantity over refinement.",
        "reason": "The closest to the train and the most beef for the money.",
        "tradeoff": "A big, busy room; all-you-can-eat pacing rather than a curated course.",
        "experience": "Grill as much wagyu as you like at your table",
        "tabelog": "https://tabelog.com/en/tokyo/A1304/A130401/13297712/",
        "selected": false
      },
      {
        "style": "Non-soup choices",
        "priceNote": "Published prices",
        "checked": "2026-09-14",
        "verification": "Hours, prices and booking checked on the official site and Tabelog",
        "name": "Yakiniku Toraji, Takashimaya Times Square",
        "description": "Dependable table-grill yakiniku on Takashimaya’s 14th-floor restaurant row; thick-cut salted tongue is the signature. Subway downstairs.",
        "budget": "¥6,000–8,000 à la carte",
        "travel": "W5–7",
        "sources": [
          {
            "label": "Official site / reservations",
            "url": "https://www.ebisu-toraji.com/"
          },
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1304/A130403/13189379/"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "booking": "Times Square Building 14F, Sendagaya 5-24-2, about 5 minutes from the Odakyu south exit. Dinner 15:00–23:00, food last order 22:00. Book online via the official site or app, or tel 03-5361-1992; no queue at 5:15.",
        "variety": "Wagyu yakiniku at a lower price point.",
        "reason": "Cheapest way to get the wagyu grill in, with no wait.",
        "tradeoff": "A reliable chain, not a destination.",
        "experience": "Grill at your table",
        "tabelog": "https://tabelog.com/en/tokyo/A1304/A130403/13189379/",
        "selected": false
      }
    ],
    "day": "Wed",
    "meal": "Wagyu dinner",
    "theme": "Wagyu in Shinjuku"
  },
  {
    "id": 8,
    "label": "Mon · Dinner",
    "origin": "Fantasy Springs Tokyo DisneySea",
    "originLabel": "Fantasy Springs (example ride endpoint)",
    "advice": "Ristorante di Canaletto is chosen: Italian by the gondola canal in Mediterranean Harbor. Book Priority Seating in the app for about 5:00pm; standard advance requests open one month ahead at 10am JST (September 26 for October 26).",
    "options": [
      {
        "name": "Magellan's, Tokyo DisneySea",
        "description": "A Western-style course dinner inside the fortress beneath the golden dome, not on the ship.",
        "budget": "¥6,000–12,000+",
        "booking": "Check the official restaurant's Priority Seating eligibility and current menu in the Disney app. Standard advance requests generally open one month ahead at 10am JST; October 26 corresponds to September 26. No seats checked or reserved.",
        "current": false,
        "travel": "W20–30",
        "style": "Non-soup choices",
        "photo": {
          "match": "Magellan",
          "src": "https://media1.tokyodisneyresort.jp/images/adventure/restaurant/712_main_visual_name_1.jpg?mod=20260730104627",
          "source": "https://www.tokyodisneyresort.jp/en/tds/restaurant/detail/412/",
          "caption": "Magellan’s · Tokyo Disney Resort official image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official Magellan's information",
            "url": "https://www.tokyodisneyresort.jp/tds/restaurant/detail/412/"
          }
        ],
        "bookingStatus": "Check Priority Seating",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Magellan's setting makes this your strongest special park dinner.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000294/",
        "experience": "Dinner inside the fortress",
        "selected": false
      },
      {
        "name": "Ristorante di Canaletto",
        "description": "Italian meal with canal-side atmosphere; a relaxed date-night alternative.",
        "booking": "Check the official restaurant's Priority Seating eligibility and current menu in the Disney app. Standard advance requests generally open one month ahead at 10am JST; October 26 corresponds to September 26. No seats checked or reserved.",
        "budget": "¥3,000–6,000",
        "travel": "W25–35",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official restaurant directory",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/list.html"
          }
        ],
        "current": false,
        "bookingStatus": "Check Priority Seating",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Italian; do not pair Canaletto dinner with Zambini lunch.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000170/",
        "selected": true,
        "selectedStatus": "Chosen · Priority Seating"
      },
      {
        "name": "S.S. Columbia Dining Room",
        "description": "Western course dining aboard the ocean liner.",
        "booking": "Check the official restaurant's Priority Seating eligibility and current menu in the Disney app. Standard advance requests generally open one month ahead at 10am JST; October 26 corresponds to September 26. No seats checked or reserved.",
        "budget": "¥6,000–10,000",
        "travel": "W20–30",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/detail/425/"
          }
        ],
        "current": false,
        "bookingStatus": "Check Priority Seating",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://media1.tokyodisneyresort.jp/images/adventure/restaurant/492_main_visual_name_1.jpg?mod=20260730104715",
          "source": "https://www.tokyodisneyresort.jp/en/tds/restaurant/detail/425/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000168/",
        "experience": "Dinner aboard the ocean liner",
        "selected": false
      },
      {
        "name": "Restaurant Sakura",
        "description": "Japanese set-meal dining, a better cuisine match if Japanese food is the priority even in the park.",
        "booking": "Check the official restaurant's Priority Seating eligibility and current menu in the Disney app. Standard advance requests generally open one month ahead at 10am JST; October 26 corresponds to September 26. No seats checked or reserved.",
        "budget": "¥3,000–6,000",
        "travel": "W20–30",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official dining information",
            "url": "https://reserve.tokyodisneyresort.jp/en/sp/about/wp_02"
          }
        ],
        "current": false,
        "bookingStatus": "Check Priority Seating",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12003667/",
        "selected": false
      },
      {
        "name": "Horizon Bay Restaurant",
        "description": "A more casual seated meal, useful when you want a break without a formal anniversary course.",
        "booking": "Check the official restaurant's Priority Seating eligibility and current menu in the Disney app. Standard advance requests generally open one month ahead at 10am JST; October 26 corresponds to September 26. No seats checked or reserved.",
        "budget": "¥2,500–4,500",
        "travel": "W10–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official menu",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/food/451/"
          }
        ],
        "current": false,
        "bookingStatus": "Check Priority Seating",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://media1.tokyodisneyresort.jp/food_menu/image/4498_1.2_1_5ZHVd7q3.jpg",
          "source": "https://www.tokyodisneyresort.jp/en/tds/restaurant/food/451/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12003660/",
        "selected": false
      },
      {
        "name": "Casbah Food Court",
        "description": "Curry in an Arabian-market-style setting.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,200–2,500",
        "travel": "W10–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/list"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Japanese-style curry; do not repeat at both lunch and dinner.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000171/",
        "selected": false
      }
    ],
    "day": "Mon",
    "meal": "Dinner",
    "theme": "Disney: Italian by the gondola canal"
  },
  {
    "id": 9,
    "day": "Tue",
    "meal": "Lunch",
    "label": "Tue · Lunch",
    "origin": "Omotesando Hills Tokyo",
    "originLabel": "Omotesando Hills (shopping-area anchor)",
    "advice": "Harajuku Gyozaro is chosen: pan-fried and boiled gyoza with rice, a short walk from Omotesando. Walk-in only; expect a line at 12:30 and turn over quickly.",
    "options": [
      {
        "name": "Tonkatsu Maisen, Aoyama Main Restaurant",
        "description": "Tonkatsu in the converted-bathhouse setting.",
        "booking": "Use Maisen's official booking information. Confirm lunch seating, menu and Tuesday hours.",
        "budget": "¥2,000–4,000",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "photo": {
          "match": "Maisen",
          "src": "https://mai-sen.com/restaurant/b3d10d5a2df86ebb1eca34d8edbcb0c3.jpg",
          "source": "https://mai-sen.com/restaurant/aoyama/",
          "caption": "Maisen Aoyama · fried seafood example, not the pork set"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://mai-sen.com/restaurant/aoyama/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve / check menu eligibility",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Pork cutlet, not beef gyukatsu.",
        "reason": "Tonkatsu in Omotesando keeps lunch on the shopping corridor.",
        "tradeoff": "Skip if choosing Kaisho Sunday.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130602/13001850/",
        "selected": false
      },
      {
        "name": "Harajuku Gyozaro",
        "description": "Pan-fried and boiled dumplings, with a simple shared order.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,000–2,000",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Travel-guide listing",
            "url": "https://trulytokyo.com/gyozaro/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "reason": "Budget dumplings on the Harajuku side.",
        "tradeoff": "Queues and a simple setting.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130601/13001284/",
        "selected": true,
        "selectedStatus": "Chosen · walk-in"
      },
      {
        "name": "Gyukatsu Motomura, Shibuya",
        "description": "Breaded beef cutlet that you finish on your own hot stone, with rice and sides.",
        "budget": "¥2,000–4,000",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "current": false,
        "travel": "W25–40",
        "style": "Non-soup choices",
        "photo": {
          "match": "Motomura",
          "src": "https://storage.googleapis.com/studio-cms-assets/projects/AXq17Dg2W7/s-660x480_v-fs_webp_79161fe2-ee85-4816-b732-02e7edcffdcf.jpg",
          "source": "https://www.gyukatsu-motomura.com/store/Shibuya",
          "caption": "Motomura Shibuya · official venue image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://www.gyukatsu-motomura.com/store/Shibuya"
          }
        ],
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "reason": "Interactive beef cutlet experience.",
        "tradeoff": "Moves lunch to Shibuya earlier; do not walk back to Omotesando afterward.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13153853/",
        "experience": "Sear the wagyu cutlet on your own hot stone",
        "selected": false
      },
      {
        "name": "Hikiniku to Come, Shibuya",
        "description": "Freshly grilled beef patties with rice and condiments. Strong counter interaction and a focused tasting.",
        "booking": "Official registration required. Advance priority ticket currently ¥1,000 per seat, separate from food. Lunch 11–15, dinner 17–21; closed Wednesdays. Tuesday fits regular schedule.",
        "budget": "¥2,000–4,000, plus applicable priority fee",
        "travel": "W30–45",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://hikinikutocome.com/en/visit/shibuya/"
          }
        ],
        "current": false,
        "bookingStatus": "Online registration only",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "tradeoff": "Shibuya-first lunch changes the shopping order.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13257261/",
        "experience": "Charcoal hamburg cooked in front of you",
        "selected": false
      },
      {
        "name": "Pepper PARLOR, Shibuya",
        "description": "Robots and a café meal. Choose for the interaction rather than a specialist Japanese dish.",
        "budget": "¥2,000–4,000",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "current": false,
        "travel": "W25–35",
        "style": "Non-soup choices",
        "photo": {
          "match": "Pepper",
          "src": "https://www.pepperparlor.com/jp/set/data/asset/img/about/pic_about_01.jpg",
          "source": "https://www.pepperparlor.com/",
          "caption": "Pepper PARLOR · official venue image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official access",
            "url": "https://www.pepperparlor.com/access/"
          }
        ],
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "detour": true,
        "reason": "Choose specifically for robots, not Japanese culinary variety.",
        "tradeoff": "Tabelog marks this branch permanently closed; skip unless the official site says otherwise. Shibuya venue; changes the midday shopping order.",
        "verification": "Tabelog lists it as closed",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13241764/",
        "selected": false
      },
      {
        "name": "AFURI, Harajuku",
        "description": "Citrus-led yuzu ramen for a lighter-feeling alternative to beef.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,300–2,000",
        "travel": "W10–20",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official branches",
            "url": "https://www.afuri.com/findus/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "tradeoff": "Another ramen meal after Saturday; not my variety pick.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130601/13095244/",
        "selected": false
      }
    ],
    "theme": "Gyoza"
  },
  {
    "id": 10,
    "day": "Tue",
    "meal": "One dessert / tea stop",
    "label": "Tue · One dessert / tea stop",
    "origin": "Omotesando Hills Tokyo",
    "originLabel": "Omotesando Hills (shopping-area anchor)",
    "advice": "Two chosen treats, both in Harajuku during the shopping window: I’m donut? near the station, then a Marion crêpe on Takeshita Street. Walk-in; short lines are normal. The Shibuya options stay here as alternatives.",
    "options": [
      {
        "name": "FLIPPER'S, Shibuya",
        "description": "Tall, airy soufflé pancakes: a substantial dessert, not another lunch.",
        "budget": "¥1,500–2,500",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "current": false,
        "travel": "W20–35",
        "style": "Non-soup choices",
        "photo": {
          "match": "FLIPPER",
          "src": "https://static.wixstatic.com/media/92d0c1_fd2b847fe2c14bf597dc4f047ec2ffdc~mv2.jpg/v1/fill/w_238,h_178,fp_0.50_0.50,q_90,enc_avif,quality_auto/92d0c1_fd2b847fe2c14bf597dc4f047ec2ffdc~mv2.webp",
          "source": "https://www.flavorworks.co.jp/flippers",
          "caption": "FLIPPER'S · official menu imagery; seasonal dishes vary"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official branch",
            "url": "https://baycrews.jp/store/detail/0699"
          }
        ],
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Keeps your pancake wish in the Shibuya end of the shopping corridor.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13228450/",
        "selected": false
      },
      {
        "name": "A Happy Pancake, Shibuya",
        "description": "Another soufflé-pancake specialist.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥1,500–2,500",
        "travel": "W20–35",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official FAQ",
            "url": "https://magia.tokyo/qa"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13195787/",
        "selected": false
      },
      {
        "name": "Micasadeco & Café, Jingumae",
        "description": "Fluffy ricotta pancakes rather than exactly the same soufflé formula.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥1,500–2,500",
        "travel": "W5–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official Tokyo branch",
            "url": "https://micasadecoandcafe.com/tokyo.html"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130601/13244998/",
        "selected": false
      },
      {
        "name": "Shibuya Nishimura Fruit Parlor, Dogenzaka",
        "description": "Seasonal Japanese fruit parfait: a different dessert category entirely.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥1,500–3,500+",
        "travel": "W20–35",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official seasonal menu",
            "url": "https://snfruits.com/menu/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13001901/",
        "selected": false
      },
      {
        "name": "CHAVATY, Omotesando",
        "description": "Tea and a modest scone stop instead of a large pancake plate.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥1,000–2,000",
        "travel": "W5–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://chavaty.jp/en/pages/shop-omotesando"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130602/13224245/",
        "selected": false
      },
      {
        "name": "Sakurai Japanese Tea Experience",
        "description": "Carefully prepared Japanese teas and wagashi. My favorite *different* experience for an anniversary trip.",
        "booking": "Reserve the tea experience via the official site; confirm duration and sweets included.",
        "budget": "¥2,500–6,000+",
        "travel": "W5–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://sakurai-tea.jp/en/experience-daytime/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130602/13197815/",
        "experience": "Tea ceremony with sweets",
        "selected": false
      },
      {
        "name": "Higuma Doughnuts × Coffee Wrights, Omotesando",
        "description": "Fresh doughnuts and coffee. A casual treat; avoid rushing a seated café visit.",
        "budget": "¥700–1,500",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "current": false,
        "travel": "W5–20",
        "style": "Non-soup choices",
        "photo": {
          "match": "Higuma",
          "src": "https://www.higuma.co/assets/img/concept/doughnuts_img.jpg",
          "source": "https://www.higuma.co/",
          "caption": "Higuma · doughnut example from the operator"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Higuma official",
            "url": "https://www.higuma.co/"
          }
        ],
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130602/13226926/",
        "selected": false
      },
      {
        "name": "Marion Crepes, Harajuku Takeshita Street",
        "description": "A Japanese-style folded crepe with fruit/cream or your preferred filling. More distinctly tied to this neighborhood than another doughnut.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥600–1,200",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "photo": {
          "match": "Marion",
          "src": "https://www.marion.co.jp/wp-content/themes/marion/img/top/slide02.png",
          "source": "https://www.marion.co.jp/",
          "caption": "Marion · operator's crepe example"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.marion.co.jp/store/tokyo/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130601/13088711/",
        "selected": true,
        "selectedStatus": "Chosen · Harajuku"
      },
      {
        "name": "I'm donut?, Harajuku",
        "description": "The soft, rich doughnut experience often seen in travel videos.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥400–1,000",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official shops",
            "url": "https://peaceput.com/en/shop/"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1306/A130601/13287491/",
        "selected": true,
        "selectedStatus": "Chosen · Harajuku"
      },
      {
        "name": "Nanaya, Aoyama",
        "description": "Matcha gelato and tea chocolates.",
        "booking": "Confirm current branch hours and queue policy. Treats are alternatives, not multiple scheduled meals.",
        "budget": "¥500–1,200",
        "travel": "W5–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official shops",
            "url": "https://nanaya-matcha.com/?mode=f4&sid=20"
          }
        ],
        "current": false,
        "bookingStatus": "Walk-in / queue plan",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one dessert style: pancakes, crepe, doughnut, fruit or tea.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1303/A130301/13199165/",
        "selected": false
      }
    ],
    "theme": "Harajuku treats: I’m donut? + Marion Crepes"
  },
  {
    "id": 11,
    "day": "Sun",
    "meal": "Occasion dinner",
    "label": "Sun · Occasion dinner",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel, after changing for dinner",
    "advice": "Manten is chosen: reserve the 5:30pm omakase on TableCheck. Tokyo Ten stays here as the alternative.",
    "options": [
      {
        "name": "Manten Sushi, Nihonbashi",
        "description": "Chef-led sushi and small dishes, similar in ambition to your current choice.",
        "booking": "COREDO Muromachi 2, 1F (Nihonbashi Muromachi 2-3-1), about a 12-minute walk from the hotel. Sunday dinner 5:00–11:00pm, last order 9:30. Book on TableCheck (https://www.tablecheck.com/en/shops/manten-sushi-nihonbashi/reserve) or tel 03-3277-6045; same-day cancellation is charged in full. No dress code stated; skip strong perfume.",
        "budget": "¥8,800 omakase; ¥12,100 with drinks",
        "travel": "W10–12",
        "style": "Non-soup choices",
        "photo": {
          "match": "Manten",
          "src": "https://www.manten-sushi.com/image/top.jpg",
          "source": "https://www.manten-sushi.com/",
          "caption": "Manten · operator imagery, not a guaranteed course"
        },
        "recommended": true,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.manten-sushi.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Published course prices",
        "variety": "Omakase sushi; Tuesday’s conveyor belt is the casual counterpart.",
        "detour": true,
        "tradeoff": "A department-store-complex setting rather than a Roppongi night out.",
        "reason": "Omakase counter you can walk to after changing at the hotel.",
        "verification": "Sunday hours and prices checked on Tabelog and the official site",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13166422/",
        "experience": "Omakase counter, strong value",
        "selected": true,
        "selectedStatus": "Chosen · reserve"
      },
      {
        "name": "SUSHI TOKYO TEN, Roppongi",
        "description": "Chef-selected sushi and small dishes for your anniversary.",
        "budget": "¥9,900 omakase; ¥13,200 with drinks",
        "booking": "Tokyo Midtown Garden Terrace 1F (Akasaka 9-7-4). Sunday dinner 5:00–11:00pm, last order 9:30. Book on TableCheck (https://www.tablecheck.com/en/shops/sushitokyo-ten-roppongi/reserve); same-day cancellation is charged in full and the table is released 15 minutes after the slot. Hibiya Line from Kayabacho straight to Roppongi.",
        "current": false,
        "travel": "T20–25",
        "style": "Non-soup choices",
        "photo": {
          "match": "TOKYO TEN",
          "src": "https://sushitokyo-ten.com/jpg/header_img.jpg",
          "source": "https://sushitokyo-ten.com/",
          "caption": "Sushi Tokyo Ten · operator imagery"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.tablecheck.com/en/shops/sushitokyo-ten-roppongi/reserve"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "priceNote": "Published course prices",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": false,
        "reason": "The Roppongi option if you want the night out; same price band as Manten.",
        "tradeoff": "A train ride each way after changing.",
        "verification": "Sunday hours and prices checked on Tabelog and TableCheck",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1307/A130701/13238526/",
        "experience": "Omakase counter",
        "selected": false
      }
    ],
    "theme": "Omakase sushi: the occasion dinner"
  },
  {
    "id": 12,
    "label": "Wed · Spa lunch",
    "origin": "Hakone Yumoto Station",
    "originLabel": "Hakone-Yumoto Station before the shuttle",
    "advice": "Hachiri is your planned onsite lunch. These four town alternatives require changing the spa appointment sequence. Hatsuhana Annexe was removed because its official site reports a temporary closure; the main branch normally closes Wednesdays.",
    "options": [
      {
        "name": "Irorisaryo Hachiri, Hakone Yuryo",
        "description": "Onsite charcoal-hearth lunch, keeping the whole spa day in one place.",
        "budget": "¥6,500 March menu; reconfirm October",
        "booking": "March menu quoted ¥6,500 per person; October course/price not confirmed. Coordinate lunch with massages and private bath.",
        "current": false,
        "travel": "S",
        "style": "Non-soup choices",
        "photo": {
          "match": "Hachiri",
          "src": "https://www.hakoneyuryo.jp/assets/img/restaurant/pt-restaurant02@2x.jpg?date=190625",
          "source": "https://www.hakoneyuryo.jp/english/restaurant/",
          "caption": "Hachiri · official restaurant image"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official restaurant",
            "url": "https://www.hakoneyuryo.jp/english/restaurant/"
          }
        ],
        "bookingStatus": "Coordinate with spa",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one lunch; offsite queues must not endanger spa appointments.",
        "detour": false,
        "selected": true,
        "selectedStatus": "Planned onsite · to arrange",
        "reason": "Keeps your chosen spa-and-lunch experience together.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/kanagawa/A1410/A141001/14050342/",
        "experience": "Charcoal irori hearth"
      },
      {
        "name": "Yubadon Naokichi",
        "description": "Yuba, or tofu skin, simmered with egg and broth and served with rice. Different from your meat-heavy meals.",
        "booking": "Confirm Wednesday opening and queue before changing the spa lunch; broth/egg/yuba dish.",
        "budget": "¥1,500–3,000",
        "travel": "W3–8",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Odakyu Hakone listing",
            "url": "https://www.hakonenavi.jp/spot/1251"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one lunch; offsite queues must not endanger spa appointments.",
        "detour": true,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/kanagawa/A1410/A141001/14007598/"
      },
      {
        "name": "Yamasoba",
        "description": "Soba with grated yam or seasonal toppings.",
        "booking": "Regular closure listed Thursday, not Wednesday; confirm temporary closure and lunch hours.",
        "budget": "¥1,200–2,500",
        "travel": "W3–8",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.yamasoba.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one lunch; offsite queues must not endanger spa appointments.",
        "detour": true,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/kanagawa/A1410/A141001/14008522/"
      },
      {
        "name": "Kinosuke",
        "description": "Charcoal-grilled fish or local pork set meal.",
        "booking": "Lunch listed from 11:30, two minutes from station. Confirm Wednesday operation; too tight for unchanged early spa appointments.",
        "budget": "¥2,000–3,500",
        "travel": "W2–5",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.kinosuke.co.jp/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one lunch; offsite queues must not endanger spa appointments.",
        "detour": true,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/kanagawa/A1410/A141001/14066693/"
      },
      {
        "name": "Hakone Curry Cocoro",
        "description": "Spiced curry with black/purple rice; hearty comfort food.",
        "booking": "Confirm current address and Wednesday hours with the venue; relocation listings have differed. Longer walk plus shuttle makes this a schedule change.",
        "budget": "¥1,500–2,500",
        "travel": "W15–25",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Odakyu Hakone listing",
            "url": "https://www.hakonenavi.jp/spot/847"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one lunch; offsite queues must not endanger spa appointments.",
        "detour": true,
        "verification": "Address / hours need reconfirmation",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/kanagawa/A1410/A141001/14021129/"
      }
    ],
    "day": "Wed",
    "meal": "Spa lunch",
    "theme": "Irori charcoal-hearth course"
  },
  {
    "id": 13,
    "label": "Thu · Optional early lunch",
    "origin": "GINZA SIX Tokyo",
    "originLabel": "GINZA SIX (shopping anchor)",
    "advice": "Bincho is chosen: hitsumabushi is grilled eel over rice you eat three ways (plain, with condiments, then with dashi poured over). Ginza Mitsukoshi 11F, opens 11:00; aim to be first in so you can leave by noon.",
    "options": [
      {
        "name": "Kandagawa Honten, Sotokanda",
        "description": "Traditional eel and rice in Sotokanda, near Akihabara. Retained for comparison but a poor fit for your airport-day route.",
        "budget": "¥5,000–10,000 planning allowance",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "current": false,
        "travel": "T30–45",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Tokyo heritage restaurant association",
            "url": "https://www.norenkai.net/en/portfolio-item/myojinshita-kandagawa-honten/"
          }
        ],
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Eel adds variety unless already chosen for Friday or Saturday.",
        "detour": true,
        "tradeoff": "Akihabara excursion is not suitable for the current departure-day route.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1310/A131002/13000346/",
        "selected": false
      },
      {
        "name": "Hitsumabushi Bincho, Ginza Mitsukoshi",
        "description": "Nagoya-style grilled eel: taste it plain, with condiments, then with broth. Three ways to appreciate one dish.",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "budget": "¥4,500–7,000",
        "travel": "W5–10",
        "style": "Dipping / broth optional",
        "photo": {
          "match": "Bincho",
          "src": "https://www.ginzadining.com/wp-content/uploads/2021/11/%E3%81%86%E3%81%AA%E9%87%8D%EF%BC%92-860x645.jpg",
          "source": "https://www.ginzadining.com/archives/introduce/binchou",
          "caption": "Bincho · unaju example; not the full hitsumabushi set"
        },
        "recommended": true,
        "sources": [
          {
            "label": "Official complex listing",
            "url": "https://www.ginzadining.com/archives/introduce/binchou"
          },
          {
            "label": "operator reservations",
            "url": "https://www.hitsumabushi.co.jp/en/reservation/"
          }
        ],
        "current": false,
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Eel adds variety unless already chosen for Friday or Saturday.",
        "detour": false,
        "reason": "Best geographic fit among the eel choices; only if the branch confirms an early, short meal.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1301/A130101/13226547/",
        "selected": true,
        "selectedStatus": "Chosen · confirm seating"
      },
      {
        "name": "Nihonbashi Idumoya, Main Shop",
        "description": "Traditional Tokyo-style unaju in a longstanding eel restaurant.",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "budget": "¥4,000–7,000",
        "travel": "T25–40",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.idumoya.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Eel adds variety unless already chosen for Friday or Saturday.",
        "detour": true,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13011198/",
        "selected": false
      },
      {
        "name": "Chikuyotei, Honten",
        "description": "Classic eel and Japanese cuisine in an older-style setting.",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "budget": "¥4,000–8,000",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.chikuyoutei.co.jp/"
          }
        ],
        "current": false,
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Eel adds variety unless already chosen for Friday or Saturday.",
        "detour": false,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13002338/",
        "selected": false
      },
      {
        "name": "Nihonbashi Tamai, Main Shop",
        "description": "Anago/conger eel, with boiled or grilled preparations. Similar theme but not freshwater unagi.",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "budget": "¥3,000–6,000",
        "travel": "T20–30",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://anago-tamai.com/en/nihonbashi/"
          }
        ],
        "current": false,
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Eel adds variety unless already chosen for Friday or Saturday.",
        "detour": true,
        "photo": {
          "src": "https://anago-tamai.com/images/tenpo/honten/3.png",
          "source": "https://anago-tamai.com/en/nihonbashi/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13019904/",
        "selected": false
      },
      {
        "name": "Ginza Tenichi, Nihonbashi Takashimaya",
        "description": "Tempura lunch if eel is not appealing to one of you.",
        "booking": "Confirm opening time, a straightforward set and a firm finish by noon. Do not reserve a long course or join a long queue on departure day.",
        "budget": "¥3,000–5,000",
        "travel": "T20–30",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://ginza-tenichi-nihonbashi-takashimaya.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Confirm early service / duration",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Tempura alternative; repeats Tenichi if chosen Saturday.",
        "detour": true,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Deliberate detour; not a nearby fallback.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13247938/",
        "selected": false
      }
    ],
    "day": "Thu",
    "meal": "Optional early lunch",
    "theme": "Hitsumabushi: grilled eel over rice, three ways"
  },
  {
    "id": 14,
    "label": "Mon · Lunch",
    "origin": "Indiana Jones Adventure Tokyo DisneySea",
    "originLabel": "Indiana Jones Adventure (example ride endpoint)",
    "advice": "Decided: no planned lunch. Order at whatever counter is near your rides, through the Disney app. These stay only as references.",
    "options": [
      {
        "name": "Vulcania Restaurant",
        "description": "Chinese-style food in Mysterious Island, distinct from a Western-course dinner.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,500–3,000",
        "travel": "W10–20",
        "style": "Non-soup choices",
        "recommended": true,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/list.html"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Chinese-style food adds contrast to a Western course dinner.",
        "reason": "Chinese-style lunch adds variety if dinner is a Western course.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12003644/"
      },
      {
        "name": "The Snuggly Duckling",
        "description": "Tangled tavern theming makes this the strongest experience-based lunch alternative if you're in Fantasy Springs.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,500–3,000",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/detail/413/"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://media1.tokyodisneyresort.jp/images/adventure/restaurant/2744_main_visual_name_1.jpg?mod=20260129101115",
          "source": "https://www.tokyodisneyresort.jp/en/tds/restaurant/detail/413/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12059908/"
      },
      {
        "name": "Zambini Brothers' Ristorante",
        "description": "Italian counter-service option if you actually remain in Mediterranean Harbor at lunch.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,500–3,000",
        "travel": "W20–30",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/list.html"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Italian; do not pair Canaletto dinner with Zambini lunch.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000173/"
      },
      {
        "name": "Casbah Food Court",
        "description": "Curry in Arabian Coast.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,500–3,000",
        "travel": "W5–10",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official operation list",
            "url": "https://www.tokyodisneyresort.co.jp/tds/restaurant/list/"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Japanese-style curry; do not repeat at both lunch and dinner.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12000171/"
      },
      {
        "name": "Lookout Cookout",
        "description": "Peter Pan-themed casual food in Fantasy Springs.",
        "booking": "Check Disney's app for current mobile-order requirements, menu and operating hours. Do not assume a counter-service meal needs an advance restaurant reservation.",
        "budget": "¥1,500–3,000",
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.tokyodisneyresort.jp/en/tds/restaurant/list"
          }
        ],
        "current": false,
        "bookingStatus": "Counter service / check app",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose a different cuisine from your other park meal.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/chiba/A1202/A120203/12059903/"
      }
    ],
    "day": "Mon",
    "meal": "Lunch",
    "theme": "Park counter service",
    "decided": "Order in the app wherever you are"
  },
  {
    "id": 15,
    "day": "Sun",
    "meal": "Lunch in Akihabara",
    "label": "Sun · Lunch in Akihabara",
    "origin": "Akihabara Station Electric Town Exit Tokyo",
    "originLabel": "Akihabara Station",
    "advice": "Gyukatsu Ichinisan is chosen, before the 1:00 owl café. Marugo is the tonkatsu alternative if you would rather queue for the best pork cutlet in the area.",
    "options": [
      {
        "style": "Non-soup choices",
        "checked": "2026-09-14",
        "name": "Gyukatsu Ichinisan, Akihabara",
        "description": "Sirloin cutlet fried 60 seconds and served rare; you sear each slice on a hot stone at the counter, with wasabi-soy, rock salt and tororo, plus barley rice with one refill.",
        "budget": "¥1,630–2,760 sets",
        "travel": "W3–4",
        "sources": [
          {
            "label": "Tabelog (hours, menu, photos)",
            "url": "https://tabelog.com/en/tokyo/A1311/A131101/13147309/"
          }
        ],
        "bookingStatus": "No reservations",
        "booking": "Sotokanda 3-8-17, Watanabe Building B1F; a minute from Suehirocho (Ginza Line), 3–4 minutes from JR Akihabara. Open 11:00–22:00 daily. 13 counter seats, walk-in only; arrive by 11:15.",
        "priceNote": "Published set prices, tax included",
        "variety": "Beef katsu; Wednesday’s wagyu is yakiniku, a different style.",
        "reason": "The hot-stone searing is the fun part, and it is on the way to the owls.",
        "tradeoff": "Counter-only and small; a short wait at peak.",
        "selected": true,
        "selectedStatus": "Chosen · walk-in",
        "experience": "Sear the beef cutlet on your own hot stone",
        "verification": "Hours and prices checked on Tabelog",
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131101/13147309/"
      },
      {
        "style": "Non-soup choices",
        "checked": "2026-09-14",
        "name": "Tonkatsu Marugo, Akihabara",
        "description": "Thick-cut pork loin katsu at one of Tokyo’s most respected tonkatsu counters (Tabelog Hyakumeiten 2026), four minutes from the Electric Town exit.",
        "budget": "¥2,000–4,000",
        "travel": "W4",
        "sources": [
          {
            "label": "Tabelog (hours, photos)",
            "url": "https://tabelog.com/en/tokyo/A1310/A131001/13000379/"
          }
        ],
        "bookingStatus": "No reservations",
        "booking": "Sotokanda 1-8-14. Sunday lunch 11:30–15:00, last order 14:00; closed Monday and Tuesday. No reservations; the line fills within 30 minutes of opening, so be there by 11:00.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Pork katsu instead of beef.",
        "reason": "Better-known and higher-rated, if a queue does not bother you.",
        "tradeoff": "Two-hour waits are common; that would squeeze the owl café.",
        "verification": "Hours checked on Tabelog",
        "tabelog": "https://tabelog.com/en/tokyo/A1310/A131001/13000379/"
      }
    ],
    "theme": "Beef katsu you sear on a hot stone"
  },
  {
    "id": 16,
    "day": "Sat",
    "meal": "Breakfast",
    "label": "Sat · Breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel",
    "advice": "Talk Shop is selected for Saturday only. Alternatives are here for comparison; no hotel breakfast default is applied to other days.",
    "options": [
      {
        "name": "Talk Shop, Caption by Hyatt Kabutocho",
        "description": "American breakfast with eggs, bacon, sausage, hash browns, avocado, toast, coffee and juice.",
        "budget": "¥2,860",
        "travel": "W0–2",
        "sources": [
          {
            "label": "Hours",
            "url": "https://www.hyatt.com/caption-by-hyatt/en-US/tyocp-caption-by-hyatt-kabutocho-tokyo/dining"
          },
          {
            "label": "Breakfast menu",
            "url": "https://www.hyatt.com/content/dam/hotel/propertysites/assets/caption/tyocp/en_us/dining/Talk-Shop-Menu.pdf"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Ask hotel at check-in",
        "booking": "Breakfast 07:00–11:00. Chosen for Saturday only, not every morning. Ham-and-egg panini or egg-sandwich sets are ¥1,650 with fruit and coffee.",
        "priceNote": "Published price; paid separately",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "selected": true,
        "selectedStatus": "Chosen · Saturday only",
        "reason": "Your selected full breakfast, with no travel.",
        "tradeoff": "More expensive than a café; hotel breakfast is not included.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13314657/"
      },
      {
        "name": "BOUL’ANGE, Nihonbashi COREDO Muromachi 3",
        "description": "A savory bakery item plus a second pastry and coffee; choose enough food, not one small croissant.",
        "budget": "¥1,200–2,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://baycrews.jp/store/detail/1145"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Official branch hours 07:30–21:00. Walk-in bakery; exact sandwiches and seating depend on the day.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Japanese bakery interpretation of a familiar Western breakfast.",
        "tradeoff": "More walking than the hotel; protein-heavy items may vary.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13209775/"
      },
      {
        "name": "Excelsior Caffé, Ningyocho",
        "description": "Croque monsieur or ham sandwich, with coffee and an extra item if needed. Chain morning menu also includes thick toast and eggs.",
        "budget": "¥1,000–1,500",
        "travel": "W15–20",
        "sources": [
          {
            "label": "Branch hours",
            "url": "https://shop.doutor.co.jp/doutor/spot/detail?code=5000124"
          },
          {
            "label": "Morning menu",
            "url": "https://www.doutor.co.jp/exc/menu/list/morning.html"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Weekdays 06:45; Saturday/Sunday 07:30 opening. Confirm the branch's available morning items. Seating includes a separated smoking area.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "tradeoff": "A chain café and an extra walk, but a substantial sandwich option.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130204/13054386/"
      },
      {
        "name": "PRONTO, Fresa Inn Nihonbashi",
        "description": "Toast or savory morning bread set, plus another item if the standard set is too small.",
        "budget": "¥900–1,600",
        "travel": "W5–10",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://shop.pronto.co.jp/detail/206/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "This specific Fresa Inn branch opens 06:30, including weekends; weekend service ends 10:00. Confirm available morning set and public guest service. Do not confuse with PRONTO Kayabacho, which opens 11:30 on weekends.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Earliest nearby café candidate without paying hotel-breakfast prices.",
        "tradeoff": "Standard morning sets can be small; add food.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13107615/"
      },
      {
        "name": "Pelican Café, Asakusa",
        "description": "Omelet sandwich or ham-and-fried-egg toast, with a drink.",
        "budget": "¥1,500–2,500",
        "travel": "T30–45",
        "sources": [
          {
            "label": "Hours",
            "url": "https://asakusa.pelicancafe.jp/"
          },
          {
            "label": "Menu",
            "url": "https://asakusa.pelicancafe.jp/menu.html"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Monday–Saturday opens 09:00; closed Sundays. Saturday all menu items can be ordered from opening. Queue risk; this replaces the early temple start.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "detour": true,
        "tradeoff": "Too late for the existing early breakfast; only choose if moving the Asakusa morning later.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://asakusa.hyper-cdn.jp/img/menu/menu_cafe14.jpg",
          "source": "https://asakusa.pelicancafe.jp/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1311/A131103/13212182/"
      },
      {
        "name": "FamilyMart, KABUTO ONE",
        "description": "Buy egg/ham sandwiches plus yogurt, fruit or another substantial item and a drink. Stock varies; buy the previous evening.",
        "budget": "¥900–1,500",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://store.family.co.jp/points/57427"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Buy ahead; no reservation",
        "booking": "Specific nearby branch at Nihonbashi Kabutocho 7-1. Check store hours and stock; the plan does not rely on a pre-dawn opening. Keep chilled food refrigerated and follow its use-by/storage label.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "tradeoff": "Practical takeaway, not a sit-down café experience.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      }
    ],
    "theme": "American breakfast at the hotel"
  },
  {
    "id": 17,
    "day": "Sun",
    "meal": "Early breakfast",
    "label": "Sun · Early breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel",
    "advice": "Quick 7-Eleven or FamilyMart breakfast to eat on the way to teamLab. The FamilyMart near the hotel opens at 6:00am; the other two are backups.",
    "options": [
      {
        "name": "BOUL’ANGE, Nihonbashi COREDO Muromachi 3 — buy the previous day",
        "description": "A savory bakery item plus a second pastry and coffee; choose enough food, not one small croissant.",
        "budget": "¥1,200–2,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://baycrews.jp/store/detail/1145"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Buy ahead",
        "booking": "Buy before its listed 21:00 closing the previous evening. Select items suitable for overnight storage; keep perishable fillings refrigerated. Eat at the hotel before leaving.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Filling bakery breakfast before the early departure, without depending on a café opening.",
        "tradeoff": "Requires an evening purchase; not freshly cooked that morning.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13209775/"
      },
      {
        "name": "FamilyMart, KABUTO ONE",
        "description": "Grab a sandwich or onigiri, yogurt or fruit, and a drink, and eat on the way. Any 7-Eleven or FamilyMart works too.",
        "budget": "¥900–1,500",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official store page",
            "url": "https://store.family.co.jp/points/57427"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No booking",
        "booking": "Nihonbashi Kabutocho 7-1, near the hotel. Open 6:00am–11:00pm per the official store page.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Quick grab-and-go breakfast.",
        "tradeoff": "Convenience-store food, not a sit-down breakfast.",
        "reason": "Quick, close and open before you leave.",
        "selected": true,
        "selectedStatus": "Chosen · grab and go",
        "verification": "Store hours checked on the official store page",
        "checked": "2026-09-13"
      },
      {
        "name": "PRONTO, Fresa Inn Nihonbashi",
        "description": "Toast or savory morning bread set, plus another item if the standard set is too small.",
        "budget": "¥900–1,600",
        "travel": "W5–10",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://shop.pronto.co.jp/detail/206/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Timing risk",
        "booking": "Opens 06:30. Only consider pre-arranged quick takeaway if service and travel still leave enough buffer. A sit-down meal does not fit the early departure; buy-ahead is safer.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Earliest nearby café candidate without paying hotel-breakfast prices.",
        "tradeoff": "Very little buffer before 06:55 departure.",
        "detour": true,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13107615/"
      }
    ],
    "theme": "Grab and go"
  },
  {
    "id": 18,
    "day": "Mon",
    "meal": "Early breakfast",
    "label": "Mon · Early breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel",
    "advice": "Decided: the 24-hour 7-Eleven at Kabutocho 6-5, three minutes from the hotel. The rest are backups.",
    "options": [
      {
        "name": "7-Eleven, Kabutocho Tosho-mae",
        "description": "The 24-hour 7-Eleven in front of the Stock Exchange: sandwiches, onigiri, yogurt, fruit and drinks to eat on the way.",
        "budget": "¥900–1,500",
        "travel": "W3",
        "sources": [
          {
            "label": "Tabelog listing",
            "url": "https://tabelog.com/en/tokyo/A1302/A130203/13260021/"
          },
          {
            "label": "Official 7-Eleven store map",
            "url": "https://seven-eleven.areamarker.com/711map/top"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No booking",
        "booking": "Nihonbashi Kabutocho 6-5, about 3 minutes from the hotel; open 24 hours. The closer 7-Eleven at Kabutocho 15-13 opens at 7:00, too late for 6:30.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Quick grab-and-go breakfast.",
        "reason": "Your pick, and the one branch nearby that is open at 6:30.",
        "tradeoff": "Convenience-store food, not a sit-down breakfast.",
        "selected": true,
        "selectedStatus": "Chosen · grab and go",
        "verification": "Hours checked on Tabelog and the Seven Bank ATM listing",
        "checked": "2026-09-14",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13260021/"
      },
      {
        "name": "BOUL’ANGE, Nihonbashi COREDO Muromachi 3 — buy the previous day",
        "description": "A savory bakery item plus a second pastry and coffee; choose enough food, not one small croissant.",
        "budget": "¥1,200–2,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://baycrews.jp/store/detail/1145"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Buy ahead",
        "booking": "Buy before its listed 21:00 closing the previous evening. Select items suitable for overnight storage; keep perishable fillings refrigerated. Eat at the hotel before leaving.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Filling bakery breakfast before the early departure, without depending on a café opening.",
        "tradeoff": "Requires an evening purchase; not freshly cooked that morning.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13209775/",
        "selected": false,
        "recommended": false
      },
      {
        "name": "FamilyMart, KABUTO ONE",
        "description": "Grab a sandwich or onigiri, yogurt or fruit, and a drink, and eat on the way. Any 7-Eleven or FamilyMart works too.",
        "budget": "¥900–1,500",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official store page",
            "url": "https://store.family.co.jp/points/57427"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "No booking",
        "booking": "Nihonbashi Kabutocho 7-1, near the hotel. Open 6:00am–11:00pm per the official store page.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Quick grab-and-go breakfast.",
        "tradeoff": "Convenience-store food, not a sit-down breakfast.",
        "reason": "Quick, close and open before you leave.",
        "selected": false,
        "verification": "Store hours checked on the official store page",
        "checked": "2026-09-13",
        "recommended": false
      },
      {
        "name": "PRONTO, Fresa Inn Nihonbashi",
        "description": "Toast or savory morning bread set, plus another item if the standard set is too small.",
        "budget": "¥900–1,600",
        "travel": "W5–10",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://shop.pronto.co.jp/detail/206/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Timing risk",
        "booking": "Opens 06:30. Only consider pre-arranged quick takeaway if service and travel still leave enough buffer. A sit-down meal does not fit the early departure; buy-ahead is safer.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Earliest nearby café candidate without paying hotel-breakfast prices.",
        "tradeoff": "Very little buffer before 06:45 departure.",
        "detour": true,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13107615/",
        "selected": false,
        "recommended": false
      }
    ],
    "theme": "Grab and go"
  },
  {
    "id": 19,
    "day": "Tue",
    "meal": "Tsukiji breakfast",
    "label": "Tue · Tsukiji breakfast",
    "origin": "Tsukiji Station Tokyo",
    "originLabel": "Tsukiji Station, next to the market",
    "advice": "Decided: breakfast is grazing the market from 7:30. Yamacho tamagoyaki is the anchor stop; add an onigiri and a coffee, or the Shouro sandwich after 9. No booking anywhere.",
    "options": [
      {
        "name": "Tsukiji Yamacho",
        "description": "Tamagoyaki on a stick, the classic market egg bite. Get one or two each and eat it at the shop.",
        "budget": "¥300–600",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official market listing",
            "url": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in",
        "booking": "Tsukiji 4-10-10. Open 6:00–15:30 every day per the official market listing. Prices not published.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "A quick egg bite; pair it with an onigiri or a café item.",
        "reason": "Open early, quick, and the signature Tsukiji snack.",
        "tradeoff": "A snack, not a full breakfast on its own.",
        "recommended": true,
        "verification": "Hours checked on the official market listing",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.tsukiji.or.jp/_cms/wp-content/uploads/2013/11/201-tukiji-yamachou-1274.jpg",
          "source": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/",
          "caption": "Official market listing photo"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13100313/",
        "experience": "Tamagoyaki hot off the pan, eaten at the stall"
      },
      {
        "name": "Marutoyo, Tsukiji",
        "description": "Big handmade onigiri. One or two each makes a filling breakfast.",
        "budget": "¥500–1,000",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official market listing",
            "url": "https://www.tsukiji.or.jp/english/shoplist/cat-d/cat-15/389/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in",
        "booking": "Tsukiji 4-9-9. Open 3:00–15:00; closed Sundays, national holidays and market holidays, so open Tuesday October 27. Prices not published.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Rice-based and filling; skip the soups it also sells.",
        "reason": "The most filling quick bite, open well before you arrive.",
        "tradeoff": "Fillings lean toward seafood.",
        "verification": "Hours checked on the official market listing",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.tsukiji.or.jp/_cms/wp-content/uploads/2013/11/167-marutoyo-1086.jpg",
          "source": "https://www.tsukiji.or.jp/english/shoplist/cat-d/cat-15/389/",
          "caption": "Official market listing photo"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13095644/"
      },
      {
        "name": "Rubins Coffee, Tsukiji",
        "description": "Sandwiches, toast, and coffee or fresh juice. The most Western-style breakfast in the market.",
        "budget": "¥800–1,500",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official market listing",
            "url": "https://www.tsukiji.or.jp/shoplist/cat-d/cat-15/344/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in",
        "booking": "Tsukiji 4-7-5. Open weekdays 7:00–16:30; closed Sundays and national holidays, per the official market listing. Prices not published.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Familiar food if you want a sandwich or toast, not just market snacks.",
        "tradeoff": "Only the market listing confirms current hours; the shop’s own website would not load.",
        "verification": "Hours from the official market listing; shop website unavailable",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.tsukiji.or.jp/_cms/wp-content/uploads/2013/11/145-rubins-ko-hi-0498.jpg",
          "source": "https://www.tsukiji.or.jp/shoplist/cat-d/cat-15/344/",
          "caption": "Official market listing photo"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13088936/"
      },
      {
        "name": "Yonemoto Coffee, Tsukiji Main Shop",
        "description": "A coffee stop while you graze: blend, café au lait or cappuccino.",
        "budget": "¥400–800",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official site",
            "url": "https://www.yonemoto-coffee.com/page/introduction"
          },
          {
            "label": "Official market listing",
            "url": "https://www.tsukiji.or.jp/shoplist/cat-d/cat-15/211/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in",
        "booking": "Tsukiji 4-11-1. Open 7:30–15:30 on weekdays per the official site. No food menu is published.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Drinks only; pair with food from a stall.",
        "reason": "Easy coffee in the middle of the market.",
        "tradeoff": "Drinks only, no food.",
        "verification": "Hours checked on the official site",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.yonemoto-coffee.com/data/yonemoto-coffee/image/introduction/shop1_1.jpg",
          "source": "https://www.yonemoto-coffee.com/page/introduction",
          "caption": "Official venue image"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13012800/"
      },
      {
        "name": "Tsukiji Shouro, Main Store",
        "description": "Thick, slightly sweet tamagoyaki. The egg sandwich (Shouro Sando) is sold at its second shop, tsukiji SHOURO.",
        "budget": "¥500–1,300",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official stores and hours",
            "url": "https://shouro.co.jp/store/"
          },
          {
            "label": "Official online shop (prices)",
            "url": "https://shouro.official.ec/items/41921573"
          },
          {
            "label": "Official market listing",
            "url": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/261/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in",
        "booking": "Main store at Tsukiji 4-13-13 opens 6:00 on weekdays. The sandwich shop, tsukiji SHOURO at Tsukiji 4-7-5, opens 9:00 on weekdays. Sando ¥800 and tamagoyaki cube ¥500 per the official online shop.",
        "priceNote": "Published prices; planning allowance",
        "variety": "Egg-based; the sandwich is the most familiar breakfast item here.",
        "reason": "A proper egg sandwich if you’re there after 9:00.",
        "tradeoff": "The sandwich shop opens at 9:00, so save it for later in your visit.",
        "verification": "Hours checked on the official site",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.tsukiji.or.jp/_cms/wp-content/uploads/2013/11/107-tukiji-shouro-1364.jpg",
          "source": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/261/",
          "caption": "Official market listing photo"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13007639/"
      },
      {
        "name": "Sushizanmai Bekkan, Tsukiji",
        "description": "Sit-down sushi. Order a few individual nigiri each instead of a set.",
        "budget": "¥2,000–3,000",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official store page",
            "url": "https://www.kiyomura.co.jp/store/detail/2"
          },
          {
            "label": "Official menu",
            "url": "https://www.kiyomura.co.jp/menu/grande?menu_type=1&store_id=2"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Reservations available",
        "booking": "Tsukiji 4-10-6. Open 8:00–19:00 daily per the official site; no longer 24 hours. Nigiri from ¥140 a piece; sets come with miso soup.",
        "priceNote": "Published prices; planning allowance",
        "variety": "Rice and fish; the only sit-down meal on this list.",
        "reason": "Sit-down sushi breakfast, your original Saturday pick.",
        "tradeoff": "Costs more and takes longer than grazing; best if you skip other stalls.",
        "verification": "Hours and prices checked on the official site",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://www.kiyomura.co.jp/Uploads/store/store_2/1.jpg",
          "source": "https://www.kiyomura.co.jp/store/detail/2",
          "caption": "Official venue image"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1313/A131301/13017101/",
        "experience": "Market sushi at 8am"
      }
    ],
    "theme": "Tsukiji market grazing: tamagoyaki, onigiri, sushi",
    "decided": "Graze the market"
  },
  {
    "id": 20,
    "day": "Wed",
    "meal": "Breakfast before Hakone",
    "label": "Wed · Breakfast before Hakone",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel; Shinjuku alternatives explicitly include the train",
    "advice": "FamilyMart is chosen: grab a sandwich or onigiri, yogurt and a drink at KABUTO ONE (opens 6:00) and eat before the 7:00 subway.",
    "options": [
      {
        "name": "PRONTO, Fresa Inn Nihonbashi",
        "description": "Toast or savory morning bread set, plus another item if the standard set is too small.",
        "budget": "¥900–1,600",
        "travel": "W5–10",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://shop.pronto.co.jp/detail/206/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "This specific Fresa Inn branch opens 06:30, including weekends; weekend service ends 10:00. Confirm available morning set and public guest service. Do not confuse with PRONTO Kayabacho, which opens 11:30 on weekends.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Nearby 06:30 opening gives a filling breakfast before Shinjuku.",
        "tradeoff": "Standard morning sets can be small; add food.",
        "recommended": false,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        },
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130203/13107615/",
        "selected": false
      },
      {
        "name": "BOUL’ANGE, Shinjuku Southern Terrace",
        "description": "A savory bakery item plus a second pastry and coffee; choose enough food, not one small croissant.",
        "budget": "¥1,200–2,000",
        "travel": "T40–55",
        "sources": [
          {
            "label": "Official branch directory",
            "url": "https://baycrews.jp/store/list?area=kanto"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Listed opening 07:30. Eat before checking in for the Romancecar, allowing station-navigation buffer. Exact booked train time must come first.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Bakery breakfast at the departure end of the train journey.",
        "tradeoff": "Requires traveling to Shinjuku before breakfast; carry something if you wake hungry.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1304/A130401/13209774/",
        "selected": false,
        "recommended": false
      },
      {
        "name": "Excelsior Caffé, Ningyocho",
        "description": "Croque monsieur or ham sandwich, with coffee and an extra item if needed. Chain morning menu also includes thick toast and eggs.",
        "budget": "¥1,000–1,500",
        "travel": "W15–20",
        "sources": [
          {
            "label": "Branch hours",
            "url": "https://shop.doutor.co.jp/doutor/spot/detail?code=5000124"
          },
          {
            "label": "Morning menu",
            "url": "https://www.doutor.co.jp/exc/menu/list/morning.html"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Weekdays 06:45; Saturday/Sunday 07:30 opening. Confirm the branch's available morning items. Seating includes a separated smoking area.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "tradeoff": "A chain café and an extra walk, but a substantial sandwich option.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130204/13054386/",
        "selected": false,
        "recommended": false
      },
      {
        "name": "BOUL’ANGE, Nihonbashi COREDO Muromachi 3",
        "description": "A savory bakery item plus a second pastry and coffee; choose enough food, not one small croissant.",
        "budget": "¥1,200–2,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://baycrews.jp/store/detail/1145"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in plan",
        "booking": "Official branch hours 07:30–21:00. Walk-in bakery; exact sandwiches and seating depend on the day.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "reason": "Japanese bakery interpretation of a familiar Western breakfast.",
        "tradeoff": "More walking than the hotel; protein-heavy items may vary.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "tabelog": "https://tabelog.com/en/tokyo/A1302/A130202/13209775/",
        "selected": false,
        "recommended": false
      },
      {
        "name": "FamilyMart, KABUTO ONE",
        "description": "Buy egg/ham sandwiches plus yogurt, fruit or another substantial item and a drink. Stock varies; buy the previous evening.",
        "budget": "¥900–1,500",
        "travel": "W3–8",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://store.family.co.jp/points/57427"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Buy ahead; no reservation",
        "booking": "Specific nearby branch at Nihonbashi Kabutocho 7-1. Check store hours and stock; the plan does not rely on a pre-dawn opening. Keep chilled food refrigerated and follow its use-by/storage label.",
        "priceNote": "Planning allowance, not a quote",
        "variety": "Western-style breakfast; enough food for a full meal.",
        "tradeoff": "Practical takeaway, not a sit-down café experience.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "selected": true,
        "selectedStatus": "Chosen · grab and go",
        "recommended": false
      }
    ],
    "theme": "Quick café breakfast"
  }
];

export const maps = (destination, origin, mode = 'walking') => origin
  ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
