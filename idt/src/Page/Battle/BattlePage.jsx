import React, { useEffect, useState } from "react";
import useSchedule from "../../Hook/useSchedule";
import Idol from "../../Components/Idol/Idol";
import { BattlePageContainer, Schedule } from "./BattlePage.styled";
import Round from "../../Components/Round/Round";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BattlePage = () => {
  const {
    makeSchedule,
    schedule,
    counter,
    getReadyForTheNextBattle,
    nextLevel,
    winIdol,
  } = useSchedule();

  const router = useNavigate();

  useEffect(() => {
    makeSchedule();
  }, []);
  useEffect(() => {
    if ((schedule.length <= counter) & (schedule.length !== 0)) {
      nextLevel();
    }
  }, [counter]);

  useEffect(() => {
    if (schedule.length === 1) {
      router(`/${schedule[0].ranking}`);
      winIdol();
    }
  }, [schedule]);

  const [clickL, setClickL] = useState(false);
  const [clickR, setClickR] = useState(false);

  return (
    <BattlePageContainer>
      <Round />
      {schedule[counter + 1] && (
        <Schedule>
          <motion.div
            animate={clickL ? "move" : clickR ? "run" : "none"}
            variants={{ move: { x: "50%" }, run: { x: "-150%" } }}
            onClick={() => {
              setClickL(true);
              setTimeout(() => setClickL(false), 1000);
            }}
          >
            <Idol info={schedule[counter]} gRFTNB={getReadyForTheNextBattle} />
          </motion.div>
          <motion.div
            animate={clickR ? "move" : clickL ? "run" : "none"}
            variants={{ move: { x: "-50%" }, run: { x: "150%" } }}
            onClick={() => {
              setClickR(true);
              setTimeout(() => setClickR(false), 1000);
            }}
          >
            <Idol
              info={schedule[counter + 1]}
              gRFTNB={getReadyForTheNextBattle}
            />
          </motion.div>
        </Schedule>
      )}
    </BattlePageContainer>
  );
};

export default BattlePage;
