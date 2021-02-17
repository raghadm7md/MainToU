import React, { Component } from "react";
import { Card, Button, Col, Row } from "antd";

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: this.props.info,
    };
  }

  deleteAppointment = (index) => {
    // logic error we will delete it from DB 
    let appointment = this.state.appointment;
    appointment.splice(index, 1);
    this.setState({ appointment: appointment });
  };

  addAppointment = () => {

};

  render() {
    console.log(this.props.info);
    console.log(this.state.appointment);
    const appointment = this.state.appointment.map((element, index) => {
      return (
        <Card style={{ width: 300 }}>
          <p>{element.title}</p>
          <p>{element.date}</p>
          <p>{element.time}</p>
          <p>{element.tech_man}</p>
          <Button>Track</Button>
          <Button>Edit</Button>
          <Button
            variant="outline-primary"
            onClick={(event) => {
              this.deleteAppointment(event, index);
            }}
          >
            Delet
          </Button>
        </Card>
      );
    });

    return (
      <div>
        <h1>hi from profile</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
              {appointment}
          </Row>
        </div>
        <button onClick={this.addAppointment}>add appointment</button>
      </div>
    );
  }
}
