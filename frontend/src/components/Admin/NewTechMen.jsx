import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
const style = {
  height: 30,
  width: 120,
  lineHeight: "10px",
  borderRadius: 4,
  backgroundColor: "#006466",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
  padding: 0,
};
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
            name={"name"}
            label="Tech man name"
            rules={[
              {
                required: true,
                message: "Tech man name is required"
              },
            ]}
          >
            <Input />
          </Form.Item>
        
          <Form.Item
            name={"email"}
            label="Tech man email:"
            rules={[
              {
                required : true,
                message: "Tech man email is required"
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Tech man phone: "
            rules={[
              {
                required : true,
                message: "Tech man phone number is required"  
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"jobID"}
            label="Tech man job id: "
            rules={[
              {
                required : true,
                message: "Tech man job id is required"             
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
    return (
        <>
    
            <Button style={style} onClick={() => setVisible(true)}>
              Add Tech Man
              </Button>
          <TechMenCollection
            visible={visible}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 