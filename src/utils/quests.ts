interface OSRSSkills {
  attack?: number;
  defence?: number;
  strength?: number;
  ranged?: number;
  prayer?: number;
  magic?: number;
  runecrafting?: number;
  construction?: number;

  hitpoints?: number;
  agility?: number;
  herblore?: number;
  thieving?: number;
  crafting?: number;
  fletching?: number;
  slayer?: number;
  hunter?: number;

  mining?: number;
  smithing?: number;
  fishing?: number;
  cooking?: number;
  firemaking?: number;
  woodcutting?: number;
  farming?: number;
}
export interface OSRSQuests {
  [key: string]: {
    fullName: string;
    builderName: string;
    completion?: {
      questPoints: number;
      lamp: boolean;
    };
    requirements: {
      skills: OSRSSkills;
      questPoints: number;
      questsCompleted: string[];
      itemsRequired: string[];
    };
  };
}
export const OSRSQuests: OSRSQuests = {
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
    fullName: "Bar Crawl",
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
    fullName: "Black Knight's Fortress",
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
    fullName: "Depths of Despair",
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
    fullName: "Dorics Quest",
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
  dwarfcanon: {
    fullName: "Dwarf Cannon",
    builderName: "dwarfcanon",
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
    fullName: "Fremennik Trials",
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
    fullName: "The Holy Grail",
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
    fullName: "The Itchy Helper",
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
  knightsword: {
    fullName: "The Knight's Sword",
    builderName: "knightsword",
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
    fullName: "Monkey Madness II",
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
    fullName: "The Observatory Quest",
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
    fullName: "Porcine of Interest",
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
    fullName: "Recipe for Disaster - Goblin subquest",
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
    fullName: "Recipe for Disaster - Start",
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
    fullName: "Search for My Reque",
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
    fullName: "Tai Bait Riots",
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
    fullName: "Temple of Eye",
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
    fullName: "Tourist Trap",
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
    fullName: "Vampire Slayer",
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
    fullName: "The Witch's House",
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
    fullName: "Mepone I",
    builderName: "mepone",
    requirements: {
      skills: {},
      questPoints: 4,
      questsCompleted: ["Roving Elves"],
      itemsRequired: ["Map", "Coins"],
    },
  },
  meptwo: {
    fullName: "Mepone II",
    builderName: "meptwo",
    requirements: {
      skills: {},
      questPoints: 5,
      questsCompleted: ["Mepone I"],
      itemsRequired: ["Item X", "Coins"],
    },
  },
  aidmyreque: {
    fullName: "Aid My Reque",
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
    fullName: "Darkness in the Hallow Vale",
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
    fullName: "Taste of Hope",
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
    fullName: "Recipe for Disaster - Dwarf subquest",
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
    fullName: "Recipe for Disaster - Dave subquest",
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
    fullName: "Recipe for Disaster - Guide subquest",
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
    fullName: "Recipe for Disaster - Pete subquest",
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
    fullName: "Recipe for Disaster - Skrach subquest",
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
    fullName: "Recipe for Disaster - Monkey subquest",
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

export default OSRSQuests;
