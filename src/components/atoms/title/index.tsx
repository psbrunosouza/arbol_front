import React from "react";
import { TitleContainer } from "./styles";

export const TitleAtom: React.FC = ({ children }) => {
  return (
    <TitleContainer>
      <p>{children}</p>
    </TitleContainer>
  );
};
