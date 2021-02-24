import React, { Component } from "react";
import { TrashAppointments } from "../API/Api";
import { Row, Divider, Card, Col, Tooltip } from "antd";
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
      clientInfo: "",
    };
  }

  componentDidMount() {
    // ************** add id client */
    TrashAppointments("603207f9ade428091d3ff365")
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ clientInfo: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }

  render() {
    console.log("@@@@", this.state.clientInfo.app_id);

    // const cards = this.state.clientInfo.app_id.map((elem, index) => {
    //   console.log(this.state.clientInfo.app_id[index]);
    //   return (
    //     <Card style={{ width: 300 }}>
    //       <Meta
    //         avatar={<CalendarOutlined className="AppAvatar" />}
    //         title="Appointment 1"
    //         description="fixing network connection"
    //       />
    //     </Card>
    //   );
    // });
    return (
      <div>
        <Row>
          <Divider>
            <h2>Finished Appointments</h2>
          </Divider>
        </Row>
        <Row gutter={[16, 16]}>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default FinishedAppoints;
