import { useState } from "react";

const DAYS = [
  {
    id:0, dayName:"Thu", date:"Oct 22", type:"travel", emoji:"🛫",
    title:"Depart Tampa", location:"Tampa → Detroit → Tokyo Haneda", hotel:null,
    activities:[
      {time:"4:15am",icon:"🚕",title:"Head to Tampa Airport",
       detail:"Early morning departure — Uber or Lyft to TPA. Check in at the Delta counter. This is a very early morning so plan ahead the night before: bags packed, ride booked, alarm set.",
       food:null,
       tip:"Set your Uber pickup the night before. You need to be at TPA by 4:15am for a 6:15am departure."},
      {time:"6:15am",icon:"🛫",title:"Depart Tampa (TPA) → Detroit (DTW)",
       detail:"Delta DL2884, Airbus A321. 2 hours 43 minutes direct to Detroit Metro Airport. Short, comfortable domestic leg.",
       food:"Snack service on the domestic flight. Eat a real breakfast at TPA or Detroit if hungry.",
       tip:"Set your watches and phones to Tokyo time (JST) when you board. Japan is 13 hours ahead of EDT."},
      {time:"8:58am",icon:"⏳",title:"Layover — Detroit (DTW), 4 hrs 47 min",
       detail:"Enough time for a proper meal, walking the terminal, and relaxing before the long haul. DTW is a clean, manageable airport. Gate area for the international flight has decent food options.",
       food:"Have a real meal here — you're about to sit on a plane for 13.5 hours. Detroit has good airport dining options. Fuel up properly.",
       tip:null},
      {time:"1:45pm",icon:"✈️",title:"Depart Detroit (DTW) → Tokyo Haneda (HND)",
       detail:"Delta DL275, Airbus A350-900. 13 hours 30 minutes. The A350-900 is one of the best economy aircraft flying — wider seats than average, better cabin air quality, lower altitude pressure, quieter engine. Noticeably better than older widebodies for a long haul.",
       food:"Full meal service included on the international leg. Delta serves meals, snacks, and beverages throughout the flight.",
       tip:"Hydrate constantly. Get up and walk the aisle every 2-3 hours. Compression socks are genuinely worth wearing. Sleep as much as you can on Tokyo time."},
    ]
  },
  {
    id:1, dayName:"Fri", date:"Oct 23", type:"tokyo", emoji:"🏙️",
    title:"Arrive Tokyo Haneda", location:"Tokyo, Japan", hotel:"Caption by Hyatt Kabutocho — Night 1",
    activities:[
      {time:"~4:15pm",icon:"🛬",title:"Land at Tokyo Haneda Airport (HND)",
       detail:"Clear customs and immigration — passport and entry form ready (filled out on the plane). Activate your Japan eSIM, set up before leaving Tampa. Haneda is 30-35 minutes from your hotel — much closer than Narita would have been.",
       food:null,
       tip:"Download the Airalo app and buy a Japan eSIM before leaving Tampa (~$20/person for 10-15 days unlimited). Installs digitally, no counter pickup needed. iPhone XS+ or most Android 2020+ supported."},
      {time:"Late Afternoon",icon:"🚆",title:"Train from Haneda to the Hotel — Keikyu + Toei",
       detail:"This is now the default arrival plan: from Haneda Terminal 3, use the Keikyu gate for downtown Tokyo on the 2nd-floor Arrival Lobby. Take the Keikyu Airport Line toward Sengakuji; if the train does not continue through to Nihombashi, make the straightforward transfer there to the Toei Asakusa Line. Exit at Nihombashi, then take the 8–10 minute walk to Caption by Hyatt Kabutocho. Plan on about 45–55 minutes from the airport station to the hotel and roughly ¥550–700 per person—dramatically less than a taxi.",
       food:null,
       tip:"Luggage rule: train is comfortable with one rolling checked bag each plus a backpack/small carry-on. Follow the elevator signs, keep your bags at the end of the car—not in an aisle—and use Google Maps live to choose the exact next departure."},
      {time:"~5:30pm",icon:"🏨",title:"Check In: Caption by Hyatt Kabutocho Tokyo",
       detail:"Modern lifestyle hotel in Nihonbashi Kabutocho — Tokyo's historic financial district, right in the heart of central Tokyo. Tokyo Station is a short walk or 2-3 stops away, putting everything on your schedule within easy reach. The neighborhood is quieter than Shibuya but centrally positioned and undergoing a cool cultural revival. Mention your anniversary at check-in.",
       food:null,
       tip:"Confirm gym hours at check-in for your morning workouts. Tsukiji Outer Market is literally 10 minutes from this hotel — your Saturday breakfast is a very easy morning."},
      {time:"Evening",icon:"🥟",title:"Dinner: Gyoza no Ohsho — Kanda East Exit",
       detail:"Your fixed, low-stress first dinner: a casual gyoza specialist three minutes from Kanda Station. It is an easy, filling choice after the flight, with menus and ordering designed for a quick meal rather than a long dinner decision.",
       food:"Pan-fried gyoza — crispy bottoms, juicy filling, dipped in a mix of soy sauce, rice vinegar, and chili oil. Order 3-4 plates between you for a full meal. ~$10-16/person.",
       tip:"No reservation needed. If the line is longer than about 20 minutes, use the restaurant locator in the Gyoza no Ohsho app/site to choose another nearby branch rather than losing your first night to a queue.",
       mapQuery:"Gyoza no Ohsho Kanda Higashiguchi Tokyo"},
    ]
  },
  {
    id:2, dayName:"Sat", date:"Oct 24", type:"tokyo", emoji:"🏮",
    title:"Northeast Tokyo — Tsukiji, Asakusa & Akihabara", location:"Tokyo, Japan", hotel:"Caption by Hyatt Kabutocho — Night 2",
    activities:[
      {time:"4:30am",icon:"💪",title:"Morning Workout — Hotel Gym",
       detail:"Get the workout in before the day starts. The gym is yours at this hour — quiet and easy.",
       food:null,
       tip:null},
      {time:"7:30am",icon:"🐟",title:"Breakfast: Sushizanmai Bekkan — Tsukiji",
       detail:"Your fixed Tsukiji breakfast is Sushizanmai Bekkan, a 24-hour sushi restaurant in the Outer Market. It removes the stressful early-morning question of which stall is open while still leaving time to browse a few market vendors afterward.",
       food:"Fresh nigiri sushi at 8am ($3-5/piece, eat 6-8 pieces for a real breakfast), tamagoyaki (sweet rolled egg on skewer ~$2), grilled scallops over charcoal braziers with soy butter, fresh Japanese melon, matcha soft serve. ~$30-40/person for a genuinely filling breakfast.",
       tip:"No reservation. Go straight here first, then give yourselves 20-30 minutes for one market snack or souvenir—not a second sit-down meal.",
       mapQuery:"Sushizanmai Bekkan Tsukiji Tokyo"},
      {time:"9:30am",icon:"🏯",title:"Senso-ji Temple, Asakusa",
       detail:"15-20 min from Tsukiji by subway. Tokyo's oldest temple — worth visiting for the architecture. The giant Kaminarimon gate with its massive red lantern is iconic. Nakamise-dori approach street has stalls selling crafts and snacks.",
       food:"Ningyo-yaki — small cakes filled with sweet red bean paste, sold hot from the cart. ~$5 for a bag.",
       tip:"No religious participation needed. Five-story pagoda is a genuine feat of woodwork engineering. Asakusa is one of the best neighborhoods in Tokyo."},
      {time:"11:00am",icon:"🍦",title:"Matcha Ice Cream — Suzukin Asakusa",
       detail:"Right next to Senso-ji — you're already standing there. The video you watched specifically called this out: Suzukin has 7 levels of matcha intensity, from mild to deeply bitter and intensely green. A quick stop before lunch. Level 4-5 is the sweet spot for most people. Level 7 is for committed matcha people only.",
       food:"Matcha soft serve ice cream — choose your intensity level 1-7. ~¥500-700 ($3-5). Also does matcha drinks if ice cream doesn't appeal.",
       tip:"Can get a line on weekends. Moves quickly. Get your cone and walk — this is a strolling treat, not a sit-down stop."},
      {time:"11:30am",icon:"🐧",title:"Sumida Aquarium — Skytree Town",
       detail:"This is the panda replacement: a design-forward aquarium with penguins, jellyfish, and aquatic exhibits inside Tokyo Skytree Town. It keeps the animal element you wanted without adding another large zoo, and it fits naturally after Asakusa.",
       food:null,
       tip:"Buy the timed entry ticket online if you want certainty. Allow about 75–90 minutes; it is deliberately a compact animal stop, not a second full-day attraction.",
       mapQuery:"Sumida Aquarium Tokyo Skytree Town"},
      {time:"1:00pm",icon:"🍜",title:"Lunch: Ramen Kamo to Negi — Ueno",
       detail:"This is the named ramen stop: duck-and-green-onion ramen near Ueno, directly on the way from Skytree toward Akihabara. It gives you the proper Tokyo ramen experience without a random search at lunch.",
       food:"Tonkotsu (rich pork-bone broth), shoyu (soy-based), or tsukemen (dip noodles) depending on the shop. Add a soft-boiled ajitama egg and extra chashu pork. ~$10-14/person. Genuinely one of the best food experiences in Japan and you'd otherwise miss it.",
       tip:"No reservations and it can queue. Arrive around 1pm; if the line is excessive, do Akihabara first and return for an off-peak late lunch.",
       mapQuery:"Ramen Kamo to Negi Ueno Tokyo"},
      {time:"2:30pm",icon:"🕹️",title:"Akihabara — Arcades, Games & Browse",
       detail:"Use the late afternoon for the part that was missing from the original day: explore the electronics and game district at your own pace. Pick one arcade, browse a department store, and stop for a drink—no need to collect every landmark.",
       food:"Optional snack: taiyaki or a canned coffee/tea from a vending machine.",
       tip:"Aim to leave by about 5:45pm so the Ginza dinner stays relaxed rather than rushed."},
      {time:"7:00pm",icon:"🔥",title:"Dinner: Robata Ginza Honten",
       detail:"Your fixed robatayaki dinner is a counter-only hearth restaurant in Ginza, about three minutes from Ginza Station. It gives you the live-fire, chef-facing meal you wanted, with Ise lobster, seafood, vegetables, and clay-pot rice.",
       food:"Chef-selected rotating items grilled over binchōtan charcoal — expect 8-12 different ingredients across the meal. Fresh fish, wagyu, scallops, vegetables, and a rice or noodle finale. ~$40-60/person at a good mid-range spot. Very different from anything else on your itinerary all week.",
       tip:"Reserve two counter seats for 7pm. Request the hearth counter and tell them this is an anniversary; do not rely on a walk-in because the restaurant is small.",
       mapQuery:"Robata Ginza Honten Tokyo"},
    ]
  },
  {
    id:3, dayName:"Sun", date:"Oct 25", type:"tokyo", emoji:"🎨",
    title:"teamLab, Go-Kart & Shibuya", location:"Tokyo, Japan", hotel:"Caption by Hyatt Kabutocho — Night 3",
    activities:[
      {time:"4:30am",icon:"💪",title:"Morning Workout — Hotel Gym",
       detail:"Keep this to a focused 45-minute session today: your teamLab Planets entry is booked for 8:00am.",
       food:null,tip:null},
      {time:"5:40am",icon:"🍳",title:"Breakfast: Hotel Full Meal",
       detail:"Eat early and keep it efficient so you can leave for your booked 8:00am entry without rushing.",
       food:"Japanese set: grilled fish, rice, miso soup, pickled vegetables, egg, green tea. Or Western: eggs your way, toast, fruit, juice. ~$20-28/person.",
       tip:"Not a coffee person? Green tea, hojicha, fresh juice, and oolong are all available at Japanese hotel breakfasts."},
      {time:"8:00am",icon:"🎨",title:"teamLab Planets, Toyosu — BOOKED ✓",
       detail:"Your 8:00am entry is secured. Leave the hotel by 7:10am and aim to arrive about 15 minutes early. Walk barefoot through fully immersive digital art: wade through knee-deep water as projected flowers and koi ripple around your legs, float in infinite mirrored light, walk through blooming flowers that react to your movement. Allow about 1.5–2 hours.",
       food:null,
       tip:"Wear shorts or bring a change of pants — the water room gets your legs wet to the knee. One of the most romantic shared experiences you can have in Tokyo."},
      {time:"11:30am",icon:"🥩",title:"Lunch: Gyukatsu Motomura — Shibuya",
       detail:"Your named wagyu-katsu lunch is Gyukatsu Motomura Shibuya. The beef arrives rare and panko-crusted with a personal stone griddle, so you finish every slice exactly how you want it.",
       food:"Wagyu gyukatsu set with rice, pickles, miso soup, and dipping sauces. ~$15-18/person.",
       tip:"This is a queue restaurant. Get there when it opens or plan a short wait; do not spend the teamLab exit trying to choose between branches.",
       mapQuery:"Gyukatsu Motomura Shibuya Tokyo"},
      {time:"1:30pm",icon:"🏎️",title:"Street Go-Kart Tour — Rainbow Bridge & Tokyo Tower",
       detail:"Book through Street Kart or Japan Kart (Klook or Rakuten Experiences) 3-7 days ahead. A guide leads you on real Tokyo streets — the route takes you past Tokyo Tower (great photo stop right at the base of the iconic red lattice tower), through Akihabara's neon alleys, and across Rainbow Bridge over Tokyo Bay. About 60 minutes of driving actual Tokyo streets.",
       food:null,
       tip:"⚠️ Requires an International Driving Permit (IDP) from AAA + your US license — get before leaving Tampa. ~$36-48/person. The guide typically stops for photos at Tokyo Tower — make sure you get that shot."},
      {time:"4:00pm",icon:"🍩",title:"Harajuku + Higuma Doughnuts",
       detail:"Head to Harajuku/Omotesando. First stop: Higuma Doughnuts × Coffee Wrights on a quiet backstreet between Omotesando and Harajuku stations. Freshly fried in-store, incredibly light and refined — nothing like American doughnuts.",
       food:"6 flavors available — Honey Mascarpone is the most recommended. Limoncello and Kinako (roasted soybean flour) are also excellent. ~¥300-350 each (~$2-2.50). Get 2-3 to try the variety. Cards only — no cash.",
       tip:"Opens 10am on weekends. This is an afternoon snack stop. Walk Omotesando afterward — Tokyo's most beautiful tree-lined boulevard."},
      {time:"4:30pm",icon:"🚦",title:"Shibuya Crossing + Shibuya Sky",
       detail:"Walk Takeshita Street (wild youth fashion, 15 min of spectacle), then Shibuya Crossing — the world's busiest intersection. Then book Shibuya Sky observation deck for blue hour: 20 min after sunset when the city glows under a deep blue sky.",
       food:"Japanese crepe from a Takeshita Street vendor — matcha + strawberry or custard + fruit. ~$7-8 each.",
       tip:"Book Shibuya Sky time slot online in advance (~$18/person). Go at blue hour — it's a genuine anniversary moment."},
      {time:"5:45pm",icon:"🐱",title:"3D Shinjuku Cat — Shinjuku East Exit",
       detail:"On your way from Shibuya to dinner in Shinjuku — literally a free 10-minute stop at Shinjuku Station East Exit. The Cross Shinjuku Vision is a massive curved LED screen on the building above the exit that plays a hyperrealistic giant 3D calico cat that appears to leap out of the screen toward you. No depth effect glasses, no tricks — the screen curves around a building corner and the animation is engineered specifically for that geometry. Free, runs continuously, takes 10-15 minutes to watch a full loop. One of the most shared Tokyo street experiences of the past few years.",
       food:null,
       tip:"Stand back across the street from the screen for the best 3D effect — don't stand directly underneath. Evening is better since the screen is brighter — by 5:45pm it's dark enough in late October. The cat does multiple different animations — stay for a few loops to see them all."},
      {time:"6:30pm",icon:"🥞",title:"Dinner: Monjaya Shinjuku Southeast Exit",
       detail:"Trade the fish-catching novelty for a food experience Tokyo does especially well: monjayaki and okonomiyaki cooked on a tabletop iron griddle. Monjaya is the looser, gooier Tokyo cousin of okonomiyaki—crispy around the edges, eaten straight from the hot plate with tiny spatulas. This is a real new lane for the trip: comforting, social, and completely different from your sushi, robata, wagyu katsu, soba, and ramen meals.",
       food:"Order one classic mentaiko-mochi-cheese monjayaki to share, then an okonomiyaki (pork or mixed) and yakisoba if you are hungry. Expect roughly ¥2,500-4,000/person with drinks—more relaxed and much lighter on the budget than a formal dinner.",
       tip:"Reserve the Shinjuku Southeast Exit branch online; it is one minute from the station, so it is an easy walk after the 3D cat. Ask the staff to cook the first monjayaki if you want a quick lesson—the fun is eating it as it crisps on the griddle.",
       mapQuery:"Monjaya Shinjuku Southeast Exit Tokyo"},
    ]
  },
  {
    id:4, dayName:"Mon", date:"Oct 26", type:"tokyo", emoji:"🎢",
    title:"Tokyo DisneySea", location:"Maihama, Chiba (30 min from hotel)", hotel:"Caption by Hyatt Kabutocho — Night 4",
    activities:[
      {time:"6:00am",icon:"🍳",title:"Breakfast: Quick Hotel or Convenience Store",
       detail:"You want to be on a train by 7am to reach DisneySea at opening. Hotel quick-service or a 7-Eleven run works perfectly today.",
       food:"Convenience store: 2-3 onigiri rice balls (~$1.50 each), a tamago sando (~$2), fresh juice (~$1.50). ~$6-8/person. Japan's 7-Eleven is genuinely excellent — this is not a downgrade.",
       tip:"From Kabutocho, take the JR Keiyo Line from Hatchobori or Shinkiba area directly to Maihama — about 25-30 min. Very convenient from your hotel location."},
      {time:"7:15am",icon:"🚆",title:"Train to DisneySea — Maihama",
       detail:"JR Keiyo Line from near the hotel to Maihama Station — about 25-30 minutes. Tap Suica for both the JR ride and Disney Resort Line; the fare is already included in the shared local-transit budget. Short monorail or walk from Maihama to the DisneySea entrance.",
       food:null,
       tip:"Your tickets are booked. Add them to the Tokyo Disney Resort app before arriving, then use the app for wait times, mobile ordering, and any same-day Premier Access decision."},
      {time:"9:00am",icon:"🎢",title:"Park Opening — Mysterious Island First",
       detail:"DisneySea is the best Disney park in the world for adults. Rush straight to Journey to the Center of the Earth (volcanic eruption dark ride, unique to this park) and 20,000 Leagues Under the Sea. These have the longest queues later in the day.",
       food:null,
       tip:"Arriving at opening is the difference between a 10-minute and 90-minute wait. Journey to the Center of the Earth is the #1 must-do — use Premier Access ($10-15 in the app) if lines exceed 40 min."},
      {time:"10:00am",icon:"🏛️",title:"Arabian Coast — Indiana Jones",
       detail:"Indiana Jones Adventure: Temple of the Crystal Skull is many people's favorite ride in the park. Sindbad's Storybook Voyage nearby is a relaxed 10-min boat ride through stunning sets — good breather between big rides.",
       food:"Mid-morning: Mickey-shaped buns sold throughout the park in savory and sweet versions. ~$5 each.",
       tip:null},
      {time:"12:30pm",icon:"🍝",title:"Lunch: Mediterranean Harbor",
       detail:"The park's centerpiece is a gorgeous Italian harbor replica. Magellan's (table service, inside a massive wooden ship) is the best sit-down option. Disney food in Japan is genuinely much better than US Disney food.",
       food:"Seafood pasta, clam chowder in a bread bowl, or a park-exclusive set meal. ~$20-30/person.",
       tip:"Book Magellan's through the app. Outdoor harbor counters are equally good and faster if Magellan's is full."},
      {time:"2:00pm",icon:"❄️",title:"Fantasy Springs + More Rides",
       detail:"Fantasy Springs opened June 2024 — Frozen, Tangled, and Peter Pan themed worlds, all brand new and unique to this park. Then Soaring: Fantastic Flight (hang-glider simulation, spectacular) and Tower of Terror.",
       food:null,tip:null},
      {time:"5:30pm",icon:"🍝",title:"Dinner: Magellan's — DisneySea",
       detail:"This is the only dinner for the day: Magellan's, DisneySea's table-service restaurant in Mediterranean Harbor. It is your calm, fixed dinner between rides and the evening atmosphere—not a reason to leave the park.",
       food:"Seafood, pasta, or a park-exclusive set meal. Save Uobei for a different Tokyo night if you still want conveyor-belt sushi.",
       tip:"Book Priority Seating online one month before at 10am JST. If it is unavailable, use the app for a same-day release and keep Ristorante di Canaletto as the in-park backup.",
       mapQuery:"Magellan's Tokyo DisneySea"},
    ]
  },
  {
    id:5, dayName:"Tue", date:"Oct 27", type:"tokyo", emoji:"🦉",
    title:"Owl Café + Soufflé Pancakes + Relaxed Day", location:"Tokyo, Japan", hotel:"Caption by Hyatt Kabutocho — Night 5",
    activities:[
      {time:"4:30am",icon:"💪",title:"Morning Workout — Hotel Gym",
       detail:"Today is a more relaxed pace — no 9am hard start. Take your time with the workout.",
       food:null,tip:null},
      {time:"6:30am",icon:"🍳",title:"Breakfast: Hotel Full Meal",
       detail:"Substantial breakfast — today is more relaxed but you'll still walk a lot. Take the Japanese set or Western options, eat well.",
       food:"Grilled fish, rice, miso soup, egg, green tea, fresh juice. ~$20-28/person.",
       tip:null},
      {time:"10:00am",icon:"🦉",title:"Owl Café — Akihabara",
       detail:"Pre-book 1-2 weeks in advance (~$25/person, 1-hour session). Sit in a calm café room with various owl species perched around you. Staff let you hold them and take photos. Trained, calm birds — completely unique to Japan.",
       food:null,
       tip:"Search 'Akihabara owl café' and book through their website. Walk to the session from Akihabara station — it's in the same area as the game centers from Saturday."},
      {time:"4:30pm",icon:"🥞",title:"Afternoon Snack: FLIPPER'S — Shibuya",
       detail:"Your fixed soufflé-pancake stop is FLIPPER'S Shibuya on Park Avenue. Moving it to the afternoon keeps the day geographically sensible: robot lunch, Harajuku/Omotesando shopping, pancakes, then the Roppongi omakase.",
       food:"One plate to share or one each if you're hungry — order the original (butter and maple syrup) for your first time. ~¥1,300-1,800/plate ($9-12). This is a snack, not lunch—keep it light for dinner later.",
       tip:"A shared plate is the right move because dinner is at 7pm. If there is a long queue, skip it without regret—the evening sushi booking is the non-negotiable food experience.",
       mapQuery:"FLIPPER'S Shibuya Tokyo"},
      {time:"12:30pm",icon:"🤖",title:"Lunch: Pepper PARLOR — Shibuya",
       detail:"Your fixed robot lunch is Pepper PARLOR on the fifth floor of Tokyu Plaza Shibuya. Pepper and other service robots make this the current, real version of the robot-restaurant idea—not a closed attraction or a vague search.",
       food:"Omurice (egg omelette over seasoned fried rice with demi-glace), Japanese curry, or hamburg steak. ~$20-25/person.",
       tip:"Open 11am–10pm currently. Reserve if the booking calendar accepts your date; otherwise arrive right at the 11am opening and shift the pancake snack later.",
       mapQuery:"Pepper PARLOR Tokyu Plaza Shibuya Tokyo"},
      {time:"2:00pm",icon:"🛍️",title:"Harajuku + Omotesando Shopping",
       detail:"This corridor is one of Tokyo's best shopping stretches. Work your way from Harajuku toward Omotesando. Kiddy Land on Omotesando has 6 floors of Japan-exclusive character goods — Ghibli, Sanrio, Disney items you can't get at home. LaForet Harajuku is a multi-floor Japanese fashion building worth a browse. Omotesando Hills is the upscale Ando-designed shopping complex on the boulevard itself for higher-end Japanese goods. Then head into Shibuya — Tokyu Hands is 8 floors of Japanese lifestyle goods, stationery, clever tools, and gadgets that most people end up spending way too long in. Also Loft and Shibuya 109 nearby for more fashion and accessories.",
       food:"Browse and graze as you like — cafés, small shops, and street snacks throughout.",
       tip:"Ginza is also walkable from your hotel any evening if you want upscale gift shopping without a detour — Ginza SIX is the flagship complex there. Good backup option for any evening you have time after dinner."},
      {time:"7:00pm",icon:"🍣",title:"Dinner: SUSHI TOKYO TEN — Roppongi",
       detail:"Your anniversary omakase is SUSHI TOKYO TEN at Tokyo Midtown Roppongi: a 26-seat counter with a fixed evening omakase that is special without entering the impossible-to-book sushi tier. This is the one dinner to lock in early.",
       food:"Chef's selection — tuna, sea urchin, yellowtail, flounder, shrimp, tamago as the final piece. ~$55-100/person.",
       tip:"Reserve the ¥9,900 evening omakase through its TableCheck link. Aim for 7pm, arrive on time, and mention the anniversary in the reservation notes—not at the counter after service begins.",
       mapQuery:"SUSHI TOKYO TEN Tokyo Midtown Roppongi"},
    ]
  },
  {
    id:6, dayName:"Wed", date:"Oct 28", type:"tokyo", emoji:"♨️",
    title:"Hakone Yuryo: Couples Massage & Private Onsen", location:"Hakone, Kanagawa", hotel:"Caption by Hyatt Kabutocho — Night 6",
    activities:[
      {time:"7:00am",icon:"🍳",title:"Breakfast + Head to Shinjuku",
       detail:"Have a proper but quick hotel breakfast, then take the subway to Shinjuku. This replaces the Fuji day because the goal is a day with experiences, not a long bus ride for one view.",
       food:"Hotel breakfast or a convenience-store set: onigiri, egg sandwich, fruit, and tea.",
       tip:"Book the Romancecar to Hakone-Yumoto and reserve seats when schedules open. Leave buffer time for the transfer at Shinjuku."},
      {time:"9:30am",icon:"🚆",title:"Romancecar to Hakone-Yumoto",
       detail:"The scenic express is part of the outing rather than dead time. This replaces the Fuji bus day with one deliberate, restorative destination: lunch, massage, and a private onsen at Hakone Yuryo—not a race through mountain sightseeing stops.",
       food:null,
       tip:"Book reserved Romancecar seats. Because you are going straight between Hakone-Yumoto and Hakone Yuryo on the free shuttle, skip the Hakone Freepass for this version of the day."},
      {time:"11:00am",icon:"🚌",title:"Free Shuttle: Hakone-Yumoto → Hakone Yuryo",
       detail:"Skip the ropeway and make this a real spa day. The free Hakone Yuryo shuttle leaves Hakone-Yumoto Station every 10–15 minutes and takes about 3 minutes, so there is no need for a taxi or Hakone Freepass.",
       food:null,
       tip:"Look for the Hakone Yuryo shuttle after you exit the Romancecar. Aim to arrive at the facility a little before 11:30am so lunch starts calmly.",
       mapQuery:"Hakone Yuryo"},
      {time:"11:30am",icon:"🍢",title:"Lunch: Irorisaryo Hachiri — Seasonal Irori Course",
       detail:"Your Hakone meal is now the full, onsite lunch rather than a quick soba stop: charcoal-grilled seafood and seasonal vegetables, a grilled river fish, tea soba, and dessert. The March 2026 course PDF you attached prices the standard seasonal course at ¥6,500 per person, tax included; October's ingredients can change, so reconfirm the autumn menu when booking.",
       food:"Reserve the standard Seasonal Irori Course for two (¥13,000 total before drinks). The ¥8,500 Special Course is limited to 10 servings per day, so treat it as an upgrade only if you specifically want the extra sashimi and Japanese beef.",
       tip:"Reserve the 11:30am seating directly with Hakone Yuryo. It is a proper 60-minute meal and replaces both the separate Yamasoba lunch and the former early dinner.",
       mapQuery:"Hakone Yuryo Irorisaryo Hachiri"},
      {time:"12:45pm",icon:"💆",title:"Couples Massage: Hogushian Yururuka — 60 min",
       detail:"Each of you gets a 60-minute full-body massage at Hakone Yuryo's onsite Hogushian Yururuka. The published price is ¥7,900 per person (¥15,800 total). Request two therapists at the same time; if that is unavailable, use back-to-back appointments and move the private-bath booking later.",
       food:null,
       tip:"⚠️ Reserve this with the bath, not as a walk-in. The relaxation desk is open 11am–8pm, with last entry at 7pm. Avoid alcohol before treatment and flag any medical considerations when booking.",
       mapQuery:"Hakone Yuryo Hogushian Yururuka"},
      {time:"2:15pm",icon:"♨️",title:"Private Open-Air Onsen — Type 1, 120 min",
       detail:"This is the anniversary anchor: a Type 1 private outdoor bath for just the two of you, immediately after the massage. Wednesday is a weekday, so the verified 120-minute room rate is ¥10,400 total—not per person. Towels and bath amenities are included; a yukata rental is an optional ¥100 each.",
       food:null,
       tip:"⚠️ Reserve this first, then fit lunch and both massages around it. Book up to one month ahead; request the 2:15pm slot or the closest available. No swimsuits are used in the private bath.",
       mapQuery:"Hakone Yuryo private open air bath"},
      {time:"4:30pm",icon:"🚌",title:"Shuttle + Romancecar Back to Tokyo",
       detail:"Take the free shuttle back to Hakone-Yumoto, then your reserved Romancecar to Shinjuku and the subway to Kabutocho. You will have had lunch, massage, and your bath onsite, so there is no restaurant deadline left to chase.",
       food:"A small convenience-store snack on the train is enough if you are hungry later; dinner is intentionally flexible after the spa day.",
       tip:"Reserve the return Romancecar once the private-bath time is confirmed. The shuttle is free and runs every 10–15 minutes, so leave the facility around 4:30pm to make an early-evening train comfortably."},
    ]
  },
  {
    id:7, dayName:"Thu", date:"Oct 29", type:"travel", emoji:"🛬",
    title:"Last Morning + Fly Home", location:"Tokyo → Minneapolis → Tampa", hotel:null,
    activities:[
      {time:"Morning",icon:"🌅",title:"Last Morning — Ginza",
       detail:"Your flight is 5:15pm so you have a real morning. After gym and breakfast, head to Ginza — 10 minutes from the hotel on foot. Tokyo's most elegant neighborhood in the morning is quiet and beautiful before the crowds arrive. This is your best window for last-minute shopping: Ginza SIX is the flagship complex, Itoya is one of the world's great stationery stores (9 floors, extraordinary Japanese paper goods and gifts), and the Ginza streets themselves have beautiful Japanese flagship stores. Good for high-quality souvenirs, Japanese goods, and food items to bring home.",
       food:"Grab a final Japanese breakfast or coffee at one of the Ginza neighborhood cafés if you want a change from the hotel. The area has excellent morning options.",
       tip:"Itoya on Chuo-dori opens at 10am and is worth the visit even if you're not a stationery person — Japanese paper goods, washi tape, and gift wrapping are an experience in themselves. Don't over-shop since you need to pack everything into your checked bag."},
      {time:"12:00pm",icon:"🐟",title:"Last Lunch: Unagi — Kandagawa Honten",
       detail:"One of the best ways to end your last morning in Tokyo. Kandagawa Honten has been serving unagi (eel) since 1878 and is located right in the Nihonbashi area near your hotel. Unagi is charcoal-grilled eel glazed with a sweet soy-mirin tare sauce, served over steamed rice in a lacquered box. Rich, deeply savory, and something you almost never get well outside Japan. A fitting final Tokyo meal before flying home.",
      food:"Unadon or unaju — grilled eel over rice with tare sauce, pickles, and miso soup. ~$25-40/person depending on grade. The eel is graded by size — the standard set is more than enough for lunch.",
       tip:"Reserve a noon table in advance and tell them you have a 2:15pm airport departure. Close enough to walk back to the hotel, grab luggage from the concierge, and leave on time.",
       mapQuery:"Kandagawa Honten unagi Tokyo"},
      {time:"~2:15pm",icon:"🚆",title:"Train to Haneda Airport (HND) — Keikyu + Toei",
       detail:"Use Suica for the ride: walk to Nihombashi Station, then take the Toei Asakusa Line toward Sengakuji/Haneda. Many services continue onto the Keikyu Airport Line; if yours does not, make the same-platform or short transfer at Sengakuji. Allow about 45–55 minutes and roughly ¥550–700 per person. This is already included in your shared Suica transit budget.",
       food:null,
       tip:"With one rolling checked bag each, use station elevators and keep bags at the end of the car. Leave the hotel by about 2:00pm after collecting luggage so you reach Haneda with a comfortable buffer."},
      {time:"5:15pm",icon:"✈️",title:"Depart Tokyo Haneda (HND) → Minneapolis (MSP)",
       detail:"Delta DL120, Airbus A350-900. 11 hours 8 minutes. Crossing the date line eastward gains back the hours you lost — you leave Thursday afternoon Japan time and arrive Thursday afternoon Minneapolis time.",
       food:"Full meal service on the long-haul home.",
       tip:"Sleep as much as you can on the return. You'll arrive in Minneapolis the same day."},
      {time:"2:23pm",icon:"⏳",title:"Layover — Minneapolis (MSP), ~4 hours",
       detail:"Comfortable layover before the final leg home.",
       food:"Have a meal here if hungry — decent airport dining options in MSP.",
       tip:null},
      {time:"6:20pm",icon:"🛫",title:"Depart Minneapolis (MSP) → Tampa (TPA)",
       detail:"Delta DL2385, Airbus A321. 3 hours 14 minutes home.",
       food:null,
       tip:"You arrive Tampa at 10:34pm Thursday. Welcome home, Aaron."},
    ]
  },
];

