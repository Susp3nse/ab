export type AchievementDiaries = {
  [region in AchievementRegion]: {
    [difficulty in AchievementDifficulty]: {
      complete: boolean;
      tasks: boolean[];
    };
  };
};

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

export enum AchievementRegion {
  Ardougne = "Ardougne",
  Kandarin = "Kandarin",
  Karamja = "Karamja",
  LumbridgeDraynor = "Lumbridge & Draynor",
  Morytania = "Morytania",
  Wilderness = "Wilderness",
  Fremennik = "Fremennik",
  Varrock = "Varrock",
  Desert = "Desert",
  Falador = "Falador",
  Taverley = "Taverley",
  SeersVillage = "Seers' Village",
  Tirannwn = "Tirannwn",
  TheAsgarnia = "Asgarnia",
  WesternProvinces = "Western Provinces",
  Miscellania = "Miscellania",
}
export enum AchievementDifficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
  Elite = "Elite",
}

export default WikiUserData;
