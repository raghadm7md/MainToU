import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/mainComponents/PageHeader";
import PageFooter from "./components/mainComponents/PageFooter";
import CalendarPage from "./components/pagesContent/CalendarPage";
import About from "./components/mainComponents/About";
import Home from "./components/pagesContent/Home";
import Admin from "./components/Admin/Admin";
import Profile from "./components/profile/Profile";
import UpComAppoints from "./components/profile/UpComAppoints";
import FinishedAppoints from "./components/profile/FinishedAppoints";
import Trash from "./components/profile/Trash";
import ProfileInfo from "./components/profile/ProfileInfo";
import Register from "./components/mainComponents/Register"

// import Profile from "./components/mainComponents/Profile";

function App() {
  const Auth = {
      "CurrentUser" : null,
      "isLogged" : false,
  }
  return (
    <>
      <Router>
        <PageHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/profile">
             <Profile/> 
          </Route>
          <Route path="profileinfo">
          <ProfileInfo/>
          </Route>
          <Route path="upAppoints">
          <UpComAppoints/>
          </Route>
          <Route path="finishedAppoints">
          <FinishedAppoints/>
          </Route>
          <Route path="trash">
            <Trash/>
          </Route>
          <Route path="admin">
            <Admin/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
        </Switch>
        <PageFooter />
      </Router>
        
    </>
  );
}
export default App;