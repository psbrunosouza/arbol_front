import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginRoute } from "../../../components/pages/login/routes";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route component={LoginRoute} path="/(login)" />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
