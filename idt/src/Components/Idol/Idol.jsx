import React from "react";
import { IdolContainer } from "./Idol.styled";
import { motion } from "framer-motion";

const Idol = ({ info, gRFTNB }) => {
  return (
    <IdolContainer
      onClick={() => {
        setTimeout(() => gRFTNB(info), 1000);
      }}
    >
      <img src={info.src} alt="" />
      <div className="name">{info.name}</div>
    </IdolContainer>
  );
};

export default Idol;
