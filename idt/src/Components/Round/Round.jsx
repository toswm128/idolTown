import React from "react";
import useSchedule from "../../Hook/useSchedule";
import { RoundContainer } from "./Round.styled";

const Round = () => {
  const { level, counter } = useSchedule();
  return (
    <RoundContainer>
      {2 ** level}강 {`${counter + 2}/${2 ** level}`}
    </RoundContainer>
  );
};

export default Round;
