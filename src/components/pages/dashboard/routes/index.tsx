import React from "react";
import { Route } from "react-router-dom";
import { Dashboard } from "..";

export const DashboardRoute: React.FC = () => {
  return <Route component={Dashboard} path="/dashboard" exact />;
};
