import { useRecoilState } from "recoil";
import { Schedule, Level, Counter } from "../State/Schedule";
import idolList from "../config/idolLIst.json";

const useSchedule = () => {
  const [schedule, setSchedule] = useRecoilState(Schedule);
  const [level, setLevel] = useRecoilState(Level);
  const [counter, setClunt] = useRecoilState(Counter);

  const makeSchedule = () => {
    setSchedule(idolList.sort(() => 0.5 - Math.random()).slice(0, 128));
  };

  return { makeSchedule, schedule };
};

export default useSchedule;
