import React from "react";
import { Route } from "react-router-dom";
import { Login } from "..";

export const LoginRoute: React.FC = () => {
  return <Route component={Login} path="/login" exact />;
};
