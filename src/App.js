import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import ContactMe from "./Components/Pages/ContactMe/ContactMe";
import Projects from "./Components/Pages/Projects/Projects";
import MyLogo from "./Components/Pages/MyLogo/MyLogo";

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactme" component={ContactMe} />
        <Route exact path="/mylogo" component={MyLogo} />
      </Switch>
    </div>
  );
};
export default withRouter(App);
