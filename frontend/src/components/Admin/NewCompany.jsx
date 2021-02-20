import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const CompanyCollection = ({ visible, createNewCpmpany, onCancel, projectVisible }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        title="Add New Company:"
        centered
        visible={visible}
        onOk={() => form
          .validateFields()
          .then((values) => {
            form.resetFields();
            createNewCpmpany(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
        }
        okText="Add New Cpmany"
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
            label="Company name:"
            rules={[
              {
                required: true,
                message: "Company Name is required"
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Company description is required"
              },
            ]}
            name={"description"}
            label="Description: "
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Company email:"
            rules={[
              {
                required: true,
                message: "Company email is required"},
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Company phone:"
            rules={[
              {
                required: true,
                message: "Company phone is required"
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  export default function NewCompany () {
    const [visible, setVisible] = useState(false)
    return (
        <>
       
            <Button className="addBtn" onClick={() => setVisible(true)}>
                New Company
              </Button>
          <CompanyCollection
            visible={visible}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 