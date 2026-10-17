// Fixed bookings are preserved. Other times are planning windows.
export const DAYS = [
  {
    "id": 0,
    "dayName": "Thu",
    "date": "Oct 22",
    "type": "travel",
    "emoji": "🛫",
    "title": "And we're off",
    "location": "Tampa → Detroit → Tokyo Haneda",
    "hotel": null,
    "activities": [
      {
        "time": "4:00am",
        "kind": "travel",
        "icon": "🚕",
        "title": "Early ride to Tampa Airport",
        "detail": "Booked: UberX through Uber Reserve, 4:00am pickup. About a 10-minute drive to Delta at the Blue Terminal, so you reach TPA around 4:10 for the 6:00am flight.",
        "food": null,
        "tip": "For the return ride, avoid a fixed pickup only 20 minutes after landing. Use a flight-linked airport pickup with an appropriate baggage buffer, or request a ride once you have your bags.",
        "status": "Booked ✓",
        "steps": [
          "Uber pickup at 4:00am (booked in the Uber app).",
          "At TPA, check in with Delta for DL2884 at 6:00am."
        ],
        "id": "d0-s0"
      },
      {
        "time": "6:00am",
        "kind": "flight",
        "icon": "🛫",
        "title": "Tampa (TPA) → Detroit (DTW) · DL2884",
        "status": "Booked ✓",
        "detail": "Delta DL2884, Airbus A321. 2 hours 43 minutes direct to Detroit Metro Airport. Short, comfortable domestic leg.",
        "food": "Snack service on the domestic flight. Eat a real breakfast at TPA or Detroit if hungry.",
        "tip": "Set your watches and phones to Tokyo time (JST) when you board. Japan is 13 hours ahead of EDT.",
        "timeZone": "America/New_York",
        "id": "d0-s1",
        "mapQuery": "Detroit Metropolitan Airport"
      },
      {
        "time": "8:43am",
        "kind": "layover",
        "icon": "⏳",
        "title": "Layover in Detroit (DTW)",
        "duration": "5 hr 2 min",
        "detail": "Enough time for a proper meal, walking the terminal, and relaxing before the long haul. DTW is a clean, manageable airport. Gate area for the international flight has decent food options.",
        "food": "Have a real meal here — you're about to sit on a plane for 13.5 hours. Detroit has good airport dining options. Fuel up properly.",
        "tip": null,
        "id": "d0-s2"
      },
      {
        "time": "1:45pm",
        "kind": "flight",
        "icon": "✈️",
        "title": "Detroit (DTW) → Tokyo Haneda (HND) · DL275",
        "status": "Booked ✓",
        "detail": "Delta DL275, Airbus A350-900. 13 hours 30 minutes. The A350-900 is one of the best economy aircraft flying — wider seats than average, better cabin air quality, lower altitude pressure, quieter engine. Noticeably better than older widebodies for a long haul.",
        "food": "Full meal service included on the international leg. Delta serves meals, snacks, and beverages throughout the flight.",
        "tip": "Hydrate constantly. Get up and walk the aisle every 2-3 hours. Compression socks are genuinely worth wearing. Sleep as much as you can on Tokyo time.",
        "timeZone": "America/New_York",
        "id": "d0-s3",
        "mapQuery": "Haneda Airport Terminal 3"
      }
    ]
  },
  {
    "id": 1,
    "dayName": "Fri",
    "date": "Oct 23",
    "type": "tokyo",
    "emoji": "🏙️",
    "title": "Our first night in Tokyo",
    "location": "Tokyo, Japan",
    "hotel": "Hyatt Centric Ginza — Night 1",
    "activities": [
      {
        "time": "~4:15pm",
        "kind": "flight",
        "icon": "🛬",
        "title": "Land at Tokyo Haneda (HND)",
        "detail": "Clear immigration, collect luggage and pass customs. Timing is variable; do not tie dinner to a fixed airport exit time.",
        "food": null,
        "tip": "Before you leave the plane: in Settings → Cellular, turn on the Ubigi eSIM, make it your Cellular Data line, and turn Data Roaming on for it. Leave your US line on for texts but keep its data roaming off. Ubigi’s plan starts counting when it first connects here.",
        "timeZone": "Asia/Tokyo",
        "id": "d1-s0",
        "mapQuery": "Haneda Airport Terminal 3"
      },
      {
        "time": "~5:45pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Train from Haneda to the hotel",
        "duration": "about 50–60 min",
        "detail": "The Keikyu train from Terminal 3 runs straight onto the Toei Asakusa Line. Stay on it to Higashi-ginza (about 31–36 minutes), take the elevator up, and walk about 8 minutes. ¥547 each on Suica. City-bound trains leave every 10–12 minutes in the evening.",
        "mapQuery": "Higashi-ginza Station Exit A1",
        "food": null,
        "tip": "Check that the departure board or staff confirms this specific train stops at Higashi-ginza. Train service names can change along through routes; do not decide solely from 'Airport Limited Express'. Show staff: 東銀座に行きますか？",
        "steps": [
          "After customs you come out in the 2nd-floor Arrival Lobby of Terminal 3. Follow the red \"Keikyu Line\" signs, a few minutes on the same floor.",
          "Tap your phone (Suica) at the gate for Platform 2, toward Shinagawa and the city. Take the elevator down to the platform.",
          "Check the destination on the departure board. Departure boards switch between Japanese and English every few seconds, so wait a moment for the English. Get on a train going to Oshiage, Aoto, Keisei-Takasago, Narita Airport, Imba Nihon-idai or Shibayama-Chiyoda. Do NOT take trains ending at Shinagawa or Sengakuji, or going to Yokohama, Zushi·Hayama, Kanazawa-bunko or Keikyu Kurihama.",
          "Stay on the whole way, about 31–36 minutes. After Shinagawa it becomes the Toei Asakusa Line, but you do not change trains. The screen above the doors shows the next stop in English.",
          "Get off at Higashi-ginza, the stop after Shimbashi. Trains arrive on Platform 2.",
          "Follow the yellow exit signs for \"A1\" (look for the elevator symbol), tap out at the gate, and take the street elevator up next to Exit A1.",
          "Walk about 8 minutes (open the map): along Harumi-dori past the Ginza 4-chome crossing and the Wako clock tower, then left onto Namiki-dori. Cross Miyuki-dori; Hyatt Centric is just ahead on the right. Lobby elevators at street level go up to reception on 4F."
        ],
        "status": "No booking",
        "id": "d1-s1"
      },
      {
        "time": "~6:45pm",
        "kind": "hotel",
        "icon": "🏨",
        "title": "Check in · Hyatt Centric Ginza",
        "status": "Booked ✓",
        "detail": "Reception is on 4F (take the lobby elevator from Namiki-dori). Check in, drop the bags, and freshen up. Dinner is a short walk away.",
        "food": null,
        "tip": "Ask for a quiet room on a high floor, away from the construction nearby. Hotel breakfast (NAMIKI667) is ¥8,855 each, so the plan eats out each morning.",
        "id": "d1-s2"
      },
      {
        "time": "7:30pm",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Kushiyaki Bistro Fukumimi, Ginza (yakitori)",
        "status": "Booked ✓",
        "detail": "Booked: Fri Oct 23, 7:30pm, 2 people, seats only (Tabelog; confirmation in your email). Yakitori (charcoal-grilled chicken skewers) in a warm room of wood booths and lantern light, in the basement of the Tobu Ginza Daiichi Building (Ginza 6-14-5, B1F), a 5–6 minute walk from the hotel. English menu with photos. You take your shoes off at the entrance. Card or phone payment only, no cash.",
        "mapQuery": "Kushiyaki Bistro Fukumimi Ginza 6",
        "food": "Order skewers à la carte, or their ¥3,850-per-person set (4 special skewers plus their popular dishes, 11 items). Plus a ¥660-per-person table charge. About ¥8,000–10,000 for two with a drink each.",
        "mealId": 0,
        "tip": "Keep your Tabelog confirmation and cancellation terms privately on both phones. Verify that the superseded KABEAT reservation has been cancelled.",
        "steps": [
          "Leave the hotel and walk about 5–6 minutes toward Showa-dori to the Tobu Ginza Daiichi Building, Ginza 6-14-5 (open the map; the pin takes you to the door).",
          "Go down to B1F and give your name for the 7:30 booking."
        ],
        "arriveBy": "7:30pm",
        "critical": "Flight delayed? Contact the restaurant using your private Tabelog confirmation. The table may be released after 15 minutes; do not assume the grace period is extra arrival time.",
        "id": "d1-s3"
      }
    ]
  },
  {
    "id": 2,
    "dayName": "Sat",
    "date": "Oct 24",
    "type": "tokyo",
    "emoji": "🏮",
    "title": "Old Tokyo & a little adventure",
    "location": "Tokyo, Japan",
    "hotel": "Hyatt Centric Ginza — Night 2",
    "activities": [
      {
        "time": "7:00–7:35am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Breakfast at Furutoshi",
        "detail": "A beautiful hotel dining room on 2F of Solaria Nishitetsu Hotel Ginza (Ginza 4-9-2), about 5 minutes from your hotel. Weekend breakfast is a half-buffet with a main dish, plus their famous fruit sandwiches, about ¥2,800 each. Breakfast can’t be booked, so arrive right at 7:00 when it opens (Saturday breakfast 7:00–10:00).",
        "mapQuery": "Furutoshi Solaria Nishitetsu Hotel Ginza",
        "food": "A full breakfast each.",
        "tip": "If there is a wait: Ginza Choshoku Lab (Hotel Musse Ginza Meitetsu 2F, Ginza 7-12-9) also opens at 7:00, or St. Marc Café on Miyuki-dori for a quick morning set.",
        "mealId": 16,
        "status": "Walk-in",
        "steps": [
          "Walk about 5 minutes to the Solaria Nishitetsu Hotel Ginza, Ginza 4-9-2, near the Ginza 4-chome crossing (open the map).",
          "Take the elevator to 2F, Furutoshi, and ask for breakfast for two."
        ],
        "id": "d2-s0"
      },
      {
        "time": "7:40am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train to Asakusa",
        "duration": "about 25 min",
        "detail": "One subway, no changes: the Ginza Line from Ginza Station, 10 stops to Asakusa, the end of the line.",
        "mapQuery": "Kaminarimon Asakusa",
        "food": null,
        "tip": "Rule for every subway: before you tap in, check the sign over the gate or stairs shows the station you are heading toward. If you went through the wrong gate, ask the staff window to cancel your entry.",
        "steps": [
          "From Furutoshi, walk about 3 minutes back to the Ginza 4-chome crossing and go down any Ginza Station entrance with the orange \"G\" (Ginza Line) sign.",
          "Tap in and go to Platform 2, signed \"for Asakusa\". Every train on it goes to Asakusa.",
          "Ride 10 stops (about 17 minutes) to Asakusa, the last stop.",
          "Follow the signs for \"Kaminarimon\" and go up Exit 1.",
          "The big red Kaminarimon gate with the giant lantern is about a minute away (open the map)."
        ],
        "id": "d2-s1"
      },
      {
        "time": "8:15–9:45am",
        "kind": "activity",
        "icon": "⛩️",
        "title": "Senso-ji Temple + Asakusa streets",
        "detail": "Explore the temple, Kaminarimon and Nakamise before the crowds build. The Nakamise snack stalls (ningyo-yaki, fried manju, grilled senbei, melon-pan) open from about 9, so see the temple first and snack on the way out; eat beside the stall, not while walking. No religious participation is needed.",
        "mapQuery": "Sensoji Temple Tokyo",
        "food": null,
        "tip": null,
        "id": "d2-s2"
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
        "mealId": 2,
        "id": "d2-s3"
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
        "mealId": 2,
        "id": "d2-s4"
      },
      {
        "time": "~11:00am–Noon",
        "kind": "travel",
        "icon": "🚶",
        "title": "Walk across the river to Skytree",
        "duration": "about 30–40 min walk",
        "detail": "A flat 30-minute walk over the river. Skytree is in front of you most of the way. Arrival is flexible within your ticket terms; allow extra walking time from the Milk Bar. Shorten shopping later if you want longer inside.",
        "mapQuery": "Sumida Aquarium Tokyo Solamachi",
        "food": null,
        "tip": "Tired feet? Tap the map link and choose transit instead; it is one short stop. Have your aquarium tickets open on your phone.",
        "steps": [
          "From the Milk Bar, walk back to the big red Kaminarimon gate (8–10 minutes).",
          "With the gate behind you, turn left and walk to the river. Cross Azuma Bridge, the red bridge; the gold Asahi Beer building is on the far side.",
          "Keep straight on the main road (Asakusa-dori) for about 15 minutes, toward Skytree.",
          "At the Narihira 1-chome crossing, turn left and walk about 150 m to Tokyo Solamachi (West Yard).",
          "Go in and take the escalator or elevator to 5F. The Sumida Aquarium entrance is there."
        ],
        "id": "d2-s5"
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
        "tip": "Tickets are non-refundable, but the date can be changed on the aquarium site if plans move.",
        "id": "d2-s6"
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
        "mealId": 3,
        "id": "d2-s7"
      },
      {
        "time": "1:00–2:50pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Tokyo Solamachi",
        "detail": "Browse the big shopping complex at the foot of Skytree: Japanese souvenirs, snacks, crafts and character shops. Shops are open until 9pm per the official site.",
        "mapQuery": "Tokyo Solamachi",
        "food": null,
        "tip": null,
        "id": "d2-s8"
      },
      {
        "time": "2:50pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Walk to JAPANKART",
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
        ],
        "id": "d2-s9"
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
        "tip": "⚠️ Be at the shop by 3:15, 15 minutes early. You have your IDPs — bring them. Both drivers must bring three originals: your US driver’s license (no temporary or paper licenses), an International Driving Permit under the 1949 Geneva Convention (from AAA), and your passport. Missing documents means no driving and no refund.",
        "arriveBy": "3:15pm",
        "critical": "Both drivers: original passport, US license and 1949 Geneva Convention IDP. Closed-toe shoes. Missing documents can mean no driving and no refund.",
        "id": "d2-s10"
      },
      {
        "time": "4:50pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train to Nihonbashi for dinner",
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
          "Take an elevator in the Main Building up to 8F. Tenichi is on that floor; walk in and ask for a table for two."
        ],
        "id": "d2-s11"
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
        "mealId": 4,
        "id": "d2-s12"
      },
      {
        "time": "~7:00pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Takashimaya → hotel",
        "duration": "about 15 min",
        "detail": "Ginza Line from Nihombashi, 2 stops to Ginza, then a 3-minute walk.",
        "steps": [
          "Take the elevator down to Takashimaya’s basement and follow the signs into Nihombashi Station and the orange \"G\" Ginza Line.",
          "Tap in and go to the platform signed \"for Shibuya\".",
          "Ride 2 stops (about 3 minutes) and get off at Ginza.",
          "Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d2-s13"
      }
    ]
  },
  {
    "id": 3,
    "dayName": "Sun",
    "date": "Oct 25",
    "type": "tokyo",
    "emoji": "🎨",
    "title": "Art, owls & omakase",
    "location": "Tokyo, Japan",
    "hotel": "Hyatt Centric Ginza — Night 3",
    "activities": [
      {
        "time": "6:40am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart breakfast",
        "status": "No booking",
        "detail": "The 24-hour FamilyMart at Ginza 5-9-13, about 4 minutes from the hotel: sandwich, yogurt and a drink. Eat at the hotel before the 7:05 subway.",
        "mapQuery": "FamilyMart Ginza Miyuki-dori 5-9-13 Ginza",
        "food": "A filling egg or ham sandwich, yogurt or fruit, and a drink. Add a pastry if needed.",
        "tip": null,
        "mealId": 17,
        "id": "d3-s0"
      },
      {
        "time": "7:05am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train to teamLab Planets",
        "duration": "about 35 min",
        "detail": "Walk to Ginza-itchome, then the Yurakucho Line 3 stops to Toyosu and a 10-minute walk. You arrive around 7:40 for your 8:00 entry.",
        "mapQuery": "teamLab Planets Tokyo",
        "food": null,
        "tip": "Running late? A taxi from the hotel is about 15 minutes and ¥2,500–3,000. Show the driver this address (Japanese, so you do not need to read it): チームラボプラネッツ TOKYO（江東区豊洲6-1-16）.",
        "steps": [
          "Leave the hotel and turn left on Namiki-dori. Walk straight up Namiki-dori to its end in Ginza 1-chome (about 8 minutes), then turn left one block to Sotobori-dori.",
          "Go down Ginza-itchome Station Exit 3 or 4 (gold \"Y\", Yurakucho Line).",
          "Tap in and go to Platform 1, signed \"for Shin-kiba\".",
          "Ride 3 stops (about 6 minutes) and get off at Toyosu.",
          "Take Exit 7. At street level, follow the elevated Yurikamome tracks; teamLab Planets is on the right after about 10 minutes.",
          "Have your 8:00 tickets open on your phone."
        ],
        "id": "d3-s1"
      },
      {
        "time": "8:00am",
        "kind": "activity",
        "icon": "🎨",
        "title": "teamLab Planets, Toyosu",
        "status": "Booked ✓",
        "detail": "Sunday October 25, 8:00am entry. Leave the hotel at 7:05am and aim to arrive by 7:40–7:45am. Allow 2–2.5 hours inside; lunch afterward is flexible, but the owl café is not.",
        "food": null,
        "tip": "Wear clothing suitable for water and mirrored rooms.",
        "arriveBy": "7:45am",
        "id": "d3-s2"
      },
      {
        "time": "~10:30am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Head to Akihabara for lunch",
        "duration": "allow 45–55 min door to door",
        "detail": "Walk to Toyosu, take the Yurakucho Line to Yurakucho, then transfer to JR for Akihabara. Allow for the walk between Metro and JR stations, train waits, and the walk to the restaurant. If teamLab runs long, skip the shrine and protect your 12:50 owl-café arrival.",
        "mapQuery": "Gyukatsu Ichinisan Akihabara 3-8-17 Sotokanda",
        "food": null,
        "tip": null,
        "steps": [
          "From teamLab, walk about 11 minutes to Toyosu Station (Yurakucho Line, gold \"Y\"). Use the map in Google Maps.",
          "Tap in and take the Yurakucho Line toward Ikebukuro / Wakoshi. Ride 4 stops to Yurakucho.",
          "Follow the signs for \"JR Lines\" to JR Yurakucho Station and tap through the JR gate.",
          "Take the Yamanote Line (light green) on Platform 2, for Tokyo / Ueno. Ride 3 stops to Akihabara.",
          "Leave by the \"Electric Town Exit\" (signed in English). Gyukatsu Ichinisan is about 6 minutes’ walk, down in the basement of 3-8-17 Sotokanda; follow the map."
        ],
        "id": "d3-s3"
      },
      {
        "time": "~11:15am–12:10pm",
        "kind": "lunch",
        "icon": "🥩",
        "title": "Gyukatsu Ichinisan, Akihabara",
        "status": "Walk-in",
        "detail": "Beef cutlet fried 60 seconds and served rare; you sear the slices yourself on a hot stone at the counter, with wasabi-soy, rock salt and barley rice. Sotokanda 3-8-17, basement, a minute from Suehirocho Station. Open 11:00–22:00, 13 counter seats, no reservations; Queues are unpredictable. Ask about the wait before joining.",
        "mapQuery": "Gyukatsu Ichinisan Akihabara",
        "food": "Sets ¥1,630 (130g), ¥2,300 (195g) or ¥2,760 (260g) each, tax included.",
        "tip": "Fallback: a quick sandwich/pastry meal or convenience-store lunch near Akihabara Station. Choose something immediately available rather than joining another queue.",
        "mealId": 15,
        "critical": "Queue cutoff: if you are not seated by 11:45, switch to a quick meal near Akihabara Station. Finish eating by 12:20 and head directly to the owl café. The shrine is optional.",
        "id": "d3-s4"
      },
      {
        "time": "12:10–12:35pm",
        "kind": "activity",
        "icon": "⛩️",
        "title": "Kanda Myojin shrine",
        "detail": "Visit only if lunch is finished early enough. Skip entirely if delayed: the owl café requires arrival by 12:50. Do not squeeze it in at the expense of a booked session.",
        "mapQuery": "Kanda Myojin Shrine Tokyo",
        "food": null,
        "tip": null,
        "status": "Optional",
        "id": "d3-s5"
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
        "tip": "Arrive by 12:50. The door does not open once a session starts.",
        "arriveBy": "12:50pm",
        "id": "d3-s6"
      },
      {
        "time": "2:05pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train back to the hotel",
        "duration": "about 25 min",
        "detail": "Hibiya Line from Akihabara, 7 stops to Ginza, then a 3-minute walk.",
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "From the owl café, walk east to the big street (Showa-dori) and cross it. Turn right and walk about 3 minutes to Hibiya Line Entrance 2, just past Karaoke Kan. About 8 minutes in all.",
          "Tap in and go to Platform 1, signed \"for Naka-meguro\".",
          "Ride 7 stops (about 13 minutes) and get off at Ginza.",
          "Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "id": "d3-s7"
      },
      {
        "time": "2:30–4:30pm",
        "kind": "hotel",
        "icon": "🏨",
        "title": "Rest and change for dinner",
        "detail": "A proper rest after the 6:15 start, then change into dinner clothes for the omakase.",
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d3-s8"
      },
      {
        "time": "4:25pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Head to Manten Sushi",
        "duration": "about 15 min",
        "detail": "Ginza Line 3 stops to Mitsukoshimae; COREDO Muromachi is connected to the station.",
        "mapQuery": "Manten Sushi Nihonbashi COREDO Muromachi 2",
        "food": null,
        "tip": null,
        "steps": [
          "Leave the hotel, turn left on Namiki-dori, cross Miyuki-dori, and go down Ginza Station Exit B6 at the Harumi-dori corner (about 3 minutes). Follow the orange \"G\" (Ginza Line) signs.",
          "Tap in and go to Platform 2, signed \"for Asakusa\". Ride near the back of the train.",
          "Ride 3 stops (about 5 minutes) and get off at Mitsukoshimae.",
          "Follow the signs for Exit A6 (COREDO Muromachi), about 2 minutes.",
          "Manten Sushi is on the 1st floor of COREDO Muromachi 2, with its door on the building’s outside wall."
        ],
        "id": "d3-s9"
      },
      {
        "time": "5:00–6:30pm",
        "kind": "dinner",
        "icon": "🍣",
        "title": "Manten Sushi, Nihonbashi (omakase)",
        "status": "Booked ✓",
        "detail": "Booked for Sunday October 25 at 5:00pm: the 90-minute counter omakase, ¥8,800 a person (¥12,100 with drinks). Three Ginza Line stops from the hotel. Same-day cancellation or party-size changes are charged in full.",
        "mapQuery": "Manten Sushi Nihonbashi COREDO Muromachi",
        "food": "Omakase for two; allow ¥17,600–24,200 plus any extra drinks.",
        "tip": "Skip strong perfume; the counter asks guests to avoid it.",
        "mealId": 11,
        "arriveBy": "4:50pm",
        "id": "d3-s10"
      },
      {
        "time": "6:30pm",
        "kind": "travel",
        "icon": "🚶",
        "title": "Back to the hotel",
        "duration": "about 15 min",
        "detail": "Ginza Line from Mitsukoshimae, 3 stops back to Ginza.",
        "steps": [
          "Go back in at Mitsukoshimae Exit A6 and follow the orange \"G\" Ginza Line signs.",
          "Tap in and go to the platform signed \"for Shibuya\".",
          "Ride 3 stops and get off at Ginza.",
          "Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d3-s11"
      }
    ]
  },
  {
    "id": 4,
    "dayName": "Mon",
    "date": "Oct 26",
    "type": "tokyo",
    "emoji": "🎢",
    "title": "A day at DisneySea",
    "location": "Maihama, Chiba (30 min from hotel)",
    "hotel": "Hyatt Centric Ginza — Night 4",
    "activities": [
      {
        "time": "6:20am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart breakfast",
        "status": "No booking",
        "detail": "Pick up a filling breakfast at the 24-hour FamilyMart at Ginza 5-9-13, about 4 minutes from the hotel. Prefer buying it the night before so you can eat at the hotel before leaving at 6:35.",
        "mapQuery": "FamilyMart Ginza Miyuki-dori 5-9-13 Ginza",
        "food": "A filling egg or ham sandwich, yogurt or fruit, and a drink. Add a pastry if needed.",
        "tip": null,
        "mealId": 18,
        "id": "d4-s0"
      },
      {
        "time": "6:35am",
        "kind": "travel",
        "icon": "🚆",
        "title": "Off to DisneySea",
        "duration": "about 50–55 min",
        "detail": "Hibiya Line 3 stops to Hatchobori, change to the JR Keiyo Line 5 stops to Maihama, then the Disney Resort Line monorail 3 stops. You reach the gate around 7:30.",
        "mapQuery": "Tokyo DisneySea",
        "food": null,
        "tip": "Walking from Maihama to DisneySea instead is about 18 flat minutes, but the monorail is easier on a long day.",
        "steps": [
          "Leave the hotel, turn left on Namiki-dori, cross Miyuki-dori, and go down Ginza Station Exit B6 at the Harumi-dori corner (about 3 minutes). Follow the gray \"H\" (Hibiya Line) signs.",
          "Tap in and go to Platform 6, signed \"for Kita-senju\". Ride in the last car.",
          "Ride 3 stops (about 6 minutes) and get off at Hatchobori.",
          "Follow the \"JR Keiyo Line\" transfer signs: up the stairs, tap out at the Metro gate, then through the passage to the JR gate (B1) and tap in. About 5–8 minutes.",
          "Take the escalators down to Platform 1: \"Keiyo Line, for Maihama & Soga\". Every early-morning train stops at Maihama.",
          "Ride 5 stops (about 14 minutes) and get off at Maihama.",
          "Go down one floor, out through the South Exit gate, and turn left. Follow the \"Tokyo DisneySea\" signs to Resort Gateway Station (about 2 minutes).",
          "Tap your phone to ride the Disney Resort Line monorail (¥300 each). It only goes one way round.",
          "Ride 3 stops (about 9 minutes) to \"Tokyo DisneySea Station\". The main entrance is right in front of you."
        ],
        "id": "d4-s1"
      },
      {
        "time": "At park opening",
        "kind": "activity",
        "icon": "🎢",
        "title": "First priority ride at park opening",
        "status": "Tickets booked ✓",
        "detail": "Admission is booked for Monday October 26. Link both tickets in the Tokyo Disney Resort app beforehand. After entering together, check current operating rides and optional Disney Premier Access. Choose your highest-priority available ride first, allowing time to reach Horizon Bay for 5:20pm. Fantasy Springs currently permits ordinary queues; paid Premier Access is optional for eligible rides.",
        "mapQuery": "Tokyo DisneySea Mysterious Island",
        "food": null,
        "tip": "Park hours vary by date; check the official calendar the week before and be at the gate about an hour before opening.",
        "source": "https://www.tokyodisneyresort.jp/special/en/fantasysprings/",
        "id": "d4-s2"
      },
      {
        "time": "Late morning",
        "kind": "activity",
        "icon": "🗺️",
        "title": "Rides: Lost River Delta + Arabian Coast",
        "detail": "Explore operating attractions in Lost River Delta and Arabian Coast, grouping nearby rides. Indiana Jones is closed through November 29, 2026, so do not plan to ride it. Check the app for today's other closures and wait times.",
        "mapQuery": "Tokyo DisneySea Lost River Delta",
        "food": null,
        "tip": null,
        "source": "https://www.tokyodisneyresort.jp/en/tds/attraction/detail/222/",
        "id": "d4-s3"
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
        "mealId": 14,
        "id": "d4-s4"
      },
      {
        "time": "Afternoon",
        "kind": "activity",
        "icon": "🧚",
        "title": "Rides: Fantasy Springs + other priorities",
        "detail": "Fantasy Springs has normal attraction queues, with optional paid Premier Access for eligible rides. Use the app's current rules, waits and availability rather than assuming a Standby Pass is required. Avoid return times that conflict with your 5:20pm dinner.",
        "mapQuery": "Tokyo DisneySea Fantasy Springs",
        "food": null,
        "tip": null,
        "id": "d4-s5"
      },
      {
        "time": "5:20–6:30pm",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Horizon Bay Restaurant",
        "status": "Booked ✓",
        "detail": "Booked: Priority Seating for 2 on Monday October 26 at 5:20pm, in Ashley's Disney account. A seated Western-style dinner in Port Discovery. Arrive together by 5:20 and give the cast member the reservation number and Ashley's name; you pay at the restaurant.",
        "mapQuery": "Horizon Bay Restaurant Tokyo DisneySea",
        "food": "Western-style set menus, paid at the restaurant. Priority Seating is separate from your admission.",
        "tip": "The reservation number is in the Disney confirmation email Ashley forwarded on Sep 30. Change or cancel online up to 1 hour before (My Booking on the Disney reservations site). Arriving after 5:20 can cancel the booking.",
        "mealId": 8,
        "arriveBy": "5:10pm",
        "id": "d4-s6"
      },
      {
        "time": "6:30–7:30pm",
        "kind": "activity",
        "icon": "🎢",
        "title": "Last rides, then leave the park",
        "detail": "Aim to leave about 7:30 if you want an early night. If the nighttime show matters to you, check the official October 26 schedule and weather before choosing: its start time is not assumed to be 9pm. Allow about an hour or more to reach the hotel, including queues and waits.",
        "mapQuery": "Tokyo DisneySea",
        "food": null,
        "tip": null,
        "source": "https://www.tokyodisneyresort.jp/en/tdr/calendar.html",
        "id": "d4-s7"
      },
      {
        "time": "~7:30pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Back to Ginza",
        "duration": "about 50–55 min",
        "detail": "Monorail 1 stop to Resort Gateway, JR Keiyo Line 5 stops to Hatchobori, then the Hibiya Line 3 stops to Ginza.",
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": "If you miss Hatchobori you end up at Tokyo, the last stop. Ride one stop back to Hatchobori.",
        "steps": [
          "At Tokyo DisneySea Station, tap your phone and ride the monorail 1 stop to Resort Gateway (about 4 minutes).",
          "Walk about 2 minutes to JR Maihama Station and tap in.",
          "Go to Platform 2: \"Keiyo Line, for Shin-Kiba & Tokyo\". Every train goes the right way.",
          "Ride 5 stops (about 14 minutes) and get off at Hatchobori, the stop before Tokyo.",
          "Tap out at the JR gate and follow the gray \"H\" (Hibiya Line) signs to the Metro gate, about 5–8 minutes. Tap in and go to the platform signed \"for Naka-meguro\".",
          "Ride 3 stops and get off at Ginza. Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "id": "d4-s8"
      }
    ]
  },
  {
    "id": 5,
    "dayName": "Tue",
    "date": "Oct 27",
    "type": "tokyo",
    "emoji": "🛍️",
    "title": "Tokyo treats & sunset views",
    "location": "Tokyo, Japan",
    "hotel": "Hyatt Centric Ginza — Night 5",
    "activities": [
      {
        "time": "7:15am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Walk to Tsukiji for breakfast",
        "duration": "about 15 min walk",
        "detail": "Skip breakfast near the hotel; the market is breakfast. A flat 15-minute walk along Harumi-dori, past the Kabukiza theater.",
        "mapQuery": "Tsukiji Outer Market Tokyo",
        "food": "Choose filling egg-based options such as tamagoyaki and an egg sandwich, plus coffee. Onigiri is optional, not required. Have a backup sandwich if your preferred stalls are not open yet.",
        "tip": null,
        "steps": [
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Walk to Harumi-dori (2 minutes from the hotel), then follow it east through the Ginza 4-chome crossing, past the Wako clock tower and Mitsukoshi.",
          "Keep straight on Harumi-dori past the Kabukiza theater and over the bridge, about 10 minutes.",
          "At the big Tsukiji 4-chome crossing the market streets start on the corner. Follow the map into the lanes."
        ],
        "id": "d5-s0"
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
        "mealId": 19,
        "id": "d5-s1"
      },
      {
        "time": "9:00am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train to Harajuku",
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
        ],
        "id": "d5-s2"
      },
      {
        "time": "~9:30–10:30am",
        "kind": "activity",
        "icon": "🌳",
        "title": "Meiji Jingu shrine",
        "detail": "A 10-minute walk from Harajuku Station into a forested shrine: one of Tokyo’s top sights, and free. It fills the gap while the shops open. No religious participation is needed.",
        "mapQuery": "Meiji Jingu Tokyo",
        "food": null,
        "tip": null,
        "id": "d5-s3"
      },
      {
        "time": "10:30am–12:30pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Harajuku → Omotesando",
        "detail": "Takeshita Street and most Omotesando shops open 10:30–11:00. Browse Takeshita Street and selected character-goods or fashion stops.",
        "mapQuery": "Omotesando Tokyo",
        "food": null,
        "tip": null,
        "id": "d5-s4"
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
        "mealId": 10,
        "id": "d5-s5"
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
        "mealId": 9,
        "id": "d5-s6"
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
        ],
        "id": "d5-s7"
      },
      {
        "time": "3:00–3:30pm",
        "kind": "activity",
        "icon": "🚦",
        "title": "Shibuya Crossing + browse",
        "detail": "Enjoy the crossing, then head to the Shibuya Sky entrance by 3:25 to allow time for the elevator and entry queue. Your booked admission window is 3:40–3:59pm.",
        "mapQuery": "Shibuya Scramble Crossing",
        "food": null,
        "tip": null,
        "id": "d5-s8"
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
        ],
        "arriveBy": "3:25pm",
        "critical": "Wind or rain can close the rooftop. Check the operator's current operating notice and your ticket's change/refund terms; do not assume indoor admission guarantees rooftop access.",
        "id": "d5-s9"
      },
      {
        "time": "~5:30pm",
        "kind": "dinner",
        "icon": "🍽️",
        "title": "Uobei conveyor belt sushi, Shibuya",
        "status": "Walk-in",
        "detail": "Your chosen dinner, in Dogenzaka, a short walk from the crossing: order on the touchscreen and the sushi races to you on express lanes. Walk-in only, open until 11pm; go straight there after Shibuya Sky and allow a queue. Aim to be home by 8; the departure below is flexible.",
        "mapQuery": "Uobei Shibuya Dogenzaka",
        "food": "Plates from ¥110; ¥1,500–3,000 each for a full meal.",
        "tip": null,
        "mealId": 5,
        "id": "d5-s10"
      },
      {
        "time": "~6:30pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Shibuya → hotel",
        "duration": "about 25 min",
        "detail": "The Ginza Line from Shibuya runs straight to Ginza. Shibuya is the first stop, so every train goes the right way.",
        "steps": [
          "Walk 8–10 minutes to the Ginza Line at Shibuya Station. It is up high (3F) on the east, Meiji-dori side; follow the orange \"G\" signs.",
          "Tap in and get on any train (\"for Asakusa\").",
          "Ride 8 stops (about 16 minutes) and get off at Ginza.",
          "Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d5-s11"
      }
    ]
  },
  {
    "id": 6,
    "dayName": "Wed",
    "date": "Oct 28",
    "type": "tokyo",
    "emoji": "♨️",
    "title": "A day just for us",
    "location": "Hakone, Kanagawa",
    "hotel": "Hyatt Centric Ginza — Night 6",
    "activities": [
      {
        "time": "6:15am",
        "kind": "breakfast",
        "icon": "🥪",
        "title": "FamilyMart breakfast",
        "status": "No booking",
        "detail": "The 24-hour FamilyMart at Ginza 5-9-13, 4 minutes from the hotel: sandwich, yogurt and a drink. Eat it on the Romancecar; eating on board is normal.",
        "mapQuery": "FamilyMart Ginza Miyuki-dori 5-9-13 Ginza",
        "food": "A filling egg or ham sandwich, yogurt or fruit, and a drink. Add a pastry if needed.",
        "tip": null,
        "mealId": 20,
        "id": "d6-s0"
      },
      {
        "time": "6:40am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Head to Shinjuku for the Romancecar",
        "detail": "Marunouchi Line from Ginza straight to Shinjuku, 8 stops, then the Odakyu gate. You are on the Romancecar platform around 7:15 for the 7:37 departure.",
        "mapQuery": "Odakyu Shinjuku Station West Exit",
        "food": null,
        "tip": "Keep the 6:40 departure. Do not rely on a later departure: allow for the station walk and Shinjuku construction. Follow the Odakyu / Romancecar signs and verify the departure platform on the board.",
        "duration": "about 30–35 min",
        "steps": [
          "Leave the hotel, turn left on Namiki-dori, cross Miyuki-dori, and go down Ginza Station Exit B6 at the Harumi-dori corner (about 3 minutes). Follow the red \"M\" (Marunouchi Line) signs, a few minutes through the station.",
          "Tap in and go to Platform 3, signed \"for Shinjuku / Ogikubo\". Trains showing \"Honancho\" also stop at Shinjuku.",
          "Ride 8 stops (about 16 minutes) and get off at Shinjuku.",
          "Follow the \"Odakyu Line\" signs to the Odakyu West Exit Underground Gate. Tap your phone there; that pays the base fare.",
          "Follow the departure board for Hakone 41 at 7:37 (planned Platform 2; confirm on the day). Find car 6, seats 12C and 12D."
        ],
        "id": "d6-s1"
      },
      {
        "time": "7:37am",
        "kind": "travel",
        "icon": "🚄",
        "title": "Romancecar Hakone 41: Shinjuku → Hakone-Yumoto",
        "status": "Booked ✓",
        "detail": "Booked: Hakone 41, car 6, seats 12C and 12D, arriving Hakone-Yumoto 9:22. Board by showing the purchase page on your phone; carry the credit card you paid with (your Visa card) in case staff ask. The ticket covers your reserved seats only, so tap Suica at the gates for the base fare (about ¥1,270 each).",
        "mapQuery": "Hakone-Yumoto Station",
        "food": null,
        "tip": "Open e-Romancecar → Confirm booking using your private booking details. If you need to change trains, check availability and the applicable fare/terms before departure; do not assume a replacement train has seats.",
        "duration": "7:37 → 9:22",
        "steps": [
          "Platform 2 at Odakyu Shinjuku. Find car 6 (the car number is on the platform floor and on the train door).",
          "Sit in seats 12C and 12D. Have the purchase page open on your phone in case staff check.",
          "Eat your FamilyMart breakfast on board; that is normal on the Romancecar.",
          "Ride to the end of the line, Hakone-Yumoto (arrives 9:22)."
        ],
        "arriveBy": "7:15am at Odakyu",
        "id": "d6-s2"
      },
      {
        "time": "9:40am",
        "kind": "travel",
        "icon": "🚌",
        "title": "Free shuttle to Hakone Yuryo",
        "duration": "3 min ride",
        "detail": "The free Hakone Yuryo shuttle bus. With the 9:22 arrival, the next one leaves at 9:40. You arrive around 9:45; the baths open at 10:00.",
        "mapQuery": "Hakone Yuryo",
        "food": null,
        "tip": "If you are unsure, ask any station staff: \"Hakone Yuryo shuttle?\" They see it every day. Phone: 0460-85-8411.",
        "steps": [
          "Get off the Romancecar at Platform 1 and go up to the 2F ticket gate. Tap your phone to exit.",
          "Walk along the covered walkway to the uphill end of the station (away from Odawara).",
          "Take the stairs or escalator down to street level. The free shuttle stop is at the bottom, on the station side; the small bus says \"Hakone Yuryo\". Do not cross the main road. If unsure, ask any staff member: \"Hakone Yuryo shuttle?\"",
          "Ride about 3 minutes to Hakone Yuryo."
        ],
        "id": "d6-s3"
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
        "tip": "No swimsuits in the private bath. Confirm any changes or cancellation terms using your private TableCheck confirmation; call +81-460-85-8411 when online changes are unavailable.",
        "arriveBy": "9:45am",
        "phone": "+81460858411",
        "id": "d6-s4"
      },
      {
        "time": "12:30pm",
        "kind": "lunch",
        "icon": "🍢",
        "title": "Hachiri irori course, Hakone Yuryo",
        "status": "Booked ✓",
        "detail": "Booked for Wednesday October 28 at 12:30pm: the Seasonal course for two, ¥6,000 each, at Irorisaryo Hachiri, the spa's charcoal-hearth restaurant. Paid on site.",
        "mapQuery": "Hakone Yuryo Irorisaryo Hachiri",
        "food": "Seasonal irori course: grilled seafood and seasonal vegetables, a grilled river fish, tea soba and dessert. Drinks are extra.",
        "tip": "Arriving 15+ minutes late without contacting them cancels the booking, and same-day cancellation isn't accepted.",
        "mealId": 12,
        "phone": "+81460858411",
        "id": "d6-s5"
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
        "tip": "Avoid alcohol at lunch and flag any medical considerations when you check in.",
        "critical": "Before treatment: settle all charges if the front desk permits, collect your belongings, and confirm the 2:55pm shuttle. Tell staff you have the 3:13pm train.",
        "id": "d6-s6"
      },
      {
        "time": "2:45pm ready · 2:55pm shuttle",
        "kind": "travel",
        "icon": "🚄",
        "title": "Shuttle back for the 3:13 Romancecar",
        "status": "Booked ✓",
        "detail": "Massage ends at 2:45. The published spa-to-station shuttle is 2:55pm, taking about 3 minutes; the following 3:10 bus is too tight for your 3:13 train. Confirm the timetable that morning. Your booked Hakone 36 departs 3:13, car 5 seats 5C/5D, and reaches Shinjuku 4:46. Tap Suica for the base fare.",
        "mapQuery": "Odakyu Shinjuku Station",
        "food": "Small train snack if needed; dinner is at 5:30.",
        "tip": "If you cannot catch the train, check the next actual departure and seat availability with Odakyu. Do not assume the 3:52 train or replacement seats are available, or use the restaurant's late-arrival allowance as a planned buffer.",
        "duration": "3:13 → 4:46",
        "steps": [
          "Settle the bill before the massage if permitted; otherwise arrange the fastest checkout with reception in the morning.",
          "Be at the shuttle stop by 2:50pm for the published 2:55 departure. Confirm service that morning.",
          "Go up to the station’s 2F ticket gate and tap your phone; that pays the base fare.",
          "Follow the \"Romancecar / for Shinjuku\" signs. Your train is Hakone 36 at 3:13. Find car 5, seats 5C and 5D.",
          "Ride to the end of the line, Shinjuku (arrives 4:46)."
        ],
        "critical": "Be ready outside by 2:50 for the 2:55 shuttle. This is a tight connection, not a relaxed checkout window. If delayed, ask reception immediately for help and contact Ushigoro if dinner arrival is affected.",
        "source": "https://www.hakoneyuryo.jp/english/access/",
        "id": "d6-s7"
      },
      {
        "time": "5:30pm",
        "kind": "dinner",
        "icon": "🥩",
        "title": "Yakiniku Ushigoro, Shinjuku 3-chome",
        "status": "Booked ✓",
        "detail": "Booked for Wednesday October 28 at 5:30pm: A5 kuroge wagyu yakiniku, staff-guided at your table, 12th floor beside Kinokuniya, about 10 minutes’ walk from the Romancecar platforms. Courses ¥9,760–16,590 a person plus 5% service. The 3D cat at Cross Shinjuku Vision is on the way if you want the photo.",
        "mapQuery": "Yakiniku Ushigoro Shinjuku Sanchome",
        "food": "Courses for two: ¥20,496–34,839 including the stated 5% service charge, before drinks. Confirm your selected course and final bill.",
        "tip": "Changes and cancellations are by phone only: +81-3-3358-4129. Arriving 30+ minutes late without calling cancels the table.",
        "mealId": 7,
        "steps": [
          "From the Romancecar, leave Odakyu Shinjuku by the West Exit gate (ground level, or the B1 underground gate).",
          "On B1, walk east through the \"East-West Free Passage\" (signed in English), a wide 100 m walkway under JR Shinjuku with no ticket gates.",
          "Come up at the East Exit and walk east along Shinjuku-dori for about 2 minutes.",
          "Turn left into the side street just before THE SUIT COMPANY. The HULIC &New SHINJUKU building is about 30 m along on the right.",
          "Take the elevator to 12F (not 11F, which is a different Ushigoro). About 6–10 minutes in all."
        ],
        "phone": "+81333584129",
        "arriveBy": "5:20pm",
        "id": "d6-s8"
      },
      {
        "time": "~7:30pm",
        "kind": "travel",
        "icon": "🚇",
        "title": "Train back to Ginza",
        "duration": "about 25 min",
        "detail": "Marunouchi Line from Shinjuku-sanchome straight to Ginza, 7 stops.",
        "steps": [
          "From Ushigoro, walk about 5 minutes east on Shinjuku-dori (toward Isetan) to Shinjuku-sanchome Station and go down a red \"M\" Marunouchi Line entrance.",
          "Tap in and go to Platform 2, signed \"for Ikebukuro\".",
          "Ride 7 stops (about 14 minutes) and get off at Ginza.",
          "Follow the signs for Exit B6. Come up at Exit B6 (or B5) on Harumi-dori. Walk along Namiki-dori away from Harumi-dori, cross Miyuki-dori, and the hotel is just ahead on the right, about 3 minutes. Lobby elevators at street level go up to reception on 4F."
        ],
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d6-s9"
      }
    ]
  },
  {
    "id": 7,
    "dayName": "Thu",
    "date": "Oct 29",
    "type": "travel",
    "emoji": "🛬",
    "title": "One last taste of Tokyo",
    "location": "Tokyo → Minneapolis → Tampa",
    "hotel": null,
    "activities": [
      {
        "time": "Before breakfast",
        "kind": "hotel",
        "icon": "🧳",
        "title": "Pack + store bags at the hotel",
        "detail": "Pack, check out at reception (check-out is noon) and leave your bags with the front desk. Carry only the day bag.",
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d7-s0"
      },
      {
        "time": "8:05am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Walk to Hoshino Coffee in Yaesu",
        "duration": "about 20 min walk",
        "detail": "An easy walk up Chuo-dori to Tokyo Station’s Yaesu side. The café is in the Yaesu Underground Mall below the station. Confirm with the branch that full soufflé pancakes are available at 8:30; breakfast opening does not guarantee the all-day menu. If not, choose a filling toast/egg morning set rather than waiting until lunch service.",
        "steps": [
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Walk to Chuo-dori and head north through the Ginza 4-chome crossing (Wako clock tower and Mitsukoshi), then on through Kyobashi toward Tokyo Station’s Yaesu (east) side.",
          "Go down into the Yaesu Underground Mall (signs say \"Yaesu Shopping Mall\" or \"Yaechika\") and follow the map to Hoshino Coffee."
        ],
        "mapQuery": "Hoshino Coffee Yaesu Chikagai Tokyo",
        "food": null,
        "tip": null,
        "id": "d7-s1"
      },
      {
        "time": "8:30–9:30am",
        "kind": "breakfast",
        "icon": "🍳",
        "title": "Hoshino Coffee, Yaesu underground (soufflé pancakes)",
        "status": "Walk-in",
        "detail": "Oven-baked soufflé pancakes and coffee in the Yaesu underground mall at Tokyo Station, a 20-minute walk from the hotel; opens 8:00, no reservations. Then walk back down Chuo-dori to the Ginza shops.",
        "mapQuery": "Hoshino Coffee Yaesu Underground Mall Tokyo",
        "food": "One soufflé pancake stack each with coffee.",
        "tip": null,
        "mealId": 1,
        "id": "d7-s2"
      },
      {
        "time": "9:35am",
        "kind": "travel",
        "icon": "🚶",
        "title": "Walk back to Ginza",
        "duration": "about 15–20 min walk",
        "detail": "A straight walk south along Chuo-dori to Ginza.",
        "steps": [
          "Come up from the Yaesu Underground Mall to street level.",
          "Tap \"Open destination in Google Maps\" below, then Directions → Walking.",
          "Walk south to Chuo-dori and follow it into Ginza (about 15–20 minutes). Mitsukoshi, where lunch is at 11:00, is at the Ginza 4-chome crossing."
        ],
        "mapQuery": "Ginza 4-chome crossing Tokyo",
        "food": null,
        "tip": null,
        "id": "d7-s3"
      },
      {
        "time": "10:00–10:50am",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Shopping: Ginza",
        "detail": "Browse nearby shops that are actually open; individual opening times vary. You are walking back from Yaesu, not taking the Ginza Line from Tokyo Station (Tokyo Station is served by the Marunouchi Line). Keep the 11:00 lunch and airport departure protected.",
        "mapQuery": "Ginza Tokyo",
        "food": null,
        "tip": null,
        "id": "d7-s4"
      },
      {
        "time": "11:00–11:45am",
        "kind": "lunch",
        "icon": "🍱",
        "title": "Hitsumabushi Bincho, Ginza Mitsukoshi",
        "status": "Book now",
        "detail": "Grilled eel over rice, eaten three ways (plain, with condiments, then with dashi poured over). Ginza Mitsukoshi 11F; 11:00 is the first lunch seating. Arriving more than 15 minutes late without calling cancels the booking.",
        "mapQuery": "Hitsumabushi Bincho Ginza Mitsukoshi",
        "food": "One hitsumabushi set each; allow ¥4,500–6,500 per person as a planning estimate. Confirm the booked menu.",
        "tip": null,
        "mealId": 13,
        "bookUrl": "https://booking.ebica.jp/webrsv/search/e020034301/21802?isfixshop=true",
        "bookLabel": "Book on ebica",
        "critical": "Still marked unbooked in this itinerary. Verify whether you have already reserved; otherwise reserve or choose a quick nearby fallback. Do not risk the airport departure to wait for a table.",
        "id": "d7-s5"
      },
      {
        "time": "11:50am",
        "kind": "travel",
        "icon": "🚇",
        "title": "Collect your bags at the hotel",
        "duration": "about 6 min walk",
        "detail": "A 6-minute walk from Mitsukoshi. Pick up your bags at the front desk.",
        "mapQuery": "Hyatt Centric Ginza Tokyo",
        "food": null,
        "tip": null,
        "steps": [
          "From Mitsukoshi at the Ginza 4-chome crossing, walk along Harumi-dori toward Sukiyabashi, two blocks to Namiki-dori, about 3 minutes (open the map).",
          "Turn left onto Namiki-dori, cross Miyuki-dori, and the hotel is just ahead on the right. Take the lobby elevator up and collect your bags."
        ],
        "id": "d7-s6"
      },
      {
        "time": "~12:20pm",
        "kind": "travel",
        "icon": "🚆",
        "title": "Train to Haneda Airport",
        "duration": "about 50 min",
        "detail": "Leave with bags about 12:20pm. Walk about 9 minutes to Higashi-ginza, then use a direct train whose display confirms Haneda Airport and Terminal 3. Allow roughly 50–60 minutes door to door. Check live departures rather than relying on a hard-coded timetable.",
        "mapQuery": "Higashi-ginza Station Exit 3 Kabukiza",
        "food": null,
        "tip": "Only board trains whose board says \"Haneda Airport\". Departure boards switch between Japanese and English every few seconds, so wait a moment for the English. Trains to Misakiguchi or Nishi-magome go elsewhere: let them pass, the next airport train is 10–20 minutes away. Airport trains end at \"Haneda Airport Terminal 1·2\", so get off at the FIRST airport stop, Terminal 3.",
        "steps": [
          "With your bags, walk to Harumi-dori and follow it east past the Ginza 4-chome crossing to the Showa-dori crossing (Mihara-bashi), about 7 minutes. Cross Showa-dori to the Kabukiza theater side (open the map).",
          "Take the street elevator at Higashi-ginza Exit 3 (Kabukiza) down to the station.",
          "Follow the signs for the Toei Asakusa Line and tap in at the gate on the Kabukiza side. It leads to Platform 1, signed \"for Nishi-magome / Haneda Airport\".",
          "Board a train whose board and side display say \"Haneda Airport\".",
          "Ride about 31 minutes and get off at \"Haneda Airport Terminal 3\", the first airport stop.",
          "Follow the signs up to 3F Departures and check in with Delta."
        ],
        "status": "No booking",
        "id": "d7-s7"
      },
      {
        "time": "~1:15–4:30pm",
        "kind": "activity",
        "icon": "🛍️",
        "title": "Haneda Terminal 3: check in + duty-free",
        "detail": "Check in and drop bags, then Edo Koji (4F, before security) for a snack if you want one, and duty-free airside for last souvenirs. Be at the gate by about 4:35pm.",
        "mapQuery": "Tokyo Haneda Airport Terminal 3",
        "food": "Snacks only; lunch was Bincho.",
        "tip": null,
        "id": "d7-s8"
      },
      {
        "time": "5:20pm",
        "kind": "flight",
        "icon": "✈️",
        "title": "Tokyo Haneda (HND) → Minneapolis (MSP) · DL120",
        "status": "Booked ✓",
        "detail": "Delta DL120, Airbus A350-900. 11 hours 8 minutes. Crossing the date line eastward gains back the hours you lost — you leave Thursday afternoon Japan time and arrive Thursday afternoon Minneapolis time.",
        "food": "Full meal service on the long-haul home.",
        "tip": "Sleep as much as you can on the return. You'll arrive in Minneapolis the same day.",
        "timeZone": "Asia/Tokyo",
        "id": "d7-s9",
        "mapQuery": "Minneapolis Saint Paul International Airport"
      },
      {
        "time": "2:28pm",
        "kind": "layover",
        "icon": "⏳",
        "title": "Layover in Minneapolis (MSP)",
        "duration": "4 hr 31 min",
        "detail": "Your first U.S. arrival: follow immigration, baggage/customs and connecting-flight security signs before heading to the Tampa gate. Plan to collect and recheck checked bags unless Delta/CBP explicitly instruct you that your flight qualifies for a baggage-transfer exception. The 4 hr 31 min connection allows time for this.",
        "mapQuery": "Minneapolis–Saint Paul International Airport",
        "food": "Have a meal here if hungry — decent airport dining options in MSP.",
        "tip": null,
        "id": "d7-s10"
      },
      {
        "time": "6:59pm",
        "kind": "flight",
        "icon": "🛫",
        "title": "Minneapolis (MSP) → Tampa (TPA) · DL2385",
        "status": "Booked ✓",
        "detail": "Delta DL2385, Airbus A321. 3 hours 11 minutes home.",
        "food": null,
        "tip": "You arrive Tampa at 11:10pm Thursday. Welcome home, Aaron.",
        "timeZone": "America/Chicago",
        "id": "d7-s11",
        "mapQuery": "Tampa International Airport"
      }
    ]
  }
];
