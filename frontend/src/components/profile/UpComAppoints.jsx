import React, { Component, useState } from "react";
import { gettAllAppointment , currentUser} from "../API/Api";
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

    gettAllAppointment(currentUser._id)
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ Appointments: response.data.app_id});
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }
  render(){
    console.log(currentUser._id)
    console.log(this.state.Appointments)

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
          {this.state.Appointments.length==0 ? <h2> No Appointments yet</h2> : this.state.Appointments.map((item, index) => {
        return (
          <AppointsCard
          title={item.title}
          description={item.description}
          data={item.date}
          time={item.time}
          delete={item}
          />
        );
      })} 
        </Row>
      </div>
    );
  }
}

export default UpComAppoints;