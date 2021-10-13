import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardRoute } from "../../../pages/dashboard/routes";
import { LoginRoute } from "../../../pages/login/routes";
import { RegisterRoute } from "../../../pages/register/routes";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginRoute} path="/login" />
        <Route component={RegisterRoute} path="/register" />
        <Route component={DashboardRoute} path="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};
