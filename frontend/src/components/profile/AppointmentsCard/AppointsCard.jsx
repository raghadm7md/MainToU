import React, { Component, useState } from "react";
import { Card, Col, Row, Divider, Tooltip , Popconfirm} from "antd";
import { deleteAppointment } from "../../API/Api";
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
import Trash from "../Trash";
import moveToTrash from "./moveToTrash";
const { Meta } = Card;
// class component for display a card
let temp=''
class AppointsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments:[]
    };
  }

   handleDelete = (key) => {
    //datasource.title
    console.log(key)
    // setData(dataSource.filter((item) => item._id !== key));
    console.log("hiiii", key._id);
    this.setState({Appointments :key})
     temp=this.state.Appointments
    // deleteAppointment(key)
    //   .then((response) => {
    //     console.log("Deleted Succcfully !!!!!!!!", response);
    //   })
    //   .catch((error) => {
    //     console.log("API ERROR:", error);
    //   });
  };
  // let [showTrack, setshowTrack] = useState("");
  render() {
    console.log(this.state.Appointments)
    console.log(temp)
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
                  <Tooltip placement="bottom" title="Delete">
                    {/* <DeleteOutlined className="appointsIco" key="delete" /> */}
                    <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => this.handleDelete(this.props.delete)}
                  >
                    <a>
                      <DeleteOutlined className="edit" />
                    </a>
                  </Popconfirm>
                  </Tooltip>,
                ]}
              >
                <Meta
                  avatar={<CalendarOutlined className="AppAvatar" />}
                  title={this.props.title}
                  description={this.props.description}
                />
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <moveToTrash array={this.state.Appointments}></moveToTrash>
        </div>
      </div>
    );
  }
}

export default AppointsCard;