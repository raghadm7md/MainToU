import React, { Component } from 'react'
import NewTechMen from './NewTechMen';
import UdateTechMen from "./UdateTechMen";
import { Row,Col, Button , Card} from 'antd';
import { CloseOutlined  } from "@ant-design/icons";
import './../../App.css'

export default class TechMen extends Component {
    render() {
        return (
            <div className = 'Tech'>
                 <h2>Tech men </h2>
                 <Row>
                     <Col span={6}></Col>
                     <Col span={6}></Col>
                     <Col span={6}></Col>
                     <Col span={6}> <NewTechMen/></Col>
                  </Row>
                
                  <Card title="Tech man name:" bordered={true} style={{ width: 300 }}>
                      <p>Tech man email:</p>
                      <p>Tech man phone:</p>
                      <UdateTechMen/><Button >
                      <CloseOutlined /></Button>
                  </Card>
            </div>

        )
    }
}
