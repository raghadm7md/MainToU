import React from "react";
import "./App.css";
import Profile from "./Profile";
import Register from "./Register"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: [
        {
          title: "fix computer",
          date: "15 feb",
          time: "9:00 am",
          tech_man: "ali",
        },
        {
          title: "fix computer",
          date: "15 feb",
          time: "10:00 am",
          tech_man: "ali",
        },
        {
          title: "fix computer",
          date: "15 feb",
          time: "11:00 am",
          tech_man: "ali",
        },
        
      ],
    };
  }
  addAppointment = () => {

  };

  render() {
    return (
      <div className="App">
        <Profile info={this.state.appointment}></Profile>
        <button onClick={this.addAppointment}>add appointment</button>
        <div className="RegisterForm">
        <Register/>
        </div>
      </div>
    );
  }
}
export default App;
