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
        "tip": "Set your Uber pickup the night before. You need to be at TPA by 4:15am for a 6:15am departure."
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
        "tip": "Download the Airalo app and buy a Japan eSIM before leaving Tampa (~$20/person for 10-15 days unlimited). Installs digitally, no counter pickup needed. iPhone XS+ or most Android 2020+ supported."
      },
      {
        "time": "Late Afternoon",
        "kind": "travel",
        "icon": "🚆",
        "title": "Haneda Airport → Hotel",
        "duration": "45–55 min",
        "detail": "This is now the default arrival plan: from Haneda Terminal 3, use the Keikyu gate for downtown Tokyo on the 2nd-floor Arrival Lobby. Take the Keikyu Airport Line toward Sengakuji; if the train does not continue through to Nihombashi, make the straightforward transfer there to the Toei Asakusa Line. Exit at Nihombashi, then take the 8–10 minute walk to Caption by Hyatt Kabutocho. Plan on about 45–55 minutes from the airport station to the hotel and roughly ¥550–700 per person—dramatically less than a taxi.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": "Luggage rule: train is comfortable with one rolling checked bag each plus a backpack/small carry-on. Follow the elevator signs, keep your bags at the end of the car—not in an aisle—and use Google Maps live to choose the exact next departure."
      },
      {
        "time": "~6:00–7:00pm",
        "kind": "hotel",
        "icon": "🏨",
        "title": "Check in · Caption by Hyatt Kabutocho",
        "status": "Booked ✓",
        "detail": "Check in at your confirmed hotel after airport processing and the train journey. Hotel arrival is flexible, not a deadline.",
        "food": null,
        "tip": "Confirm breakfast and gym hours. Do not assume hotel breakfast is available before the early teamLab departure."
      },
      {
        "time": "~7:30–8:00pm start · flexible",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "KABEAT, Kabutocho",
        "status": "Chosen · to reserve",
        "detail": "Your chosen first-night dinner near the hotel. Aim for a relaxed 60–90-minute meal after check-in and freshening up, subject to service. The restaurant's 120-minute dinner seating limit is a maximum, not a required meal duration. Prefer a weekday seat-only reservation rather than a long prepaid course. No reservation has been made.",
        "mapQuery": "KABEAT Kabutocho Tokyo",
        "food": "Choose individual non-soup dishes on arrival. Allow ¥6,000–12,000 for two; menu, drinks and actual total remain to choose.",
        "tip": "Arrival-night timing depends on the flight and airport processing. Contact KABEAT if delayed; its booking policy allows cancellation if it cannot contact you within 15 minutes of the reservation time."
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
        "time": "7:15–8:00am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Talk Shop, in the hotel",
        "status": "Chosen",
        "detail": "Paid breakfast downstairs at your hotel, selected for Saturday only. Eggs your way, bacon, sausage, hash browns, avocado and toast, with coffee and juice. Published price ¥2,860 each, ¥5,720 for two. Breakfast is not included in your stay. Other mornings will have their own Western-style breakfast plans; no skipped breakfasts.",
        "mapQuery": "Talk Shop Caption by Hyatt Kabutocho Tokyo",
        "food": "A full American breakfast for each person, not just coffee or a pastry.",
        "tip": null
      },
      {
        "time": "8:15am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Asakusa",
        "duration": "25–30 min",
        "detail": "Walk to Nihombashi Station and take the Toei Asakusa Line straight to Asakusa, no transfers. About 25–30 minutes door to door.",
        "mapQuery": "Asakusa Station Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "9:00–10:45am",
        "kind": "activity",
        "icon": "⛩️",
        "title": "Senso-ji Temple + Asakusa streets",
        "detail": "Explore the temple, Kaminarimon and Nakamise at a comfortable pace. Browse shops as they open; no religious participation is needed.",
        "mapQuery": "Sensoji Temple Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "11:00–11:30am",
        "kind": "treat",
        "icon": "🍵",
        "title": "Suzukien matcha gelato",
        "status": "Optional",
        "detail": "Seven intensities of matcha gelato, not soft serve. Eat in a permitted area. Skip a long queue rather than compressing the aquarium visit.",
        "mapQuery": "Suzukien Asakusa Tokyo",
        "food": "One optional matcha treat.",
        "tip": null
      },
      {
        "time": "11:30am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Asakusa → Skytree Town, on foot",
        "duration": "20–25 min walk",
        "detail": "Walk across Azuma Bridge over the Sumida River; Skytree is in view most of the way. If you’re tired, it’s one stop on the Tobu line from Asakusa to Tokyo Skytree Station.",
        "mapQuery": "Tokyo Skytree Town",
        "food": null,
        "tip": null
      },
      {
        "time": "12:15–1:45pm",
        "kind": "activity",
        "icon": "🐠",
        "title": "Sumida Aquarium",
        "status": "Book ahead",
        "detail": "Allow about 90 minutes. Entry is not booked; select an available slot after agreeing on the morning pace.",
        "mapQuery": "Sumida Aquarium Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "1:45–2:45pm",
        "kind": "lunch",
        "icon": "🍜",
        "title": "Rokurinsha tsukemen, Solamachi",
        "status": "Chosen · walk-in",
        "detail": "Your chosen Saturday lunch: thick tsukemen noodles with a separate rich dipping broth. Solamachi 6F, roughly 5–10 minutes inside the complex from the aquarium, excluding queues. No reservations. Allow ¥3,000–4,000 for two as a meal allowance, not a fixed menu quote.",
        "mapQuery": "Rokurinsha Tokyo Solamachi",
        "food": "One full noodle order each. If hungry earlier, bring a bakery snack; gelato is optional, not a meal replacement.",
        "tip": null
      },
      {
        "time": "2:45pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Solamachi → JAPANKART, on foot",
        "duration": "15–20 min walk",
        "detail": "The shop for this tour is at 2-18-15 Azumabashi, between Skytree and Asakusa. Arriving around 3:00 leaves time to check in before the proposed 3:30pm tour.",
        "mapQuery": "JAPANKART 2-18-15 Azumabashi Sumida Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~3:30–4:30pm · target, not booked",
        "kind": "activity",
        "icon": "🏎️",
        "title": "JAPANKART go-kart tour · 60 min",
        "status": "Chosen · to book",
        "detail": "Your selected tour for Saturday October 24. It starts and ends at the JAPANKART shop at 2-18-15 Azumabashi, near Skytree, and drives through Ueno, Akihabara, Kappabashi and Asakusa. Advertised from ¥10,000 each, ¥20,000 for two; actual date-specific price and availability still need checking. Costumes and guide photos are included. This is not the longer 120-minute Tokyo Bay course.",
        "mapQuery": "JAPANKART 2-18-15 Azumabashi Sumida Tokyo",
        "source": "https://japankart.com/",
        "food": null,
        "tip": "Not booked. Each driver needs the operator-approved original driving documents. Confirm check-in time, weather and cancellation rules before paying."
      },
      {
        "time": "4:45pm · flexible",
        "kind": "travel",
        "icon": "🚶",
        "title": "JAPANKART → Tokyo Solamachi, on foot",
        "duration": "15–20 min walk",
        "detail": "Walk back toward Skytree after photos and returning costumes.",
        "mapQuery": "Tokyo Solamachi",
        "food": null,
        "tip": null
      },
      {
        "time": "~5:05–6:45pm · flexible",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Tokyo Solamachi",
        "detail": "Browse the big shopping complex at the foot of Skytree: Japanese souvenirs, snacks, crafts and character shops. Shops are open until 9pm per the official site.",
        "mapQuery": "Tokyo Solamachi",
        "food": null,
        "tip": null
      },
      {
        "time": "6:45pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Skytree → Nihonbashi for dinner",
        "duration": "20–25 min",
        "detail": "One direct train on the Toei Asakusa Line from Oshiage (Skytree) Station toward Nihombashi. The Ningyocho dinner options are one stop earlier.",
        "mapQuery": "Nihombashi Station Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~7:15pm · dinner proposal",
        "kind": "dinner",
        "icon": "🍤",
        "title": "Tenichi tempura, Nihonbashi Takashimaya",
        "status": "Proposed",
        "detail": "Recommended dinner to finish the day near your hotel: tempura adds a different cuisine after noodles. About 20–25 minutes from Solamachi by direct train. Restaurant is on the main building's 8F. Published Fuji dinner set ¥3,850 each; table last order 8pm. Confirm reservation availability after the kart time is booked.",
        "mapQuery": "Tenichi Nihonbashi Takashimaya Tokyo",
        "food": "Tempura with rice and sides; side soup does not need to be the focus. ¥7,700 for two Fuji sets, plus drinks/extras. Lower-cost shrimp tempura rice bowl ¥2,970 each. Awaiting your dinner choice.",
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
    "title": "teamLab → Tokyo Bay → Roppongi",
    "location": "Tokyo, Japan",
    "hotel": "Caption by Hyatt Kabutocho — Night 3",
    "activities": [
      {
        "time": "6:15am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "7-Eleven or FamilyMart, grab and go",
        "status": "No booking",
        "detail": "Grab something quick at FamilyMart KABUTO ONE near the hotel (opens 6:00am) or any 7-Eleven, and eat on the way to teamLab.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null
      },
      {
        "time": "6:55am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → teamLab Planets",
        "duration": "45–50 min",
        "detail": "Allow about 45–50 minutes plus entry buffer. One option is Kayabacho → Tsukishima → Toyosu, then Shin-Toyosu or the final walk. Confirm actual Sunday service.",
        "mapQuery": "teamLab Planets TOKYO",
        "food": null,
        "tip": null
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
        "time": "10:30–11:45am",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Toyosu, near teamLab",
        "status": "Pick a spot",
        "detail": "Eat near teamLab rather than going to Shibuya for lunch. Gyukatsu can fit Tuesday instead.",
        "mapQuery": "Toyosu Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "Noon–3:30pm",
        "kind": "free",
        "icon": "🌊",
        "title": "Tokyo Bay waterfront or hotel rest",
        "detail": "Karting is now planned for Saturday. Keep this afternoon unhurried after the early teamLab start: enjoy the waterfront or return to the hotel for a break before the evening. No additional ticketed activity is required.",
        "mapQuery": "Tokyo Bay Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "3:30–5:30pm",
        "kind": "activity",
        "icon": "🗼",
        "title": "Roppongi + optional Tokyo Tower photo stop",
        "detail": "Travel toward Roppongi from your afternoon stop or hotel. Tokyo Tower is an optional photo stop; leave room for a rest rather than adding another mandatory observation deck.",
        "mapQuery": "Tokyo Midtown Roppongi",
        "food": null,
        "tip": null
      },
      {
        "time": "6:00pm onward",
        "kind": "dinner",
        "icon": "🍣",
        "title": "Roppongi, occasion sushi",
        "status": "Pick a spot",
        "detail": "Proposed occasion-sushi dinner, replacing Tuesday’s cross-city transfer. Tokyo Ten remains a candidate, not a booking. If celebrating on Tuesday itself matters, choose an occasion restaurant in Shibuya instead.",
        "mapQuery": "Roppongi Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
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
        "title": "7-Eleven or FamilyMart, grab and go",
        "status": "No booking",
        "detail": "Grab something quick at FamilyMart KABUTO ONE near the hotel (opens 6:00am) or any 7-Eleven, and eat on the way. Disney is the priority today.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null
      },
      {
        "time": "~6:45am",
        "kind": "travel",
        "icon": "🚆",
        "title": "Hotel → Tokyo DisneySea",
        "duration": "60–75 min",
        "detail": "Walk to Hatchobori, JR Keiyo to Maihama, then Resort Line or walk. Allow roughly 60–75 minutes door to gate; target 7:45–8:00am arrival, adjusting for official park hours. Fares remain in the shared Suica allowance.",
        "mapQuery": "Tokyo DisneySea",
        "food": null,
        "tip": null
      },
      {
        "time": "At park opening",
        "kind": "activity",
        "icon": "🎢",
        "title": "First priority ride at park opening",
        "status": "Tickets booked ✓",
        "detail": "Admission is booked for Monday October 26. Choose based on current operation, app access and waits. Journey to the Center of the Earth is a candidate, not a promise of a short opening queue.",
        "mapQuery": "Tokyo DisneySea Mysterious Island",
        "food": null,
        "tip": null
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
        "title": "Inside DisneySea",
        "status": "Pick a spot",
        "detail": "One casual lunch near your actual rides. Do not cross the park for the old Mediterranean Harbor placeholder or duplicate Magellan’s at lunch.",
        "mapQuery": "Tokyo DisneySea Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "Afternoon",
        "kind": "activity",
        "icon": "🧚",
        "title": "Rides: Fantasy Springs + other priorities",
        "detail": "Use the app for operation and access. Avoid repeatedly crossing the park for scattered appointments.",
        "mapQuery": "Tokyo DisneySea Fantasy Springs",
        "food": null,
        "tip": null
      },
      {
        "time": "Evening",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Inside DisneySea",
        "status": "Pick a spot",
        "detail": "Choose one dinner later. Magellan’s is a candidate inside the fortress, not aboard the ship. Dining and Priority Seating are separate from your booked admission.",
        "mapQuery": "Tokyo DisneySea Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
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
        "time": "8:00am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Tsukiji Outer Market",
        "duration": "20–30 min",
        "detail": "Skip breakfast near the hotel; the market is breakfast today. Walk to Kayabacho and take the Hibiya Line two stops to Tsukiji, then walk to the market. Allow roughly 20–30 minutes door to door. No Akihabara visit today.",
        "mapQuery": "Tsukiji Outer Market Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "8:20–9:45am",
        "kind": "breakfast",
        "icon": "🐟",
        "title": "Tsukiji Outer Market, graze + browse",
        "status": "No booking",
        "detail": "Eat your way through breakfast and browse. Tuesday is a regular market day. Until 9am, chefs and buyers get priority, so eat at the shop rather than while walking.",
        "mapQuery": "Tsukiji Outer Market Tokyo",
        "food": "Graze two or three stops, like tamagoyaki, an onigiri and a coffee. The restaurant guide (Tue · Tsukiji breakfast) lists stops open that early.",
        "tip": null
      },
      {
        "time": "9:45am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Tsukiji → Harajuku",
        "duration": "30–40 min",
        "detail": "Hibiya Line from Tsukiji, then one change to the Chiyoda Line (for example at Kasumigaseki) for Meiji-jingumae (Harajuku). Allow roughly 30–40 minutes including walking and the transfer. Check the live subway route. Shops open individually later in the morning.",
        "mapQuery": "Harajuku Station Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~10:15am–Noon",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Harajuku → Omotesando",
        "detail": "Browse Takeshita Street and selected character-goods or fashion stops as shops open. One visit replaces both previous Sunday and Tuesday trips.",
        "mapQuery": "Omotesando Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "Noon–1:00pm",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Harajuku / Omotesando",
        "status": "Pick a spot",
        "detail": "Lunch on the shopping route. Tonkatsu or gyoza are candidates, or shift lunch toward Shibuya for gyukatsu.",
        "mapQuery": "Harajuku / Omotesando Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "1:00–2:30pm",
        "kind": "activity",
        "icon": "🚶",
        "title": "Browse on foot toward Shibuya",
        "detail": "Continue through the shopping corridor. Allow roughly 25–40 minutes for a direct walk, longer with browsing; use transit if tired.",
        "mapQuery": "Shibuya Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "2:30–3:30pm",
        "kind": "treat",
        "icon": "🥞",
        "title": "Shibuya dessert stop",
        "status": "Pick a spot",
        "detail": "Choose one main treat: pancakes, crepe or doughnut. FLIPPER’S is a candidate. Do not stack three dessert stops; sharing depends on minimum-order rules.",
        "mapQuery": "Shibuya dessert Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "3:30–4:15pm",
        "kind": "activity",
        "icon": "🚦",
        "title": "Shibuya Crossing + browse",
        "detail": "See the crossing and leave time to find the observation-deck entrance. Shorten shopping to protect the eventual ticket time.",
        "mapQuery": "Shibuya Scramble Crossing",
        "food": null,
        "tip": null
      },
      {
        "time": "~4:15–5:45pm",
        "kind": "activity",
        "icon": "🌇",
        "title": "Shibuya Sky at sunset",
        "status": "Book ahead",
        "detail": "Moved from Sunday to Tuesday. Not booked and not a verified sunset-time slot. Check official ticket availability and actual sunset before choosing entry. Weather can affect the rooftop; keep an indoor fallback.",
        "mapQuery": "Shibuya Sky",
        "food": null,
        "tip": null
      },
      {
        "time": "6:30pm onward",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Shibuya",
        "status": "Pick a spot",
        "detail": "Stay in the area rather than transferring to Roppongi. Gyukatsu could fit if lunch was a different cuisine. Restaurant and reservation remain open.",
        "mapQuery": "Shibuya Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
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
        "time": "7:00am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Quick breakfast near the hotel",
        "status": "Pick a spot",
        "detail": "Have a proper but quick breakfast before heading to Shinjuku.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": "Hotel breakfast or a convenience-store set: onigiri, egg sandwich, fruit, and tea.",
        "tip": null
      },
      {
        "time": "~7:50am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Shinjuku",
        "detail": "Take the subway to Shinjuku for the Romancecar. This replaces the Fuji day because the goal is a day with experiences, not a long bus ride for one view.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": null,
        "tip": "Book the Romancecar to Hakone-Yumoto and reserve seats when schedules open. Leave buffer time for the transfer at Shinjuku."
      },
      {
        "time": "9:30am",
        "kind": "travel",
        "icon": "🚄",
        "title": "Romancecar: Shinjuku → Hakone-Yumoto",
        "status": "Book ahead",
        "detail": "The scenic express is part of the outing rather than dead time. This replaces the Fuji bus day with one deliberate, restorative destination: lunch, massage, and a private onsen at Hakone Yuryo—not a race through mountain sightseeing stops.",
        "mapQuery": "Hakone-Yumoto Station",
        "food": null,
        "tip": "Book reserved Romancecar seats. Because you are going straight between Hakone-Yumoto and Hakone Yuryo on the free shuttle, skip the Hakone Freepass for this version of the day."
      },
      {
        "time": "11:00am",
        "kind": "travel",
        "icon": "🚌",
        "title": "Free shuttle → Hakone Yuryo",
        "duration": "~3 min ride",
        "detail": "Skip the ropeway and make this a real spa day. The free Hakone Yuryo shuttle leaves Hakone-Yumoto Station every 10–15 minutes and takes about 3 minutes, so there is no need for a taxi or Hakone Freepass.",
        "mapQuery": "Hakone Yuryo",
        "food": null,
        "tip": "Look for the Hakone Yuryo shuttle after you exit the Romancecar. Aim to arrive at the facility a little before 11:30am so lunch starts calmly."
      },
      {
        "time": "11:30am",
        "kind": "lunch",
        "icon": "🍢",
        "title": "Hachiri irori course, Hakone Yuryo",
        "status": "Chosen · to reserve",
        "detail": "Your Hakone meal is now the full, onsite lunch rather than a quick soba stop: charcoal-grilled seafood and seasonal vegetables, a grilled river fish, tea soba, and dessert. The March 2026 course PDF you attached prices the standard seasonal course at ¥6,500 per person, tax included; October's ingredients can change, so reconfirm the autumn menu when booking.",
        "mapQuery": "Hakone Yuryo Irorisaryo Hachiri",
        "food": "Reserve the standard Seasonal Irori Course for two (¥13,000 total before drinks). The ¥8,500 Special Course is limited to 10 servings per day, so treat it as an upgrade only if you specifically want the extra sashimi and Japanese beef.",
        "tip": "Reserve the 11:30am seating directly with Hakone Yuryo. It is a proper 60-minute meal and replaces both the separate Yamasoba lunch and the former early dinner."
      },
      {
        "time": "12:45pm",
        "kind": "activity",
        "icon": "💆",
        "title": "Couples massage · 60 min",
        "status": "Book ahead",
        "detail": "Each of you gets a 60-minute full-body massage at Hakone Yuryo's onsite Hogushian Yururuka. The published price is ¥7,900 per person (¥15,800 total). Request two therapists at the same time; if that is unavailable, use back-to-back appointments and move the private-bath booking later.",
        "mapQuery": "Hakone Yuryo Hogushian Yururuka",
        "food": null,
        "tip": "⚠️ Reserve this with the bath, not as a walk-in. The relaxation desk is open 11am–8pm, with last entry at 7pm. Avoid alcohol before treatment and flag any medical considerations when booking."
      },
      {
        "time": "2:15pm",
        "kind": "activity",
        "icon": "♨️",
        "title": "Private open-air onsen · 120 min",
        "status": "Book ahead",
        "detail": "This is the anniversary anchor: a Type 1 private outdoor bath for just the two of you, immediately after the massage. Wednesday is a weekday, so the verified 120-minute room rate is ¥10,400 total—not per person. Towels and bath amenities are included; a yukata rental is an optional ¥100 each.",
        "mapQuery": "Hakone Yuryo private open air bath",
        "food": null,
        "tip": "⚠️ Reserve this first, then fit lunch and both massages around it. Book up to one month ahead; request the 2:15pm slot or the closest available. No swimsuits are used in the private bath."
      },
      {
        "time": "4:30pm",
        "kind": "travel",
        "icon": "🚄",
        "title": "Shuttle + Romancecar → Shinjuku",
        "status": "Book ahead",
        "detail": "Leave the facility around 4:30pm after the proposed bath. Allow shuttle wait, ride and station buffer. Choose the actual return train after confirming spa appointments, not around a dinner deadline.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": "Small train snack if needed; dinner remains flexible.",
        "tip": "Reserve the return Romancecar once the private-bath time is confirmed. The shuttle is free and runs every 10–15 minutes, so leave the facility around 4:30pm to make an early-evening train comfortably."
      },
      {
        "time": "After Shinjuku arrival",
        "kind": "dinner",
        "icon": "🐈",
        "title": "Shinjuku 3D cat + griddle dinner",
        "status": "Optional",
        "detail": "Romancecar already brings you to Shinjuku. See the cat and have monjayaki/okonomiyaki if you have energy. Monjaya is a candidate, not a booking. Otherwise go directly to the hotel; no prepaid dinner tied to the return train.",
        "mapQuery": "Cross Shinjuku Vision Tokyo",
        "food": "One optional dinner, replacing Sunday’s Shinjuku meal.",
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
    "title": "Ginza breakfast → short shopping stop → Haneda",
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
        "time": "8:30–9:30am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Ginza",
        "status": "Pick a spot",
        "detail": "Breakfast before one Ginza shopping stop. bills Ginza is the guide's recommended sit-down option; the cafés near the hotel are quicker if packing runs long. Tsukiji moved to Tuesday morning.",
        "mapQuery": "Ginza Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "9:30–11:00am",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: one Ginza stop",
        "detail": "Walk from breakfast to your chosen store. Browse streets until it opens. Skip shopping if running late.",
        "mapQuery": "Ginza Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "11:00am–Noon",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Ginza / Nihonbashi",
        "status": "Optional",
        "detail": "Optional early lunch with a clear finish time. Eel rice is a candidate, not a reservation. No Akihabara excursion to Kandagawa. A snack or takeaway is fine after breakfast.",
        "mapQuery": "Ginza / Nihonbashi Tokyo restaurants",
        "food": "Restaurant, menu and booking remain provisional.",
        "tip": null
      },
      {
        "time": "Noon–12:45pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Ginza → Hotel, collect bags",
        "duration": "25–40 min",
        "detail": "Allow roughly 25–40 minutes from Ginza depending on the endpoint, then collect bags. Drop optional shopping or lunch to protect airport departure.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "12:45–1:00pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Hotel → Haneda Airport",
        "duration": "60–75 min",
        "detail": "Walk to Nihombashi using elevators, then Toei Asakusa / Keikyu to Haneda. Allow roughly 60–75 minutes including access and margin. Aim for Terminal 3 by about 2:15pm, three hours before the confirmed 5:15pm flight. Check destination and transfer at Sengakuji if needed.",
        "mapQuery": "Tokyo Haneda Airport Terminal 3",
        "food": null,
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
    "leaveBy": "After immigration and luggage, no fixed exit deadline",
    "from": "Haneda T3",
    "to": "Nihombashi → hotel",
    "route": "Keikyu + Toei Asakusa; elevators",
    "mapQuery": "Caption by Hyatt Kabutocho Tokyo"
  },
  "2": {
    "leaveBy": "Leave hotel around 8:15am",
    "from": "Nihombashi",
    "to": "Asakusa",
    "route": "Toei Asakusa Line, no transfers; 25–30 min door to door",
    "mapQuery": "Asakusa Station Tokyo"
  },
  "3": {
    "leaveBy": "Leave by 6:55am; arrive around 7:45am",
    "from": "Kayabacho → Tsukishima → Toyosu",
    "to": "Shin-Toyosu / teamLab",
    "route": "Check Sunday service; 8am entry BOOKED",
    "mapQuery": "teamLab Planets Tokyo"
  },
  "4": {
    "leaveBy": "Leave hotel around 6:45am",
    "from": "Hatchobori",
    "to": "Maihama → DisneySea",
    "route": "JR Keiyo + Resort Line or walk; 60–75 min door to gate",
    "mapQuery": "Tokyo DisneySea"
  },
  "5": {
    "leaveBy": "Leave hotel around 8:00am; leave Tsukiji around 9:45am",
    "from": "Kayabacho → Tsukiji (breakfast)",
    "to": "Harajuku / Meiji-jingumae",
    "route": "Hibiya Line 2 stops; then Hibiya + Chiyoda lines, 30–40 min",
    "mapQuery": "Tsukiji Outer Market Tokyo"
  },
  "6": {
    "leaveBy": "Leave around 7:50am; adjust to reserved train",
    "from": "Kayabacho",
    "to": "Shinjuku → Hakone-Yumoto",
    "route": "Subway + reserved Romancecar; dinner optional",
    "mapQuery": "Odakyu Shinjuku Station"
  },
  "7": {
    "leaveBy": "Leave with luggage by 12:45–1:00pm",
    "from": "Nihombashi",
    "to": "Haneda T3 by about 2:15pm",
    "route": "Toei Asakusa → Keikyu; 60–75 min with margin",
    "mapQuery": "Tokyo Haneda Airport Terminal 3"
  }
};
