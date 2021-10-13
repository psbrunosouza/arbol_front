import React from "react";
import { SquareButtonContainer } from "./styles";

export const SquareButtonAtom: React.FC = ({ children }) => {
  return (
    <SquareButtonContainer>
      <button>{children}</button>
    </SquareButtonContainer>
  );
};
