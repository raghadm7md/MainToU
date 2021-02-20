import React, { useState } from "react";
import { Form, Input,  Modal, Button, Table, InputNumber, Popconfirm } from "antd";
import { EditOutlined  } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const TechMenCollection = ({ visible, updateTechMen, onCancel, projectVisible }) => {
    const [form] = Form.useForm();
    return (
        <Modal
        title="Update Tech Man:"
        centered
        visible={visible}
        onOk={() => form
          .validateFields()
          .then((values) => {
            form.resetFields();
            updateTechMen(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
        }
        okText="Update Tech Man"
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
          >
            <Input />
          </Form.Item>
        
          <Form.Item
            name={"email"}
            label="Tech man email:"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Tech man phone: "
          
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"jobID"}
            label="Tech man job id: "
          >
            <Input />
          </Form.Item>
  
        </Form>
      </Modal>
    )
  }
  export default function UdateTechMen (props) {
    const [visible, setVisible] = useState(false)
    // eslint-disable-next-line
    return (
        <>
          
            <Button  onClick={() => setVisible(true)}>
             <EditOutlined/>
              </Button>
      
          <TechMenCollection
            visible={visible}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 