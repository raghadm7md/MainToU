import React, { Component } from "react";
import { TrashAppointments , currentUser} from "../API/Api";
import { Row, Divider, Card, Col, Tooltip } from "antd";
import Star from "./AppointmentsCard/StarRating";
import {
  EditOutlined,
  NodeIndexOutlined,
  DeleteOutlined,
  CalendarOutlined,
  StarOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

class FinishedAppoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments: [],
    };
  }

  componentDidMount() {
    // ************** add id client */
    TrashAppointments(currentUser._id)
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ Appointments: response.data.app_id });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });

  }

  render() {
    console.log(currentUser._id)
    console.log(currentUser)
    console.log("@@@@", this.state.Appointments);
    return (
      <div>
        <Row>
          <Divider>
            <h2>Finished Appointments</h2>
          </Divider>
        </Row>

        <Row>
          {this.state.Appointments.length==0 ? <h2> No Appointments yet</h2> : this.state.Appointments.map((element, index) => {
      return (
        <Card style={{ width: 300 }}
        actions={[
          <Tooltip placement="bottom" title="Rate">
            <Star />
          </Tooltip>
        ]}
        >
          <Meta
            avatar={<CalendarOutlined className="AppAvatar" />}
            title={element.title}
            description={element.description}
          />
        </Card>
      );
    })} 

        </Row>
      </div>
    );
  }
}

export default FinishedAppoints;
