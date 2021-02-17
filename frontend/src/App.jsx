import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHeader from "./components/mainComponents/PageHeader";
import PageFooter from "./components/mainComponents/PageFooter"
function App() {
  return (
    <>
      <Router>
        <PageHeader />
        <PageFooter />
      </Router>
    </>
  );
}

export default App;
