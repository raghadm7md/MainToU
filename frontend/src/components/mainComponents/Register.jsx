import React, { Component } from "react";
import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "../../App.css";
import RegBG from "../../images/RegBg.svg";

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sucsses: false
    }
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
 
    return (
      <>
        <div class="curved-div">
          <h1>Register</h1>
          <p>
            To be one of us, who shares the vision and values of our community
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
     
        <div   
        className="container"
        style={{
          background: `url(${RegBG})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}>
          
        <div className="row regRow">
        <Divider><UserOutlined className="RegIco"/></Divider>
        <div className='register-container'>
          <h1 className="contact-title" >Fill the information below to be one of our clients!</h1>
          <Form
            {...layout}
            name="basic"
          
          >
            <Form.Item
              label={<h4><b>Your Name: </b></h4>}
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
        
            <Form.Item
              label={<h4><b>Your Email: </b></h4>}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<h4><b>Your Password: </b></h4>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label={<h4><b>Confirm Password: </b></h4>}
              name="confirm-password"
              rules={[{ required: true, message: 'Re-enter Password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label={<h4><b>Your Phone number: </b></h4>}
              name="phone"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
              </Form.Item>
            <Form.Item
              label={<h4><b>Adress: </b></h4>}
              name="phone"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="regBtn">
                Register
        </Button>
            </Form.Item>
          </Form>
        </div>
        </div>
      </div>
      </>
    );
  }
}
export default Register;