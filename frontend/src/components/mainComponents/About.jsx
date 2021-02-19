import React, { Component } from "react";
import WhosUs from './aboutContent/WhosUs'
import OurFetures from './aboutContent/OurFetures'
import AboutTeam from './aboutContent/AboutTeam'
export default class About extends Component {
  style = {
    height: 40,
    width: 90,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#006466",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  };
  render() {
    return (
      <>
        <div class="curved-div">
          <h1>About Us</h1>
          <p>
            MainToU the team who shares the vision and values of our community
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <WhosUs />
        <OurFetures />
        <AboutTeam />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2d5362"
              fill-opacity="1"
              d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        
      </>
    );
  }
}
