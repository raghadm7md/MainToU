import React  from "react";
import {useState} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../../App.css";
import Login from "./Login"
function NavMenu() {
 
  const [auth,setAuth] = useState({
    currentUser : null,
    isLogged : false
  })
  const print = ()=>{
    console.log(auth)
  }
  return (
   <Menu
      mode="horizontal"
      className="navMenu"
    >

      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="claendar">
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
     {auth.isLogged?
     <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
    </Menu.Item>
    : 
      null
   }
    <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
   {!auth.isLogged ? 
      <Menu.Item key="Login">
        <Login setAuth = {setAuth}/> 
      </Menu.Item>
      :
      <Menu.Item key="Login">
        Logout
      </Menu.Item>
   }
    </Menu>
     
  );
}
export default NavMenu;
