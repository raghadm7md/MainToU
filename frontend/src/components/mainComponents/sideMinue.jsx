import React, { Component } from 'react'
import { Menu } from 'antd';
import { ClockCircleOutlined , DeleteOutlined  , StarOutlined ,UserOutlined } from '@ant-design/icons';
import "../../App.css";
export default class sideMinue extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
    
          <Menu.Item key="1"> <UserOutlined /> User infornation</Menu.Item>
          <Menu.Item key="2"><ClockCircleOutlined /> All Appointments</Menu.Item>
          <Menu.Item key="3"> <StarOutlined /> Rated</Menu.Item>
          <Menu.Item key="4"><DeleteOutlined />Trach</Menu.Item>
          
      </Menu>
    );
  }
}
