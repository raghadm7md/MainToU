import React, { useState } from "react";
import { Form, Input, Modal, Button, Select, DatePicker, Radio , Group} from "antd";
import { addNewAppointment , booked } from "../API/Api";
// import moment from "moment";
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
let selectedDate = "";
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
            values.date = selectedDate;
            values.time+=values.radio_group
            console.log("bla bla", values);
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
            <Option value=" company 1">company 1</Option>
            <Option value="company 2">company 2</Option>
            <Option value="company 3">company 3</Option>
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
          <DatePicker
            style={{ width: "50%" }}
            onChange={(date, dateString) => {
              selectedDate = dateString;
            }}
          />
        </Form.Item>
        <Form.Item name={"time"} label="time: ">
          <Input placeholder='Ex: 9:00'/>
          </Form.Item>
          <Form.Item name="radio_group" label="Chose: ">
            <Radio.Group>
              <Radio value="am">am</Radio>
              <Radio value="pm">pm</Radio>
            </Radio.Group>
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
        console.log("response", response.data);
        console.log("response", response.data._id);
        booked("603207f9ade428091d3ff365",response.data._id)
        .then((response) => {
          console.log("Added appointments");

        }).catch((error) => {
        console.log("API ERROR:", error);
      });

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
