import { AchievementDiaries } from "../interfaces/WikiUserData.js";

enum OSRSSkills {
  Attack = "attack",
  Defence = "defence",
  Strength = "strength",
  Ranged = "ranged",
  Prayer = "prayer",
  Magic = "magic",
  Runecrafting = "runecrafting",
  Construction = "construction",
  Hitpoints = "hitpoints",
  Agility = "agility",
  Herblore = "herblore",
  Thieving = "thieving",
  Crafting = "crafting",
  Fletching = "fletching",
  Slayer = "slayer",
  Hunter = "hunter",
  Mining = "mining",
  Smithing = "smithing",
  Fishing = "fishing",
  Cooking = "cooking",
  Firemaking = "firemaking",
  Woodcutting = "woodcutting",
  Farming = "farming",
}

export type OSRSQuests = {
  [questName in OSRSQuestNames]: {
    fullName: string;
    builderName: string;
    completion?: {
      questPoints: number;
      lamp: boolean;
    };
    requirements: {
      skills: {
        [skillName in OSRSSkills]?: number;
      };
      questPoints: number;
      questsCompleted: string[];
      itemsRequired: string[];
    };
  };
};

export enum OSRSQuestNames {
  AnimalMagnetism = "animalmag",
  BarCrawl = "barcrawl",
  BelowIceMountain = "belowicemountain",
  BigChompyBirdHunting = "bigchompybirdhunting",
  Biohazard = "biohazard",
  BlackKnightsFortress = "blackknightfortress",
  BoneVoyage = "bonevoyage",
  ClientOfKourend = "clientkourend",
  CooksAssistant = "cooks",
  CreatureOfFenkenstrain = "creaturefenkenstrain",
  DeathPlateau = "deathplateau",
  DemonSlayer = "demonslayer",
  DepthsOfDespair = "depthsdespair",
  DigSite = "digsite",
  DoricsQuest = "dorics",
  DruidicRitual = "druidicritual",
  DwarfCannon = "dwarfcannon",
  ElementalWorkshopI = "elemworkshopone",
  EnterTheAbyss = "enterabyss",
  ErnestTheChicken = "ernestchicken",
  FightArena = "fightarena",
  FishingContest = "fishcontest",
  FremennikTrials = "fremmytrials",
  GertrudesCat = "gertrudes",
  GhostsAhoy = "ghostsahoy",
  GoblinDiplomacy = "goblindip",
  GrandTree = "grandtree",
  HazeelCult = "hazeelcult",
  HolyGrail = "holygrail",
  HorrorFromTheDeep = "horror",
  ImpCatcher = "impcatcher",
  ItchyHelper = "itchyhelper",
  JunglePotion = "junglepotion",
  KnightsSword = "knightssword",
  LostCity = "lostcity",
  LostTribe = "losttribe",
  MakingHistory = "makinghistory",
  MerlinsCrystal = "merlincrystal",
  MonkeyMadness = "monkeymadness",
  MonkeyMadnessDareo = "monkeymadnessdareo",
  MonksFriend = "monksfriend",
  MountainDaughter = "mountaindaughter",
  MurderMystery = "murdermystery",
  NatureSpirit = "naturespirit",
  Observatory = "observatory",
  OneSmallFavour = "onesmallfavour",
  PiratesTreasure = "piratestreasure",
  PlagueCity = "plaguecity",
  PorcineOfInterest = "porcineofinterest",
  PriestInPeril = "priestperil",
  PrinceAliRescue = "princealirescue",
  QueenOfThieves = "queenthieves",
  RecruitmentDrive = "recruitmentdrive",
  RestlessGhost = "restlessghost",
  RecipeForDisasterGoblin = "rfdgoblin",
  RecipeForDisasterStart = "rfdstart",
  RomeoAndJuliet = "romeojuliet",
  RuneMysteries = "runemysteries",
  ScorpionCatcher = "scorpioncatcher",
  SearchForMyReque = "searchofmyreque",
  SeaSlug = "seaslug",
  ShadowOfTheStorm = "shadowstorm",
  SheepShearer = "sheepshearer",
  ShiloVillage = "shilovillage",
  SleepingGiants = "sleepinggiants",
  TaiBaitRiots = "taibaitrio",
  ATailOfTwoCats = "tailoftwocats",
  TempleOfEye = "templeeye",
  TheFeud = "thefeud",
  TheGolem = "thegolem",
  TouristTrap = "touristtrap",
  TreeGnomeVillage = "treegnomevillage",
  TribalTotem = "tribaltotem",
  TrollRomance = "trollromance",
  TrollStronghold = "trollstronghold",
  UndergroundPass = "ugpass",
  VampireSlayer = "vampireslayer",
  VarrockMuseum = "varrockmuseum",
  Wanted = "wanted",
  WaterfallQuest = "waterfall",
  TheWitchsHouse = "witchshouse",
  WitchsPotion = "witchspotion",
  XMarksTheSpot = "xmarks",
  ZogreFleshEaters = "zogreflesheaters",
  ChildrenOfTheSun = "childrensun",
  Contact = "contact",
  SheepHerder = "sheepherder",
  Regicide = "regicide",
  RovingElves = "rovingelves",
  MeponeI = "mepone",
  MeponeII = "meptwo",
  AidMyReque = "aidmyreque",
  DarknessInTheHallowVale = "darknesshallowvale",
  TasteOfHope = "tastehope",
  TempleOfIkov = "templeikov",
  DesertTreasureI = "deserttreasureone",
  EnlightenedJourney = "enlightenedjourney",
  Watchtower = "watchtower",
  RecipeForDisasterDwarf = "rfddwarf",
  RecipeForDisasterDave = "rfddave",
  RecipeForDisasterGuide = "rfdguide",
  RecipeForDisasterPete = "rfdpete",
  RecipeForDisasterSkrach = "rfdskrach",
  RecipeForDisasterMonkey = "rfdmonkey",
}

