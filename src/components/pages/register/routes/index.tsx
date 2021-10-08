import React from "react";
import { Route } from "react-router-dom";
import { Register } from "..";

export const RegisterRoute: React.FC = () => {
  return <Route component={Register} path="/register" exact />;
};
