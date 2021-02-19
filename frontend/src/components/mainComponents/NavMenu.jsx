import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../../App.css";

function NavMenu() {
  return (
    <Menu mode="horizontal" className="navMenu">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="claendar">
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavMenu;
