import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import Company from './Company'
import TechMen from './TechMen'
// import { getAllmintsCompany } from "../API/API";


export default class Admin extends Component {

    render() {
        return (
            <div className = 'Admin'>
                <Divider orientation="center" type="horizontal">
                <h1><b>Admin Page</b></h1>
                </Divider>
                
                <Row>
                   <Col span={12}><Company/> </Col>
                   <Col span={12}> <TechMen/></Col> 
                </Row>
            </div>
        )
    }
}