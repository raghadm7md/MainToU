import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Switch,
} from "antd";
const { Option } = Select;
const { TextArea } = Input;

export default class Add_appointment extends Component {
  render() {
    return (
      <div>
        <div className="site-input-group-wrapper">
          <Form.Item>
            <Select defaultValue="chose a company">
              <Option value="1">company 1</Option>
              <Option value="2">company 2</Option>
              <Option value="2">company 3</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <label>Pic a date</label>
            <br />
            <DatePicker style={{ width: "50%" }} />

            <Switch
              checkedChildren="am"
              unCheckedChildren="pm"
              //   onChange={() => {
              //     setInput(!input);
              //   }}
            />
          </Form.Item>
          <Form.Item>
            <label>What is your issue </label>
            <br />
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
    );
  }
}
