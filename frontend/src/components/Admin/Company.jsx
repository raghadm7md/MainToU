import React, { Component } from 'react'
import { Row, Col,Card , Button} from 'antd';
import NewCompany from './NewCompany'
import UpdateCompany from "./UpdateCompany";
import { CloseOutlined  } from "@ant-design/icons";
import './../../App.css'

export default class Company extends Component {
    render() {
        return (
            <div className = "company">
                <h2>Maintenance companies</h2>
                <Row>
                  <Col span={6}></Col>
                  <Col span={6}></Col>
                  <Col span={6}></Col>
                  <Col span={6}> <NewCompany/></Col>
                 </Row>
                <Card title="Company name:" bordered={true} style={{ width: 300 }}>
                      <p>Company email:</p>
                      <p>Company phone:</p>
                      <p>Company description:</p>
                      <UpdateCompany/>
                      <Button><CloseOutlined /></Button>
                  </Card>    
               </div>
        )
    }
}
