import React from "react";
import { ReactComponent as TeamBanner } from "../../images/Team.svg";
import TeamBG from "../../images/TeamBG.svg";

function Team() {
  return (
    <div
      className="container Goalsrow "
      style={{
        background: `url(${TeamBG})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="column-44">
          <TeamBanner />
        </div>
        <div className="column-33 ">
          <div className="teamContent">
            <h1 className="large-font">
              <b>Our Team</b>
            </h1>
            <p>
              <span className="firstBlock">
                {" "}
                The team at MainToU shares the vision and values of our
                community. We’re driven by the idea that the best work is born
                from collaboration, craftsmanship, and passion. created with
                care, and love to be the first place to go once an
                issue occurred, to help those who suffer from finding the best
                technical man by Abeer Albawardi, Amani Alosaimi, Aseel Alqasem,
                Raghad Abo Mansour and Hind Alzahrani at SEI-14.
              </span>
            </p>
          </div>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default Team;
