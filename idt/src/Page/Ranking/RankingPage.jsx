import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import idolList from "../../config/idolLIst.json";
import useSchedule from "../../Hook/useSchedule";
import { RankingContainer, RankingListComponents } from "./RankingPage.styled";

const RankingPage = () => {
  const { winner, ranking } = useSchedule();
  console.log(ranking);
  return (
    <RankingContainer>
      <div className="winner">
        <img src={winner.src} alt="" />
        <div>{winner.name}</div>
        <button>
          <a href="/battle">다시하기</a>
        </button>
      </div>

      <RankingListComponents>
        {ranking.map((rank, key) => (
          <div className="item">
            <div className="id">{key + 1}</div>
            <img src={rank.imgUrl} alt="" />
            <div className="name">{rank.name}</div>
            <div className="point">{rank.point}</div>
          </div>
        ))}
      </RankingListComponents>
    </RankingContainer>
  );
};

export default RankingPage;
