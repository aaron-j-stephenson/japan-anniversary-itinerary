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
        "bookUrl": "https://www.uber.com/us/en/ride/uber-reserve/",
        "bookLabel": "Schedule in Uber Reserve"
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
        "title": "Hotel → Asakusa",
        "duration": "25–30 min",
        "detail": "Walk to Nihombashi Station and take the Toei Asakusa Line straight to Asakusa, no transfers. About 25–30 minutes door to door.",
        "mapQuery": "Asakusa Station Tokyo",
        "food": null,
        "tip": null
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
        "title": "Asakusa → Skytree Town, on foot",
        "duration": "20–25 min walk",
        "detail": "Walk across Azuma Bridge over the Sumida River; Skytree is in view most of the way. If you’re tired, it’s one stop on the Tobu line from Asakusa to Tokyo Skytree Station.",
        "mapQuery": "Tokyo Skytree Town",
        "food": null,
        "tip": null
      },
      {
        "time": "10:45am–Noon",
        "kind": "activity",
        "icon": "🐠",
        "title": "Sumida Aquarium",
        "status": "Buy Sep 23 · 11am ET",
        "detail": "Allow about 75–90 minutes. Opens 9:00 on Saturdays. Entry is not booked; select an available slot after agreeing on the morning pace.",
        "mapQuery": "Sumida Aquarium Tokyo",
        "food": null,
        "tip": "Online tickets go on sale 30 days before (Wed Sep 23 around 11am ET). ¥2,700 each, non-refundable but the date can be changed. On a normal Saturday buying at the door is fine too.",
        "bookUrl": "https://en.sumida-aquarium.com/about/ticket/",
        "bookLabel": "Aquarium tickets (English)"
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
        "title": "Solamachi → JAPANKART, on foot",
        "duration": "15–20 min walk",
        "detail": "The shop is at 2-18-15 Azumabashi, between Skytree and Asakusa. Be there by 3:15 for check-in and the safety briefing.",
        "mapQuery": "JAPANKART 2-18-15 Azumabashi Sumida Tokyo",
        "food": null,
        "tip": null
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
        "tip": "⚠️ Be at the shop by 3:15, 15 minutes early. Both drivers must bring three originals: your US driver’s license (no temporary or paper licenses), an International Driving Permit under the 1949 Geneva Convention (from AAA), and your passport. Missing documents means no driving and no refund."
      },
      {
        "time": "4:50pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "JAPANKART → Nihonbashi for dinner",
        "duration": "25–30 min",
        "detail": "Walk about 5 minutes to Honjo-azumabashi Station, then the Toei Asakusa Line direct to Nihombashi (6 stops). Takashimaya is next to the station.",
        "mapQuery": "Nihombashi Station Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~5:45pm",
        "kind": "dinner",
        "icon": "🍤",
        "title": "Tenichi tempura, Nihonbashi Takashimaya",
        "status": "Call now",
        "detail": "Seafood and vegetable tempura fried piece by piece, on Takashimaya’s 8F. Straight from the go-karts on one direct train; reserve a 5:45pm table (dinner service from 5pm, table last order 8pm). Published Fuji dinner set ¥3,850 each; counter course from ¥7,260 if you want to watch the frying.",
        "mapQuery": "Tenichi Nihonbashi Takashimaya Tokyo",
        "food": "Tempura with rice and sides. ¥7,700 for two Fuji sets, plus drinks; counter course is the upgrade.",
        "tip": "Phone bookings only: +81-3-3272-3677. They answer 11:00am–9:30pm Japan time, which is 10:00pm–8:30am Eastern. Ask for a table for two at 5:45pm on Saturday October 24.",
        "mealId": 4,
        "bookUrl": "tel:+81332723677",
        "bookLabel": "Call +81-3-3272-3677"
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
        "time": "6:15am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart KABUTO ONE, grab and go",
        "status": "No booking",
        "detail": "FamilyMart KABUTO ONE opens at 6:00: sandwich or onigiri, yogurt and a drink, eaten on the way to teamLab.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null,
        "mealId": 17
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
        "time": "10:45am",
        "kind": "travel",
        "icon": "🚇",
        "title": "teamLab → Akihabara",
        "duration": "35–40 min",
        "detail": "Yurikamome one stop to Toyosu, Yurakucho Line to Yurakucho, then JR three stops to Akihabara. Check the live route.",
        "mapQuery": "Akihabara Station Tokyo",
        "food": null,
        "tip": null
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
        "title": "Akihabara → Hotel",
        "duration": "~15 min",
        "detail": "Hibiya Line from Akihabara three stops to Kayabacho, then the short walk.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
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
        "title": "Hotel → Manten Sushi, on foot",
        "duration": "~12 min",
        "detail": "Walk to COREDO Muromachi 2 (Nihonbashi Muromachi 2-3-1). No train in dinner clothes.",
        "mapQuery": "Manten Sushi Nihonbashi COREDO Muromachi",
        "food": null,
        "tip": null
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
        "title": "Tokyo DisneySea → Hotel",
        "duration": "60–75 min",
        "detail": "Resort Line or walk to Maihama, JR Keiyo to Hatchobori, then the walk to the hotel.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
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
        "time": "7:10am",
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
        "title": "Tsukiji → Harajuku",
        "duration": "30–40 min",
        "detail": "Hibiya Line from Tsukiji, then one change to the Chiyoda Line (for example at Kasumigaseki) for Meiji-jingumae (Harajuku). Allow roughly 30–40 minutes including walking and the transfer. Check the live subway route. Shops open individually later in the morning.",
        "mapQuery": "Harajuku Station Tokyo",
        "food": null,
        "tip": null
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
        "time": "1:30–3:30pm",
        "kind": "activity",
        "icon": "🚶",
        "title": "Browse on foot toward Shibuya",
        "detail": "Continue through the shopping corridor toward Shibuya. Allow roughly 25–40 minutes for a direct walk, longer with browsing; use transit if tired. The rest is free time in Shibuya before the crossing.",
        "mapQuery": "Shibuya Tokyo",
        "food": null,
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
        "status": "Book Oct 12 · 11am ET",
        "detail": "Sunset is about 4:50pm on October 27, so this window covers it. Sunset slots sell out weeks ahead: book the moment sales open for the date. If it’s sold out, the Skytree deck on Saturday is the fallback (same-day tickets are usually available). Weather can close the rooftop; keep an indoor fallback.",
        "mapQuery": "Shibuya Sky",
        "food": null,
        "tip": "Online tickets go on sale at midnight Japan time two weeks before: Monday October 12 at 11:00am Eastern. Sunset slots sell out within hours; pick an entry between 4:00 and 4:40pm. ¥3,400 each, free cancellation until the day before.",
        "bookUrl": "https://www.shibuya-scramble-square.com/sky/ticket/",
        "bookLabel": "Shibuya Sky tickets"
      },
      {
        "time": "6:00pm onward",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Uobei conveyor belt sushi, Shibuya",
        "status": "Walk-in",
        "detail": "Your chosen dinner, a minute from Shibuya Crossing: order on the touchscreen and the sushi races to you on express lanes. Walk-in only, open until 11pm; go straight there after Shibuya Sky for a 6:00 seat. Home by 8.",
        "mapQuery": "Uobei Shibuya Dogenzaka",
        "food": "Plates from ¥110; ¥1,500–3,000 each for a full meal.",
        "tip": null,
        "mealId": 5
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
        "detail": "FamilyMart KABUTO ONE opens at 6:00: sandwich or onigiri, yogurt and a drink. Eat it on the Romancecar; eating on board is normal.",
        "mapQuery": "FamilyMart KABUTO ONE Nihonbashi Kabutocho Tokyo",
        "food": "Sandwich or onigiri, yogurt or fruit, and a drink.",
        "tip": null,
        "mealId": 20
      },
      {
        "time": "6:40am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Hotel → Shinjuku",
        "detail": "Subway to Shinjuku (for example Tozai Line from Kayabacho to Otemachi, then Marunouchi Line to Shinjuku). Leaving at 6:40 gets you to the Odakyu Romancecar platforms around 7:20, with time to find the right car before the 7:37 departure.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": null,
        "tip": "Book the Romancecar to Hakone-Yumoto and reserve seats when schedules open. Leave buffer time for the transfer at Shinjuku.",
        "duration": "35–40 min"
      },
      {
        "time": "7:37am",
        "kind": "travel",
        "icon": "🚄",
        "title": "Romancecar Hakone 41: Shinjuku → Hakone-Yumoto",
        "status": "Book Sep 27 · 9pm ET",
        "detail": "Reserved seats on the weekday Hakone 41 (there is no 8:00 train). ¥2,470 each way per person; book both directions on EMot Online Tickets. Changes are free until departure on the same day, so you can switch trains in the app if plans move.",
        "mapQuery": "Hakone-Yumoto Station",
        "food": null,
        "tip": "Sales open one month ahead at 10:00am Japan time: Sunday September 27 at 9:00pm Eastern, on EMot Online Tickets. Book both directions at once.",
        "duration": "7:37 → 9:22",
        "bookUrl": "https://www.emot-tickets.jp/express-menu?language=en",
        "bookLabel": "EMot Online Tickets (English)"
      },
      {
        "time": "9:30am",
        "kind": "travel",
        "icon": "🚌",
        "title": "Free shuttle → Hakone Yuryo",
        "duration": "~3 min ride",
        "detail": "The free Hakone Yuryo shuttle leaves Hakone-Yumoto Station every 10–15 minutes and takes about 3 minutes. You arrive around 9:40; the baths open at 10:00.",
        "mapQuery": "Hakone Yuryo",
        "food": null,
        "tip": "Look for the Hakone Yuryo shuttle after you exit the Romancecar."
      },
      {
        "time": "10:00am–Noon",
        "kind": "activity",
        "icon": "♨️",
        "title": "Private open-air onsen · 120 min",
        "status": "Book Sep 27 · 11am ET",
        "detail": "The anniversary anchor: a Type 1 private outdoor bath for just the two of you at the 10:00 opening slot (start times are on the hour or half hour). Weekday 120 minutes is ¥10,400 for the room, tax included; a card holds the booking and you pay on site. Arriving 15+ minutes late without calling cancels it. Yukata rental ¥100 each, optional.",
        "mapQuery": "Hakone Yuryo private open air bath",
        "food": null,
        "tip": "Booked separately from the massages and lunch, on TableCheck, from one month before (Sunday September 27, likely 11:00am Eastern; if 10:00 is not selectable yet, try again at 4:00pm Eastern). No swimsuits are used in the private bath.",
        "bookUrl": "https://www.tablecheck.com/en/shops/hakoneyuryo/reserve",
        "bookLabel": "Book the private bath on TableCheck (English)"
      },
      {
        "time": "12:30pm",
        "kind": "lunch",
        "icon": "🍢",
        "title": "Hachiri irori course, Hakone Yuryo",
        "status": "Call Sep 27 · 10:30pm ET",
        "detail": "Charcoal irori course: grilled seafood and seasonal vegetables, a grilled river fish, tea soba and dessert. Autumn Irori Course ¥6,500 each (the limited special course is ¥8,500). Restaurant bookings are by phone only.",
        "mapQuery": "Hakone Yuryo Irorisaryo Hachiri",
        "food": "Reserve the standard Seasonal Irori Course for two (¥13,000 total before drinks). The ¥8,500 Special Course is limited to 10 servings per day, so treat it as an upgrade only if you specifically want the extra sashimi and Japanese beef.",
        "tip": "Phone bookings only, from one month before: call +81-460-85-8411 on Sunday September 27 at 10:30pm Eastern (11:30am Monday in Japan).",
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
        "time": "2:55pm",
        "kind": "travel",
        "icon": "🚄",
        "title": "Shuttle + Romancecar Hakone 36 → Shinjuku",
        "status": "Book Sep 27 · 9pm ET",
        "detail": "Leave right after the massages: shuttle to Hakone-Yumoto for the 3:13pm Hakone 36, arriving Shinjuku 4:46. If you are running behind, switch to the 3:52 (arrives 5:27) in the EMot app before 3:13 and push dinner to 5:45.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": "Small train snack if needed; dinner remains flexible.",
        "tip": null,
        "duration": "3:13 → 4:46",
        "bookUrl": "https://www.emot-tickets.jp/express-menu?language=en",
        "bookLabel": "EMot Online Tickets (English)"
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
        "mealId": 7
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
        "title": "Ginza → Hotel, collect bags",
        "duration": "25–40 min",
        "detail": "Two subway stops or a 20-minute walk, then collect your bags. Allow 25–40 minutes including the pickup.",
        "mapQuery": "Caption by Hyatt Kabutocho Tokyo",
        "food": null,
        "tip": null
      },
      {
        "time": "~12:45pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Hotel → Haneda Airport",
        "duration": "60–75 min",
        "detail": "Walk to Nihombashi using elevators, then Toei Asakusa / Keikyu to Haneda. Allow roughly 60–75 minutes including access and margin. Aim for Terminal 3 by about 2:00pm, three hours before the confirmed 5:15pm flight. Check destination and transfer at Sengakuji if needed.",
        "mapQuery": "Tokyo Haneda Airport Terminal 3",
        "food": null,
        "tip": null
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
    "leaveBy": "After immigration and luggage, no fixed exit deadline",
    "from": "Haneda T3",
    "to": "Nihombashi → hotel",
    "route": "Keikyu + Toei Asakusa; elevators",
    "mapQuery": "Caption by Hyatt Kabutocho Tokyo"
  },
  "2": {
    "leaveBy": "Leave hotel around 7:45am",
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
    "leaveBy": "Leave hotel around 7:10am; leave Tsukiji around 9:00am",
    "from": "Kayabacho → Tsukiji (breakfast)",
    "to": "Harajuku / Meiji-jingumae",
    "route": "Hibiya Line 2 stops; then Hibiya + Chiyoda lines, 30–40 min",
    "mapQuery": "Tsukiji Outer Market Tokyo"
  },
  "6": {
    "leaveBy": "Leave around 6:40am for the 7:37 Romancecar",
    "from": "Kayabacho",
    "to": "Shinjuku → Hakone-Yumoto",
    "route": "Subway + reserved Romancecar; dinner optional",
    "mapQuery": "Odakyu Shinjuku Station"
  },
  "7": {
    "leaveBy": "Leave with luggage around 12:45pm",
    "from": "Hotel → Tokyo Station (pancakes) → Ginza → hotel",
    "to": "Haneda T3 by about 2:00pm",
    "route": "Toei Asakusa → Keikyu; 60–75 min with margin",
    "mapQuery": "Tokyo Haneda Airport Terminal 3"
  }
};
