import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

function AppointsCard() {
  return (
    <div>
      
      <Card
        style={{ width: 300 }}
        // cover={
        // //   <img
        // //     alt=""
        // //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        // //   />
        // }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <ClockCircleOutlined />
          }
          title="Appointment 1"
          description="fixing network connection"
        />
      </Card>
    </div>
  );
}

export default AppointsCard;
