import React from "react";
import { Card } from "antd";
import { ReactComponent as AboutF } from "../../../images/AboutF.svg";
function OurFetures() {
  return (
    <div className="container ourFetures ">
      <div className="row">
        <div className="column-33">
          <AboutF />
        </div>
        <div className="column-66 ">
          <div className="goalsContent">
            <Card
              className="Card-Title"
              title={
                <h2>
                  <b>Our Features</b>
                </h2>
              }
              bordered={false}
              style={{ height: "350px" }}
            >
              <ul className="Card-contatnt">
                <p>
                  <li>
                    With ManiToU, dozens of services from registered and
                    certified companies in the application. When placing your
                    order, the options that suit you are present.
                  </li>
                  <li>
                    MainToU provides the client with maintenance services at the
                    client's premises.
                  </li>
                  <li>
                    All maintenance done through the MainToU is performed by
                    reliable technical men who are professionals in their field.
                    We guarantee a full check of your issues until maintenance
                    that done.
                  </li>
                </p>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFetures;
