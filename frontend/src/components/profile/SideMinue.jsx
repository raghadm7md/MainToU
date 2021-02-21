import React, { Component } from 'react'
import { Menu, Layout } from 'antd';
import { Link } from "react-router-dom";
import { ClockCircleOutlined , DeleteOutlined  , CheckOutlined  ,UserOutlined } from '@ant-design/icons';
import "../../App.css";
const { Sider } = Layout;

export default class SideMinue extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Layout>
      <Sider theme="light"
          style={{
              overflow: 'auto',
              height: '100vwh',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              padding: 0
          }}
      >
      <Menu
        onClick={this.handleClick}
        style={{ width: 400 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
    
          <Menu.Item key="1" icon={<UserOutlined />}><Link to="profileinfo">User information</Link></Menu.Item>

          <Menu.Item key="2" icon={<ClockCircleOutlined />}><Link to="upAppoints">Upcoming appointments</Link></Menu.Item>
          <Menu.Item key="3" icon={<CheckOutlined />}> <Link to="finishedAppoints">Completed appointments</Link> </Menu.Item>

          <Menu.Item key="4" icon={<DeleteOutlined />}><Link to="trash">Trash</Link></Menu.Item>
          
      </Menu>
      </Sider>
      </Layout>
    );
  }
}
