import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
import {newTechMan  } from '../API/Api';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const TechMenCollection = ({ visible, createNewTechMen, onCancel, projectVisible }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        title="Add New Tech Man:"
        centered
        visible={visible}
        onOk={() => form
          .validateFields()
          .then((values) => {
            form.resetFields();
            createNewTechMen(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
        }
        okText="Add New Tech Man"
        onCancel={onCancel}
        htmlType="submit"
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
        >
          <Form.Item
            name={"fullName"}
            label="Tech Man Name"
            rules={[
              {
                required: true,
                message: "Tech Man Name is Required!"
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"userName"}
            label="Tech Man userName: "
            rules={[
              {
                required : true,
                message: "Tech Man Job ID is Required!"             
               },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Tech Man Email:"
            rules={[
              {
                required : true,
                message: "Tech Man Email is Required!"
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phoneNumber"}
            label="Tech Man Phone: "
            rules={[
              {
                required : true,
                message: "Tech Man Phone Number is Required!"  
              },
            ]}
          >
            <Input />
          </Form.Item>
  
        </Form>
      </Modal>
    )
  }
  export default function NewTechMen (props) {
    const [visible, setVisible] = useState(false)
    const createNewTechMen = async (values) => {
    console.log(values)
      newTechMan(values)
      .then((response) => {
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });   
         return setVisible(false)
    }
    return (
        <>
    
            <Button className="addBtn" onClick={() => setVisible(true)}>
              Add Tech Man
              </Button>
          <TechMenCollection
            visible={visible}
            createNewTechMen={createNewTechMen}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 