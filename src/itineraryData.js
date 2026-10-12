// Confirmed flights, hotel, teamLab and Disney are preserved; other times are planning windows.
// Each stop has a kind (travel, flight, layover, breakfast, lunch, dinner, treat, activity, hotel, free)
// and an optional status tag such as "Booked ✓", "Chosen · to reserve", "Pick a spot" or "Optional".
export const DAYS = [
  {
    "id": 0,
    "dayName": "Thu",
    "date": "Oct 22",
    "type": "travel",
    "emoji": "🛫",
    "title": "Depart Tampa",
    "location": "Tampa → Detroit → Tokyo Haneda",
    "hotel": null,
    "activities": [
      {
        "time": "~3:30am",
        "kind": "travel",
        "icon": "🚕",
        "title": "Home → Tampa Airport (TPA)",
        "detail": "Arrange pickup to reach TPA by 4:15am for your confirmed 6:15am departure. Adjust pickup for the actual drive.",
        "food": null,
        "tip": "Schedule the 3:30am pickup (and the ~10:45pm return on Oct 29) in Uber Reserve, which takes bookings up to 90 days ahead.",
        "status": "Book now",
        "bookUrl": "https://www.uber.com/us/en/ride/how-it-works/reserve/",
        "bookLabel": "Schedule in Uber Reserve",
        "steps": [
          "Uber Reserve pickup around 3:30am.",
          "At TPA, check in with Delta for DL2884 at 6:15am."
        ]
      },
      {
        "time": "6:15am",
        "kind": "flight",
        "icon": "🛫",
        "title": "Tampa (TPA) → Detroit (DTW) · DL2884",
        "status": "Booked ✓",
        "detail": "Delta DL2884, Airbus A321. 2 hours 43 minutes direct to Detroit Metro Airport. Short, comfortable domestic leg.",
        "food": "Snack service on the domestic flight. Eat a real breakfast at TPA or Detroit if hungry.",
        "tip": "Set your watches and phones to Tokyo time (JST) when you board. Japan is 13 hours ahead of EDT."
      },
      {
        "time": "8:58am",
        "kind": "layover",
        "icon": "⏳",
        "title": "Layover in Detroit (DTW)",
        "duration": "4 hr 47 min",
        "detail": "Enough time for a proper meal, walking the terminal, and relaxing before the long haul. DTW is a clean, manageable airport. Gate area for the international flight has decent food options.",
        "food": "Have a real meal here — you're about to sit on a plane for 13.5 hours. Detroit has good airport dining options. Fuel up properly.",
        "tip": null
      },
      {
        "time": "1:45pm",
        "kind": "flight",
        "icon": "✈️",
        "title": "Detroit (DTW) → Tokyo Haneda (HND) · DL275",
        "status": "Booked ✓",
        "detail": "Delta DL275, Airbus A350-900. 13 hours 30 minutes. The A350-900 is one of the best economy aircraft flying — wider seats than average, better cabin air quality, lower altitude pressure, quieter engine. Noticeably better than older widebodies for a long haul.",
        "food": "Full meal service included on the international leg. Delta serves meals, snacks, and beverages throughout the flight.",
        "tip": "Hydrate constantly. Get up and walk the aisle every 2-3 hours. Compression socks are genuinely worth wearing. Sleep as much as you can on Tokyo time."
      }
    ]
  },
  {
    "id": 1,
    "dayName": "Fri",
    "date": "Oct 23",
    "type": "tokyo",
    "emoji": "🏙️",
    "title": "Arrive Tokyo Haneda",
    "location": "Tokyo, Japan",
    "hotel": "Caption by Hyatt Kabutocho — Night 1",
    "activities": [
      {
        "time": "~4:15pm",
        "kind": "flight",
        "icon": "🛬",
        "title": "Land at Tokyo Haneda (HND)",
        "detail": "Clear immigration, collect luggage and pass customs. Timing is variable; do not tie dinner to a fixed airport exit time.",
        "food": null,
        "tip": "Before you leave the plane: in Settings → Cellular, turn on the Ubigi eSIM, make it your Cellular Data line, and turn Data Roaming on for it. Leave your US line on for texts but keep its data roaming off. Ubigi’s plan starts counting when it first connects here."
      },
      {
        "time": "~5:50pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Haneda → hotel: airport bus + short taxi",
        "duration": "about 1 hour",
        "detail": "Take the Airport Limousine Bus (orange and white) on its \"Haneda Airport ⇄ Tokyo City Air Terminal (T-CAT)\" route, get off at T-CAT, then take a 5-minute taxi to the hotel. ¥1,000 each for the bus plus about ¥1,200 for the taxi. From Terminal 3 the bus leaves at 5:05, 5:50, 6:20, 6:55 and 7:25pm, and the ride is about 45 minutes. You don’t need to book ahead: buy tickets once you’re through customs.",
        "mapQuery": "Tokyo City Air Terminal T-CAT Hakozaki",
        "food": null,
        "tip": "Seats are first come, first served, and a full bus can’t take standing passengers. If you want a guaranteed seat, book the next bus on your phone once you have your bags: tap the link below (booking closes 5 minutes before departure) and pay there for a QR ticket. If a bus is full, the next one is 30–45 minutes later, or take a taxi from 1F stop 21 (about ¥9,000–11,000).",
        "steps": [
          "After customs you come out in the 2nd-floor Arrival Lobby of Terminal 3.",
          "Find the orange Airport Limousine Bus ticket counter in that lobby. Say \"Two to T-CAT, please\" and buy tickets for the next bus. ¥1,000 each; card or Suica is fine. You can’t pay on the bus.",
          "Your ticket shows the departure time and the bus stop number. Go down to 1F and out to that stop (stop 2 for T-CAT).",
          "Hand your big suitcases to the staff at the stop. They load them under the bus and give you claim tags.",
          "Ride about 45 minutes. The bus stops at Terminals 2 and 1 first, and some buses keep going to Tokyo Dome Hotel after T-CAT. Get off at \"Tokyo City Air Terminal (T-CAT)\".",
          "Collect your bags with the claim tags. The taxi stand is right in front of where the bus lets you off.",
          "Show the driver: キャプション by Hyatt 兜町 東京（中央区日本橋兜町12-1）. About 5 minutes and ¥1,000–1,300; card or Suica works in most taxis. The taxi doors open and close by themselves."
        ],
        "status": "No booking",
        "bookUrl": "https://www.limousinebus.co.jp/en/timetable/detail/Haneda-TCAT/?dir=1&d=2026-10-23",
        "bookLabel": "Bus times + optional booking (official)"
      },
      {
        "time": "~6:45pm",
        "kind": "hotel",
        "icon": "🏨",
        "title": "Check in · Caption by Hyatt Kabutocho",
        "status": "Booked ✓",
        "detail": "Check in, drop the bags, and freshen up. KABEAT is across the street for your 7:00 dinner.",
        "food": null,
        "tip": "Confirm breakfast and gym hours. Do not assume hotel breakfast is available before the early teamLab departure."
      },
      {
        "time": "~7:00pm · flexible",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "KABEAT, Kabutocho",
        "status": "Booked ✓",
        "detail": "Booked for Friday October 23 at 7:00pm, seat-only. A relaxed 60–90-minute first-night dinner near the hotel; the 120-minute seating limit is a maximum. Choose individual non-soup dishes on arrival.",
        "mapQuery": "KABEAT Kabutocho Tokyo",
        "food": "Choose individual non-soup dishes on arrival. Allow ¥6,000–12,000 for two; menu, drinks and actual total remain to choose.",
        "tip": "Arrival-night timing depends on the flight. Call KABEAT if you are delayed: the booking can be released if they cannot reach you within 15 minutes of the time.",
        "mealId": 0
      }
    ]
  },
  {
    "id": 2,
    "dayName": "Sat",
    "date": "Oct 24",
    "type": "tokyo",
    "emoji": "🏮",
    "title": "Northeast Tokyo: Asakusa → Skytree → go-karts + shopping",
    "location": "Tokyo, Japan",
    "hotel": "Caption by Hyatt Kabutocho — Night 2",
    "activities": [
      {
        "time": "7:00–7:40am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Talk Shop, in the hotel",
        "detail": "Paid breakfast downstairs at your hotel, selected for Saturday only. Eggs your way, bacon, sausage, hash browns, avocado and toast, with coffee and juice. Published price ¥2,860 each, ¥5,720 for two. Breakfast is not included in your stay. Other mornings will have their own Western-style breakfast plans; no skipped breakfasts.",
        "mapQuery": "Talk Shop Caption by Hyatt Kabutocho Tokyo",
        "food": "A full American breakfast for each person, not just coffee or a pastry.",
        "tip": null,
        "mealId": 16
      },
      {
        "time": "7:45am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Asakusa (subway, no changes)",
        "duration": "about 20 min",
        "detail": "One subway, no changes: the Toei Asakusa Line from Nihombashi, 5 stops to Asakusa.",
        "mapQuery": "Kaminarimon Asakusa",
        "food": null,
        "tip": "Rule for every subway: before you tap in, check the sign over the gate or stairs shows the station you are heading toward. If you went through the wrong gate, ask the staff window to cancel your entry.",
        "steps": [
          "Leave the hotel and turn left along the big street (Eitai-dori). Walk about 2 minutes to the first big crossing (Edobashi 1-chome).",
          "Turn left onto Showa-dori. Subway entrance D1 is about 40 m along on your left. Go down.",
          "There are two different ticket gates down there. Use the one whose sign says \"2 · Oshiage 押上\". The other gate (\"Nishi-magome / Haneda Airport\") goes the wrong way.",
          "Tap your phone on the gate and go to Platform 2. Get on any train.",
          "Ride 5 stops (about 8 minutes) and get off at Asakusa.",
          "Follow the signs for \"Kaminarimon\" and take Exit A4 (stairs).",
          "Walk about 80 m to the main street and turn left. The big red Kaminarimon gate with the giant lantern is about 70 m ahead."
        ]
      },
      {
        "time": "8:15–9:45am",
        "kind": "activity",
        "icon": "⛩️",
        "title": "Senso-ji Temple + Asakusa streets",
        "detail": "Explore the temple, Kaminarimon and Nakamise before the crowds build. The Nakamise snack stalls (ningyo-yaki, fried manju, grilled senbei, melon-pan) open from about 9, so see the temple first and snack on the way out; eat beside the stall, not while walking. No religious participation is needed.",
        "mapQuery": "Sensoji Temple Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~9:30am · on the way out",
        "kind": "treat",
        "icon": "🍡",
        "title": "Nakamise street stalls",
        "status": "Walk-in",
        "detail": "Snack your way back down Nakamise after the temple: ningyo-yaki, fried manju, grilled senbei, Kagetsudo’s melon-pan by the gate. Stalls open from about 9. Eat beside the stall, not while walking.",
        "mapQuery": "Nakamise Shopping Street Asakusa",
        "food": "A couple of snacks each; lunch is at noon.",
        "tip": null,
        "mealId": 2
      },
      {
        "time": "10:00–10:20am",
        "kind": "treat",
        "icon": "🍦",
        "title": "Hokkaido Milk Bar, Asakusa",
        "status": "Walk-in",
        "detail": "All-Hokkaido dairy on the Nishi-Sando shopping street, three minutes west of the temple (Asakusa 2-7-13): soft serve, milk pudding, a three-milk tasting flight (¥880), cream buns. Opens 10:00 (some listings say 9:00–9:30 on weekends).",
        "mapQuery": "HOKKAIDO MILK BAR Asakusa",
        "food": "One soft serve or pudding each, about ¥700–1,100 per person.",
        "tip": null,
        "mealId": 2
      },
      {
        "time": "10:20am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Asakusa → Skytree / Sumida Aquarium (walk)",
        "duration": "about 30 min walk",
        "detail": "A flat 30-minute walk over the river. Skytree is in front of you most of the way.",
        "mapQuery": "Sumida Aquarium Tokyo Solamachi",
        "food": null,
        "tip": "Tired feet? Tap the map link and choose transit instead; it is one short stop. Have your aquarium tickets open on your phone.",
        "steps": [
          "From the Milk Bar, walk back to the big red Kaminarimon gate (8–10 minutes).",
          "With the gate behind you, turn left and walk to the river. Cross Azuma Bridge, the red bridge; the gold Asahi Beer building is on the far side.",
          "Keep straight on the main road (Asakusa-dori) for about 15 minutes, toward Skytree.",
          "At the Narihira 1-chome crossing, turn left and walk about 150 m to Tokyo Solamachi (West Yard).",
          "Go in and take the escalator or elevator to 5F. The Sumida Aquarium entrance is there."
        ]
      },
      {
        "time": "10:45am–Noon",
        "kind": "activity",
        "icon": "🐠",
        "title": "Sumida Aquarium",
        "status": "Tickets booked ✓",
        "detail": "Tickets bought for Saturday October 24. Allow about 75–90 minutes; opens 9:00 on Saturdays. Show the QR code from your email at the gate.",
        "mapQuery": "Sumida Aquarium Tokyo",
        "food": null,
        "tip": "Tickets are non-refundable, but the date can be changed on the aquarium site if plans move."
      },
      {
        "time": "Noon–1:00pm",
        "kind": "lunch",
        "icon": "🍜",
        "title": "Rokurinsha tsukemen, Solamachi",
        "status": "Walk-in",
        "detail": "Your chosen Saturday lunch: thick tsukemen noodles with a separate rich dipping broth. Solamachi 6F, roughly 5–10 minutes inside the complex from the aquarium, excluding queues. No reservations. Allow ¥3,000–4,000 for two as a meal allowance, not a fixed menu quote.",
        "mapQuery": "Rokurinsha Tokyo Solamachi",
        "food": "One full noodle order each. If hungry earlier, bring a bakery snack; gelato is optional, not a meal replacement.",
        "tip": null,
        "mealId": 3
      },
      {
        "time": "1:00–2:50pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Tokyo Solamachi",
        "detail": "Browse the big shopping complex at the foot of Skytree: Japanese souvenirs, snacks, crafts and character shops. Shops are open until 9pm per the official site.",
        "mapQuery": "Tokyo Solamachi",
        "food": null,
        "tip": null
      },
      {
        "time": "2:50pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Solamachi → JAPANKART (walk)",
        "duration": "about 10 min walk",
        "detail": "A 10-minute walk on small side streets. Use Google Maps walking directions for this one.",
        "mapQuery": "JAPANKART SkyTree 2-18-15 Azumabashi Sumida Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Leave Solamachi from the West Yard side (the Tokyo Skytree West crossing).",
          "Follow the map about 10 minutes west, toward the river. The shop is JAPANKART SkyTree Branch, 2-18-15 Azumabashi, near the Genmori-bashi bridge.",
          "Get there by 3:15. Have both US licenses, both driving permits and both passports in hand."
        ]
      },
      {
        "time": "3:15–4:45pm",
        "kind": "activity",
        "icon": "🏎️",
        "title": "JAPANKART go-karts · 60 min driving",
        "status": "Booked ✓",
        "detail": "Booked for Saturday October 24 at 3:30pm: the 60-minute tour for two, ¥20,000 paid. Allow about 90 minutes on site: check in and safety briefing from 3:15, driving 3:30–4:30, then costumes back and guide photos. Starts and ends at the shop at 2-18-15 Azumabashi and drives through Ueno, Akihabara, Kappabashi and Asakusa; you finish near sunset (about 4:50). Costumes and photos included.",
        "mapQuery": "JAPANKART 2-18-15 Azumabashi Sumida Tokyo",
        "source": "https://japankart.com/",
        "food": null,
        "tip": "⚠️ Be at the shop by 3:15, 15 minutes early. You have your IDPs — bring them. Both drivers must bring three originals: your US driver’s license (no temporary or paper licenses), an International Driving Permit under the 1949 Geneva Convention (from AAA), and your passport. Missing documents means no driving and no refund."
      },
      {
        "time": "4:50pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "JAPANKART → Tenichi at Takashimaya (subway, no changes)",
        "duration": "about 25 min",
        "detail": "Walk back over Azuma Bridge, then the Ginza Line straight into Takashimaya’s basement. Asakusa is the end of the line, so every train goes the right way.",
        "mapQuery": "Tenichi Nihonbashi Takashimaya Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "Walk about 9 minutes back across Azuma Bridge, the red bridge, toward Asakusa. At the far end, go down Ginza Line Entrance 4 (orange \"G\" signs).",
          "Tap in and take any Ginza Line train. Asakusa is the first stop, so all trains go the right way.",
          "Ride 8 stops (about 15 minutes) and get off at Nihombashi.",
          "Follow the signs for \"Takashimaya\" and Exit B2. It leads straight into Takashimaya’s basement, no street walk.",
          "Take an elevator in the Main Building (本館) up to 8F. Tenichi is on that floor; walk in and ask for a table for two."
        ]
      },
      {
        "time": "~5:20pm",
        "kind": "dinner",
        "icon": "🍤",
        "title": "Tenichi tempura, Nihonbashi Takashimaya",
        "status": "Walk-in",
        "detail": "Seafood and vegetable tempura fried piece by piece, on Takashimaya’s 8F (dinner from 5pm, table last order 8pm). This branch has no online booking, so walk in straight from the go-karts: arriving around 5:20 on a Saturday beats the dinner rush. Published Fuji dinner set ¥3,850 each.",
        "mapQuery": "Tenichi Nihonbashi Takashimaya Tokyo",
        "food": "Tempura with rice and sides. ¥7,700 for two Fuji sets, plus drinks; counter course is the upgrade.",
        "tip": "If there’s a line, put your name down and browse Takashimaya. Optional: calling +81-3-3272-3677 (answered 10:00pm–8:30am Eastern) locks in a table.",
        "mealId": 4
      },
      {
        "time": "~7:00pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Takashimaya → hotel (walk)",
        "duration": "about 8 min walk",
        "detail": "A short walk back to the hotel.",
        "steps": [
          "Leave Takashimaya by the main entrance on Chuo-dori and walk about a minute to the big crossing with Eitai-dori (the Nihombashi crossing).",
          "Turn right onto Eitai-dori and keep straight, crossing Showa-dori and the bridge over the expressway.",
          "The hotel is on your right, about 8 minutes from Takashimaya."
        ],
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      }
    ]
  },
  {
    "id": 3,
    "dayName": "Sun",
    "date": "Oct 25",
    "type": "tokyo",
    "emoji": "🎨",
    "title": "teamLab → Akihabara owls → Manten omakase",
    "location": "Tokyo, Japan",
    "hotel": "Caption by Hyatt Kabutocho — Night 3",
    "activities": [
      {
        "time": "6:45am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart KABUTO ONE, grab and go",
        "status": "No booking",
        "detail": "FamilyMart in KABUTO ONE, across Eitai-dori from the hotel, opens at 6:00: sandwich or onigiri, yogurt and a drink. Eat at the hotel before your 7:25 taxi.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null,
        "mealId": 17
      },
      {
        "time": "7:25am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → teamLab Planets (taxi)",
        "duration": "about 15 min",
        "detail": "Take a taxi: about 15 minutes and roughly ¥2,500–3,000. Much simpler than two subways at 7am. You arrive around 7:40 for your 8:00 entry.",
        "mapQuery": "teamLab Planets Tokyo",
        "food": null,
        "tip": "If no taxi is around: Hibiya Line from Kayabacho (Platform 1, for Naka-meguro) 2 stops to Tsukiji, Exit 3a, walk 3 minutes to Shintomicho, Yurakucho Line (for Shin-kiba) 2 stops to Toyosu, Exit 7, then an 11-minute walk. About 40 minutes.",
        "steps": [
          "Ask the hotel front desk to get you a taxi to teamLab Planets TOKYO.",
          "If you hail one yourself, show the driver: チームラボプラネッツ TOKYO（江東区豊洲6-1-16）.",
          "Pay at the end by card or Suica. The doors open and close by themselves.",
          "Get out where the security guard points, and have your 8:00 tickets open on your phone."
        ]
      },
      {
        "time": "8:00am",
        "kind": "activity",
        "icon": "🎨",
        "title": "teamLab Planets, Toyosu",
        "status": "Booked ✓",
        "detail": "Sunday October 25, 8:00am entry. Leave the hotel by about 6:55am and aim to arrive by 7:45am. Allow 2–2.5 hours inside as a flexible planning window.",
        "food": null,
        "tip": "Wear clothing suitable for water and mirrored rooms."
      },
      {
        "time": "10:45am",
        "kind": "travel",
        "icon": "🚇",
        "title": "teamLab → Akihabara lunch (2 trains, indoor change)",
        "duration": "about 35 min",
        "detail": "Walk to Toyosu Station, the Yurakucho Line 4 stops, then JR Yamanote Line 3 stops to Akihabara.",
        "mapQuery": "Gyukatsu Ichinisan Akihabara 3-8-17 Sotokanda",
        "food": null,
        "tip": null,
        "steps": [
          "From teamLab, walk about 11 minutes to Toyosu Station (Yurakucho Line, gold \"Y\"). Use the map in Google Maps.",
          "Tap in and take the Yurakucho Line toward Ikebukuro / Wakoshi. Ride 4 stops to Yurakucho.",
          "Follow the signs for \"JR Lines\" to JR Yurakucho Station and tap through the JR gate.",
          "Take the Yamanote Line (light green) on Platform 2, for Tokyo / Ueno. Ride 3 stops to Akihabara.",
          "Leave by the Electric Town Exit (電気街口). Gyukatsu Ichinisan is about 6 minutes’ walk, down in the basement of 3-8-17 Sotokanda; follow the map."
        ]
      },
      {
        "time": "11:15am–Noon",
        "kind": "lunch",
        "icon": "🥩",
        "title": "Gyukatsu Ichinisan, Akihabara",
        "status": "Walk-in",
        "detail": "Beef cutlet fried 60 seconds and served rare; you sear the slices yourself on a hot stone at the counter, with wasabi-soy, rock salt and barley rice. Sotokanda 3-8-17, basement, a minute from Suehirocho Station. Open 11:00–22:00, 13 counter seats, no reservations; arrive by 11:15 to beat the noon line.",
        "mapQuery": "Gyukatsu Ichinisan Akihabara",
        "food": "Sets ¥1,630 (130g), ¥2,300 (195g) or ¥2,760 (260g) each, tax included.",
        "tip": null,
        "mealId": 15
      },
      {
        "time": "12:10–12:35pm",
        "kind": "activity",
        "icon": "⛩️",
        "title": "Kanda Myojin shrine",
        "detail": "Seven minutes uphill from lunch: a 1,300-year-old shrine that has become Akihabara’s tech-and-anime shrine, with charms for gadgets. Free, 25 minutes, then a 15-minute walk to the owl café.",
        "mapQuery": "Kanda Myojin Shrine Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "1:00–2:00pm",
        "kind": "activity",
        "icon": "🦉",
        "title": "Akiba Fukurou owl café",
        "status": "Booked ✓",
        "detail": "Booked for Sunday October 25 at 1:00pm: an hour with about 40 owls; staff guide you to touch them and, in most sessions, rest one on your arm. Photos welcome, no flash. Kanda Neribeicho 67, 2–3 minutes from JR Akihabara. ¥3,800 each.",
        "mapQuery": "Akiba Fukurou owl cafe Akihabara",
        "food": null,
        "tip": "Arrive by 12:50. The door does not open once a session starts."
      },
      {
        "time": "2:05pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Akihabara → hotel (subway, no changes)",
        "duration": "about 17 min",
        "detail": "Hibiya Line from Akihabara, 3 stops to Kayabacho. Exit 12 comes up next to the hotel.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "From the owl café, walk east to the big street (Showa-dori) and cross it. Turn right and walk about 3 minutes to Hibiya Line Entrance 2, just past Karaoke Kan. About 8 minutes in all.",
          "Tap in and go to Platform 1, for Naka-meguro (中目黒).",
          "Ride 3 stops (about 5 minutes) and get off at Kayabacho.",
          "Follow the signs for the West Gate (西改札). It is a long walk inside the station, about 3 minutes. Then take Exit 12.",
          "Exit 12 comes up a minute from the hotel: walk about 85 m along Eitai-dori and turn left."
        ]
      },
      {
        "time": "2:30–4:30pm",
        "kind": "hotel",
        "icon": "🏨",
        "title": "Rest and change for dinner",
        "detail": "A proper rest after the 6:15 start, then change into dinner clothes for the omakase.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "4:40pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Hotel → Manten Sushi (walk)",
        "duration": "about 14 min walk",
        "detail": "A straight 14-minute walk. No train in dinner clothes.",
        "mapQuery": "Manten Sushi Nihonbashi COREDO Muromachi 2",
        "food": null,
        "tip": null,
        "steps": [
          "Leave the hotel and turn left along Eitai-dori. Walk straight about 5 minutes to the big Nihombashi crossing (Chuo-dori).",
          "Turn right onto Chuo-dori. Cross the old stone Nihonbashi bridge and walk past Mitsukoshi on your left (about 5 minutes).",
          "COREDO Muromachi 2 is on your right. Manten Sushi is on the 1st floor."
        ]
      },
      {
        "time": "5:00–6:30pm",
        "kind": "dinner",
        "icon": "🍣",
        "title": "Manten Sushi, Nihonbashi (omakase)",
        "status": "Booked ✓",
        "detail": "Booked for Sunday October 25 at 5:00pm: the 90-minute counter omakase, ¥8,800 a person (¥12,100 with drinks). A 12-minute walk from the hotel after you change. Same-day cancellation or party-size changes are charged in full.",
        "mapQuery": "Manten Sushi Nihonbashi COREDO Muromachi",
        "food": "Omakase for two; allow ¥17,600–24,200 plus any extra drinks.",
        "tip": "Skip strong perfume; the counter asks guests to avoid it.",
        "mealId": 11
      },
      {
        "time": "6:30pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Manten Sushi → hotel (walk)",
        "duration": "about 14 min walk",
        "detail": "The same walk in reverse.",
        "steps": [
          "Leave COREDO Muromachi 2 onto Chuo-dori and turn left (south).",
          "Walk past Mitsukoshi and over the Nihonbashi bridge to the big Nihombashi crossing (about 5 minutes).",
          "Turn left onto Eitai-dori and walk straight about 5 minutes. The hotel is on your right."
        ],
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      }
    ]
  },
  {
    "id": 4,
    "dayName": "Mon",
    "date": "Oct 26",
    "type": "tokyo",
    "emoji": "🎢",
    "title": "Tokyo DisneySea",
    "location": "Maihama, Chiba (30 min from hotel)",
    "hotel": "Caption by Hyatt Kabutocho — Night 4",
    "activities": [
      {
        "time": "6:30am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "7-Eleven Kabutocho Tosho-mae, grab and go",
        "status": "No booking",
        "detail": "The 24-hour 7-Eleven in front of the Stock Exchange (Kabutocho 6-5), three minutes from the hotel. The closer one at 15-13 opens at 7:00, too late. Eat on the way; Disney is the priority today.",
        "mapQuery": "7-Eleven Nihonbashi Kabutocho 6-5 Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null,
        "mealId": 18
      },
      {
        "time": "6:45am",
        "kind": "travel",
        "icon": "🚆",
        "title": "Hotel → Tokyo DisneySea (JR train + Disney monorail)",
        "duration": "about 45 min",
        "detail": "Walk to JR Hatchobori, the JR Keiyo Line 5 stops to Maihama, then the Disney Resort Line monorail 3 stops. You reach the gate around 7:30.",
        "mapQuery": "Tokyo DisneySea",
        "food": null,
        "tip": "Walking from Maihama to DisneySea instead is about 18 flat minutes, but the monorail is easier on a long day.",
        "steps": [
          "Walk about 10 minutes south to JR Hatchobori Station (open the map). Go down any entrance marked \"JR\".",
          "Tap your phone at the JR gate (B1 floor), then go down to Platform 1: \"Keiyo Line, for Maihama & Soga\". Every early-morning train stops at Maihama.",
          "Ride 5 stops (about 14 minutes) and get off at Maihama.",
          "Go down one floor, out through the South Exit gate, and turn left. Follow the \"Tokyo DisneySea\" signs to Resort Gateway Station (about 2 minutes).",
          "Tap your phone to ride the Disney Resort Line monorail (¥300 each). It only goes one way round.",
          "Ride 3 stops (about 9 minutes) to \"Tokyo DisneySea Station\". The main entrance is right in front of you."
        ]
      },
      {
        "time": "At park opening",
        "kind": "activity",
        "icon": "🎢",
        "title": "First priority ride at park opening",
        "status": "Tickets booked ✓",
        "detail": "Admission is booked for Monday October 26. Link both tickets in the Tokyo Disney Resort app the night before. The moment you’re through the gate, open the app and grab a Standby Pass or Premier Access (paid) for the Fantasy Springs rides and Soaring: Fantastic Flight; they go within minutes of opening. Then walk to Journey to the Center of the Earth, another Premier Access candidate.",
        "mapQuery": "Tokyo DisneySea Mysterious Island",
        "food": null,
        "tip": "Park hours vary by date; check the official calendar the week before and be at the gate about an hour before opening."
      },
      {
        "time": "Late morning",
        "kind": "activity",
        "icon": "🗺️",
        "title": "Rides: Lost River Delta + Arabian Coast",
        "detail": "Indiana Jones is in Lost River Delta; Sindbad is in Arabian Coast. Group nearby operating rides instead of following a rigid hourly checklist.",
        "mapQuery": "Tokyo DisneySea Lost River Delta",
        "food": null,
        "tip": null
      },
      {
        "time": "When hungry",
        "kind": "lunch",
        "icon": "🍔",
        "title": "Lunch wherever you are, via the app",
        "status": "No booking",
        "detail": "No planned lunch: order at whatever counter is near your rides through the Disney app.",
        "mapQuery": "Tokyo DisneySea Tokyo restaurants",
        "food": "Counter-service lunch and snacks, ordered in the app.",
        "tip": null,
        "mealId": 14
      },
      {
        "time": "Afternoon",
        "kind": "activity",
        "icon": "🧚",
        "title": "Rides: Fantasy Springs + other priorities",
        "detail": "Use the Fantasy Springs passes you grabbed at opening; the rides there usually need a Standby Pass or Premier Access. Avoid repeatedly crossing the park for scattered appointments.",
        "mapQuery": "Tokyo DisneySea Fantasy Springs",
        "food": null,
        "tip": null
      },
      {
        "time": "5:00–6:15pm",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Ristorante di Canaletto",
        "status": "Book Sep 25 · 9pm ET",
        "detail": "Your chosen Disney dinner: Italian by the gondola canal in Mediterranean Harbor. Book Priority Seating in the app for about 5:00pm so you can leave the park around 7:30; standard advance requests open one month ahead at 10am JST (September 26 for October 26).",
        "mapQuery": "Ristorante di Canaletto Tokyo DisneySea",
        "food": "Pasta and pizza; Priority Seating is separate from your admission.",
        "tip": "Priority Seating opens one month ahead at 10:00am Japan time: Friday September 25 at 9:00pm Eastern, on the Tokyo Disney Resort reservations site or app (MyDisney account). Free cancellation up to 1 hour before.",
        "mealId": 8,
        "bookUrl": "https://reserve.tokyodisneyresort.jp/en/restaurant/search/",
        "bookLabel": "Disney Priority Seating (English)"
      },
      {
        "time": "6:15–7:30pm",
        "kind": "activity",
        "icon": "🎢",
        "title": "Last rides, then leave the park",
        "detail": "Evening queues are shorter. Leave around 7:30 to be back at the hotel by 9. The 9pm nighttime show would mean a 10:30 return; skip it unless you want one late night.",
        "mapQuery": "Tokyo DisneySea",
        "food": null,
        "tip": null
      },
      {
        "time": "~7:30pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Tokyo DisneySea → hotel (monorail + JR train)",
        "duration": "about 45–50 min",
        "detail": "Monorail 1 stop to Resort Gateway, JR Keiyo Line 5 stops to Hatchobori, then a 10-minute walk.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": "If you miss Hatchobori you end up at Tokyo, the last stop. Just ride one stop back, or take a taxi from there (about 10 minutes).",
        "steps": [
          "At Tokyo DisneySea Station, tap your phone and ride the monorail 1 stop to Resort Gateway (about 4 minutes).",
          "Walk about 2 minutes to JR Maihama Station and tap in.",
          "Go to Platform 2: \"Keiyo Line, for Shin-Kiba & Tokyo\". Every train goes the right way.",
          "Ride 5 stops (about 14 minutes) and get off at Hatchobori, the stop before Tokyo.",
          "Go up to the B1 gate, then walk about 10 minutes north to the hotel (open the map)."
        ]
      }
    ]
  },
  {
    "id": 5,
    "dayName": "Tue",
    "date": "Oct 27",
    "type": "tokyo",
    "emoji": "🛍️",
    "title": "Tsukiji breakfast → Harajuku → Omotesando → Shibuya",
    "location": "Tokyo, Japan",
    "hotel": "Caption by Hyatt Kabutocho — Night 5",
    "activities": [
      {
        "time": "7:10am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Tsukiji Outer Market (subway, no changes)",
        "duration": "about 15–20 min",
        "detail": "Skip breakfast near the hotel; the market is breakfast. Hibiya Line from Kayabacho, 2 stops to Tsukiji.",
        "mapQuery": "Tsukiji Outer Market Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "Walk 1 minute to Kayabacho Station, Exit 12. Follow the gray \"H\" (Hibiya Line) signs.",
          "Tap in and go to Platform 1, \"for Naka-meguro\" (中目黒).",
          "Ride 2 stops (about 4 minutes) and get off at Tsukiji.",
          "Take Exit 1 or Exit 2, both signed for \"Tsukiji Outer Market\".",
          "Walk south with the big Tsukiji Hongwanji temple on your left, to the Harumi-dori crossing. The market streets start on the far corner (about 5 minutes)."
        ]
      },
      {
        "time": "7:30–9:00am",
        "kind": "breakfast",
        "icon": "🐟",
        "title": "Tsukiji Outer Market, graze + browse",
        "status": "No booking",
        "detail": "Eat your way through breakfast and browse. Tuesday is a regular market day and most stalls are open by 7:30. Until 9am, chefs and buyers get priority, so eat at the shop rather than while walking.",
        "mapQuery": "Tsukiji Outer Market Tokyo",
        "food": "Graze two or three stops, like tamagoyaki, an onigiri and a coffee. The restaurant guide (Tue · Tsukiji breakfast) lists stops open that early.",
        "tip": null,
        "mealId": 19
      },
      {
        "time": "9:00am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Tsukiji → Meiji Jingu, Harajuku (1 easy change)",
        "duration": "about 30–35 min",
        "detail": "Hibiya Line 3 stops, change to the Chiyoda Line at Hibiya (no extra gate), then 6 stops to Meiji-jingumae (Harajuku).",
        "mapQuery": "Meiji Jingu Harajuku entrance",
        "food": null,
        "tip": null,
        "steps": [
          "Back at Tsukiji Station, tap in and go to Platform 1, \"for Naka-meguro\".",
          "Ride 3 stops and get off at Hibiya.",
          "Follow the green \"C\" (Chiyoda Line) signs, about 4–5 minutes on foot inside the station. You do not tap again.",
          "Go to Platform 3, \"for Yoyogi-uehara\". Any train is fine, even ones showing an Odakyu destination like Hon-Atsugi or Isehara.",
          "Ride 6 stops and get off at Meiji-jingumae 〈Harajuku〉.",
          "Take Exit 2. The big wooden torii gate of Meiji Jingu is about 3–4 minutes away, next to JR Harajuku Station."
        ]
      },
      {
        "time": "~9:30–10:30am",
        "kind": "activity",
        "icon": "🌳",
        "title": "Meiji Jingu shrine",
        "detail": "A 10-minute walk from Harajuku Station into a forested shrine: one of Tokyo’s top sights, and free. It fills the gap while the shops open. No religious participation is needed.",
        "mapQuery": "Meiji Jingu Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "10:30am–12:30pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Harajuku → Omotesando",
        "detail": "Takeshita Street and most Omotesando shops open 10:30–11:00. Browse Takeshita Street and selected character-goods or fashion stops.",
        "mapQuery": "Omotesando Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~11:00am · during shopping",
        "kind": "treat",
        "icon": "🍩",
        "title": "I’m donut? + Marion Crepes, Harajuku",
        "status": "Walk-in",
        "detail": "Both treats are on the shopping route: I’m donut? by Harajuku Station, then a Marion crêpe on Takeshita Street. Walk-in; short lines are normal.",
        "mapQuery": "I'm donut? Harajuku Tokyo",
        "food": "One doughnut and one crêpe each is plenty before lunch.",
        "tip": null,
        "mealId": 10
      },
      {
        "time": "12:30–1:30pm",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Harajuku Gyozaro",
        "status": "Walk-in",
        "detail": "Your chosen lunch: pan-fried and boiled gyoza with rice and a couple of sides, a few minutes from Omotesando. Walk-in only; expect a short line at 12:30, and it turns over fast.",
        "mapQuery": "Harajuku Gyozaro Tokyo",
        "food": "Two orders of gyoza each plus rice; cheap and quick.",
        "tip": null,
        "mealId": 9
      },
      {
        "time": "1:30–3:00pm",
        "kind": "activity",
        "icon": "🚶",
        "title": "Browse on foot toward Shibuya",
        "detail": "Continue through the shopping corridor toward Shibuya. Allow roughly 25–40 minutes for a direct walk, longer with browsing; use transit if tired. The rest is free time in Shibuya before the crossing.",
        "mapQuery": "Shibuya Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "From the Harajuku side, cross Jingu-bashi bridge and head south past the Yoyogi National Gymnasium.",
          "Continue down Fire-dori to Tower Records.",
          "Keep straight along Jingu-dori to Shibuya Station and the Scramble Crossing. About 18 minutes of walking without stops."
        ]
      },
      {
        "time": "3:00–3:30pm",
        "kind": "activity",
        "icon": "🚦",
        "title": "Shibuya Crossing + browse",
        "detail": "Watch the Scramble Crossing (cross it at least once), then head to the Shibuya Sky elevator by about 3:35 for your 3:40 entry. It is about 5 minutes from the crossing.",
        "mapQuery": "Shibuya Scramble Crossing",
        "food": null,
        "tip": null
      },
      {
        "time": "3:40–5:15pm",
        "kind": "activity",
        "icon": "🌇",
        "title": "Shibuya Sky at sunset",
        "status": "Tickets booked ✓",
        "detail": "Booked: 2 adult tickets, entry between 3:40 and 3:59pm, ¥6,800 paid. The time slot is only for getting in; once you are up there you can stay through sunset (about 4:55pm) and the city lights coming on.",
        "mapQuery": "Shibuya Sky",
        "food": null,
        "tip": "Screenshot the QR code now: Webket cannot resend the confirmation email. It is also in your Webket \"My Page\" purchase history. Before the open-air rooftop you will be asked to put bags and loose items in the lockers.",
        "steps": [
          "Shibuya Sky is on top of the Shibuya Scramble Square tower, right at Shibuya Station.",
          "Use the dedicated \"SHIBUYA SKY\" elevator at street level (1F), outside the building on the east side, facing Shibuya Hikarie. About 5 minutes from the crossing.",
          "Ride it to 14F, show your ticket QR code, and follow the line up to the rooftop.",
          "Do not go to the \"Sky Lobby\" in Shibuya Hikarie (11F); that is a different place."
        ]
      },
      {
        "time": "~5:30pm",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Uobei conveyor belt sushi, Shibuya",
        "status": "Walk-in",
        "detail": "Your chosen dinner, a minute from Shibuya Crossing: order on the touchscreen and the sushi races to you on express lanes. Walk-in only, open until 11pm; go straight there after Shibuya Sky for a 6:00 seat. Home by 8.",
        "mapQuery": "Uobei Shibuya Dogenzaka",
        "food": "Plates from ¥110; ¥1,500–3,000 each for a full meal.",
        "tip": null,
        "mealId": 5
      },
      {
        "time": "~6:30pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Shibuya → hotel (subway, no changes)",
        "duration": "about 35 min",
        "detail": "The Ginza Line from Shibuya runs straight to Nihombashi. Shibuya is the first stop, so every train goes the right way.",
        "steps": [
          "Walk 8–10 minutes to the Ginza Line at Shibuya Station. It is up high (3F) on the east, Meiji-dori side; follow the orange \"G\" signs.",
          "Tap in and get on any train (\"for Asakusa\").",
          "Ride 10 stops (about 20 minutes) and get off at Nihombashi.",
          "Follow the signs east toward the Toei Asakusa Line and Exit D1.",
          "Come up at D1; the hotel is 2 minutes away along Eitai-dori (big road on your left)."
        ],
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      }
    ]
  },
  {
    "id": 6,
    "dayName": "Wed",
    "date": "Oct 28",
    "type": "tokyo",
    "emoji": "♨️",
    "title": "Hakone Yuryo: Couples Massage & Private Onsen",
    "location": "Hakone, Kanagawa",
    "hotel": "Caption by Hyatt Kabutocho — Night 6",
    "activities": [
      {
        "time": "6:15am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart, grab and go",
        "status": "No booking",
        "detail": "FamilyMart in KABUTO ONE (across Eitai-dori from the hotel) opens at 6:00: sandwich or onigiri, yogurt and a drink. Eat it on the Romancecar; eating on board is normal.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null,
        "mealId": 20
      },
      {
        "time": "6:40am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Shinjuku Romancecar (Ginza + Marunouchi, same-platform change)",
        "detail": "Ginza Line 6 stops, step across the platform to the Marunouchi Line, 5 stops to Shinjuku, then the Odakyu gate. You are on the Romancecar platform around 7:17 for the 7:37 departure.",
        "mapQuery": "Odakyu Shinjuku Station West Exit",
        "food": null,
        "tip": "Backup: the 6:54 Ginza Line train still gets you to the platform around 7:27. The Shinjuku West Exit area is under construction, so follow the \"Odakyu / Romancecar\" signs if the layout looks different.",
        "duration": "about 35 min",
        "steps": [
          "Walk 2 minutes to Nihombashi Station Exit D1 and go down. Follow the orange \"G\" (Ginza Line) signs west through the underground passage (about 4 minutes).",
          "Tap in and go to Platform 1, \"for Shibuya\" (渋谷).",
          "Ride 6 stops (about 10 minutes) and get off at Akasaka-mitsuke.",
          "Step straight across the same platform to the red \"M\" Marunouchi Line, \"for Shinjuku / Ogikubo\". Trains showing \"Honancho\" also stop at Shinjuku.",
          "Ride 5 stops (about 9 minutes) and get off at Shinjuku.",
          "Follow the \"Odakyu Line\" signs to the Odakyu West Exit Underground Gate. Tap your phone there; that pays the base fare.",
          "Go up to the ground-floor platforms. Your Romancecar, Hakone 41, leaves from Platform 2. Find car 6, seats 12C and 12D."
        ]
      },
      {
        "time": "7:37am",
        "kind": "travel",
        "icon": "🚄",
        "title": "Romancecar Hakone 41: Shinjuku → Hakone-Yumoto",
        "status": "Booked ✓",
        "detail": "Booked: Hakone 41, car 6, seats 12C and 12D, arriving Hakone-Yumoto 9:22. Board by showing the purchase page on your phone; carry the Visa you paid with in case staff ask. The ticket covers your reserved seats only, so tap Suica at the gates for the base fare (about ¥1,270 each).",
        "mapQuery": "Hakone-Yumoto Station",
        "food": null,
        "tip": "To pull up the ticket on the day: e-Romancecar → Confirm booking, with the phone number and email you booked with. Same-day train changes are free there until departure.",
        "duration": "7:37 → 9:22",
        "steps": [
          "Platform 2 at Odakyu Shinjuku. Find car 6 (the car number is on the platform floor and on the train door).",
          "Sit in seats 12C and 12D. Have the purchase page open on your phone in case staff check.",
          "Eat your FamilyMart breakfast on board; that is normal on the Romancecar.",
          "Ride to the end of the line, Hakone-Yumoto (arrives 9:22)."
        ]
      },
      {
        "time": "9:40am",
        "kind": "travel",
        "icon": "🚌",
        "title": "Free shuttle → Hakone Yuryo",
        "duration": "3 min ride",
        "detail": "The free Hakone Yuryo shuttle bus. With the 9:22 arrival, the next one leaves at 9:40. You arrive around 9:45; the baths open at 10:00.",
        "mapQuery": "Hakone Yuryo",
        "food": null,
        "tip": "If you are unsure, ask any station staff: \"Hakone Yuryo shuttle?\" They see it every day. Phone: 0460-85-8411.",
        "steps": [
          "Get off the Romancecar at Platform 1 and go up to the 2F ticket gate. Tap your phone to exit.",
          "Walk along the covered walkway to the uphill end of the station (away from Odawara).",
          "Take the stairs or escalator down to street level. The \"Hakone Yuryo\" shuttle stop (無料送迎バス乗り場) is at the bottom, on the station side. Do not cross the main road.",
          "Ride about 3 minutes to Hakone Yuryo."
        ]
      },
      {
        "time": "10:00am–Noon",
        "kind": "activity",
        "icon": "♨️",
        "title": "Private open-air onsen · 120 min",
        "status": "Booked ✓",
        "detail": "Booked for Wednesday October 28 at 10:00am: a private outdoor bath for just the two of you, 120 minutes. ¥10,400 for the room, tax included, paid on site; the card on TableCheck only holds it. Arriving 15+ minutes late without calling cancels it. Yukata rental ¥100 each, optional.",
        "mapQuery": "Hakone Yuryo private open air bath",
        "food": null,
        "tip": "The shuttle gets you there around 9:40. No swimsuits in the private bath. Changes the day before up to 3 days prior are by phone only: +81-460-85-8411."
      },
      {
        "time": "12:30pm",
        "kind": "lunch",
        "icon": "🍢",
        "title": "Hachiri irori course, Hakone Yuryo",
        "status": "Call Sep 27 · 10:30pm ET",
        "detail": "Charcoal irori course: grilled seafood and seasonal vegetables, a grilled river fish, tea soba and dessert. Autumn Irori Course ¥6,500 each (the limited special course is ¥8,500). Restaurant bookings are by phone only.",
        "mapQuery": "Hakone Yuryo Irorisaryo Hachiri",
        "food": "Reserve the Seasonal Irori Course for two. As a package add-on to the private bath it is ¥6,000 each (¥12,000 total) plus a free drink each, instead of ¥6,500 each on its own. The ¥8,000 Special Course is limited to 10 servings a day — an upgrade only if you want the extra sashimi and Japanese beef.",
        "tip": "Phone only, from one month before: call +81-460-85-8411 on Sunday September 27 at 10:30pm Eastern (11:30am Monday in Japan). Ask for the “Private Bath + Irori Course package” — your bath is booked, so the Seasonal Irori Course drops to ¥6,000 each and includes a draft beer or soft drink apiece.",
        "mealId": 12,
        "bookUrl": "tel:+81460858411",
        "bookLabel": "Call +81-460-85-8411"
      },
      {
        "time": "1:45pm",
        "kind": "activity",
        "icon": "💆",
        "title": "Couples massage · 60 min",
        "status": "Booked ✓",
        "detail": "Booked for Wednesday October 28 at 1:45pm: two 60-minute body-care massages side by side at Yururuka, the spa’s massage room, right after lunch. ¥7,900 each, paid on site, which is why nothing was charged at booking.",
        "mapQuery": "Hakone Yuryo Hogushian Yururuka",
        "food": null,
        "tip": "Avoid alcohol at lunch and flag any medical considerations when you check in."
      },
      {
        "time": "2:50pm",
        "kind": "travel",
        "icon": "🚄",
        "title": "Shuttle + Romancecar Hakone 36 → Shinjuku",
        "status": "Booked ✓",
        "detail": "Booked: Hakone 36 at 3:13pm, car 5, seats 5C and 5D, arriving Shinjuku 4:46. The weekday shuttle runs about every 15 minutes and takes 3 minutes, so go straight from the massage to the front desk and out. Tap Suica at the gates for the base fare.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": "Small train snack if needed; dinner is at 5:30.",
        "tip": "In the morning, ask the front desk for the shuttle times after 2:45 and whether you can settle the bill before the massage. Tell the therapist you have a 3:13 train. If you miss it, buy two seats on the 3:52 at the Hakone-Yumoto ticket machine (about ¥2,300 for both): you reach Shinjuku 5:27 and Ushigoro around 5:40, inside their 30-minute hold.",
        "duration": "3:13 → 4:46",
        "steps": [
          "Right after the massage, go to the front desk and pay for everything.",
          "Catch the free shuttle at the entrance to Hakone-Yumoto Station (about 3 minutes).",
          "Go up to the station’s 2F ticket gate and tap your phone; that pays the base fare.",
          "Follow the \"Romancecar / for Shinjuku\" signs. Your train is Hakone 36 at 3:13. Find car 5, seats 5C and 5D.",
          "Ride to the end of the line, Shinjuku (arrives 4:46)."
        ]
      },
      {
        "time": "5:30pm",
        "kind": "dinner",
        "icon": "🥩",
        "title": "Yakiniku Ushigoro, Shinjuku 3-chome",
        "status": "Booked ✓",
        "detail": "Booked for Wednesday October 28 at 5:30pm: A5 kuroge wagyu yakiniku, staff-guided at your table, 12th floor beside Kinokuniya, about 10 minutes’ walk from the Romancecar platforms. Courses ¥9,760–16,590 a person plus 5% service. The 3D cat at Cross Shinjuku Vision is on the way if you want the photo.",
        "mapQuery": "Yakiniku Ushigoro Shinjuku Sanchome",
        "food": "One course each; allow ¥20,000–33,000 for two plus drinks.",
        "tip": "Changes and cancellations are by phone only: +81-3-3358-4129. Arriving 30+ minutes late without calling cancels the table.",
        "mealId": 7,
        "steps": [
          "From the Romancecar, leave Odakyu Shinjuku by the West Exit gate (ground level, or the B1 underground gate).",
          "On B1, walk east through the \"East-West Free Passage\" (東西自由通路), a wide 100 m walkway under JR Shinjuku with no ticket gates.",
          "Come up at the East Exit and walk east along Shinjuku-dori for about 2 minutes.",
          "Turn left into the side street just before THE SUIT COMPANY. The HULIC &New SHINJUKU building is about 30 m along on the right.",
          "Take the elevator to 12F (not 11F, which is a different Ushigoro). About 6–10 minutes in all."
        ]
      },
      {
        "time": "~7:30pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Shinjuku → hotel (Marunouchi + Ginza, same-platform change)",
        "duration": "about 30 min",
        "detail": "The morning route in reverse: Marunouchi Line 4 stops, step across the platform at Akasaka-mitsuke, Ginza Line 6 stops to Nihombashi.",
        "steps": [
          "From Ushigoro, walk about 5 minutes east on Shinjuku-dori (toward Isetan) to Shinjuku-sanchome Station and go down a red \"M\" Marunouchi Line entrance.",
          "Tap in and go to Platform 2, \"for Ikebukuro\" (池袋).",
          "Ride 4 stops and get off at Akasaka-mitsuke.",
          "Step straight across the same platform to the orange \"G\" Ginza Line, Platform 3, \"for Asakusa\".",
          "Ride 6 stops and get off at Nihombashi. Take Exit D1; the hotel is 2 minutes away."
        ],
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      }
    ]
  },
  {
    "id": 7,
    "dayName": "Thu",
    "date": "Oct 29",
    "type": "travel",
    "emoji": "🛬",
    "title": "Ginza breakfast + shopping → Haneda",
    "location": "Tokyo → Minneapolis → Tampa",
    "hotel": null,
    "activities": [
      {
        "time": "Before breakfast",
        "kind": "hotel",
        "icon": "🧳",
        "title": "Pack + store bags at the hotel",
        "detail": "Pack first and confirm checkout and luggage collection. Carry only the day bag to Ginza.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "8:10am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Hotel → Hoshino Coffee, Yaesu (walk)",
        "duration": "about 15–20 min walk",
        "detail": "An easy walk west to the Tokyo Station side. The café is in the Yaesu Underground Mall below the station.",
        "steps": [
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Walk west along Eitai-dori past the Nihombashi crossing toward Tokyo Station’s Yaesu (east) side.",
          "Go down into the Yaesu Underground Mall (八重洲地下街) and follow the map to Hoshino Coffee."
        ],
        "mapQuery": "Hoshino Coffee Yaesu Chikagai Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "8:30–9:30am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Hoshino Coffee, Yaesu underground (soufflé pancakes)",
        "status": "Walk-in",
        "detail": "Oven-baked soufflé pancakes and coffee in the Yaesu underground mall at Tokyo Station, a 15-minute walk from the hotel; opens 8:00, no reservations. Then two stops on the Ginza Line to the shops.",
        "mapQuery": "Hoshino Coffee Yaesu Underground Mall Tokyo",
        "food": "One soufflé pancake stack each with coffee.",
        "tip": null,
        "mealId": 1
      },
      {
        "time": "9:35am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Yaesu → Ginza (walk)",
        "duration": "about 15–20 min walk",
        "detail": "A straight walk south along Chuo-dori to Ginza.",
        "steps": [
          "Come up from the Yaesu Underground Mall to street level.",
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Walk south to Chuo-dori and follow it into Ginza (about 15–20 minutes). Mitsukoshi, where lunch is at 11:00, is at the Ginza 4-chome crossing."
        ],
        "mapQuery": "Ginza 4-chome crossing Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "10:00–10:50am",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Ginza",
        "detail": "Tokyo Station to Ginza is two stops on the Ginza Line, or a 15-minute walk. Stores open 10:00–10:30. One or two stops, then lunch at Mitsukoshi at 11:00.",
        "mapQuery": "Ginza Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "11:00–11:45am",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Hitsumabushi Bincho, Ginza Mitsukoshi",
        "status": "Book now",
        "detail": "Grilled eel over rice, eaten three ways (plain, with condiments, then with dashi poured over). Ginza Mitsukoshi 11F; 11:00 is the first lunch seating. Arriving more than 15 minutes late without calling cancels the booking.",
        "mapQuery": "Hitsumabushi Bincho Ginza Mitsukoshi",
        "food": "One hitsumabushi set each; allow ¥4,000–6,000 per person.",
        "tip": null,
        "mealId": 13,
        "bookUrl": "https://booking.ebica.jp/webrsv/search/e020034301/21802?isfixshop=true",
        "bookLabel": "Book on ebica"
      },
      {
        "time": "11:50am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Ginza → hotel, collect bags (subway, no changes)",
        "duration": "about 20 min",
        "detail": "Ginza Line 2 stops to Nihombashi, then a 5-minute walk. Pick up your bags at the front desk.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "From Mitsukoshi’s basement, follow the signs into Ginza Station and the orange Ginza Line (\"G\").",
          "Tap in and go to Platform 2, for Asakusa (浅草).",
          "Ride 2 stops (about 3 minutes) and get off at Nihombashi.",
          "Follow the signs for Exit D1.",
          "Come up, go to the corner of the big street (Eitai-dori) and walk along it with the road on your left, over the bridge above the expressway. The hotel is on your right, about 4 minutes."
        ]
      },
      {
        "time": "~12:40pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Hotel → Haneda: short taxi + airport bus",
        "duration": "about 1 hour",
        "detail": "A 5-minute taxi to T-CAT, then the 1:00pm Airport Limousine Bus to Terminal 3, arriving 1:35. Book and pay for this bus ahead on the official site: you get a QR ticket and skip the counter. ¥1,000 each.",
        "mapQuery": "Tokyo City Air Terminal T-CAT Hakozaki",
        "food": null,
        "tip": "Buses leave T-CAT every 30 minutes (12:30, 1:00, 1:30pm). If you miss yours, the next one still gets you there in plenty of time. A taxi straight from the hotel to Terminal 3 is about ¥9,000–10,000.",
        "steps": [
          "Ask the front desk for a taxi to T-CAT (東京シティエアターミナル, 箱崎). About 5 minutes, ¥1,000–1,300.",
          "At T-CAT, go to the 1F boarding area for buses to Haneda. Have your QR ticket ready. If you didn’t book ahead, buy 2 tickets to \"Haneda Airport Terminal 3\" at the 1F counter or machine first.",
          "Staff load your suitcases underneath and give you claim tags.",
          "The bus stops at Terminal 2 and Terminal 1 first. Stay on: Terminal 3 is the LAST stop (about 35 minutes).",
          "Collect your bags, go up to 3F Departures, and check in with Delta."
        ],
        "status": "Book ahead",
        "bookUrl": "https://webservice.limousinebus.co.jp/web/en/ReservationTop.aspx?AirportLine=2&Direction=2&DepartureBusstop=003&ArrivalBusstop=250&DepartureDate=20261029&DepartureTime=1300&siteorigin=wwwlim",
        "bookLabel": "Reserve the 1:00pm bus (official)"
      },
      {
        "time": "~2:00–4:15pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Haneda Terminal 3: check in + duty-free",
        "detail": "Check in and drop bags, then Edo Koji (4F, before security) for a snack if you want one, and duty-free airside for last souvenirs. Be at the gate by about 4:30pm.",
        "mapQuery": "Tokyo Haneda Airport Terminal 3",
        "food": "Snacks only; lunch was Bincho.",
        "tip": null
      },
      {
        "time": "5:15pm",
        "kind": "flight",
        "icon": "✈️",
        "title": "Tokyo Haneda (HND) → Minneapolis (MSP) · DL120",
        "status": "Booked ✓",
        "detail": "Delta DL120, Airbus A350-900. 11 hours 8 minutes. Crossing the date line eastward gains back the hours you lost — you leave Thursday afternoon Japan time and arrive Thursday afternoon Minneapolis time.",
        "food": "Full meal service on the long-haul home.",
        "tip": "Sleep as much as you can on the return. You'll arrive in Minneapolis the same day."
      },
      {
        "time": "2:23pm",
        "kind": "layover",
        "icon": "⏳",
        "title": "Layover in Minneapolis (MSP)",
        "duration": "~4 hr",
        "detail": "Comfortable layover before the final leg home.",
        "mapQuery": "Minneapolis–Saint Paul International Airport",
        "food": "Have a meal here if hungry — decent airport dining options in MSP.",
        "tip": null
      },
      {
        "time": "6:20pm",
        "kind": "flight",
        "icon": "🛫",
        "title": "Minneapolis (MSP) → Tampa (TPA) · DL2385",
        "status": "Booked ✓",
        "detail": "Delta DL2385, Airbus A321. 3 hours 14 minutes home.",
        "food": null,
        "tip": "You arrive Tampa at 10:34pm Thursday. Welcome home, Aaron."
      }
    ]
  }
];
export const DAY_TRANSIT = {
  "0": {
    "leaveBy": "Pickup around 3:30am; reach TPA by 4:15am",
    "from": "Home",
    "to": "TPA",
    "route": "Pre-booked ride; adjust for actual drive",
    "mapQuery": "Tampa International Airport"
  },
  "1": {
    "leaveBy": "After customs, about 5:15–5:45pm",
    "from": "Haneda T3, 1F bus stop 2",
    "to": "T-CAT → 5-min taxi → hotel",
    "route": "Airport Limousine Bus, ¥1,000 each",
    "mapQuery": "Tokyo City Air Terminal T-CAT Hakozaki"
  },
  "2": {
    "leaveBy": "Leave hotel around 7:45am",
    "from": "Nihombashi, entrance D1",
    "to": "Asakusa",
    "route": "Toei Asakusa Line, gate 2 \"Oshiage\", 5 stops",
    "mapQuery": "Nihombashi Station Exit D1"
  },
  "3": {
    "leaveBy": "Taxi at 7:25am; arrive about 7:40",
    "from": "Hotel front desk",
    "to": "teamLab Planets",
    "route": "Taxi, about 15 min, ¥2,500–3,000; 8am entry BOOKED",
    "mapQuery": "teamLab Planets Tokyo"
  },
  "4": {
    "leaveBy": "Leave hotel 6:45am; at the gate around 7:30",
    "from": "JR Hatchobori (10-min walk)",
    "to": "Maihama → DisneySea",
    "route": "JR Keiyo Line Platform 1, 5 stops + monorail 3 stops",
    "mapQuery": "JR Hatchobori Station"
  },
  "5": {
    "leaveBy": "Leave 7:10am; leave Tsukiji 9:00am",
    "from": "Kayabacho Exit 12 → Tsukiji",
    "to": "Hibiya → Meiji-jingumae (Harajuku)",
    "route": "Hibiya Line; change to Chiyoda Line at Hibiya",
    "mapQuery": "Kayabacho Station Exit 12"
  },
  "6": {
    "leaveBy": "Leave 6:40am for the 7:37 Romancecar (Platform 2)",
    "from": "Nihombashi D1 → Ginza Line",
    "to": "Akasaka-mitsuke → Shinjuku",
    "route": "Same-platform change to Marunouchi Line",
    "mapQuery": "Odakyu Shinjuku Station West Exit"
  },
  "7": {
    "leaveBy": "Taxi to T-CAT about 12:40pm with bags",
    "from": "Hotel → T-CAT",
    "to": "Haneda T3 at 1:35pm",
    "route": "1:00pm Limousine Bus; T3 is the LAST stop",
    "mapQuery": "Tokyo City Air Terminal T-CAT Hakozaki"
  }
};
