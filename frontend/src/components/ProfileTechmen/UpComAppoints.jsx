import React from "react";
import Add_appointment from "../forms/Add_appointment";
import About from "../mainComponents/About";
import AppointsCard from "./AppointmentsCard/AppointsCard";
import Track from "./AppointmentsCard/Track";
import StarRating from "./AppointmentsCard/StarRating";
import { Row, Col } from "antd";
function UpComAppoints() {
  return (
    <div>
      <Row>
        <Col>
          <AppointsCard />
        </Col>
        {/* <Add_appointment /> */}
      </Row>
      {/* <Add_appointment/> */}
      {/* <Track/> */}
      {/* <StarRating/> */}
    </div>
  );
}

export default UpComAppoints;
