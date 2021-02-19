import React from "react";
import Twaik from "../../images/partners/twaik.png";
import Msook from "../../images/partners/msook.png";
import PolyT from "../../images/partners/polyT.png";
import Stl from "../../images/partners/stl.png";

import { Carousel } from "antd";
const contentStyle = {
  height: "200px",
  color: "#2d5362",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};
function OurPartners() {
  return (
    <div className="partners">
      <h1 className="large-font">
        <b>Our Partners</b>
      </h1>
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src={Twaik} alt="" />
        </div>
        <div style={contentStyle}>
          <img src={Msook} alt="" />
        </div>
        <div style={contentStyle}>
          <img src={PolyT} alt="" />
        </div>
        <div style={contentStyle}>
          <img src={Stl} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default OurPartners;
