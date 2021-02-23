import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
import { newMintsCompany  } from "../API/Api";

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
            console.log(values)
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
            name={"companyName"}
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
            name={"phoneNumber"}
            label="Company phone:"
            rules={[
              {
                required: true,
                message: "Company phone is required"
              },
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
      
    )
  }

  export default function NewCompany () {
    const [visible, setVisible] = useState(false)
    const createNewCpmpany = async (values) => {
       
        console.log(values)
        newMintsCompany(values)
        .then((response) => {
          console.log(response)
        })

        .catch((error) => {
          console.log("API ERROR:", error);
        });
    
      return setVisible(false)
    }
    return (
        <>
            <Button className="addBtn" onClick={()=> 
              setVisible(true)}>
                New Company
              </Button>
          <CompanyCollection
            visible={visible}
            createNewCpmpany={createNewCpmpany}
            onCancel={() => setVisible(false)}
          />
        </>
      );
    } 