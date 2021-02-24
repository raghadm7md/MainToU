import React, { Component } from 'react'
import { Steps, Divider, Row } from "antd";
import {NodeIndexOutlined} from "@ant-design/icons";


const { Step } = Steps;

export default class Track extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
      }
      showTrack = () => {
        this.setState({
          visible: true,
        });
      };
  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

    render()
     {
        const { current } = this.state;

        return (
          <>
          <NodeIndexOutlined onClick={this.showTrack}/>
          <Row>
          <Divider><h2>Track your appointment status!</h2></Divider>
          </Row>
          <div className="track">
            <Steps current={current} onChange={this.onChange}>
              <Step title="Confirmed" description="This service is approved" />
              <Step title="In Progress" description="We trying to reach you" />
              <Step title="Compleated" description="Done , Rate our service" />
            </Steps>
            </div>
            
          </>
        );
    };
}
