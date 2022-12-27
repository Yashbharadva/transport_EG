import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Dashboard from "Pages/Dashboard";
import Signin from "Pages/Signin";
import MultiModeContracts from "Pages/MultiModeContracts";
import ViewGeneratedContracts from "Pages/ViewMultiModeGeneratedContracts";
import CreateNewContracts from "Pages/CreateNewContracts/index";
import SingleCostEstimation from "Pages/singleCostEstimation/index";
import DbCostEstimation from "Pages/dbCostEstimation/index";

export default class Routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/seeker" component={Dashboard} />
          <Route exact path="/multiModeContracts" component={MultiModeContracts} />
          <Route exact path="/viewGeneratedContracts" component={ViewGeneratedContracts} />
          <Route exact path="/createNewContracts" component={CreateNewContracts} />
          <Route exact path="/singleCostEstimation" component={SingleCostEstimation} />
          <Route exact path="/dbCostEstimation" component={DbCostEstimation} />
        </Switch> 
      </App>
    )
  }
}