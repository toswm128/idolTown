import { useRecoilState } from "recoil";
import {
  Schedule,
  Level,
  Counter,
  NextLevelList,
  Winner,
  RankingList,
} from "../State/Schedule";
import idolList from "../config/idolLIst.json";
import axios from "axios";

const useSchedule = () => {
  const [schedule, setSchedule] = useRecoilState(Schedule);
  const [level, setLevel] = useRecoilState(Level);
  const [counter, setCount] = useRecoilState(Counter);
  const [nextLevelList, setNextLevelList] = useRecoilState(NextLevelList);
  const [winner, setWinner] = useRecoilState(Winner);
  const [ranking, setRanking] = useRecoilState(RankingList);

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

  const winIdol = async () => {
    setWinner(schedule[0]);
    const { data } = await axios
      .post(`http://192.168.77.124:8080/win`, { who: schedule[0].name })
      .then(() => axios.get(`http://192.168.77.124:8080/ranking`))
      .catch(err => console.log(err));
    setRanking(data);
    return data;
  };

  return {
    makeSchedule,
    schedule,
    getReadyForTheNextBattle,
    counter,
    level,
    nextLevel,
    winIdol,
    winner,
    ranking,
  };
};

export default useSchedule;
