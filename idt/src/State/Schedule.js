import { atom } from "recoil";

export const Schedule = atom({ key: "iDolSchedule", default: [] });

export const Level = atom({
  key: "ScheduleLevel",
  default: 7, //128강 기준
});

export const Counter = atom({
  key: "ScheduleCounter",
  default: 0,
});

export const NextLevelList = atom({
  key: "nextLevelList",
  default: [],
});
