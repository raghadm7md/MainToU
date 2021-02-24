import React, { Component, useState } from "react";
import { gettAllAppointment } from "../API/Api";
import Add_appointment from "../forms/Add_appointment";
import About from "../mainComponents/About";
import AppointsCard from "./AppointmentsCard/AppointsCard";
import Track from "./AppointmentsCard/Track";
import StarRating from "./AppointmentsCard/StarRating";
import { Row, Col , Divider} from "antd";



class UpComAppoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments:[]
    };
  }
  componentDidMount() {
    // ************** add id client */
    gettAllAppointment("603207f9ade428091d3ff365")
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ Appointments: response.data.app_id});
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }
  render(){
//     date: "Wed Jan 01 2020 03:00:00 GMT+0300 (Arabian Standard Time)"
// description: " hor air"
// isComplate: false
// rate: 0
// time: "9:00 am"
// title: "fix AC"
    console.log(this.state.Appointments)
     const cards =this.state.Appointments.map((element, index) => {
        // console.log(this.state.Appointments.app_id[index]);
        return (
          <AppointsCard
          title={element.title}
          description={element.description}
          />
        );
      });
    return (
      <div>
        <div>
          <Row>
            <Divider>
              <h2>Appointments</h2>
            </Divider>
          </Row>
        </div>
        <Row>
            <Col>
              <Add_appointment />
            </Col>
          </Row>
        <Row>
          {cards}
        </Row>
        <Track/>
        <StarRating/>
      </div>
    );
  }
}

export default UpComAppoints;
