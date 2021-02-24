import React, { Component } from 'react'
import { Menu, Layout } from 'antd';
import { Link } from "react-router-dom";
import { ClockCircleOutlined , DeleteOutlined  , CheckOutlined  ,UserOutlined } from '@ant-design/icons';
import "../../App.css";
import Profileinfo from './ProfileInfo'
const { Sider } = Layout;

export default class SideMinue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  show = () => {
    this.setState({ showComponent: true });
    console.log(this.state.showComponent);
  };

  hide = () => {
    this.setState({ showComponent: false });
    console.log(this.state.showComponent);
  };

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
              width:200,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              padding: 0,
              
          }}
      >
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
    
          <Menu.Item key="1" icon={<UserOutlined />} onClick={this.show}>User information </Menu.Item>

          <Menu.Item key="2" icon={<ClockCircleOutlined />}><Link to="upAppoints">Upcoming </Link></Menu.Item>
          <Menu.Item key="3" icon={<CheckOutlined />}> <Link to="finishedAppoints">Completed </Link> </Menu.Item>

          <Menu.Item key="4" icon={<DeleteOutlined />}><Link to="trash">Trash</Link></Menu.Item>
          
      </Menu>
      </Sider>
      </Layout>
    );
    
  }
}