const DAY_TRANSIT = {
  0:{leaveBy:"Schedule pickup for 3:30am",from:"Home",to:"TPA · Delta check-in",route:"Uber or Lyft",mapQuery:"Tampa International Airport"},
  1:{leaveBy:"Leave arrivals by about 5:00pm",from:"Haneda T3 → Sengakuji",to:"Nihombashi Station → hotel",route:"Keikyu Airport Line + Toei Asakusa Line · use elevators with luggage",mapQuery:"Caption by Hyatt Kabutocho Tokyo"},
  2:{leaveBy:"Leave hotel by 7:05am",from:"Nearest station: Kayabacho",to:"Tsukiji Station",route:"Subway, then a short walk to breakfast",mapQuery:"Sushizanmai Bekkan Tsukiji Tokyo"},
  3:{leaveBy:"Leave hotel by 7:10am",from:"Nearest station: Kayabacho",to:"Shin-Toyosu Station → teamLab Planets",route:"Subway, then a short walk · arrive by 7:45am for your 8:00am entry",mapQuery:"teamLab Planets Tokyo"},
  4:{leaveBy:"Be on the train by 7:15am",from:"Hatchobori Station",to:"Maihama Station → Disney Resort Line",route:"JR Keiyo Line, then Disney Resort Line",mapQuery:"Tokyo DisneySea"},
  5:{leaveBy:"Leave hotel by 9:15am",from:"Nearest station: Kayabacho",to:"Akihabara Station",route:"Subway, then walk to the confirmed owl café",mapQuery:"Akihabara Station Tokyo"},
  6:{leaveBy:"Leave hotel by 7:50am",from:"Kayabacho Station",to:"Shinjuku Station → Hakone-Yumoto",route:"Subway to Shinjuku, then reserved Romancecar",mapQuery:"Odakyu Shinjuku Station Romancecar platform"},
  7:{leaveBy:"Leave hotel by 2:00pm with luggage",from:"Nihombashi Station",to:"Haneda Airport Terminal 3",route:"Toei Asakusa Line → Keikyu Airport Line · tap Suica",mapQuery:"Tokyo Haneda Airport Terminal 3"},
};

