import React from "react";
import { Column, Row, AnimatedContainer } from "../../../globalstyles";
import { RegisterFormMolecule } from "../../molecules/register-form";
import { useSpring } from "react-spring";

export const Register: React.FC = () => {
  const props = useSpring({
    from: {
      transform: "translate3d(200%,0,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
    },
  });

  return (
    <AnimatedContainer style={props}>
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
      <Column width="calc(100% - 440px)" color="#9373ED"></Column>
    </AnimatedContainer>
  );
};
