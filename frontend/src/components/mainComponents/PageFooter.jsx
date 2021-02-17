import React from "react";
import { Layout } from "antd";
import { HeartTwoTone } from '@ant-design/icons';
const { Footer } = Layout;
export default function PageFooter() {
  return (
    <div >
      <Layout>
        <Footer
          className="footer"
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            height:"6%",
            padding: "8px 0 0 0",
            textAlign: "center",
            fontSize: "17px",
          }}
        >
          ©2021 Created with <HeartTwoTone twoToneColor="#eb2f96"/> by MainToU Team
        </Footer>
      </Layout>
    </div>
  );
}
