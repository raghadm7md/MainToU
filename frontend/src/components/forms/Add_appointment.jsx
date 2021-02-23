import React, { useState } from "react";
import { Form, Input, Modal, Button, Select, DatePicker, Switch } from "antd";
import { addNewAppointment } from "../API/Api";
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AppointsCollection = ({ visible, createNewAppoint, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Book a New Appointment:"
      centered
      visible={visible}
      onOk={() =>
        form
          .validateFields()
          .then((values) => {
            console.log("bla bla",values);
            form.resetFields();
            createNewAppoint(values);
          })
          .catch((info) => {
            console.log("Validate Failed!!!!:", info);
          })
      }
      okText="Book"
      onCancel={onCancel}
      htmlType="submit"
    >
      <Form {...layout} form={form} name="nest-messages">
        <Form.Item
          name={"title"}
          label="Tilte:"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Description is required",
            },
          ]}
          name={"description"}
          label="What is your issue? "
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Company Selection is required",
            },
          ]}
          name={"companyName"}
        >
          <Select defaultValue="Choose a Company">
            <Option value="1">company 1</Option>
            <Option value="2">company 2</Option>
            <Option value="2">company 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Date is required",
            },
          ]}
          name={"date"}
          label="Date: "
        >
          {/* <Input /> */}
          <DatePicker style={{ width: "50%" }} defaultValue={moment('2021-01-01', 'YYYY-MM-DD')} />
          <Switch
            checkedChildren="am"
            unCheckedChildren="pm"
            onChange={() => {
              // setInput(!input);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function Add_appointment() {
  const [visible, setVisible] = useState(false);
  const createNewAppoint = async (values) => {
    console.log(values);
    addNewAppointment(values)
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log("API ERROR:", error);
      });

    return setVisible(false);
  };
  return (
    <>
      <Button className="addBtn" onClick={() => setVisible(true)}>
        Book Appointment
      </Button>
      <AppointsCollection
        visible={visible}
        createNewAppoint={createNewAppoint}
        onCancel={() => setVisible(false)}
      />
    </>
  );
}
