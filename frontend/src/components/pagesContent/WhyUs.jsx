import React from "react";
import { ReactComponent as WhyUsBanner } from "../../images/WhyUs.svg";

function WhyUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <h1 className="large-font">
            <b>Why Us?</b>
          </h1>
          <p>
            <span className="firstBlock">
              {" "}
              MainToU is the first place to go once a tech issue occurred,
              easily book your appointment, track it efficiently and fastly!
              with the care of our professional team we can maintain your issues
              in minutes!
            </span>
          </p>
          <br />
          <br />
        </div>
        <div className="column-33">
          <WhyUsBanner />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
