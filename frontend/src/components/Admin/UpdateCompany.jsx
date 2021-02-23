import React, { useState } from "react";
import { Form, Input,  Modal, Button } from "antd";
import { EditOutlined  } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const CompanyCollection = ({ visible, UpdateCpmpany, onCancel, projectVisible }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        title="Update Company:"
        centered
        visible={visible}
        onOk={() => form
          .validateFields()
          .then((values) => {
            form.resetFields();
            UpdateNewCpmpany(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
        }
        okText="Update Cpmany"
        onCancel={onCancel}
        htmlType="submit"
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
        >
          <Form.Item
            name={"companyName"}
            label="Company name:"
        
          >
            <Input />
          </Form.Item>
          <Form.Item
        
            name={"description"}
            label="Description: "
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Company email:"
         
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phoneNumber"}
            label="Company phone:"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  export default function UdateTechMen (props) {
    const [visible, setVisible] = useState(false)
    
    return (
        <>
          
            <Button  onClick={() => setVisible(true)}>
             <EditOutlined/>
              </Button>
      
          <CompanyCollection
            visible={visible}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 