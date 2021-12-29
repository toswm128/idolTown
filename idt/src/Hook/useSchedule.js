import { useRecoilState } from "recoil";
import { Schedule, Level, Counter, NextLevelList } from "../State/Schedule";
import idolList from "../config/idolLIst.json";

const useSchedule = () => {
  const [schedule, setSchedule] = useRecoilState(Schedule);
  const [level, setLevel] = useRecoilState(Level);
  const [counter, setCount] = useRecoilState(Counter);
  const [nextLevelList, setNextLevelList] = useRecoilState(NextLevelList);

  const makeSchedule = () => {
    setSchedule(idolList.sort(() => 0.5 - Math.random()).slice(0, 128));
  };

  const getReadyForTheNextBattle = idol => {
    setCount(counter + 2);
    setNextLevelList([...nextLevelList, idol]);
  };

  const nextLevel = () => {
    if (level != 0) {
      setCount(0);
      setLevel(level - 1);
      setSchedule(nextLevelList);
      setNextLevelList([]);
    } else return false;
  };

  return {
    makeSchedule,
    schedule,
    getReadyForTheNextBattle,
    counter,
    level,
    nextLevel,
  };
};

export default useSchedule;
