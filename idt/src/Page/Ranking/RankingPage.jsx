import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import idolList from "../../config/idolLIst.json";
import useSchedule from "../../Hook/useSchedule";

const RankingPage = () => {
  const { id } = useParams();
  const { rankIdol } = useSchedule();
  useEffect(() => {
    rankIdol();
  }, []);
  return (
    <div>
      <div>main</div>
      {idolList[id].name}
      <img src={idolList[id].src} alt="" />
    </div>
  );
};

export default RankingPage;
