import React from "react";
import { LoginFormMolecule } from "../../components/molecules/login-form";
import {
  Column,
  AnimatedColumn,
  Container,
  Row,
  AnimatedContainer,
} from "../../theme";
import { useSpring } from "react-spring";

export const Login: React.FC = () => {
  const props = useSpring({
    from: {
      transform: "translate3d(-100%,0,0)",
    },
    to: {
      transform: "translate3d(0,0,0)",
    },
  });

  return (
    <AnimatedContainer style={props}>
      <Column width="calc(100% - 440px)" color="#9373ED"></Column>
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
    </AnimatedContainer>
  );
};
