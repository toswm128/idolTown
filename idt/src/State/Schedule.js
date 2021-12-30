import { atom } from "recoil";

export const Schedule = atom({ key: "iDolSchedule", default: [] });

export const Level = atom({
  key: "ScheduleLevel",
  default: 2, //128강 기준
});

export const Counter = atom({
  key: "ScheduleCounter",
  default: 0,
});

export const NextLevelList = atom({
  key: "nextLevelList",
  default: [],
});

export const Winner = atom({
  key: "winner",
  default: "",
});

export const RankingList = atom({
  key: "rankingList",
  default: [],
});
