import React, { Component, useState } from "react";
import { Card, Col, Row, Divider, Tooltip } from "antd";
import { Route, Link } from "react-router-dom";
import Add_appointment from "../../forms/Add_appointment";
import Star from "./StarRating";
import Track from "./Track";
import {
  EditOutlined,
  NodeIndexOutlined,
  DeleteOutlined,
  CalendarOutlined,
  StarOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
// class component for display a card 
class  AppointsCard extends Component {
  // let [showTrack, setshowTrack] = useState("");
  render(){
    return (
      <div>
        <div>
          <Row gutter={[16, 16]}>
            <Col>
              <Card
                style={{ width: 300 }}
                actions={[
                  <Tooltip placement="bottom" title="Track">
                    <NodeIndexOutlined
                      className="appointsIco"
                      key="track"
                      // onClick={setshowTrack(true)}
                    />
                    {/* {showTrack && <Track />} */}
                  </Tooltip>,
                  // <Tooltip placement="bottom" title="Edit">
                  //   <EditOutlined className="appointsIco" key="edit" />
                  // </Tooltip>,
                  <Tooltip placement="bottom" title="Delete">
                    <DeleteOutlined className="appointsIco" key="delete" />
                  </Tooltip>,
                  // <Tooltip placement="bottom" title="Rate">
                  //   <Star />
                  //   <StarOutlined className="appointsIco" key="Rate" />
                  // </Tooltip>,
                ]}
              >
                <Meta
                  avatar={<CalendarOutlined className="AppAvatar" />}
                  title={this.props.title}
                  description={this.props.description}
                />
              </Card>
            </Col>
            <Col>
              {/* <Card
                style={{ width: 300 }}
                actions={[
                  <Tooltip placement="bottom" title="Track">
                    <NodeIndexOutlined key="track" />
                  </Tooltip>,
                  // <Tooltip placement="bottom" title="Edit">
                  //   <EditOutlined key="edit" />
                  // </Tooltip>,
                  <Tooltip placement="bottom" title="Delete">
                    <DeleteOutlined key="delete" />
                  </Tooltip>,
                  // <Tooltip placement="bottom" title="Rate">
                  //   <StarOutlined key="Rate" />
                  // </Tooltip>,
                ]}
              >
                <Meta
                  avatar={<CalendarOutlined className="AppAvatar" />}
                  title="Appointment 1"
                  description="fixing network connection"
                />
              </Card> */}
            </Col>
          </Row>
        </div>
    </div>
    );

  }
  
}

export default AppointsCard;