const BUDGET_CATEGORIES = [
  {
    id:"points", icon:"✨", title:"Covered by Points", accent:"#059669", totalLabel:"~$5,000–8,000 VALUE", totalColor:"#059669",
    items:[
      {name:"Virgin Atlantic → Delta flights (both, round trip)", free:true, freeLabel:"220k pts", detail:"Transfer 220,000 Chase UR → Virgin Atlantic Flying Club using the 30% transfer bonus (220k × 1.3 = 286k Virgin Points — covers 285k needed). Book Delta flights through Virgin Atlantic's award portal. Delta A350-900 on the long haul — one of the best economy aircraft flying."},
      {name:"Checked bags — 1 per person, international legs", free:true, freeLabel:"FREE", detail:"Delta economy international includes 1 checked bag per person on the long-haul legs. No separate bag fee. 2nd bag would be $100/person if needed."},
      {name:"Meals on international flights", free:true, freeLabel:"Included", detail:"Full meal service on Delta international economy flights. Served on both the outbound (DTW→HND) and return (HND→MSP) long-haul legs."},
      {name:"Caption by Hyatt Kabutocho — 6 nights (5th Night Free)", free:true, freeLabel:"125k pts", detail:"Transfer 125,000 Chase UR → World of Hyatt. 6 nights at 25,000 pts/night: pay for nights 1-4 (100k), night 5 is FREE (5th Night Free benefit), pay for night 6 (25k) = 125,000 total. Confirm the 5th night shows as free in the booking checkout before completing the transfer."},
      {name:"Hotel gym access — all week", free:true, freeLabel:"Included", detail:"Fitness center included in hotel stay. Confirm hours at check-in to plan morning workout sessions."},
    ]
  },
  {
    id:"pretrip", icon:"📋", title:"Pre-Trip & Admin", accent:"#6366f1", totalLabel:null,
    items:[
      {name:"Award ticket taxes & fees — PAID ✅", free:true, freeLabel:"$110.86 paid", detail:"$110.86 already paid at booking — taxes and fees for both passengers round trip. No further flight fees beyond baggage."},
      {name:"Checked bag — 1 per person included (23kg/50lbs)", free:true, freeLabel:"FREE", detail:"Your Virgin Atlantic booking screen confirmed: 1 x 23kg checked bag included per person for the international itinerary. The domestic connection legs (TPA→DTW and MSP→TPA) are covered because they're part of an international ticket."},
      {name:"Carry-on — 1 per person included (10kg max)", free:true, freeLabel:"FREE", detail:"1 x 10kg hand baggage included per person. Max dimensions 56 x 36 x 23cm. Note: 10kg is stricter than typical US domestic carry-on rules — pack accordingly."},
      {name:"2nd checked bag — if needed", cost:0, optional:true, optionalNote:"$100/person if needed", detail:"A 2nd 23kg checked bag costs $100 per person if you need it. For a week in Tokyo, one bag each should be plenty."},
      {name:"Airalo Japan eSIM × 2 people", cost:40, range:[30,50], detail:"Download Airalo app before leaving Tampa. ~$15-20/person for 10-15 days unlimited data. Installs digitally, activates on landing. No counter pickup at the airport."},
      {name:"International Driving Permit (AAA) — go-kart only", cost:20, range:[20,20], detail:"Required to operate the street go-kart. Visit any AAA branch before your trip. Bring your license and 2 passport photos. ~$20, takes 24 hours."},
      {name:"Travel insurance — both passengers", cost:200, range:[150,300], optional:true, detail:"Check your Chase Sapphire card first — many include trip cancellation and travel medical automatically. Buy separately only if your card doesn't cover it."},
    ]
  },
  {
    id:"airport_tampa", icon:"🛫", title:"Tampa Airport", accent:"#7c3aed", totalLabel:null,
    items:[
      {name:"Ride-share to TPA — departing (Thu Oct 22, 4:15am)", cost:30, range:[20,55], detail:"Very early morning — pre-book an Uber the night before so it's confirmed. You need to be at TPA by 4:15am for the 6:15am departure."},
      {name:"Bag check at TPA and DTW hub", free:true, freeLabel:"FREE", detail:"Delta economy international includes 1 checked bag per person. No fee at TPA or the Detroit connection."},
      {name:"TSA PreCheck (if you don't have it)", cost:0, optional:true, optionalNote:"$78/person if needed", detail:"5-year membership at tsa.gov. Worth it for future travel too."},
      {name:"Ride-share from TPA — returning (Thu Oct 29, ~10:45pm)", cost:30, range:[20,55], detail:"Late Thursday night return. Pre-book the ride home before you leave so it's confirmed."},
    ]
  },
  {
    id:"transport_japan", icon:"🚆", title:"Ground Transport — Japan", accent:"#0891b2", totalLabel:null,
    items:[
      {name:"Suica / local trains & buses — all week (× 2)", cost:70, range:[55,85], detail:"This is the one shared local-transit allowance: load about ¥6,000 each in Apple Wallet, then top up only if needed. It covers your Haneda arrival and departure trains, DisneySea train/Resort Line, and nearly all Tokyo subway/JR/bus rides. Do not add the individual Tokyo train fares elsewhere—those rides are paid from this balance, not on top of it."},
      {name:"Hakone Romancecar reserved tickets — round trip (× 2)", cost:65, range:[60,75], detail:"Separate from Suica: reserved Romancecar fare for two, round trip between Shinjuku and Hakone-Yumoto. Your subway ride to/from Shinjuku and the free Hakone Yuryo shuttle are already covered by Suica/free, so do not buy the Hakone Freepass."},
    ]
  },
  {
    id:"act_tokyo", icon:"🏙️", title:"Activities — All Days", accent:"#3730a3", totalLabel:null,
    items:[
      {name:"Tsukiji Outer Market — entry", free:true, freeLabel:"FREE", detail:"Free to enter and walk. Pay only for what you eat (in food budget)."},
      {name:"Senso-ji Temple, Asakusa — entry", free:true, freeLabel:"FREE", detail:"Free to enter grounds, gate, pagoda, and main hall."},
      {name:"Sat: Sumida Aquarium (× 2)", cost:36, range:[32,42], detail:"The panda replacement: a compact, design-forward aquarium in Tokyo Skytree Town with penguins and jellyfish. Buy a timed ticket online if you want certainty."},
      {name:"teamLab Planets, Toyosu (× 2) — BOOKED", cost:72, range:[64,78], booked:true, detail:"Booked for 8:00am on Sun Oct 25. Keep this planning amount until you add the exact receipt total; enter barefoot and allow 1.5–2 hours."},
      {name:"Street go-kart tour — Rainbow Bridge route (× 2)", cost:85, range:[70,100], detail:"~$36-48/person for 60-min guided tour. Book via Klook 3-7 days ahead. Requires IDP."},
      {name:"Go-kart costume rental (× 2)", cost:20, range:[15,28], optional:true, detail:"Superhero costumes available. Mario costumes no longer offered (Nintendo copyright)."},
      {name:"Shibuya Sky observation deck (× 2)", cost:46, range:[42,52], detail:"Evening web entry is currently ¥3,400/person. Book the blue-hour slot online; October pricing and availability should be reconfirmed when tickets open."},
      {name:"Owl Café — Akihabara (× 2)", cost:50, range:[40,62], detail:"~$25/person, 1-hour session. Pre-book 1-2 weeks in advance online."},
      {name:"Tokyo DisneySea — 1-Day Passport (× 2) — BOOKED", cost:130, range:[110,150], booked:true, detail:"Tickets purchased for Mon Oct 26. Keep this planning amount until you add the exact receipt total; add both tickets to the Tokyo Disney Resort app before arriving."},
      {name:"DisneySea Premier Access — optional", cost:30, range:[20,40], optional:true, detail:"~$10-15 extra per ride to skip longest queues. Recommended for Journey to the Center of the Earth."},
      {name:"Hakone Yuryo Type 1 private onsen — 120 min", cost:70, range:[68,82], detail:"Verified weekday rate for one Type 1 room for two: ¥10,400 total. Towels and bath amenities are included; optional yukata rental is ¥100/person."},
      {name:"Hakone Yuryo full-body massages — 60 min (× 2)", cost:105, range:[100,122], detail:"Verified Hogushian Yururuka rate: ¥7,900/person, ¥15,800 total. Request two therapists at the same time when reserving."},

      {name:"Hotel gym access — all week", free:true, freeLabel:"Included", detail:"Fitness center included in the hotel stay. Confirm hours at check-in."},
    ]
  },
  {
    id:"food_all", icon:"🍣", title:"Food — All 7 Days", accent:"#3730a3", totalLabel:null,
    items:[
      {name:"Fri arrival dinner: Gyoza — Kanda Gyoza (× 2)", cost:30, range:[20,38], detail:"Pan-fried dumplings, crispy bottomed, right near the hotel in Chiyoda City. ~$10-16/person for a filling dinner. Called out in the food video."},
      {name:"Sat: Matcha ice cream — Suzukin Asakusa (× 2)", cost:10, range:[6,14], detail:"7 levels of matcha intensity, steps from Senso-ji. ~$3-5 each. Quick walking treat after the temple."},
      {name:"Sat breakfast: Tsukiji Outer Market (× 2)", cost:65, range:[52,80], detail:"Fresh sushi (6-8 pieces), tamagoyaki, scallops, melon, soft serve — eat well, it's a real breakfast. ~$30-40/person."},
      {name:"Sat lunch: Ramen shop (× 2)", cost:26, range:[20,32], detail:"Proper Tokyo ramen — tonkotsu, shoyu, or tsukemen — near the Ueno/Akihabara stretch. Ticket-machine ordering. ~$10-14/person. Fills the one major food gap."},
      {name:"Sat dinner: Robatayaki fireside grilling (× 2)", cost:100, range:[80,130], detail:"Charcoal-hearth grilling with chef-selected items served course by course — wagyu, fresh seafood, seasonal vegetables, rice finale. ~$40-60/person at a good mid-range spot near Nihonbashi/Ginza. Hotel concierge books."},
      {name:"Sun breakfast: Hotel full meal (× 2)", cost:50, range:[38,65], detail:"Before a 9am teamLab start. Grilled fish, rice, miso, eggs, juice. ~$20-28/person."},
      {name:"Sun lunch: Wagyu beef katsu (× 2)", cost:35, range:[28,44], detail:"Gyukatsu Motomura. ~$15-18/person."},
      {name:"Sun: Higuma Doughnuts (× 2)", cost:10, range:[8,14], detail:"Afternoon treat in Omotesando. 2-3 doughnuts each to try variety. ~$4-6/person."},
      {name:"Sun: Harajuku street crepes (× 2)", cost:15, range:[12,18], detail:"Sweet crepe cone near Takeshita Street. ~$7-8 each."},
      {name:"Sun dinner: Monjaya Shinjuku Southeast Exit (× 2)", cost:50, range:[38,62], detail:"Tokyo-style monjayaki and okonomiyaki cooked on your tabletop griddle. About ¥2,500-4,000/person with drinks; one minute from Shinjuku Station. Reserve online."},
      {name:"Mon breakfast: Hotel quick or convenience store (× 2)", cost:16, range:[10,22], detail:"Early DisneySea departure — hotel quick-service or 7-Eleven run. ~$6-8/person."},
      {name:"Mon: DisneySea food — lunch + snacks (× 2)", cost:80, range:[60,100], detail:"Mediterranean Harbor lunch (~$20-30/person) + Mickey buns and snacks throughout."},
      {name:"Mon dinner: DisneySea — Magellan's (× 2)", cost:110, range:[105,145], detail:"Current Magellan course is ¥8,000/person before drinks. October's menu can change, but this replaces the old generic harbor-counter estimate. Reserve Priority Seating one month ahead."},
      {name:"Tue breakfast: Hotel full meal (× 2)", cost:50, range:[38,65], detail:"Substantial before owl café and walking day. ~$20-28/person."},
      {name:"Tue: Soufflé pancakes — Flipper's, mid-morning snack (× 2)", cost:18, range:[12,24], detail:"Mid-morning treat after the owl café, before lunch. Cloud-light, jiggly. Shared or one each. ~$9-12/plate."},
      {name:"Tue lunch: Pepper Parlor robot restaurant (× 2)", cost:50, range:[38,64], detail:"Robot-served lunch in Shibuya. Omurice, Japanese curry, or hamburg steak. ~$20-25/person."},
      {name:"Wed breakfast: Hotel quick (× 2)", cost:30, range:[20,44], detail:"A quick hotel or convenience-store breakfast before the Romancecar to Hakone."},
      {name:"Wed lunch: Irorisaryo Hachiri seasonal irori course (× 2)", cost:87, range:[85,115], detail:"Your attached March 2026 menu prices the standard seasonal course at ¥6,500/person, ¥13,000 total, tax included. October ingredients/menu may change; the higher range allows for the limited ¥8,500 special course or drinks."},
      {name:"Tue farewell dinner: SUSHI TOKYO TEN omakase (× 2)", cost:145, range:[135,175], detail:"Named Tuesday anniversary dinner. The ¥9,900 evening omakase for two is ¥19,800 before drinks; reserve through TableCheck and mention the anniversary."},
      {name:"Thu: Last breakfast + airport (× 2)", cost:40, range:[28,55], detail:"Hotel breakfast or neighborhood café. Light before flying. ~$15-22/person."},
      {name:"Convenience store snacks — all week (× 2)", cost:55, range:[40,75], detail:"7-Eleven and FamilyMart throughout. Onigiri, egg salad sandwiches, matcha pastries, juice, green tea."},
    ]
  },
  {
    id:"misc", icon:"💳", title:"Hotel & Miscellaneous", accent:"#475569", totalLabel:null,
    items:[
      {name:"Hotel incidental hold (credit card)", free:true, freeLabel:"Hold only", detail:"~$100-200 hold placed at check-in. Released at checkout if unused. Not a charge."},
      {name:"Hotel incidental spend (optional)", cost:60, range:[0,200], optional:true, detail:"Room service or other in-hotel charges. Optional."},
      {name:"Yen ATM fees (~5 withdrawals)", cost:20, range:[15,28], detail:"Use 7-Eleven bank ATMs — reliably accept foreign cards. ~$3-5 fee per withdrawal."},
      {name:"Tips", free:true, freeLabel:"$0", detail:"Tipping is not customary in Japan. Zero expected anywhere — restaurants, hotels, taxis, everywhere."},
    ]
  },
  {
    id:"souvenirs", icon:"🎁", title:"Souvenirs & Shopping (Variable)", accent:"#92400e", totalLabel:"Budget separately",
    items:[
      {name:"Nakamise-dori, Asakusa", cost:60, variable:true, detail:"Traditional fans, chopstick sets, ceramic items, Japanese snack boxes, matcha goods."},
      {name:"Akihabara / Harajuku", cost:50, variable:true, detail:"Anime figures, novelty items, vintage fashion, character goods."},
      {name:"Haneda Airport duty-free (HND)", cost:75, variable:true, detail:"Japanese Kit Kat varieties (50+ flavors), Japanese whisky (Nikka, Suntory), premium skincare. Haneda has excellent duty-free."},
    ]
  },
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
  {phase:"✅ Confirmed Reservations",bg:"#f0fdf4",border:"#86efac",text:"#166534",items:[
    {id:"p5",text:"teamLab Planets — Sun Oct 25, 8:00am · BOOKED",detail:"Tickets are secured. Leave the hotel by 7:10am, arrive around 7:45am, and save both ticket QR codes offline."},
    {id:"p10",text:"Tokyo DisneySea — Mon Oct 26 · BOOKED",detail:"Tickets are secured. Add both tickets to the Tokyo Disney Resort app before the park day, then use the app for wait times, mobile ordering, and any Premier Access decision."},
  ]},
  {phase:"🚨 Book Right Now (Flights + Hotel)",bg:"#fef2f2",border:"#fecaca",text:"#7f1d1d",items:[
    {id:"p1",text:"Transfer 220,000 Chase → Virgin Atlantic Flying Club",detail:"The 30% transfer bonus is live NOW — 220k Chase becomes 286k Virgin Points, covering the 285k needed. Do this before the bonus expires."},
    {id:"p2",text:"Book Delta flights through Virgin Atlantic portal",detail:"Book immediately after the transfer clears (usually minutes to a few hours). TPA→DTW→HND Oct 22 out. HND→MSP→TPA Oct 29 return."},
    {id:"p3",text:"Transfer 125,000 Chase → World of Hyatt",detail:"Transfer exactly 125,000. Verify the 5th Night Free shows at checkout (5 nights charged + 1 free = 125k total) before completing."},
    {id:"p4",text:"Book Caption by Hyatt Kabutocho Oct 23–29",detail:"6 nights at 25,000 pts/night with 5th Night Free. Confirm the discount shows before completing the transfer."},
  ]},
  {phase:"📅 NOW – Can Book Anytime (No 60-Day Limit)",bg:"#fefce8",border:"#fde68a",text:"#713f12",items:[
    {id:"p6",text:"Get IDP from AAA — for the go-kart",detail:"International Driving Permit, required for the street go-kart. Any AAA branch: bring US license + 2 passport photos + $20. Issued same day or 24 hrs. No reason to wait — get it anytime."},
    {id:"p7",text:"Book Shibuya Sky — Oct 25 evening (blue hour)",detail:"shibuya-scramble-square.com/sky. Book a ~6:00pm slot for Sunday Oct 25 to catch sunset/blue hour. Evening web entry is currently ¥3,400/person. Sells out on weekends — book early."},
    {id:"p8",text:"Book Owl Café Akihabara — Oct 27 (Tuesday) 10am",detail:"Search 'Akihabara owl café' and reserve via their site. ~$25/person, 1-hr session. Book 1-2 weeks minimum ahead, but you can lock it in now."},
    {id:"p9",text:"Reserve Hakone Yuryo spa day — Oct 28 (Wed)",detail:"Reserve a Type 1 private bath for 120 minutes (¥10,400 total on a weekday) around 2:15pm, the 11:30am Hachiri seasonal irori lunch, and two 60-minute Hogushian Yururuka massages (¥7,900/person). Ask for simultaneous therapists; if only back-to-back appointments are available, move the private bath to 3:30pm or later."},
    {id:"p9b",text:"Set Romancecar reminder — Sun Sep 27, 9:00pm ET",detail:"Odakyu opens e-Romancecar sales at 10:00am Japan time on Mon Sep 28—exactly one month ahead, which is Sun Sep 27 at 9:00pm Eastern. Search Shinjuku → Hakone-Yumoto for Wed Oct 28, two adults; choose the 9:30am-ish outbound after your spa bookings are set, then a return after 4:30pm. Pay for the reserved-seat supplement online, and tap Suica separately for the regular fare."},
  ]},
  {phase:"🍽️ ~1 Month Before — Concierge Dinners",bg:"#faf5ff",border:"#d8b4fe",text:"#3b0764",items:[
    {id:"p12",text:"Email hotel concierge: robatayaki + farewell omakase",detail:"Email Caption by Hyatt Kabutocho ~3-4 weeks out. Request: (1) Robata Ginza Honten counter seating for Sat Oct 24 dinner; (2) SUSHI TOKYO TEN Roppongi for Tue Oct 27 evening—mention it is your anniversary. The Hakone onsen and dinner are booked directly, not through the concierge."},
    {id:"p12b",text:"Ask hotel concierge: robatayaki reservation — Sat Oct 24 dinner",detail:"Request a traditional robatayaki restaurant near Nihonbashi or Ginza for Saturday Oct 24 dinner — walking distance from the hotel. Ask for counter seating at the hearth if available, not a table. Mid-range budget (~$40-60/person). Concierges can get same-night or advance reservations easily for this style of restaurant."},
    {id:"p12c",text:"Reserve Monjaya Shinjuku Southeast Exit — Sun Oct 25 dinner",detail:"Book the Shinjuku Southeast Exit branch online for 6:30pm. It is one minute from Shinjuku Station and close to the 3D cat stop. Order monjayaki plus okonomiyaki; ask the staff to cook the first one if you want a quick introduction to the tabletop griddle style."},
    {id:"p13",text:"Book go-kart tour on Klook — Oct 25 afternoon",detail:"Search 'Tokyo street go-kart' on Klook, Rainbow Bridge/Akihabara route, Sun Oct 25 ~1:30pm. ~$36-48/person. Book 3-7 days ahead minimum — but October is peak, so reserve 2-3 weeks out to be safe."},
  ]},
  {phase:"📱 2–4 Weeks Before (Early Oct)",bg:"#eff6ff",border:"#bfdbfe",text:"#1e3a8a",items:[
    {id:"p14",text:"Set up Suica in Apple Wallet — both iPhones",detail:"Apple Wallet → + → Transit Card → Suica. Load ¥6,000 each via Apple Pay from the US. Better than a physical card: no deposit, no airport machine, top up anywhere, works on Express Transit even at low battery. Tap straight through the gate when you land."},
    {id:"p15",text:"Buy Airalo Japan eSIM — both phones",detail:"Download Airalo, buy a Japan eSIM (~$15-20/person, 10-15 days unlimited). Install before leaving — activates on landing. No SIM swap, no counter. iPhone XS+ / most Android 2020+."},
    {id:"p16",text:"Download Google Maps Tokyo — offline",detail:"Google Maps → search Tokyo → download offline area. Subway routing, walking directions, search without data. Download the whole metro area."},
    {id:"p17",text:"Download Google Translate — Japanese offline pack",detail:"Google Translate → Languages → Japanese → Download. The camera-translate feature (point at Japanese text) works offline — useful for menus, signs, packaging."},
    {id:"p18",text:"Download Tokyo Disney Resort app (English)",detail:"App Store, switch to English. Real-time wait times, Premier Access, Magellan's reservations, show schedules. Download before the trip — park WiFi is crowded on arrival."},
    {id:"p19",text:"Register on Visit Japan Web (VJW) — both of you",detail:"vjw-lp.digital.go.jp — free, English available. Takes ~15 min. Complete the immigration and customs declaration for BOTH of you (each person needs their own QR code — you can't share one). You'll get QR codes that replace the paper arrival card. At Haneda in 2026, a Joint Kiosk scans your passport + QR code and handles immigration AND customs in a single stop — saves 20-30 min on arrival. Screenshot both QR codes before boarding so you have them offline. Don't use the tax-exemption QR code — that function is being phased out in 2026; keep receipts and claim refunds at the airport on departure instead."},
    {id:"p19b",text:"Notify credit cards of Japan travel dates",detail:"Chase Sapphire + any backup cards: Oct 22-29, Japan. Prevents fraud holds on international charges."},
  ]},
  {phase:"✅ 1 Week Before",bg:"#f0fdf4",border:"#bbf7d0",text:"#14532d",items:[
    {id:"p20",text:"Check passport validity (need through ~April 2027)",detail:"Both passports must be valid at least 6 months past your Oct 29 return — through ~April 29, 2027. Japan enforces this. If renewal is needed, act immediately."},
    {id:"p21",text:"Confirm + screenshot every booking (offline backup)",detail:"teamLab, DisneySea, owl café, Shibuya Sky, go-kart, Cup Noodles, both concierge dinners, hotel, flights. Save offline in case you have no signal."},
    {id:"p22",text:"Top Suica to ¥6,000 each if not done",detail:"Apple Wallet → Suica → add money via Apple Pay. This shared balance covers the arrival/departure airport trains, DisneySea transit, and your normal Tokyo train/bus rides. Top up anytime in Japan if it runs low."},
    {id:"p23",text:"IDP + US license together in your travel folder",detail:"Without BOTH, you can't operate the go-kart. Pack them together."},
  ]},
  {phase:"🌙 Night Before (Oct 21)",bg:"#faf5ff",border:"#d8b4fe",text:"#3b0764",items:[
    {id:"p24",text:"Pre-book Uber to TPA — 4:15am pickup Oct 22",detail:"Schedule it the night before. You need to be at TPA by 4:15am for the 6:15am departure. Don't rely on hailing a ride at 4am."},
    {id:"p25",text:"Charge everything — phones, power bank, headphones",detail:"All to 100%. Phones must last the full journey until the hotel. The power bank especially — essential for 21 hours of travel."},
    {id:"p26",text:"Pack IDP, passports, cards in carry-on",detail:"Never in checked luggage. Documents, cards, phones stay accessible in your carry-on the whole way."},
    {id:"p27",text:"Set 3 alarms — 3:30, 3:45, 4:00am",detail:"Not a morning to sleep through."},
  ]},
  {phase:"🇯🇵 Japan Essentials — Know Before You Go",bg:"#f0fdf4",border:"#6ee7b7",text:"#064e3b",items:[
    {id:"p28",text:"Wear slip-on/off shoes",detail:"You'll remove shoes often — some restaurants seat you on floor cushions, Spa LaQua requires shoes off, various experiences too. Slip-ons over lace-ups make this smooth."},
    {id:"p29",text:"Get ¥20,000-30,000 cash from a 7-Eleven ATM on arrival",detail:"Suica + cards cover ~95% of the trip, but some cash-only spots exist. 7-Eleven ATMs reliably take US cards. Withdraw ~$130-200 on arrival and you're set."},
    {id:"p30",text:"Carry a small zip bag for trash",detail:"Public trash cans are rare by design. Convenience stores have bins, but between stops you'll want somewhere for wrappers. A zip-loc in your day bag solves it."},
    {id:"p31",text:"Subway: silent mode, no phone calls",detail:"Calls on the subway are considered rude and universally avoided. Text, browse, use headphones. Talking quietly is fine."},
    {id:"p32",text:"Don't eat while walking",detail:"Street food at Tsukiji/Ameya-Yokocho is fine eaten standing near the vendor. Walking + eating is generally not done — pause, eat, continue."},
    {id:"p33",text:"Useful phrases",detail:"'Sumimasen' (excuse me/sorry) — most useful word, use constantly. 'Arigatou gozaimasu' (thank you, formal). 'Kore o kudasai' + pointing = I'll have this. 'Eigo no menyu arimasu ka?' = English menu?"},
    {id:"p34",text:"Restaurants: wait to be seated, use the call button",detail:"'Irasshaimase!' on entry is just a welcome — no response needed. Wait to be seated. Most tables have a call button to summon a server. Pay at the register on the way out."},
    {id:"p35",text:"No tipping — anywhere, ever",detail:"Not customary and can cause confusion. Restaurants, hotels, taxis — nothing. The menu price is what you pay."},
  ]},
];

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

