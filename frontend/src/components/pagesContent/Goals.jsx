import React from "react";
import { ReactComponent as GoalsBanner } from "../../images/Goals.svg";
import goalsBG from "../../images/goalsBG.svg";
function Goals() {
  return (
    <div
      className="container Goalsrow "
      style={{
        background: `url(${goalsBG})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="column-33">
          <GoalsBanner />
        </div>
        <div className="column-66 ">
          <div className="goalsContent">
            <h1 className="large-font">
              <b>Goals</b>
            </h1>
            <p>
              <span className="firstBlock">
                {" "}
                MainToU aims to take care and efficiently maintain your asset
                professionally, reduce your time of looking to a reliable
                maintenance company as your time is our priority! to be the
                first to serve those who suffer from tech issues, the leader of
                the field.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
