import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Company from './Company'
import TechMen from './TechMen'

export default class Admin extends Component {
    render() {
        return (
            <div className = 'Admin'>
                <h1>Admin Page</h1>
                <Row>
                   <Col span={12}> <Company/> </Col>
                   <Col span={12}> <TechMen/></Col>
                 </Row>
            </div>
        )
    }
}