function activityMapLabel(activity){
  return activity.title.replace(/^(Breakfast|Lunch|Dinner|Afternoon Snack|Check In):\s*/i,"");
}

function activityFlag(activity){
  const allText=`${activity.detail||""} ${activity.tip||""}`;
  if(allText.includes("⚠️"))return {label:"Important",color:"#b45309",bg:"#fffbeb",border:"#fde68a"};
  if(/\b(book|reserve|reservation|timed entry|priority seating)\b/i.test(allText))return {label:"Book ahead",color:"#6d28d9",bg:"#faf5ff",border:"#ddd6fe"};
  if(activity.food)return {label:"Food stop",color:"#c2410c",bg:"#fff7ed",border:"#fed7aa"};
  return null;
}

export default function JapanItinerary(){
  const[view,setView]=useState("itinerary");
  const[activeDay,setActiveDay]=useState(1);
  const[expandedIdx,setExpandedIdx]=useState(null);
  const[showPoints,setShowPoints]=useState(false);
  const[expandedCat,setExpandedCat]=useState(null);
  const[expandedItem,setExpandedItem]=useState(null);
  const[planChecked,setPlanChecked]=useState(new Set(["p5","p10"]));
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
              const flag=activityFlag(act);
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
                        {!isOpen&&<div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginTop:6}}>
                          {flag?<span style={{fontSize:10,fontWeight:750,color:flag.color,background:flag.bg,border:`1px solid ${flag.border}`,padding:"3px 7px",borderRadius:20}}>{flag.label}</span>:<span style={{fontSize:11,color:"#94a3b8"}}>Tap for helpful details</span>}
                        </div>}
                      </div>
                    </div>
                  </button>
                  {isOpen&&(
                    <div style={{padding:"0 16px 16px",display:"flex",flexDirection:"column",gap:10}}>
                      <p style={{fontSize:13,color:"#374151",lineHeight:1.6,margin:0}}>{act.detail}</p>
                      {act.food&&<div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"10px 12px"}}><div style={{fontSize:11,fontWeight:700,color:"#c2410c",marginBottom:4}}>🍽️ FOOD</div><p style={{fontSize:12,color:"#7c2d12",lineHeight:1.5,margin:0}}>{act.food}</p></div>}
                      {act.tip&&<div style={{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 12px"}}><div style={{fontSize:11,fontWeight:700,color:"#1d4ed8",marginBottom:4}}>💡 TIP</div><p style={{fontSize:12,color:"#1e3a8a",lineHeight:1.5,margin:0}}>{act.tip}</p></div>}
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
