import React, { useState } from "react";
import useSchedule from "../../Hook/useSchedule";
import { IdolContainer } from "./Idol.styled";

const Idol = ({ info, gRFTNB }) => {
  return (
    <IdolContainer onClick={() => gRFTNB(info)}>
      <img src={info.src} alt="" />
      <div>{info.name}</div>
    </IdolContainer>
  );
};

export default Idol;
