import React, { Component, useState } from "react";
import { Card, Col, Row, Divider, Tooltip , Popconfirm} from "antd";
import { deleteAppointment } from "../../API/Api";
import { Route, Link } from "react-router-dom";
import Add_appointment from "../../forms/Add_appointment";
import Star from "./StarRating";
import Track from "./Track";
import Trash from '../Trash'
import {
  EditOutlined,
  NodeIndexOutlined,
  DeleteOutlined,
  CalendarOutlined,
  StarOutlined,
} from "@ant-design/icons";
import moveToTrash from "./moveToTrash";
const { Meta } = Card;
// class component for display a card
class AppointsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments:[],
      show:false
    };
  }
  orderInfo =(info)=>{

    this.setState({ order: [...this.state.order, info] });
  
    // console.log("hi from order", info)
  
  }
   handleDelete = (key) => {
    //datasource.title
    console.log(key)
    // setData(dataSource.filter((item) => item._id !== key));
    console.log("hiiii", key._id);
    // let arr=[]
    // arr.push(key)
    this.setState({Appointments :[...this.state.Appointments , key]})
    deleteAppointment(key._id)
      .then((response) => {
        console.log("Deleted Succcfully !!!!!!!!", response);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };
  // let [showTrack, setshowTrack] = useState("");
  render() {
    console.log(this.state.Appointments)
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
                  description={`${this.props.description} \n ${this.props.time}`}
                />
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
        {this.state.show ? <Trash array={this.state.Appointments}></Trash>: null}
        <moveToTrash array={this.state.Appointments}></moveToTrash>
      </div>
    );
  }
}

export default AppointsCard;