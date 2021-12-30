import { useRecoilState } from "recoil";
import {
  Schedule,
  Level,
  Counter,
  NextLevelList,
  Winner,
} from "../State/Schedule";
import idolList from "../config/idolLIst.json";
import axios from "axios";

const useSchedule = () => {
  const [schedule, setSchedule] = useRecoilState(Schedule);
  const [level, setLevel] = useRecoilState(Level);
  const [counter, setCount] = useRecoilState(Counter);
  const [nextLevelList, setNextLevelList] = useRecoilState(NextLevelList);
  const [winner, setWinner] = useRecoilState(Winner);

  const makeSchedule = () => {
    setSchedule(idolList.sort(() => 0.5 - Math.random()).slice(0, 2 ** level));
  };

  const getReadyForTheNextBattle = idol => {
    setCount(counter + 2);
    setNextLevelList([...nextLevelList, idol]);
  };

  const nextLevel = () => {
    if (level !== 0) {
      setCount(0);
      setLevel(level - 1);
      setSchedule(nextLevelList);
      setNextLevelList([]);
    } else return false;
  };

  const winIdol = () => {
    setWinner(schedule[0]);
  };

  const rankIdol = async () => {
    const response = await axios
      .patch(`http://172.16.6.159:8080/win`, winner.name)
      .then(() => axios.get(`http://172.16.6.159:8080/rainking`))
      .catch(err => console.log(err));
    console.log(winner);
    console.log(response);
    return response;
  };

  return {
    makeSchedule,
    schedule,
    getReadyForTheNextBattle,
    counter,
    level,
    nextLevel,
    winIdol,
    rankIdol,
  };
};

export default useSchedule;
