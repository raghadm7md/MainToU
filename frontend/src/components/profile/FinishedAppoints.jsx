import React, { Component } from "react";
import { TrashAppointments } from "../API/Api";
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
    TrashAppointments("603207f9ade428091d3ff365")
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ Appointments: response.data.app_id });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }

  render() {
    console.log("@@@@", this.state.Appointments);
    const cards = this.state.Appointments.map((element, index) => {
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
    });
    return (
      <div>
        <Row>
          <Divider>
            <h2>Finished Appointments</h2>
          </Divider>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>{cards}</Col>
        </Row>
      </div>
    );
  }
}

export default FinishedAppoints;
