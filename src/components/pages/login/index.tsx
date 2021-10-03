import React from "react";
import { LoginFormMolecule } from "../../molecules/login-form";
import { Column, Container, Row } from "./styles";

export const Login: React.FC = () => {
  return (
    <Container>
      <Column width="calc(100% - 440px)" color="#9373ED"></Column>
      <Column width="560px" color="#f2f2f2" justify="center" align="center">
        <Row width="260px" justify="center" align="center">
          <LoginFormMolecule></LoginFormMolecule>
        </Row>
      </Column>
    </Container>
  );
};
