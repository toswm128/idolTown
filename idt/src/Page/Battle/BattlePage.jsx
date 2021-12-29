import React, { useEffect } from "react";
import useSchedule from "../../Hook/useSchedule";

const BattlePage = () => {
  const { makeSchedule, schedule } = useSchedule();

  useEffect(() => {
    makeSchedule();
  }, []);

  return (
    <div>
      <div>battle</div>
      {schedule.map(idol => (
        <div>
          <div>
            {idol.name}:{idol.ranking}
          </div>
          <img src={idol.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BattlePage;
