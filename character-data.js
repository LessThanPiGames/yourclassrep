// Character content and card artwork mapping used by cards.html.
window.CHARACTER_ENTRIES = [
      ['SpeechM','Speech Kid'],['SpeechF','Speech Kid'],['NerdF','Nerd Kid'],['NerdM','Nerd Kid'],['CoolM','Cool Kid'],['CoolF','Cool Kid'],['SubF','Substitute Teacher'],['SubM','Substitute Teacher'],['SportM','Sporty Kid'],['SportF','Sporty Kid'],['PetX',"Teacher's Pet",'PetF'],['PetM',"Teacher's Pet"],['PrincM','Principal'],['PrincF','Principal'],
      ['ClassicalF','Classical Kid'],['ClassicalM','Classical Kid'],['PunkM','Punk Kid'],['PunkF','Punk Kid'],['BandF','Band Kid'],['BandM','Band Kid'],['LunchM','Lunch Manly'],['LunchF','Lunch Lady'],['MusicF','Music Teacher'],['MusicM','Music Teacher'],['HipHopM','Hip-Hop Kid'],['HipHopF','Hip-Hop Kid'],['MathF','Math Teacher'],['MathM','Math Teacher'],
      ['KarateM','Karate Kid'],['KarateF','Karate Kid'],['TrackF','Track Kid'],['TrackM','Track Kid'],['CrossingM','Crossing Guard'],['CrossingF','Crossing Guard'],['MascotF','Mascot'],['MascotM','Mascot'],['SkaterM','Skater Kid'],['SkaterF','Skater Kid'],['SwimmerF','Swimmer Kid'],['SwimmerM','Swimmer Kid'],['GymM','Gym Teacher'],['GymF','Gym Teacher']
    ].map(([code,name,artCode],index) => ({ number:index+1, code, name, artCode:artCode || code }));

