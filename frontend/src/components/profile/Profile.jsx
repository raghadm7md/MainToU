import React from "react";
import "../../../src/App.css";
import { Layout} from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SideMinue from "./SideMinue";
import ProfileContent from "./ProfileInfo";
import ProfileInfo from "./ProfileInfo";
import UpComAppoints from "./UpComAppoints";
import FinishedAppoints from "./FinishedAppoints";
import Trash from "./Trash";

const { Content, Sider } = Layout;

function Profile() {
  return (
    <div class="curved-div">
      <h1>Profile</h1>
      <p>The place where all your tech issues will disappear!</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,74.7C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <SideMinue />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {/* <Switch>
                  <Route exact path="/profileinfo">
                      <ProfileInfo/>
                  </Route>
                  <Route  path="/upAppoints">
                      <UpComAppoints/>
                  </Route>
                  <Route  path="/finishedAppoints">
                      <FinishedAppoints/>
                  </Route>
                  <Route  path="/trash">
                      <Trash/>
                  </Route>
              </Switch> */}
            </Content>
          </Layout>
         
        </Content>
      </Layout>
    </div>
  );
}

export default Profile;

// import React, { Component } from "react";
// import { Card, Button, Col, Row } from "antd";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Track from "./Track";

// export default class profile extends Component {
//   constructor(props) {
//     // super(props);
//     // this.state = {
//     //   appointment: this.props.info,
//     // };
//   }

//   // deleteAppointment = (index) => {
//     // logic error we will delete it from DB
//   //   let appointment = this.state.appointment;
//   //   appointment.splice(index, 1);
//   //   this.setState({ appointment: appointment });
//   // }

// //   addAppointment = () => {

// // };

//   render() {
//     console.log(this.props.info);
//     console.log(this.state.appointment);
//     const appointment = this.state.appointment.map((element, index) => {
//       return (
//         <Router>
//         <Card style={{ width: 300 }}>
//           <p>{element.title}</p>
//           <p>{element.date}</p>
//           <p>{element.time}</p>
//           <p>{element.tech_man}</p>
//           <Link to="/Track">Track</Link>
//           <Button>Edit</Button>
//           <Button
//             variant="outline-primary"
//             onClick={(event) => {
//               this.deleteAppointment(event, index);
//             }}
//           >
//             Delet
//           </Button>
//         </Card>
//         </Router>
//       );
//     });

//     return (
//       <div>
//         <h1>hi from profile</h1>
//         <div className="site-card-wrapper">
//           <Row gutter={16}>
//               {appointment}
//           </Row>
//         </div>
//         <button onClick={this.addAppointment}>add appointment</button>
//       </div>
//     );
//   };
// }
