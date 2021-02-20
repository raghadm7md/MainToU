import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/mainComponents/PageHeader";
import PageFooter from "./components/mainComponents/PageFooter";
import CalendarPage from "./components/pagesContent/CalendarPage";
import About from "./components/mainComponents/About";
import Home from "./components/pagesContent/Home";
import Register from "./components/mainComponents/Register"
// import Profile from "./components/mainComponents/Profile";

function App() {
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
