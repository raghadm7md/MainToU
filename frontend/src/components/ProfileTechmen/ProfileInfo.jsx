import React, { Component } from "react";
import { Form, Input, Button, Table, Col, Row, Divider, Space } from "antd";
import { getClientInfo, updateClientInfo , currentUser} from "../API/Api";
import { EditOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;
export default class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      Inputname: false,
      Inputaddress: false,
      Inputemail: false,
      InputphoneNumber: false,
      clientInfo: "",
      companyName: "",
      address: "",
      email: "",
      phoneNumber: "",
    };
  }
  componentDidMount() {
    // ************** add id client */
    getClientInfo(currentUser._id)
      .then((response) => {
        console.log("DATA: ", response.data);
        this.setState({ clientInfo: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }
  show = () => {
    this.setState({ showButton: true });
  };
  hide = () => {
    this.setState({ showButton: false });
    this.setState({ Inputname: false });
    this.setState({ Inputaddress: false });
    this.setState({ Inputemail: false });
    this.setState({ InputphoneNumber: false });
    const info = this.state.clientInfo;
    const newInfo = {
      companyName: this.state.companyName
        ? this.state.companyName
        : info.companyName,
      address: this.state.address ? this.state.address : info.address,
      email: this.state.email ? this.state.email : info.email,
      phoneNumber: this.state.phoneNumber
        ? this.state.phoneNumber
        : info.phoneNumber,
    };
    updateClientInfo(newInfo, currentUser._id)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    window.location.reload(false);
  };
  Editname = () => {
    console.log();
    this.setState({ Inputname: true });
  };
  Editaddress = () => {
    console.log();
    this.setState({ Inputaddress: true });
  };
  Editemail = () => {
    console.log();
    this.setState({ Inputemail: true });
  };
  EditphoneNumber = () => {
    console.log();
    this.setState({ InputphoneNumber: true });
  };
  render() {
    console.log(currentUser.email)
    return (
      <div>
        <Row>
          <Divider>
            <h2>Your Information</h2>
          </Divider>
        </Row>
        <Form name="nest-messages" style={{ width: 300 }}>
          <Form.Item name="companyName" label="Company name:">
            {this.state.clientInfo.companyName}
            {this.state.showButton ? (
              <EditOutlined onClick={this.Editname}></EditOutlined>
            ) : null}
            {this.state.Inputname ? (
              <Input
                onChange={(event) => {
                  this.setState({ companyName: event.target.value });
                }}
              />
            ) : null}
          </Form.Item>
          <Form.Item name="address" label="Address:">
            {this.state.clientInfo.address}
            {this.state.showButton ? (
              <EditOutlined onClick={this.Editaddress}></EditOutlined>
            ) : null}
            {this.state.Inputaddress ? (
              <Input
                onChange={(event) => {
                  this.setState({ address: event.target.value });
                }}
              />
            ) : null}
          </Form.Item>
          <Form.Item name="email" label="Email:">
            {this.state.clientInfo.email}
            {this.state.showButton ? (
              <EditOutlined onClick={this.Editemail}></EditOutlined>
            ) : null}
            {this.state.Inputemail ? (
              <Input
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            ) : null}
          </Form.Item>
          <Form.Item name="phoneNumber" label="phoneNumber:">
            {this.state.clientInfo.phoneNumber}
            {this.state.showButton ? (
              <EditOutlined onClick={this.EditphoneNumber}></EditOutlined>
            ) : null}
            {this.state.InputphoneNumber ? (
              <Input
                onChange={(event) => {
                  this.setState({ phoneNumber: event.target.value });
                }}
              />
            ) : null}
          </Form.Item>
          {this.state.showButton ? (
            <Button onClick={this.hide}>save</Button>
          ) : (
            <Button onClick={this.show}>Edit</Button>
          )}
        </Form>
      </div>
    );
  }
}