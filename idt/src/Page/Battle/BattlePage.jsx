import React, { useEffect } from "react";
import useSchedule from "../../Hook/useSchedule";
import Idol from "../../Components/Idol/Idol";
import { BattlePageContainer, Schedule } from "./BattlePage.styled";
import Round from "../../Components/Round/Round";

const BattlePage = () => {
  const {
    makeSchedule,
    schedule,
    counter,
    getReadyForTheNextBattle,
    nextLevel,
  } = useSchedule();

  useEffect(() => {
    makeSchedule();
  }, []);
  useEffect(() => {
    if ((schedule.length <= counter) & (schedule.length != 0)) {
      nextLevel();
    }
  }, [counter]);

  return (
    <BattlePageContainer>
      <Round />
      {schedule[counter + 1] && (
        <Schedule>
          <Idol info={schedule[counter]} gRFTNB={getReadyForTheNextBattle} />
          <Idol
            info={schedule[counter + 1]}
            gRFTNB={getReadyForTheNextBattle}
          />
        </Schedule>
      )}
    </BattlePageContainer>
  );
};

export default BattlePage;