window.CHARACTER_DETAILS = {
  "1": {
    "cardTitle": "Speech Kid",
    "characterName": "Michael Blaze",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Singing, school spirit, pep rallies, helping others",
    "bio": "Michael knows everyone’s name and probably has a theme song ready for it. He’s loud, charming, and always eager to step up, whether he’s leading a school-spirit rally, helping a classmate, or breaking into song. His giant afro bounces with every step, and his questionably large collection of ties has become a school legend.",
    "ability": "Class Rep Ability: I always tie",
    "strategy": "Use this Class Rep when you know you need to Guarantee points.",
    "combinations": [
      28,
      36
    ],
    "combinationText": "Pair with the Math Teacher and Mascot. Both a low risk way to proc their tally abilities with Speech Kid in the deck."
  },
  "2": {
    "cardTitle": "Speech Kid",
    "characterName": "Naomi Lin",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Reading, organizing things, student council meetings",
    "bio": "Naomi runs on color-coded schedules, careful planning, and honesty, and she always seems to have a backup plan for her backup plan. She’s dependable and sharp, with little patience for nonsense unless it’s neatly organized. Deep down, she wants what’s best for the class, plus a few extra books for the library.",
    "ability": "Class Rep Ability: I always tie",
    "strategy": "Use this Class Rep when you know you need to Guarantee points.",
    "combinations": [
      27,
      35
    ],
    "combinationText": "Pair with the Math Teacher and Mascot. Both a low risk way to proc their tally abilities with Speech Kid in the deck."
  },
  "3": {
    "cardTitle": "Nerdy Kid",
    "characterName": "Tabitha Newtonium",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Robotics club, astronomy, old cartoons",
    "bio": "Tabitha is one of three exceptionally smart triplets, each with a knack for figuring out how things work. She’s brilliant, a little awkward, and about six inches taller than the other girls in class; when she’s thinking hard, she sometimes forgets to blink. She’ll happily debug your science fair project whether you asked for help or not, and she won’t give up until she solves the problem, even if it costs her a few hours of sleep.",
    "ability": "Campaign Ability: When played versus a [6 Influence] card I win.",
    "strategy": "This is a high risk high reward card. Play her when you think your opponent will use a 6 or a lowest Influence wins card.",
    "combinations": [
      39,
      42
    ],
    "combinationText": "Nerdy kid is a great defense for these high influence card’s counters and help to proc Gym Teacher’s Tally Ability"
  },
  "4": {
    "cardTitle": "Nerdy Kid",
    "characterName": "Felix Gurbb",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Dinosaurs, math puzzles, science fiction",
    "bio": "Felix looks like he stepped out of a vintage computer magazine, bowl cut and all, and he always has a fact, correction, or explanation ready to share. He’s a well-meaning know-it-all who genuinely wants to help, even when nobody asked for a lesson. Mention dinosaurs, math puzzles, or science fiction, and his enthusiasm can keep the conversation going long after everyone else is ready to move on.",
    "ability": "Campaign Ability: When played versus a [6 Influence] card I win.",
    "strategy": "Nerdy Kid is a high risk high reward card. Play him when you think your opponent will use a 6 or a lowest [Influence] wins card.",
    "combinations": [
      40,
      41
    ],
    "combinationText": "Nerdy Kid is a great defense to cover for Swimmer Kid and Gym Teacher’s weaknesses and also helps to proc Gym Teacher’s Tally Ability"
  },
  "5": {
    "cardTitle": "Cool Kid",
    "characterName": "Charles “Chill” Mann",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Being chill",
    "bio": "Chill doesn’t walk so much as glide. He’s the shortest kid in class, yet somehow the smoothest, and he never seems to let a problem ruin his relaxed attitude. His effortless charm has made him popular, though he’s usually too busy chilling to notice.",
    "ability": "Tally Ability: If there is 1 or more [Special] cards on your side you gain +2[votes]",
    "strategy": "Cool Kid may not be powerful but when he lands face up his Tally ability is very reliable.",
    "combinations": [
      12,
      16
    ],
    "combinationText": "Cool Kid wants to pair with high influence [special] type cards to help ensure his ability activates!"
  },
  "6": {
    "cardTitle": "Cool Kid",
    "characterName": "Bree “Breezy” Day",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Fashion, trends, gossip (but the fun kind)",
    "bio": "Bree has the inside scoop on everyone and everything, often before it even happens. She’s bubbly, stylish, and always ready with a trend, a sticker, or a piece of gossip that’s meant to be fun. Beneath the glitter pens and sticker-covered binder is a big heart and a friend who cares.",
    "ability": "Tally Ability: If there is 1 or more [Special] cards on your side you gain +2[votes]",
    "strategy": "Cool Kid may not be very influential, but when she lands face up her Tally ability is very reliable.",
    "combinations": [
      11,
      15
    ],
    "combinationText": "Cool Kid wants to pair with powerful high influence [special] type cards to help ensure her ability activates!"
  },
  "7": {
    "cardTitle": "Substitute Teacher",
    "characterName": "Miss Sunny",
    "types": [
      "Staff",
      "Special"
    ],
    "interests": "Poetry, flowers, sunshine, juggling",
    "bio": "Miss Sunny is sunshine in teacher form, bringing poetry, flowers, and contagious laughter wherever she goes. She never quite knows what the lesson plan says, but somehow her students leave happier than when they arrived. Her juggling skills are surprisingly real, although her tendency to knock over the whiteboard is just as impressive.",
    "ability": "Campaign Ability: Lowest Influence wins.",
    "strategy": "Substitute Teacher is a powerful anti-high influence card. Use her when you think your opponent will try and play 4,5, or 6 Influence cards.",
    "combinations": [
      14,
      26
    ],
    "combinationText": "The Substitute Teacher acts as a powerful defensive option when helping to proc The Principal and HipHop Kid’s Tally abilities."
  },
  "8": {
    "cardTitle": "Substitute Teacher",
    "characterName": "Mr. Mortimer",
    "types": [
      "Staff",
      "Special"
    ],
    "interests": "Rule books, history, motorcycles, birdwatching",
    "bio": "Mr. Mortimer is firm but fair, with a booming voice, impressive chalkboard penmanship, and an endless collection of jumpsuits. He loves history and rule books, and spends his free time riding motorcycles or birdwatching. His one classroom mystery is how he can be so prepared for everything except remembering which lesson the class is on.",
    "ability": "Campaign Ability: Lowest Influence wins.",
    "strategy": "Substitute Teacher is a powerful anti-high influence card. Use him when you think your opponent will try and play 4,5, or 6 Influence cards.",
    "combinations": [
      13,
      25
    ],
    "combinationText": "The Substitute Teacher acts as a powerful defensive option when helping to proc The Principal and HipHop Kid’s Tally abilities."
  },
  "9": {
    "cardTitle": "Sporty Kid",
    "characterName": "Frank “Faceoff” Ball",
    "types": [
      "Student"
    ],
    "interests": "Every sport ever, seriously all of them",
    "bio": "Frank plays every sport like it’s the championship and is almost never seen standing still. Class photos rarely capture more than a blur of limbs, and somehow he ends up with grass stains even after indoor sporting events. He’s a natural athlete who treats every game like the biggest moment of his life.",
    "ability": "Campaign Ability: When played versus [Speaker] Cards I get +2[Influence]",
    "strategy": "Sporty Kid is a powerful student card that won’t clog up your typing synergies, but shuts down many cards with powerful Tally abilities.",
    "combinations": [
      28,
      32
    ],
    "combinationText": "This is a combination  that covers a lot of bases with room to remain flexible and add in other strategies."
  },
  "10": {
    "cardTitle": "Sporty Kid",
    "characterName": "Danielle “Dani” Nette",
    "types": [
      "Student"
    ],
    "interests": "Dribbling, scoring, passing (and soccer, shh… don’t tell anyone)",
    "bio": "Dani dominates the basketball court and makes dribbling, passing, and scoring look easy. She’s respected for her skills and never shies away from a challenge, but she has a secret: she’d rather be out on the soccer field. For now, she’s keeping that little detail to herself.",
    "ability": "Campaign Ability: When played versus [Speaker] Cards I get +2[Influence]",
    "strategy": "Sporty Kid is a powerful student card that won’t clog up your typing synergies, but shuts down many cards with powerful Tally abilities.",
    "combinations": [
      27,
      31
    ],
    "combinationText": "This is a combination  that covers a lot of bases with room to remain flexible and add in other strategies."
  },
  "11": {
    "cardTitle": "Teacher’s Pet",
    "characterName": "Pip and Nibbs",
    "types": [
      "Special"
    ],
    "interests": "Studying, note taking, tests, snacks, naps",
    "bio": "Pip is a studious girl hamster who seems determined to do school just like the kids: she attends class, takes notes, does her homework, and somehow aces her tests. Her companion Nibbs is a boy hamster with a much simpler routine: snack, nap, repeat. Together, these very different little pets have become beloved members of the Little Middle school community.",
    "strategy": "Teacher’s Pet is powerful in combinations with two Staff Cards!",
    "combinations": [
      22,
      34
    ],
    "combinationText": "This power combination can beat most high influence cards and activates The Teacher’s Pets’ Abilities"
  },
  "12": {
    "cardTitle": "Teacher’s Pet",
    "characterName": "Scurry",
    "types": [
      "Special"
    ],
    "interests": "Escape tunnels, air vents",
    "bio": "Scurry is a mouse with one goal in life: escape school! He’s tried the front doors, the ceiling tiles, the air vents, and a suspiciously small hole in the principal’s office, but somehow he always ends up back in the lunchroom, usually with a stolen snack and a fresh detention slip. Every failed escape only inspires an even more ridiculous plan.",
    "strategy": "Teacher’s Pet is powerful in combinations with two Staff Cards!",
    "combinations": [
      21,
      33
    ],
    "combinationText": "This power combination can beat most high influence cards and activates The Teacher’s Pet’s Abilities"
  },
  "13": {
    "cardTitle": "Principal",
    "characterName": "Vice Principal Grizz",
    "types": [
      "Staff",
      "Speaker"
    ],
    "interests": "Discipline, poetry",
    "bio": "Vice Principal Grizz is huge, intimidating, and sounds like he gargles gravel, but beneath that gruff exterior is a big softie who wants every student to succeed. He enforces the rules while quietly fixing broken lockers and checking on kids who seem down. He may have an iron fist, but he also has a secret weakness for poetry.",
    "ability": "Tally Ability: If there are less than 2[Student] cards face up on your side you gain +1[Vote]",
    "strategy": "The Principal is powerful when paired with other staff Cards",
    "combinations": [
      8,
      24
    ],
    "combinationText": "This power combination can beat most other cards and leave room to still activate the Principal's Tally ability."
  },
  "14": {
    "cardTitle": "Principal",
    "characterName": "Principal Stone",
    "types": [
      "Staff",
      "Speaker"
    ],
    "interests": "Rules, structure, hair gel, rare umbrellas",
    "bio": "Principal Stone’s shoes click like a metronome of doom, and her icy stare can silence an entire cafeteria. She loves rules, structure, perfectly styled hair, and rare umbrellas, but she cares deeply about her students and staff. When things get tough, she’s the first one in and the last one to leave, making sure the school runs like clockwork.",
    "ability": "Tally Ability: If there are less than 2[Student] cards face up on your side you gain +1[Vote]",
    "strategy": "The Principal is powerful when paired with other staff Cards",
    "combinations": [
      7,
      23
    ],
    "combinationText": "This power combination can beat most other cards and leave room to still activate the Principal's Tally ability."
  },
  "15": {
    "cardTitle": "Classical Kid",
    "characterName": "Rumi Sato",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Cello, studying, LessThanPi Comics",
    "bio": "Rumi is one of the hardest-working students in school. Her grades shine, her cello performances stun, and she makes excellence look effortless, earning the admiration of teachers and classmates alike. Beneath her polished image is a LessThanPi Comics superfan who could write a full thesis about her favorite heroes."
  },
  "16": {
    "cardTitle": "Classical Kid",
    "characterName": "Victor Strings",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Violin, quiet practice rooms, classical playlists",
    "bio": "Victor carries himself as though he’s stepping onto a grand stage every time he enters a room. He tunes his violin carefully and treats every note with respect, taking the time to refine what others might rush. Some say he was born in the wrong century, and he takes that as a compliment."
  },
  "17": {
    "cardTitle": "Punk Kid",
    "characterName": "Riff Razor",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Loud riffs, customizing guitars, sticking band stickers on everything",
    "bio": "Riff was practically born in the middle of a guitar solo. His guitar is covered in stickers, his riffs are loud, and his volume rarely drops below maximum. He treats practice like a performance and every performance like a battle, even if the walls would really prefer he turn it down."
  },
  "18": {
    "cardTitle": "Punk Kid",
    "characterName": "Lexi Riot",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Mic checks, concerts, crafting band merch",
    "bio": "Lexi commands attention the moment she steps forward, with a gritty voice and fearless confidence that fills the hallway. As the frontwoman of The Bandits, she always seems to have another concert or lunchtime gig in the works. Give her a crowd and she’ll have everyone singing along by the first chorus."
  },
  "19": {
    "cardTitle": "Band Kid",
    "characterName": "Nina Drummond",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Cadences, stick tricks, marching formations",
    "bio": "Nina is never still for long, tapping rhythms on desks and lockers without even noticing. She leads the drumline with sharp focus and quiet authority, keeping every cadence and marching formation on beat. Even in silence, she can hear the next count coming."
  },
  "20": {
    "cardTitle": "Band Kid",
    "characterName": "Toby Brass",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Marching band, warmups, annoying his sister",
    "bio": "Toby believes volume equals victory and practices his trumpet whether the school is ready or not. His triumphant high notes can make any pep rally feel like a championship celebration. Subtlety has never been part of his strategy, especially when it comes to annoying his sister."
  },
  "21": {
    "cardTitle": "Lunch Staff",
    "characterName": "“Lunch Manly” Dan",
    "types": [
      "Staff"
    ],
    "interests": "Protein-packed meals, heroic poses, chili cook-offs",
    "bio": "Dan treats every lunch period like a championship event, serving protein-packed meals with dramatic flair and motivational speeches. He somehow makes an apron look heroic, and teachers linger just to hear his latest pep talk. Legend says he once flexed and the pudding cups trembled."
  },
  "22": {
    "cardTitle": "Lunch Staff",
    "characterName": "Lunch Lady Pam",
    "types": [
      "Staff"
    ],
    "interests": "Secret recipes, giant ladles, lunchtime diplomacy",
    "bio": "Pam runs the cafeteria with calm confidence, remembering every student’s favorite meal and keeping the line moving at impressive speed. Her secret recipes and giant ladle have earned her a legendary reputation, especially for her mashed potatoes. Around Little Middle, she’s the real head of state."
  },
  "23": {
    "cardTitle": "Music Teacher",
    "characterName": "Mrs. Delgado",
    "types": [
      "Staff",
      "Special"
    ],
    "interests": "Maracas, dancing the samba, correcting pitch",
    "bio": "Mrs. Delgado brings warmth and rhythm to every choir session, guiding students patiently while encouraging them to give their best. She loves maracas and dancing the samba, and she believes every student has a voice worth hearing. Under her direction, concert nights feel electric."
  },
  "24": {
    "cardTitle": "Music Teacher",
    "characterName": "Mr. Toupin",
    "types": [
      "Staff",
      "Special"
    ],
    "interests": "Conducting, pep band, dramatic entrances",
    "bio": "Mr. Toupin treats every rehearsal like opening night, with grand conducting gestures and dramatic entrances. Students may whisper about his very determined hairstyle, but nobody questions his love for music or the pep band. For him, applause is the perfect form of punctuation."
  },
  "25": {
    "cardTitle": "Hip-Hop Kid",
    "characterName": "Jay Beats",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Beatmaking, vinyl records, collecting headphones",
    "bio": "Jay hears rhythm in everything, from locker doors to footsteps echoing down the hall. He collects headphones and vinyl records, and he often builds a whole track in his head before it ever reaches his laptop. Give him a minute and he’ll give you a hook."
  },
  "26": {
    "cardTitle": "Hip-Hop Kid",
    "characterName": "Kira Flow",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Freestyling, fashion, choreography",
    "bio": "Kira turns ordinary moments into performances, making class presentations rhythmic showcases and hallway conversations clever wordplay. She moves with confidence, loves fashion and choreography, and always knows how to say something with style. When Kira starts freestyling, the whole room becomes her stage."
  },
  "27": {
    "cardTitle": "Math Teacher",
    "characterName": "Mrs. Summer",
    "types": [
      "Staff"
    ],
    "interests": "Baking pies, math duets, color-coded notebooks",
    "bio": "Mrs. Summer balances theatrical math lessons with steady grace, making tricky problems feel manageable. Her chalkboard writing is flawless, her notebooks are color-coded, and she loves baking pies. At assemblies, her math duets with her husband draw roaring applause."
  },
  "28": {
    "cardTitle": "Math Teacher",
    "characterName": "Mr. Summer",
    "types": [
      "Staff"
    ],
    "interests": "Puns, math songs, calculators",
    "bio": "Mr. Summer refuses to teach math quietly. Equations become lyrics and fractions turn into full performances, so students often leave class humming multiplication tables instead of just remembering the homework. He loves puns and calculators, and truly believes math deserves a standing ovation."
  },
  "29": {
    "cardTitle": "Karate Kid",
    "characterName": "Kenneth Master",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Martial arts, Japanese snacks, dramatic poses",
    "bio": "Kenneth is Class 3A’s class representative, and he takes the role seriously. After spending the summer training in Japan, he returned with sharper martial arts skills and a calm confidence that shapes everything he does. He wears his gi every day and tries to set an example, even when school life gets chaotic."
  },
  "30": {
    "cardTitle": "Karate Kid",
    "characterName": "Rose Meadows",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Karate, comic books, prank sparring",
    "bio": "Rose is Class 3A’s energetic vice representative, bringing her love of karate and comic books into everyday school life. She enjoys playful sparring and creative pranks, and she’s always ready to show off a new move. Her determination and cheerful spirit make her both inspiring and fun to be around."
  },
  "31": {
    "cardTitle": "Track Kid",
    "characterName": "Riley Swift",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Sprinting, relay races, beating personal records",
    "bio": "Riley is the fastest sprinter in school and loves racing anyone who dares to challenge her. She thrives on short bursts of speed, relay races, and beating her personal records, often zipping past before anyone realizes the race has started. Her energy is contagious, and she seems to have picked up her determination and love of track from someone who knows a thing or two about coaching"
  },
  "32": {
    "cardTitle": "Track Kid",
    "characterName": "Miles Long",
    "types": [
      "Student",
      "Speaker"
    ],
    "interests": "Jogging, steady routines, energy bars",
    "bio": "Miles is a long-distance runner who treats every hallway and sidewalk as part of his route. He keeps a steady pace, sticks to his routines, and rarely draws attention to himself. His quiet consistency shows in the way he keeps pushing forward every day."
  },
  "33": {
    "cardTitle": "Crossing Guard",
    "characterName": "Mr. Beacon",
    "types": [
      "Staff"
    ],
    "interests": "Safety drills, morning stretches, beard grooming",
    "bio": "Mr. Beacon keeps students safe as they cross the street, guiding them with a brisk, confident pace. His legendary beard makes him easy to spot, and even older students slow down and follow his lead. He enjoys the rhythm of morning safety routines and takes pride in getting everyone to school safely."
  },
  "34": {
    "cardTitle": "Crossing Guard",
    "characterName": "Mrs. Bright",
    "types": [
      "Staff"
    ],
    "interests": "Whistles, staying hydrated, neighborhood watch",
    "bio": "Mrs. Bright manages the crosswalk with energy and precision, keeping track of students, steps, and neighborhood activity. Her whistle and cheerful, commanding presence earn respect from everyone passing her corner. She makes safety feel like a team effort, with everyone moving in the right direction."
  },
  "35": {
    "cardTitle": "Mascot",
    "characterName": "Pip",
    "types": [
      "Special"
    ],
    "interests": "School spirit, dramatic entrances, confusing people",
    "bio": "Pip is a student hidden inside a hamster mascot costume inspired by the school’s studious pet hamster. Nobody knows who’s inside the suit, but the silent performer brings school spirit with dramatic entrances and unpredictable antics."
  },
  "36": {
    "cardTitle": "Mascot",
    "characterName": "Nibbs",
    "types": [
      "Special"
    ],
    "interests": "Snacks, dancing, copying Pip",
    "bio": "Nibbs is a student in a hamster mascot costume inspired by the school’s sleepy pet, though this performer has energy to spare. He bounces, dances, and enthusiastically copies Pip’s antics, turning assemblies and pep rallies into lively shows."
  },
  "37": {
    "cardTitle": "Skater Kid",
    "characterName": "Wheels Warren",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Rollerblading, obstacle courses, showing off tricks",
    "bio": "Wheels is always on his rollerblades, gliding through hallways, weaving around lockers, and pulling off tricks whenever he gets the chance. Teachers watch with cautious admiration while classmates try to keep up with his constant motion. For Wheels, every open space is a new obstacle course."
  },
  "38": {
    "cardTitle": "Skater Kid",
    "characterName": "Zoe Hawk",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Skateboarding, deck designs, rooftop sunsets",
    "bio": "Zoe treats the school grounds like her personal skate park, practicing tricks and decorating her boards with custom designs. She keeps trying until she lands the move she wants, even after a spectacular wipeout. Her daring attitude and persistence have earned the admiration of her friends."
  },
  "39": {
    "cardTitle": "Swimmer Kid",
    "characterName": "Cascade Deep",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Diving, floaties, dramatic cannonballs",
    "bio": "Cascade amazes everyone with flips and dramatic dives, even though swimming in a straight line can be a challenge. Her inflatable tube goes everywhere, and she brings flair to every poolside appearance. Friends love her theatrical cannonballs, while teachers admire the effort she puts into each dive."
  },
  "40": {
    "cardTitle": "Swimmer Kid",
    "characterName": "Brooks Wake",
    "types": [
      "Student",
      "Special"
    ],
    "interests": "Swim meets, early morning practice, snacks",
    "bio": "Brooks takes swimming seriously, showing up to practice early and preparing for every meet like it’s the Olympics. He wears his goggles practically everywhere, and with his careful planning and calm demeanor, he’s always ready to dive in."
  },
  "41": {
    "cardTitle": "Gym Teacher",
    "characterName": "Coach Boulder",
    "types": [
      "Staff",
      "Speaker"
    ],
    "interests": "Whistles, dodgeball, protein smoothies",
    "bio": "Coach Boulder treats every gym class like a championship match, motivating students with booming instructions and careful attention to effort. His love of dodgeball, whistles, and protein smoothies is matched by his determination to help everyone improve. Even the quietest students find themselves trying a little harder under his watch."
  },
  "42": {
    "cardTitle": "Gym Teacher",
    "characterName": "Coach Swift",
    "types": [
      "Staff",
      "Speaker"
    ],
    "interests": "Track meets, stretching, school sports",
    "bio": "Coach Swift brings energy and encouragement to every lesson, celebrating improvement as much as athletic achievement. She tracks her students’ progress, cheers them on at track meets, and inspires everyone to give their best. She always seems especially invested when her students take to the track, offering the kind of encouragement that comes from knowing exactly what it takes to cross the finish line."
  }
};
