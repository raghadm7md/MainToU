import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';

export default class Register extends Component {
    
    render() {
        return (
            <div>
                <Form name="nest-messages">
      <Form.Item
        name={['user', 'name']}
        label="Full name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        label="Username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
       name="phone"
       label="Phone Number"
       rules={[
         {
           required: true,
           message: 'Please input your phone number!',
         },
       ]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'Company Name']} label="Company Name" rules={[
         {
           required: true,
         },
       ]}>
        <Input/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}
