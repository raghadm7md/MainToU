import './App.css';
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default class AddTechMan extends Component {
    render() {
        return (
            <div>
                {/* <form>
                    <label>
                        Technical man full name:
                    <input type="text" name="name" />
                    </label>
                    <label>
                        Technical man email:
                    <input type="text" name="enail" />
                    </label>
                    <label>
                        Technical man phone number:
                    <input type="text" name="phoneNumber" />
                    </label>
                    <label>
                        Technical man job ID:
                    <input type="text" name="jobID" />
                    </label>

                    <input type="submit" value="Submit" />
                </form> */}
                <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}

    >
      <Form.Item
        label="Technical man full name"
        name="username"
        rules={[{ required: true, message: 'Please input full name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Technical man email"
        name="techManEmail"
        rules={[{ required: true, message: 'Please input email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Technical man phone number"
        name="techManPhoneNumber"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Technical man job ID"
        name="jobID"
        rules={[{ required: true, message: 'Please input job ID!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}
