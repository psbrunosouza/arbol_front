import React from "react";
import { Column, Container, Row } from "../../../globalstyles";
import { RegisterFormMolecule } from "../../molecules/register-form";

export const Register: React.FC = () => {
  return (
    <Container>
      <Column width="calc(100% - 440px)" color="#9373ED"></Column>
      <Column
        style={{ position: "relative" }}
        width="560px"
        color="#f2f2f2"
        justify="center"
        align="center"
      >
        <Row width="260px" justify="center" align="center">
          <RegisterFormMolecule></RegisterFormMolecule>
        </Row>
        <Row
          width="260px"
          justify="center"
          align="center"
          fixed={true}
          bottomFixed={0}
        >
          <p>ArbolApp © 2021</p>
        </Row>
      </Column>
    </Container>
  );
};
