import React, { Component } from "react";
import {
  Descriptions,
  Card,
  Form,
  Input,
  Modal,
  Button,
  Row,
  Col,
  Divider,
} from "antd";
import { getClientInfo } from "../API/Api";

export default class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      clientInfo: "",
    };
  }

  componentDidMount() {
    //************** add id client */
    getClientInfo("603203a5429aef07027269d9")
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ clientInfo: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }

  show = () => {
    this.setState({ showInput: true });
  };

  hide = () => {
    this.setState({ showInput: false });
  };

  render() {
    return (
      <div>
        <Form name="nest-messages" style={{ width: 600 }}>
          <Form.Item name={"companyName"} label="Company name:">
            {this.state.clientInfo.companyName}
            {this.state.showInput ? <Input /> : null}
          </Form.Item>
          <Form.Item name={"address"} label="Address:">
            {this.state.clientInfo.address}
            {this.state.showInput ? <Input /> : null}
          </Form.Item>
          <Form.Item name={"email"} label="Email:">
            {this.state.clientInfo.email}
            {this.state.showInput ? <Input /> : null}
          </Form.Item>
          <Form.Item name={"phoneNumber"} label="phoneNumber:">
            {this.state.clientInfo.phoneNumber}
            {this.state.showInput ? <Input /> : null}
          </Form.Item>
            {this.state.showInput ? <Button onClick={this.hide}>save</Button> :  <Button onClick={this.show}>Edit</Button>}
        </Form>
      </div>
    );
  }
}
