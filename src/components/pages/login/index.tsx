import React from "react";
import { LoginFormMolecule } from "../../molecules/login-form";
import { Column, Container, Row } from "../../../globalstyles";

export const Login: React.FC = () => {
  return (
    <Container>
      <Column
        width="calc(100% - 440px)"
        color="#9373ED"
        style={{
          background: "url(https://source.unsplash.com/1280x720/?technology)",
          objectFit: "cover",
        }}
      ></Column>
      <Column
        style={{ position: "relative" }}
        width="560px"
        color="#f2f2f2"
        justify="center"
        align="center"
      >
        <Row width="260px" justify="center" align="center">
          <LoginFormMolecule></LoginFormMolecule>
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
