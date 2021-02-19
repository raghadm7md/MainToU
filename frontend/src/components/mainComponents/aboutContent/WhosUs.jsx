import React from "react";
import { Card } from "antd";
import { ReactComponent as AboutV } from "../../../images/AboutV.svg";
function WhosUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <Card
            className="Card-Title"
            title={
              <h1 className="large-font">
                <b>Who's MainToU?</b>
              </h1>
            }
            bordered={false}
            style={{ height: "350px" }}
          >
            <p className="Card-contatnt">
              MainToU is the first place to go once a tech issue occurred, it
              will help any company of any industry that faced a the technical
              issue to find the appropriate maintained company, easily book an
              available appointment from the appointments calendar, and edit,
              cancel the booked appointment, with the ability to track the
              appointment status whether it’s confirmed, in progress or finished
              to be aware of any changes, MainToU cares, strives to help, to be
              the bridge for solving your issues.
            </p>
          </Card>
          <br />
          <br />
        </div>
        <div className="column-33">
          <AboutV />
        </div>
      </div>
    </div>

    
  );
}

export default WhosUs;
