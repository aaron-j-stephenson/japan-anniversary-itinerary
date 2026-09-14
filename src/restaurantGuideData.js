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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 1,
    "day": "Thu",
    "meal": "Breakfast",
    "label": "Thu · Breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel, before Ginza",
    "advice": "Tsukiji moved to Tuesday breakfast, so this is a simple flight-day breakfast. bills fits the Ginza shopping stop; cafés near the hotel are quicker if packing runs long.",
    "options": [
      {
        "name": "bills, Ginza",
        "description": "Ricotta pancakes or a Western egg breakfast; choose a full dish and drink.",
        "budget": "¥3,000–5,000",
        "travel": "T20–35",
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
        "reason": "Best sit-down farewell breakfast with familiar food.",
        "tradeoff": "Higher budget and later start; leave enough time to return for bags.",
        "recommended": true,
        "verification": "Route reviewed; October availability not checked",
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
        }
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      },
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
        "selected": false,
        "selectedStatus": "Chosen · Saturday only",
        "reason": "Your selected full breakfast, with no travel.",
        "tradeoff": "Convenient fallback, but repeats Saturday.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 2,
    "day": "Sat",
    "meal": "Optional Asakusa treat",
    "label": "Sat · Optional Asakusa treat",
    "origin": "Sensoji Temple Tokyo",
    "originLabel": "Senso-ji main hall",
    "advice": "Pick at most one. All are Asakusa-area comparisons; travel estimates do not include queues.",
    "options": [
      {
        "name": "Suzukien, Asakusa",
        "description": "Compare matcha gelato intensities together, from gentler green tea to deeply bitter matcha.",
        "budget": "¥500–1,000",
        "booking": "No advance booking planned. Check the official branch's opening time and queue on the day; optional, never a substitute for lunch.",
        "current": false,
        "travel": "W5–10",
        "style": "Non-soup choices",
        "recommended": true,
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 4,
    "day": "Sat",
    "meal": "Dinner",
    "label": "Sat · Dinner",
    "origin": "Tokyo Solamachi",
    "originLabel": "Tokyo Solamachi (after shopping)",
    "advice": "Six dinner comparisons. Tenichi is a recommendation, not a selection. Travel starts at Tokyo Solamachi: the Nihonbashi and Ningyocho options are on the direct train toward your hotel; the two Akihabara options are now detours.",
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        }
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 5,
    "day": "Tue",
    "meal": "Dinner",
    "label": "Tue · Dinner",
    "origin": "Shibuya Sky Tokyo",
    "originLabel": "Shibuya Sky / Shibuya Scramble Square exit",
    "advice": "Six Shibuya dinner choices after the viewpoint. Pick a cuisine that differs from your Tuesday lunch; no cross-city Roppongi transfer.",
    "options": [
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
        "recommended": true,
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 7,
    "label": "Wed · Dinner after Hakone",
    "origin": "Odakyu Shinjuku Station Tokyo",
    "originLabel": "Odakyu Shinjuku Station (Romancecar arrival)",
    "advice": "One dinner after the return train. All choices are in Shinjuku; do not make a nonrefundable reservation before confirming your return train. Broth-heavy alternatives are lower priority.",
    "options": [
      {
        "name": "Monjaya, Shinjuku Southeast Exit",
        "description": "Shared griddle cooking: try monjayaki or the firmer okonomiyaki pancake.",
        "budget": "¥2,500–4,500",
        "booking": "Official branch accepts course reservations for two or more. Wednesday hours listed 11:30–22:00, last order 21:00. Book with a buffer after the return train; confirm October availability.",
        "current": false,
        "travel": "W8–15",
        "style": "Non-soup choices",
        "recommended": true,
        "sources": [
          {
            "label": "Official Shinjuku southeast branch",
            "url": "https://monjaya.tokyo/shinjyuku-tounan/"
          }
        ],
        "bookingStatus": "Reserve a course for two",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose monjayaki here only if not chosen at Toyosu Sunday.",
        "reason": "Griddle cooking adds variety and avoids another noodle dinner.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Tsunahachi Sohonten Bekkan, Shinjuku",
        "description": "A tempura meal with ingredients fried in sequence.",
        "booking": "Use Sohonten Bekkan, Shinjuku 3-28-4, opened June 2026; the former main-shop building is closed for rebuilding. Confirm your seating and dinner menu.",
        "budget": "¥4,000–7,000",
        "travel": "W10–15",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official current branch",
            "url": "https://www.tunahachi.co.jp/store/53.html"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Do not repeat tempura if Saturday is Tenichi.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Acacia, Shinjuku Main Shop",
        "description": "Stuffed cabbage rolls in savory stew, with rice: old-school yoshoku.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,500–3,000",
        "travel": "W10–15",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.restaurant-acacia.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "tradeoff": "Cabbage-roll stew is soup/stew-centered, so lower priority.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Udon Shin",
        "description": "Handmade udon with tempura or richer toppings.",
        "booking": "Official priority access previously listed ¥2,000 per person separately from food, nonrefundable, and not zero-wait. Recheck the current terms before buying.",
        "budget": "¥1,500–3,000 food, plus fee if used",
        "travel": "W8–15",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Booking rules",
            "url": "https://www.tablecheck.com/ja/shops/udonshin/reserve"
          }
        ],
        "current": false,
        "bookingStatus": "Queue / paid priority option",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "A second noodle meal after Saturday.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Fuunji, Shinjuku Main Shop",
        "description": "Rich chicken-and-fish tsukemen.",
        "booking": "Officially queue-based; allow for sellout. Repeats Saturday's dipping-noodle category.",
        "budget": "¥1,200–2,000",
        "travel": "W8–15",
        "style": "Dipping / broth optional",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://fu-unji.com/"
          }
        ],
        "current": false,
        "bookingStatus": "No reservations",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose only if this cuisine is not already repeated elsewhere.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "AFURI, Shinjuku Subnade",
        "description": "Yuzu ramen in the east-side underground shopping area.",
        "booking": "Walk-in planning option; branch reservation policy and October hours need confirmation.",
        "budget": "¥1,300–2,000",
        "travel": "W12–20",
        "style": "Broth / stew-centered",
        "recommended": false,
        "sources": [
          {
            "label": "Official directory",
            "url": "https://www.afuri.com/findus/"
          }
        ],
        "current": false,
        "bookingStatus": "Policy to confirm",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Another ramen dinner; lower priority.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      }
    ],
    "day": "Wed",
    "meal": "Dinner after Hakone"
  },
  {
    "id": 8,
    "label": "Mon · Dinner",
    "origin": "Fantasy Springs Tokyo DisneySea",
    "originLabel": "Fantasy Springs (example ride endpoint)",
    "advice": "Park routes are not fixed. These walks use one clearly named anchor, not a guaranteed last ride. Use Disney's app for actual route and ordering; pick different cuisines for lunch and dinner.",
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
        "recommended": true,
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        }
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
        "checked": "2026-09-13"
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
        }
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
        "checked": "2026-09-13"
      }
    ],
    "day": "Mon",
    "meal": "Dinner"
  },
  {
    "id": 9,
    "day": "Tue",
    "meal": "Lunch",
    "label": "Tue · Lunch",
    "origin": "Omotesando Hills Tokyo",
    "originLabel": "Omotesando Hills (shopping-area anchor)",
    "advice": "Maisen and Gyozaro keep lunch near Omotesando/Harajuku. Shibuya choices are explicit route trade-offs, not equally close restaurants.",
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
        "recommended": true,
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "tradeoff": "Shibuya venue; changes the midday shopping order.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 10,
    "day": "Tue",
    "meal": "One dessert / tea stop",
    "label": "Tue · One dessert / tea stop",
    "origin": "Omotesando Hills Tokyo",
    "originLabel": "Omotesando Hills (shopping-area anchor)",
    "advice": "Merged the duplicate treat sections. Choose one experience; nearby Omotesando cafés work earlier, Shibuya pancakes or fruit work later.",
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
        "recommended": true,
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ]
  },
  {
    "id": 11,
    "day": "Sun",
    "meal": "Occasion dinner",
    "label": "Sun · Occasion dinner",
    "origin": "Tokyo Midtown Roppongi",
    "originLabel": "Tokyo Midtown, Roppongi (flexible afternoon anchor)",
    "advice": "Local Roppongi choices first. Alternatives in Ginza, Nihonbashi and Shibuya show the real route trade-off. If you return to the hotel beforehand, use directions from your location.",
    "options": [
      {
        "name": "SUSHI TOKYO TEN, Roppongi",
        "description": "Chef-selected sushi and small dishes for your anniversary.",
        "budget": "¥9,900 evening / ¥13,200 all-inclusive",
        "booking": "Official booking lists ¥9,900 evening or ¥13,200 all-inclusive course. Seat type not guaranteed; same-day cancellations charged in full.",
        "current": false,
        "travel": "W5–15",
        "style": "Non-soup choices",
        "photo": {
          "match": "TOKYO TEN",
          "src": "https://sushitokyo-ten.com/jpg/header_img.jpg",
          "source": "https://sushitokyo-ten.com/",
          "caption": "Sushi Tokyo Ten · operator imagery"
        },
        "recommended": true,
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.tablecheck.com/en/shops/sushitokyo-ten-roppongi/reserve"
          }
        ],
        "bookingStatus": "Reserve recommended",
        "priceNote": "Published courses; confirm which inclusions apply",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": false,
        "reason": "Best budget-to-experience fit while staying in Roppongi.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Manten Sushi, Nihonbashi",
        "description": "Chef-led sushi and small dishes, similar in ambition to your current choice.",
        "booking": "Use the linked operator/booking channel. Confirm your exact October course, total including service, cancellation policy and meal duration.",
        "budget": "¥8,800 food, plus drinks/extras",
        "travel": "T35–50",
        "style": "Non-soup choices",
        "photo": {
          "match": "Manten",
          "src": "https://www.manten-sushi.com/image/top.jpg",
          "source": "https://www.manten-sushi.com/",
          "caption": "Manten · operator imagery, not a guaranteed course"
        },
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.manten-sushi.com/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": true,
        "tradeoff": "Hotel-side alternative, but requires leaving Roppongi.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Ginza Kyubey, Ginza Main Shop/New Annex",
        "description": "A more established, higher-budget sushi-counter occasion.",
        "booking": "Use the linked operator/booking channel. Confirm your exact October course, total including service, cancellation policy and meal duration.",
        "budget": "¥25,000–40,000+",
        "travel": "T25–40",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.kyubey.jp/shoplist/ginza/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": true,
        "tradeoff": "Ginza detour and much higher budget.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Roppongi Fukuzushi",
        "description": "An intimate family-run sushi experience.",
        "booking": "Use the linked operator/booking channel. Confirm your exact October course, total including service, cancellation policy and meal duration.",
        "budget": "¥33,880+ for that course",
        "travel": "W10–20",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.roppongifukuzushi.com/english/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": false,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Sushi no Midori, Shibuya",
        "description": "Generous sushi assortments at a more moderate cost. Not equivalent to an intimate omakase counter.",
        "booking": "Use the linked operator/booking channel. Confirm your exact October course, total including service, cancellation policy and meal duration.",
        "budget": "¥3,000–6,000",
        "travel": "T30–45",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://www.sushinomidori.co.jp/shops/shibuya/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": true,
        "tradeoff": "Shibuya is the wrong direction; better offered under Tuesday dinner.",
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "SUSHI Gonpachi, Nishi-Azabu",
        "description": "Sushi in a more visitor-oriented special-occasion setting.",
        "booking": "Use the linked operator/booking channel. Confirm your exact October course, total including service, cancellation policy and meal duration.",
        "budget": "¥8,000–16,000+",
        "travel": "W20–30",
        "style": "Non-soup choices",
        "recommended": false,
        "sources": [
          {
            "label": "Official",
            "url": "https://gonpachi.jp/sushi-nishi-azabu/"
          }
        ],
        "current": false,
        "bookingStatus": "Reserve recommended",
        "priceNote": "Planning allowance; not a fixed quote",
        "variety": "Choose one main sushi occasion for the week, not another sushi dinner Tuesday.",
        "detour": false,
        "reason": "Compare this cuisine, setting and travel trade-off.",
        "tradeoff": "Menus, queues and October availability can change.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      }
    ]
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ],
    "day": "Wed",
    "meal": "Spa lunch"
  },
  {
    "id": 13,
    "label": "Thu · Optional early lunch",
    "origin": "GINZA SIX Tokyo",
    "originLabel": "GINZA SIX (shopping anchor)",
    "advice": "Only a quick early lunch: finish by NOON, then return for bags and the airport transfer. Long eel courses and queues are poor fits. No recommendation overrides that deadline.",
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ],
    "day": "Thu",
    "meal": "Optional early lunch"
  },
  {
    "id": 14,
    "label": "Mon · Lunch",
    "origin": "Indiana Jones Adventure Tokyo DisneySea",
    "originLabel": "Indiana Jones Adventure (example ride endpoint)",
    "advice": "Park routes are not fixed. These walks use one clearly named anchor, not a guaranteed last ride. Use Disney's app for actual route and ordering; pick different cuisines for lunch and dinner.",
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
        "checked": "2026-09-13"
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
        }
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
      }
    ],
    "day": "Mon",
    "meal": "Lunch"
  },
  {
    "id": 15,
    "day": "Sun",
    "meal": "Lunch after teamLab",
    "label": "Sun · Lunch after teamLab",
    "origin": "teamLab Planets TOKYO",
    "originLabel": "teamLab Planets exit",
    "advice": "All six are in nearby Senkyaku Banrai, not Shibuya and not inside the wholesale-market restaurants that may close Sundays. Walking is an estimate including the complex. Choose one lunch.",
    "options": [
      {
        "name": "Tonkatsu Kaisho, Toyosu Senkyaku Banrai",
        "description": "Pork cutlets with rice and cabbage; a filling lunch rather than another sushi meal.",
        "budget": "¥2,000–3,500",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/302/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–20:00 listed",
        "variety": "Pork cutlet overlaps with Maisen Tuesday. Choose a different Tuesday lunch if you select this.",
        "recommended": true,
        "reason": "Best substantial non-soup lunch near teamLab; saves sushi for dinner.",
        "tradeoff": "Tourist-complex prices and possible queue; avoid duplicating tonkatsu Tuesday.",
        "photo": {
          "src": "https://www.toyosu-senkyakubanrai.jp/302/wp-content/uploads/sites/142/2026/03/e9c32f04c39e1b4fe6f79b02b5ad02cf.jpg",
          "source": "https://www.toyosu-senkyakubanrai.jp/302/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Hachiwan Curry, Toyosu Senkyaku Banrai",
        "description": "Japanese spiced curry rice with cutlet and topping options. This is curry sauce over rice, not soup curry.",
        "budget": "¥1,500–2,500",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/111/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–20:30 listed",
        "variety": "Adds Japanese curry without another bowl of noodles.",
        "recommended": false,
        "reason": "A different food style in the same nearby complex.",
        "tradeoff": "Adds Japanese curry without another bowl of noodles.",
        "photo": {
          "src": "https://www.toyosu-senkyakubanrai.jp/111/wp-content/uploads/sites/136/2026/08/83e45625609d088f64eb7f07cdb6e869.jpg",
          "source": "https://www.toyosu-senkyakubanrai.jp/111/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Tsukishima Monja Jugoya, Toyosu Senkyaku Banrai",
        "description": "Griddle-cooked monjayaki or firmer okonomiyaki; staff prepare dishes at the table.",
        "budget": "¥2,000–4,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/265266267/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–22:00 listed",
        "variety": "If you choose this, replace Wednesday's monjayaki dinner with another cuisine.",
        "recommended": false,
        "reason": "A different food style in the same nearby complex.",
        "tradeoff": "If you choose this, replace Wednesday's monjayaki dinner with another cuisine.",
        "photo": {
          "src": "https://www.toyosu-senkyakubanrai.jp/265266267/wp-content/uploads/sites/119/2024/01/a43debaec096424943fe135cc3a470cc.jpg",
          "source": "https://www.toyosu-senkyakubanrai.jp/265266267/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Kadoya, Toyosu Senkyaku Banrai",
        "description": "Uwajima-style sea bream with rice, egg and seasoned sauce; usually raw fish rather than grilled fish.",
        "budget": "¥2,000–3,500",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/319/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–20:00 listed",
        "variety": "Distinct regional dish, but raw fish repeats the proposed sushi dinner.",
        "recommended": false,
        "reason": "A different food style in the same nearby complex.",
        "tradeoff": "Distinct regional dish, but raw fish repeats the proposed sushi dinner.",
        "photo": {
          "src": "https://www.toyosu-senkyakubanrai.jp/319/wp-content/uploads/sites/140/2025/05/1096ed4d2745e3b09953f4c9a4467bfa.png",
          "source": "https://www.toyosu-senkyakubanrai.jp/319/",
          "caption": "Official venue / menu image; not a guaranteed October dish"
        },
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Yoshichan, Toyosu Senkyaku Banrai",
        "description": "Wagyu and horumon barbecue. Choose meat cuts if offal does not appeal.",
        "budget": "¥3,000–6,000",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/317318/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–22:00 listed",
        "variety": "Overlaps with a Saturday or Tuesday beef-grill choice.",
        "recommended": false,
        "reason": "A different food style in the same nearby complex.",
        "tradeoff": "Overlaps with a Saturday or Tuesday beef-grill choice.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      },
      {
        "name": "Seafood Burger Shimadoji, Toyosu Senkyaku Banrai",
        "description": "Tuna-cutlet burgers and other seafood fast food; Japanese seafood in a familiar format.",
        "budget": "¥1,500–2,500",
        "travel": "W15–25",
        "sources": [
          {
            "label": "Official venue / menu",
            "url": "https://www.toyosu-senkyakubanrai.jp/231232/"
          }
        ],
        "style": "Non-soup choices",
        "bookingStatus": "Walk-in / policy unconfirmed",
        "booking": "Venue and opening hours verified in the complex's official directory. No confirmed reservation policy or October availability; use a walk-in plan and allow a queue.",
        "priceNote": "Planning allowance; drinks/extras can increase it.",
        "hours": "10:00–18:00 listed",
        "variety": "More casual, with only six listed seats; useful if you do not want a lengthy meal.",
        "recommended": false,
        "reason": "A different food style in the same nearby complex.",
        "tradeoff": "More casual, with only six listed seats; useful if you do not want a lengthy meal.",
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13"
      }
    ]
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        }
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
        }
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
    ]
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
        "checked": "2026-09-13"
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
        }
      }
    ]
  },
  {
    "id": 18,
    "day": "Mon",
    "meal": "Early breakfast",
    "label": "Mon · Early breakfast",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel",
    "advice": "Quick 7-Eleven or FamilyMart breakfast to eat on the way to DisneySea. The FamilyMart near the hotel opens at 6:00am; the other two are backups.",
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
        "checked": "2026-09-13"
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
        "tradeoff": "Very little buffer before 06:45 departure.",
        "detour": true,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        }
      }
    ]
  },
  {
    "id": 19,
    "day": "Tue",
    "meal": "Tsukiji breakfast",
    "label": "Tue · Tsukiji breakfast",
    "origin": "Tsukiji Station Tokyo",
    "originLabel": "Tsukiji Station, next to the market",
    "advice": "Breakfast is grazing at the market; no booking needed. Try two or three stops, like Yamacho tamagoyaki, a Marutoyo onigiri, and coffee at Yonemoto or a sandwich at Rubins. All are open by 8:20 on a Tuesday except the Shouro sandwich shop (9:00).",
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      }
    ]
  },
  {
    "id": 20,
    "day": "Wed",
    "meal": "Breakfast before Hakone",
    "label": "Wed · Breakfast before Hakone",
    "origin": "Caption by Hyatt Kabutocho Tokyo",
    "originLabel": "Your hotel; Shinjuku alternatives explicitly include the train",
    "advice": "Eat before the Romancecar, not during a rushed station transfer. Pick the nearby café for minimum complexity or Shinjuku bakery once the train time is reserved.",
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
        "recommended": true,
        "verification": "Route reviewed; October availability not checked",
        "checked": "2026-09-13",
        "photo": {
          "src": "https://site-images.hp.admin.can-ly.com/images/cms/managed/directories/62/2026060114062920230816210050144_144_pronto_bar.webp",
          "source": "https://shop.pronto.co.jp/detail/206/",
          "caption": "Official venue or menu image · seasonal dishes may differ"
        }
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
        "checked": "2026-09-13"
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
    ]
  }
];

export const maps = (destination, origin, mode = 'walking') => origin
  ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
