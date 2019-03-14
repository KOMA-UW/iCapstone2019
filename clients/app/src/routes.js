import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { ROUTES } from "./constants";

import MainView from "./components/MainView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginView from "./components/auth/Login";
import SignUpView from "./components/auth/SignUp";
import OnBoardingView from "./components/onboarding/OnBoarding";
import GroupView from "./components/dashboards/Group";
import GroupsView from "./components/dashboards/Groups";

import Dashboard from "./components/dashboards/Dashboard";
import Calendar from "./components/dashboards/calendar/Calendar";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home} component={MainView} />
          <Route path={ROUTES.login} component={LoginView} />
          <Route path={ROUTES.signUp} component={SignUpView} />
          <Route path={ROUTES.onboarding} component={OnBoardingView} />
          <Route path={ROUTES.dashboard} component={Dashboard} />
          <Route path={ROUTES.group} component={GroupView} />
          <Route path={ROUTES.groups} component={GroupsView} />
          <Route path={ROUTES.calendar} component={Calendar} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
