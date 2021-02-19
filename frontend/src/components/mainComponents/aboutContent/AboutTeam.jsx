import React from "react";
import { Col, Row, Card } from "antd";
import { ReactComponent as AboutT } from "../../../images/AboutT.svg";
function AboutTeam() {
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <Card
            className="Card-Title"
            title={
              <h2>
                <b>Meet The Team</b>
              </h2>
            }
            bordered={false}
            style={{ height: "350px" }}
          >
            <ul className="Card-contatnt">
              <p>
                <li>Abeer Albawardi</li>
                <li>Assel Alqasem</li>
                <li>Amani Alosaimi</li>
                <li>Raghad Abu Mansour</li>
                <li>Hind Alzahrani</li>
              </p>
            </ul>
          </Card>
        </div>
        <div className="column-33">
          <AboutT />
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