export interface WikiUserData {
  username: string;
  timestamp: string;
  quests: {
    [questName: string]: number;
  };
  achievement_diaries: AchievementDiaries;
  levels: {
    [skillName: string]: number;
  };
  music_tracks: {
    [trackName: string]: boolean;
  };
  combat_achievements: number[];
  league_tasks: string[];
}
export const AllWikiQuests = [
  "A Kingdom Divided",
  "A Night at the Theatre",
  "A Porcine of Interest",
  "A Soul's Bane",
  "A Tail of Two Cats",
  "A Taste of Hope",
  "Alfred Grimhand's Barcrawl",
  "Animal Magnetism",
  "Another Slice of H.A.M.",
  "At First Light",
  "Barbarian Training",
  "Bear Your Soul",
  "Below Ice Mountain",
  "Beneath Cursed Sands",
  "Between a Rock...",
  "Bone Voyage",
  "Children of the Sun",
  "Client of Kourend",
  "Cold War",
  "Contact!",
  "Creature of Fenkenstrain",
  "Curse of the Empty Lord",
  "Daddy's Home",
  "Darkness of Hallowvale",
  "Death on the Isle",
  "Death to the Dorgeshuun",
  "Defender of Varrock",
  "Demon Slayer",
  "Desert Treasure I",
  "Desert Treasure II - The Fallen Empire",
  "Devious Minds",
  "Dragon Slayer II",
  "Dream Mentor",
  "Eagles' Peak",
  "Elemental Workshop I",
  "Elemental Workshop II",
  "Enakhra's Lament",
  "Enlightened Journey",
  "Ethically Acquired Antiquities",
  "Fairytale I - Growing Pains",
  "Fairytale II - Cure a Queen",
  "Family Pest",
  "Forgettable Tale...",
  "Garden of Tranquillity",
  "Getting Ahead",
  "Ghosts Ahoy",
  "Goblin Diplomacy",
  "Grim Tales",
  "His Faithful Servants",
  "Hopespear's Will",
  "Horror from the Deep",
  "Icthlarin's Little Helper",
  "In Aid of the Myreque",
  "In Search of Knowledge",
  "Into the Tombs",
  "King's Ransom",
  "Lair of Tarn Razorlor",
  "Land of the Goblins",
  "Lunar Diplomacy",
  "Mage Arena II",
  "Making Friends with My Arm",
  "Making History",
  "Meat and Greet",
  "Misthalin Mystery",
  "Monkey Madness II",
  "Mountain Daughter",
  "Mourning's End Part II",
  "My Arm's Big Adventure",
  "Olaf's Quest",
  "Perilous Moons",
  "Ratcatchers",
  "Recipe for Disaster",
  "Recipe for Disaster - Another Cook's Quest",
  "Recipe for Disaster - Culinaromancer",
  "Recipe for Disaster - Evil Dave",
  "Recipe for Disaster - King Awowogei",
  "Recipe for Disaster - Lumbridge Guide",
  "Recipe for Disaster - Mountain Dwarf",
  "Recipe for Disaster - Pirate Pete",
  "Recipe for Disaster - Sir Amik Varze",
  "Recipe for Disaster - Skrach Uglogwee",
  "Recipe for Disaster - Wartface & Bentnoze",
  "Recruitment Drive",
  "Royal Trouble",
  "Secrets of the North",
  "Shadow of the Storm",
  "Shield of Arrav",
  "Sins of the Father",
  "Skippy and the Mogres",
  "Sleeping Giants",
  "Song of the Elves",
  "Spirits of the Elid",
  "Swan Song",
  "Tale of the Righteous",
  "Tears of Guthix",
  "Temple of the Eye",
  "The Ascent of Arceuus",
  "The Corsair Curse",
  "The Curse of Arrav",
  "The Depths of Despair",
  "The Enchanted Key",
  "The Eyes of Glouphrie",
  "The Feud",
  "The Forsaken Tower",
  "The Fremennik Exiles",
  "The Fremennik Isles",
  "The Frozen Door",
  "The Garden of Death",
  "The General's Shadow",
  "The Giant Dwarf",
  "The Golem",
  "The Hand in the Sand",
  "The Heart of Darkness",
  "The Lost Tribe",
  "The Path of Glouphrie",
  "The Queen of Thieves",
  "The Ribbiting Tale of a Lily Pad Labour Dispute",
  "The Slug Menace",
  "Tower of Life",
  "Twilight's Promise",
  "Wanted!",
  "What Lies Below",
  "While Guthix Sleeps",
  "X Marks the Spot",
  "Zogre Flesh Eaters",
  "Big Chompy Bird Hunting",
  "Biohazard",
  "Black Knights' Fortress",
  "Cabin Fever",
  "Clock Tower",
  "Cook's Assistant",
  "Death Plateau",
  "Doric's Quest",
  "Dragon Slayer I",
  "Druidic Ritual",
  "Dwarf Cannon",
  "Eadgar's Ruse",
  "Enter the Abyss",
  "Ernest the Chicken",
  "Family Crest",
  "Fight Arena",
  "Fishing Contest",
  "Gertrude's Cat",
  "Haunted Mine",
  "Hazeel Cult",
  "Heroes' Quest",
  "Holy Grail",
  "Imp Catcher",
  "In Search of the Myreque",
  "Jungle Potion",
  "Legends' Quest",
  "Lost City",
  "Mage Arena I",
  "Merlin's Crystal",
  "Monk's Friend",
  "Monkey Madness I",
  "Mourning's End Part I",
  "Murder Mystery",
  "Nature Spirit",
  "Observatory Quest",
  "One Small Favour",
  "Pirate's Treasure",
  "Plague City",
  "Priest in Peril",
  "Prince Ali Rescue",
  "Rag and Bone Man I",
  "Rag and Bone Man II",
  "Regicide",
  "Romeo & Juliet",
  "Roving Elves",
  "Rum Deal",
  "Rune Mysteries",
  "Scorpion Catcher",
  "Sea Slug",
  "Shades of Mort'ton",
  "Sheep Herder",
  "Sheep Shearer",
  "Shilo Village",
  "Tai Bwo Wannai Trio",
  "Temple of Ikov",
  "The Dig Site",
  "The Fremennik Trials",
  "The Grand Tree",
  "The Great Brain Robbery",
  "The Knight's Sword",
  "The Restless Ghost",
  "The Tourist Trap",
  "Throne of Miscellania",
  "Tree Gnome Village",
  "Tribal Totem",
  "Troll Romance",
  "Troll Stronghold",
  "Underground Pass",
  "Vampyre Slayer",
  "Watchtower",
  "Waterfall Quest",
  "Witch's House",
  "Witch's Potion",
];
export const allOSRSQuests: OSRSQuests = {
  animalmag: {
    fullName: "Animal Magnetism",
    builderName: "animalmag",
    requirements: {
      skills: {
        attack: 30,
        ranged: 30,
        prayer: 43,
      },
      questPoints: 5,
      questsCompleted: ["Druidic Ritual"],
      itemsRequired: ["Redberry pie", "Iron bars"],
    },
  },
  barcrawl: {
    fullName: "Alfred Grimhand's Barcrawl",
    builderName: "barcrawl",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: [],
    },
  },
  belowicemountain: {
    fullName: "Below Ice Mountain",
    builderName: "belowicemountain",
    requirements: {
      skills: {},
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: [],
    },
  },
  bigchompybirdhunting: {
    fullName: "Big Chompy Bird Hunting",
    builderName: "bigchompybirdhunting",
    requirements: {
      skills: {
        ranged: 30,
      },
      questPoints: 5,
      questsCompleted: ["The Lost Tribe"],
      itemsRequired: ["Big chomp", "Rope"],
    },
  },
  biohazard: {
    fullName: "Biohazard",
    builderName: "biohazard",
    requirements: {
      skills: {
        agility: 30,
      },
      questPoints: 10,
      questsCompleted: ["Plague City"],
      itemsRequired: ["Hazard suit", "Nails", "Hammer"],
    },
  },
  blackknightfortress: {
    fullName: "Black Knights' Fortress",
    builderName: "blackknightfortress",
    requirements: {
      skills: {
        attack: 30,
        defence: 20,
      },
      questPoints: 5,
      questsCompleted: ["Cook's Assistant"],
      itemsRequired: ["Sword", "Shield"],
    },
  },
  bonevoyage: {
    fullName: "Bone Voyage",
    builderName: "bonevoyage",
    requirements: {
      skills: {
        crafting: 34,
        agility: 34,
      },
      questPoints: 10,
      questsCompleted: ["The Dig Site"],
      itemsRequired: ["Shovel", "Lumberjack boots"],
    },
  },
  clientkourend: {
    fullName: "Client of Kourend",
    builderName: "clientkourend",
    requirements: {
      skills: {},
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Kourend favor papers"],
    },
  },
  cooks: {
    fullName: "Cook's Assistant",
    builderName: "cooks",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Flour", "Eggs", "Milk"],
    },
  },
  creaturefenkenstrain: {
    fullName: "Creature of Fenkenstrain",
    builderName: "creaturefenkenstrain",
    requirements: {
      skills: {
        agility: 10,
        strength: 10,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Sledgehammer", "Vials"],
    },
  },
  deathplateau: {
    fullName: "Death Plateau",
    builderName: "deathplateau",
    requirements: {
      skills: {
        strength: 50,
        agility: 10,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Rope", "Cannonball", "Coins"],
    },
  },
  demonslayer: {
    fullName: "Demon Slayer",
    builderName: "demonslayer",
    requirements: {
      skills: {
        attack: 10,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Iron sword", "Bronze shield"],
    },
  },
  depthsdespair: {
    fullName: "The Depths of Despair",
    builderName: "depthsdespair",
    requirements: {
      skills: {},
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Torch", "Waterproof boots"],
    },
  },
  digsite: {
    fullName: "The Dig Site",
    builderName: "digsite",
    requirements: {
      skills: {
        crafting: 20,
      },
      questPoints: 10,
      questsCompleted: ["Cook's Assistant"],
      itemsRequired: ["Pickaxe", "Rope"],
    },
  },
  dorics: {
    fullName: "Doric's Quest",
    builderName: "dorics",
    requirements: {
      skills: {
        mining: 15,
        strength: 15,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Hammer", "Ore"],
    },
  },
  druidicritual: {
    fullName: "Druidic Ritual",
    builderName: "druidicritual",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Herb bag", "Axe"],
    },
  },
  dwarfcannon: {
    fullName: "Dwarf Cannon",
    builderName: "dwarfcannon",
    requirements: {
      skills: {
        ranged: 35,
      },
      questPoints: 10,
      questsCompleted: ["The Knight's Sword"],
      itemsRequired: ["Dwarf cannon parts", "Coins"],
    },
  },
  elemworkshopone: {
    fullName: "Elemental Workshop I",
    builderName: "elemworkshopone",
    requirements: {
      skills: {
        smithing: 30,
        magic: 20,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Iron bars", "Rune essence"],
    },
  },
  enterabyss: {
    fullName: "Enter the Abyss",
    builderName: "enterabyss",
    requirements: {
      skills: {
        magic: 40,
        agility: 30,
      },
      questPoints: 5,
      questsCompleted: ["The Abyssal Realm"],
      itemsRequired: ["Abyssal key", "Amulet of glory"],
    },
  },
  ernestchicken: {
    fullName: "Ernest the Chicken",
    builderName: "ernestchicken",
    requirements: {
      skills: {
        attack: 10,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Ghostspeak amulet", "Chickens"],
    },
  },
  fightarena: {
    fullName: "Fight Arena",
    builderName: "fightarena",
    requirements: {
      skills: {
        attack: 15,
        strength: 14,
      },
      questPoints: 5,
      questsCompleted: ["Cook's Assistant"],
      itemsRequired: ["Sword", "Shield"],
    },
  },
  fishcontest: {
    fullName: "Fishing Contest",
    builderName: "fishcontest",
    requirements: {
      skills: {
        fishing: 10,
        agility: 15,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Fishing net", "Pineapple"],
    },
  },
  fremmytrials: {
    fullName: "The Fremennik Trials",
    builderName: "fremmytrials",
    requirements: {
      skills: {
        attack: 50,
        strength: 50,
        agility: 40,
        prayer: 43,
      },
      questPoints: 10,
      questsCompleted: ["The Fremennik Isles"],
      itemsRequired: ["Fremennik sword", "Cannon"],
    },
  },
  gertrudes: {
    fullName: "Gertrude's Cat",
    builderName: "gertrudes",
    requirements: {
      skills: {
        agility: 10,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Cat food", "Tinderbox"],
    },
  },
  ghostsahoy: {
    fullName: "Ghosts Ahoy",
    builderName: "ghostsahoy",
    requirements: {
      skills: {
        prayer: 35,
        crafting: 25,
      },
      questPoints: 10,
      questsCompleted: ["The Restless Ghost"],
      itemsRequired: ["Ghostspeak amulet", "Ghostly robes"],
    },
  },
  goblindip: {
    fullName: "Goblin Diplomacy",
    builderName: "goblindip",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Goblin armor", "Coins"],
    },
  },
  grandtree: {
    fullName: "The Grand Tree",
    builderName: "grandtree",
    requirements: {
      skills: {
        attack: 25,
        agility: 15,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Dagger", "Hammer"],
    },
  },
  hazeelcult: {
    fullName: "Hazeel Cult",
    builderName: "hazeelcult",
    requirements: {
      skills: {
        prayer: 43,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Hazeel's Amulet", "Tinderbox"],
    },
  },
  holygrail: {
    fullName: "Holy Grail",
    builderName: "holygrail",
    requirements: {
      skills: {
        prayer: 43,
      },
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Sword", "Shield"],
    },
  },
  horror: {
    fullName: "Horror from the Deep",
    builderName: "horror",
    requirements: {
      skills: {
        prayer: 43,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Tinderbox", "Axe", "Herb"],
    },
  },
  impcatcher: {
    fullName: "Imp Catcher",
    builderName: "impcatcher",
    requirements: {
      skills: {
        magic: 10,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Air rune", "Iron Bar"],
    },
  },
  itchyhelper: {
    fullName: "Icthlarin's Little Helper",
    builderName: "itchyhelper",
    requirements: {
      skills: {
        crafting: 30,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Cat food", "Redberry pie"],
    },
  },
  junglepotion: {
    fullName: "Jungle Potion",
    builderName: "junglepotion",
    requirements: {
      skills: {
        crafting: 25,
        agility: 5,
      },
      questPoints: 3,
      questsCompleted: ["Lost City"],
      itemsRequired: ["Jungle herb", "Tar"],
    },
  },
  knightssword: {
    fullName: "The Knight's Sword",
    builderName: "knightssword",
    requirements: {
      skills: {
        mining: 15,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Iron ore", "Sword pieces"],
    },
  },
  lostcity: {
    fullName: "Lost City",
    builderName: "lostcity",
    requirements: {
      skills: {
        crafting: 36,
      },
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Iron bars", "Magic essence"],
    },
  },
  losttribe: {
    fullName: "The Lost Tribe",
    builderName: "losttribe",
    requirements: {
      skills: {
        ranged: 30,
        strength: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Fremennik sword", "Cannon"],
    },
  },
  makinghistory: {
    fullName: "Making History",
    builderName: "makinghistory",
    requirements: {
      skills: {},
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: [],
    },
  },
  merlincrystal: {
    fullName: "Merlin's Crystal",
    builderName: "merlincrystal",
    requirements: {
      skills: {
        magic: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Crystals", "Coins"],
    },
  },
  monkeymadness: {
    fullName: "Monkey Madness I",
    builderName: "monkeymadness",
    requirements: {
      skills: {
        attack: 60,
        agility: 35,
        strength: 60,
        prayer: 43,
      },
      questPoints: 10,
      questsCompleted: ["The Grand Tree", "Fight Arena"],
      itemsRequired: ["Monkey nuts", "Bananas", "Silver key"],
    },
  },
  monkeymadnessdareo: {
    fullName: "Monkey Madness Dareo",
    builderName: "monkeymadnessdareo",
    requirements: {
      skills: {
        attack: 70,
        prayer: 60,
        magic: 55,
      },
      questPoints: 15,
      questsCompleted: ["Monkey Madness I", "Legends' Quest"],
      itemsRequired: ["Monkey talisman", "Super restore potion"],
    },
  },
  monksfriend: {
    fullName: "Monk's Friend",
    builderName: "monksfriend",
    requirements: {
      skills: {
        agility: 15,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Monk's robe", "Rope"],
    },
  },
  mountaindaughter: {
    fullName: "Mountain Daughter",
    builderName: "mountaindaughter",
    requirements: {
      skills: {
        agility: 45,
        strength: 50,
      },
      questPoints: 5,
      questsCompleted: ["Fremennik Trials"],
      itemsRequired: ["Rope", "Fremennik sword"],
    },
  },
  murdermystery: {
    fullName: "Murder Mystery",
    builderName: "murdermystery",
    requirements: {
      skills: {
        agility: 20,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Knife", "Apron", "Crime map"],
    },
  },
  naturespirit: {
    fullName: "Nature Spirit",
    builderName: "naturespirit",
    requirements: {
      skills: {
        prayer: 30,
      },
      questPoints: 5,
      questsCompleted: ["Priest in Peril"],
      itemsRequired: ["Ghostspeak amulet", "Bones"],
    },
  },
  observatory: {
    fullName: "Observatory Quest",
    builderName: "observatory",
    requirements: {
      skills: {
        agility: 25,
        magic: 60,
      },
      questPoints: 5,
      questsCompleted: ["Druidic Ritual", "Horror from the Deep"],
      itemsRequired: ["Glass", "Rope", "Hammer"],
    },
  },
  onesmallfavour: {
    fullName: "One Small Favour",
    builderName: "onesmallfavour",
    requirements: {
      skills: {},
      questPoints: 10,
      questsCompleted: ["Rats in the Ranks", "Rogue Trader", "Clock Tower"],
      itemsRequired: ["Letters", "Coins"],
    },
  },
  piratestreasure: {
    fullName: "Pirate's Treasure",
    builderName: "piratestreasure",
    requirements: {
      skills: {
        agility: 10,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Pirate's hat", "Coins", "Treasure map"],
    },
  },
  plaguecity: {
    fullName: "Plague City",
    builderName: "plaguecity",
    requirements: {
      skills: {
        agility: 25,
        crafting: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Flax", "Potion", "Hammer"],
    },
  },
  porcineofinterest: {
    fullName: "A Porcine of Interest",
    builderName: "porcineofinterest",
    requirements: {
      skills: {
        crafting: 20,
        agility: 10,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Pig meat", "Flour", "Pie dish"],
    },
  },
  priestperil: {
    fullName: "Priest in Peril",
    builderName: "priestperil",
    requirements: {
      skills: {
        prayer: 10,
        agility: 15,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Ghostspeak amulet", "Hammer", "Rope"],
    },
  },
  princealirescue: {
    fullName: "Prince Ali Rescue",
    builderName: "princealirescue",
    requirements: {
      skills: {
        agility: 25,
        thieving: 25,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Feather", "Coins", "Bandana"],
    },
  },
  queenthieves: {
    fullName: "The Queen of Thieves",
    builderName: "queenthieves",
    requirements: {
      skills: {
        agility: 30,
        thieving: 35,
      },
      questPoints: 6,
      questsCompleted: [],
      itemsRequired: ["Thieving Gloves", "Banana", "Feather"],
    },
  },
  recruitmentdrive: {
    fullName: "Recruitment Drive",
    builderName: "recruitmentdrive",
    requirements: {
      skills: {
        agility: 20,
        thieving: 25,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Coins", "Gloves"],
    },
  },
  restlessghost: {
    fullName: "The Restless Ghost",
    builderName: "restlessghost",
    requirements: {
      skills: {
        prayer: 9,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Ghostspeak amulet", "Bones"],
    },
  },
  rfdgoblin: {
    fullName: "Recipe for Disaster - Wartface & Bentnoze",
    builderName: "rfdgoblin",
    requirements: {
      skills: {
        cooking: 5,
      },
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Goblin mail", "Tasty treat"],
    },
  },
  rfdstart: {
    fullName: "Recipe for Disaster - Another Cook's Quest",
    builderName: "rfdstart",
    requirements: {
      skills: {},
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Knife", "Flour", "Cooking pot"],
    },
  },
  romeojuliet: {
    fullName: "Romeo & Juliet",
    builderName: "romeojuliet",
    requirements: {
      skills: {
        agility: 30,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Rose", "Love letter"],
    },
  },
  runemysteries: {
    fullName: "Rune Mysteries",
    builderName: "runemysteries",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Rune essence", "Air talisman"],
    },
  },
  scorpioncatcher: {
    fullName: "Scorpion Catcher",
    builderName: "scorpioncatcher",
    requirements: {
      skills: {
        agility: 20,
        thieving: 25,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Scorpion cage", "Coins", "Feather"],
    },
  },
  searchofmyreque: {
    fullName: "In Search of the Myreque",
    builderName: "searchofmyreque",
    requirements: {
      skills: {
        strength: 20,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Bucket", "Hammer", "Reque's hat"],
    },
  },
  seaslug: {
    fullName: "Sea Slug",
    builderName: "seaslug",
    requirements: {
      skills: {
        fishing: 45,
        agility: 30,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Bucket of sand", "Net"],
    },
  },
  shadowstorm: {
    fullName: "Shadow of the Storm",
    builderName: "shadowstorm",
    requirements: {
      skills: {
        attack: 25,
        magic: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Silver key", "Lantern"],
    },
  },
  sheepshearer: {
    fullName: "Sheep Shearer",
    builderName: "sheepshearer",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Shears", "Wool sack"],
    },
  },
  shilovillage: {
    fullName: "Shilo Village",
    builderName: "shilovillage",
    requirements: {
      skills: {
        agility: 20,
        thieving: 25,
      },
      questPoints: 5,
      questsCompleted: ["Jungle Potion"],
      itemsRequired: ["Coins", "Shilo necklace"],
    },
  },
  sleepinggiants: {
    fullName: "Sleeping Giants",
    builderName: "sleepinggiants",
    requirements: {
      skills: {},
      questPoints: 4,
      questsCompleted: [],
      itemsRequired: ["Giant boots", "Herb", "Ring of Life"],
    },
  },
  taibaitrio: {
    fullName: "Tai Bwo Wannai Trio",
    builderName: "taibaitrio",
    requirements: {
      skills: {
        fishing: 40,
        cooking: 40,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Fishing rod", "Bait", "Food items"],
    },
  },
  tailoftwocats: {
    fullName: "A Tail of Two Cats",
    builderName: "tailoftwocats",
    requirements: {
      skills: {
        agility: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Cat pet", "Catnip"],
    },
  },
  templeeye: {
    fullName: "Temple of the Eye",
    builderName: "templeeye",
    requirements: {
      skills: {},
      questPoints: 6,
      questsCompleted: [],
      itemsRequired: ["Eye amulet", "Torch"],
    },
  },
  thefeud: {
    fullName: "The Feud",
    builderName: "thefeud",
    requirements: {
      skills: {
        thieving: 30,
      },
      questPoints: 4,
      questsCompleted: [],
      itemsRequired: ["Rope", "Coins"],
    },
  },
  thegolem: {
    fullName: "The Golem",
    builderName: "thegolem",
    requirements: {
      skills: {
        crafting: 20,
        magic: 10,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Golem's head", "Golem's body", "Golem's arms"],
    },
  },
  touristtrap: {
    fullName: "The Tourist Trap",
    builderName: "touristtrap",
    requirements: {
      skills: {
        agility: 15,
        thieving: 25,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Crate", "Coins", "Monkey bones"],
    },
  },
  treegnomevillage: {
    fullName: "Tree Gnome Village",
    builderName: "treegnomevillage",
    requirements: {
      skills: {
        attack: 25,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Gnome amulet", "Gnome food", "Coins"],
    },
  },
  tribaltotem: {
    fullName: "Tribal Totem",
    builderName: "tribaltotem",
    requirements: {
      skills: {
        thieving: 20,
        agility: 20,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Totem", "Coins"],
    },
  },
  trollromance: {
    fullName: "Troll Romance",
    builderName: "trollromance",
    requirements: {
      skills: {
        thieving: 10,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Romance scroll", "Coins", "Troll lover's ring"],
    },
  },
  trollstronghold: {
    fullName: "Troll Stronghold",
    builderName: "trollstronghold",
    requirements: {
      skills: {
        attack: 50,
        strength: 50,
      },
      questPoints: 5,
      questsCompleted: ["The Lost Tribe"],
      itemsRequired: ["Ring of life", "Coins"],
    },
  },
  ugpass: {
    fullName: "Underground Pass",
    builderName: "ugpass",
    requirements: {
      skills: {
        agility: 25,
        thieving: 20,
      },
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Rope", "Coins", "Guthix's token"],
    },
  },
  vampireslayer: {
    fullName: "Vampyre Slayer",
    builderName: "vampireslayer",
    requirements: {
      skills: {},
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Stake", "Hammer", "Coins"],
    },
  },
  varrockmuseum: {
    fullName: "Varrock Museum",
    builderName: "varrockmuseum",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Coins", "Museum exhibits"],
    },
  },
  wanted: {
    fullName: "Wanted!",
    builderName: "wanted",
    requirements: {
      skills: {
        thieving: 15,
        agility: 20,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Coins", "Bounty paper", "Rope"],
    },
  },
  waterfall: {
    fullName: "Waterfall Quest",
    builderName: "waterfall",
    requirements: {
      skills: {
        attack: 30,
        strength: 30,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Coins", "Sword", "Spear"],
    },
  },
  witchshouse: {
    fullName: "Witch's House",
    builderName: "witchshouse",
    requirements: {
      skills: {
        hitpoints: 10,
      },
      questPoints: 3,
      questsCompleted: [],
      itemsRequired: ["Witch's broom", "Vile powder"],
    },
  },
  witchspotion: {
    fullName: "Witch's Potion",
    builderName: "witchspotion",
    requirements: {
      skills: {},
      questPoints: 1,
      questsCompleted: [],
      itemsRequired: ["Witch's brew", "Potion ingredients"],
    },
  },
  xmarks: {
    fullName: "X Marks the Spot",
    builderName: "xmarks",
    requirements: {
      skills: {
        thieving: 25,
      },
      questPoints: 2,
      questsCompleted: [],
      itemsRequired: ["Map pieces", "Shovel"],
    },
  },
  zogreflesheaters: {
    fullName: "Zogre Flesh Eaters",
    builderName: "zogreflesheaters",
    requirements: {
      skills: {
        agility: 20,
        thieving: 15,
      },
      questPoints: 3,
      questsCompleted: ["Priest in Peril"],
      itemsRequired: ["Zogre bones", "Meat"],
    },
  },
  childrensun: {
    fullName: "Children of the Sun",
    builderName: "childrensun",
    requirements: {
      skills: {
        prayer: 40,
        crafting: 35,
      },
      questPoints: 5,
      questsCompleted: ["The Restless Ghost"],
      itemsRequired: ["Sun mask", "Sunscreen", "Coins"],
    },
  },
  contact: {
    fullName: "Contact!",
    builderName: "contact",
    requirements: {
      skills: {
        thieving: 65,
        agility: 50,
      },
      questPoints: 7,
      questsCompleted: ["Plague City", "Biohazard"],
      itemsRequired: ["Plague guards' letter", "Coins"],
    },
  },
  sheepherder: {
    fullName: "Sheep Herder",
    builderName: "sheepherder",
    requirements: {
      skills: {
        agility: 40,
        thieving: 20,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Sheepdog", "Whip"],
    },
  },
  regicide: {
    fullName: "Regicide",
    builderName: "regicide",
    requirements: {
      skills: {
        agility: 56,
        attack: 40,
        thieving: 35,
      },
      questPoints: 10,
      questsCompleted: ["Underground Pass"],
      itemsRequired: ["Rope", "Coins", "Guthix's token"],
    },
  },
  rovingelves: {
    fullName: "Roving Elves",
    builderName: "rovingelves",
    requirements: {
      skills: {
        agility: 60,
        thieving: 40,
      },
      questPoints: 6,
      questsCompleted: ["Regicide"],
      itemsRequired: ["Elf mask", "Wooden spear", "Coins"],
    },
  },
  mepone: {
    fullName: "Mourning's End Part I",
    builderName: "mepone",
    requirements: {
      skills: {},
      questPoints: 4,
      questsCompleted: ["Roving Elves"],
      itemsRequired: ["Map", "Coins"],
    },
  },
  meptwo: {
    fullName: "Mourning's End Part II",
    builderName: "meptwo",
    requirements: {
      skills: {},
      questPoints: 5,
      questsCompleted: ["Mepone I"],
      itemsRequired: ["Item X", "Coins"],
    },
  },
  aidmyreque: {
    fullName: "In Aid of the Myreque",
    builderName: "aidmyreque",
    requirements: {
      skills: {
        agility: 40,
        thieving: 25,
      },
      questPoints: 4,
      questsCompleted: [],
      itemsRequired: ["Quest scroll", "Coins"],
    },
  },
  darknesshallowvale: {
    fullName: "Darkness of Hallowvale",
    builderName: "darknesshallowvale",
    requirements: {
      skills: {
        agility: 55,
      },
      questPoints: 5,
      questsCompleted: ["Aid My Reque"],
      itemsRequired: ["Shroud", "Mystic key", "Coins"],
    },
  },
  tastehope: {
    fullName: "A Taste of Hope",
    builderName: "tastehope",
    requirements: {
      skills: {
        agility: 45,
        thieving: 50,
      },
      questPoints: 6,
      questsCompleted: ["Darkness in the Hallow Vale"],
      itemsRequired: ["Hope's key", "Herb"],
    },
  },
  templeikov: {
    fullName: "Temple of Ikov",
    builderName: "templeikov",
    requirements: {
      skills: {
        agility: 56,
        attack: 40,
      },
      questPoints: 5,
      questsCompleted: [],
      itemsRequired: ["Temple key", "Coins", "Rope"],
    },
  },
  deserttreasureone: {
    fullName: "Desert Treasure I",
    builderName: "deserttreasureone",
    requirements: {
      skills: {
        attack: 60,
        magic: 50,
      },
      questPoints: 10,
      questsCompleted: [],
      itemsRequired: ["Silver key", "Coins", "Sceptre of the gods"],
    },
  },
  enlightenedjourney: {
    fullName: "Enlightened Journey",
    builderName: "enlightenedjourney",
    requirements: {
      skills: {
        agility: 60,
        crafting: 40,
      },
      questPoints: 6,
      questsCompleted: [],
      itemsRequired: ["Crate", "Wooden boards", "Rope"],
    },
  },
  watchtower: {
    fullName: "Watchtower",
    builderName: "watchtower",
    requirements: {
      skills: {
        magic: 66,
        construction: 40,
      },
      questPoints: 6,
      questsCompleted: [],
      itemsRequired: ["Watchtower blueprints", "Coins"],
    },
  },
  rfddwarf: {
    fullName: "Recipe for Disaster - Mountain Dwarf",
    builderName: "rfddwarf",
    requirements: {
      skills: {
        cooking: 30,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Dwarven food", "Dwarf's brew"],
    },
  },
  rfdave: {
    fullName: "Recipe for Disaster - Evil Dave",
    builderName: "rfdave",
    requirements: {
      skills: {
        cooking: 20,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Chef's hat", "Dave's food"],
    },
  },
  rfdguide: {
    fullName: "Recipe for Disaster - Lumbridge Guide",
    builderName: "rfdguide",
    requirements: {
      skills: {
        cooking: 30,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Guidebook", "Coins"],
    },
  },
  rfdpete: {
    fullName: "Recipe for Disaster - Pirate Pete",
    builderName: "rfdpete",
    requirements: {
      skills: {
        cooking: 50,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Pete's pizza", "Coins"],
    },
  },
  rfdskrach: {
    fullName: "Recipe for Disaster - Skrach Uglogwee",
    builderName: "rfdskrach",
    requirements: {
      skills: {
        cooking: 60,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Skrach's food", "Coins"],
    },
  },
  rfdmonkey: {
    fullName: "Recipe for Disaster - King Awowogei",
    builderName: "rfdmonkey",
    requirements: {
      skills: {
        cooking: 40,
      },
      questPoints: 0,
      questsCompleted: [],
      itemsRequired: ["Monkey food", "Coins"],
    },
  },
};
export const builderItems = [
  { builderName: "agility", label: "Agility" },
  { builderName: "construction", label: "Construction" },
  { builderName: "cooking", label: "Cooking" },
  { builderName: "crafting", label: "Crafting" },
  { builderName: "farming", label: "Farming" },
  { builderName: "firemaking", label: "Firemaking" },
  { builderName: "fishing", label: "Fishing" },
  { builderName: "fletching", label: "Fletching" },
  { builderName: "herblore", label: "Herblore" },
  { builderName: "hunter", label: "Hunter" },
  { builderName: "mining", label: "Mining" },
  { builderName: "prayer", label: "Prayer" },
  { builderName: "runecrafting", label: "Runecrafting" },
  { builderName: "smithing", label: "Smithing" },
  { builderName: "thieving", label: "Thieving" },
  { builderName: "woodcutting", label: "Woodcutting" },

  { builderName: "magic", label: "Magic" },

  { builderName: "crabattack", label: "Crab Attack" },
  { builderName: "crabstr", label: "Crab Strength" },
  { builderName: "crabdef", label: "Crab Defence" },
  { builderName: "crabrange", label: "Crab Ranged" },
  { builderName: "crablongrange", label: "Crab Long Range" },

  { builderName: "nmzattack", label: "NMZ Attack" },
  { builderName: "nmzstr", label: "NMZ Strength" },
  { builderName: "nmzdef", label: "NMZ Defence" },
  { builderName: "nmzrange", label: "NMZ Ranged" },

  { builderName: "cannonrange", label: "Cannon Range" },

  { builderName: "agilitygnome", label: "Gnome Agility" },
  { builderName: "agilitydraynor", label: "Draynor Agility" },
  { builderName: "agilityvarrock", label: "Varrock Agility" },
  { builderName: "agilitycanifis", label: "Canifis Agility" },
  { builderName: "agilityfalador", label: "Falador Agility" },
  { builderName: "agilityseers", label: "Seers Agility" },
  { builderName: "agilitypolly", label: "Polly Agility" },
  { builderName: "agilityrelleka", label: "Relleka Agility" },
  { builderName: "agilityardy", label: "Ardougne Agility" },

  { builderName: "thievingfruit", label: "Thieving Fruit" },

  { builderName: "ratattack", label: "Rat Attack" },
  { builderName: "ratstr", label: "Rat Strength" },
  { builderName: "ratdef", label: "Rat Defence" },
  { builderName: "ratrange", label: "Rat Ranged" },
  { builderName: "ratlongrange", label: "Rat Long Range" },

  { builderName: "slayattack", label: "Slayer Attack" },
  { builderName: "slaystr", label: "Slayer Strength" },
  { builderName: "slaydef", label: "Slayer Defence" },
  { builderName: "slayrange", label: "Slayer Ranged" },
  { builderName: "slaylongrange", label: "Slayer Long Range" },
];
const generateLevels = (val: { builderName: string; label: string }) => {
  return Array.from({ length: 99 }, (_, i) => ({
    value: `${val.builderName}${i + 1}`,
    label: `${val.builderName}${i + 1}`,
  }));
};
export const skillOptions = builderItems.reduce((pv, cv) => {
  const levels = generateLevels(cv);
  return [...pv, ...levels];
}, new Array<{ value: string; label: string }>());
export const QuestPoints = {
  animalmag: 5,
  barcrawl: 3,
  belowicemountain: 1,
  bigchompybirdhunting: 3,
  biohazard: 1,
  blackknightfortress: 3,
  bonevoyage: 2,
  clientkourend: 1,
  cooks: 1,
  creaturefenkenstrain: 3,
  deathplateau: 1,
  demonslayer: 3,
  depthsdespair: 2,
  digsite: 3,
  dorics: 1,
  druidicritual: 3,
  dwarfcannon: 1,
  elemworkshopone: 2,
  enterabyss: 1,
  ernestchicken: 1,
  fightarena: 2,
  fishcontest: 1,
  fremmytrials: 1,
  gertrudes: 1,
  ghostsahoy: 3,
  goblindip: 1,
  grandtree: 3,
  hazeelcult: 2,
  holygrail: 5,
  horror: 3,
  impcatcher: 1,
  itchyhelper: 1,
  junglepotion: 1,
  knightssword: 2,
  lostcity: 3,
  losttribe: 2,
  makinghistory: 3,
  merlincrystal: 2,
  monkeymadness: 3,
  monkeymadnessdareo: 3,
  monksfriend: 1,
  mountaindaughter: 2,
  murdermystery: 2,
  naturespirit: 3,
  observatory: 3,
  onesmallfavour: 2,
  piratestreasure: 1,
  plaguecity: 1,
  porcineofinterest: 2,
  priestperil: 1,
  princealirescue: 1,
  queenthieves: 3,
  recruitmentdrive: 1,
  restlessghost: 1,
  rfdgoblin: 0,
  rfdstart: 0,
  romeojuliet: 3,
  runemysteries: 1,
  scorpioncatcher: 2,
  searchofmyreque: 2,
  seaslug: 2,
  shadowstorm: 3,
  sheepshearer: 1,
  shilovillage: 3,
  sleepinggiants: 2,
  taibaitrio: 3,
  tailoftwocats: 3,
  templeeye: 3,
  thefeud: 2,
  thegolem: 2,
  touristtrap: 3,
  treegnomevillage: 1,
  tribaltotem: 2,
  trollromance: 1,
  trollstronghold: 2,
  ugpass: 3,
  vampireslayer: 3,
  varrockmuseum: 2,
  wanted: 1,
  waterfall: 3,
  witchshouse: 3,
  witchspotion: 1,
  xmarks: 1,
  zogreflesheaters: 2,

  childrensun: 3,
  contact: 4,
  sheepherder: 2,
  regicide: 5,
  rovingelves: 3,
  mepone: 1,
  meptwo: 1,
  aidmyreque: 2,
  darknesshallowvale: 2,
  tastehope: 2,
  templeikov: 2,
  deserttreasureone: 3,
  enlightenedjourney: 3,
  watchtower: 3,
  rfddwarf: 0,
  rfddave: 0,
  rfdguide: 0,
  rfdpete: 0,
  rfdskrach: 0,
  rfdmonkey: 0,
};

export const elfQuests = {};
export const gnomeQuests = {};
export const basicQuests = {};

export default allOSRSQuests;
