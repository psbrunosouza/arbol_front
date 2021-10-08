import React from "react";
import { LinkProps, Link } from "react-router-dom";
import { LinkContainer } from "./style";

interface ILink extends LinkProps {
  color?: string;
  spacing?: number;
  textAlign?: string;
}

export const LinkAtom: React.FC<ILink> = ({
  color,
  spacing,
  textAlign,
  children,
  to,
  ...rest
}) => {
  return (
    <LinkContainer
      color={color}
      spacing={spacing}
      style={{ display: "flex", justifyContent: textAlign }}
    >
      <Link to={to} {...rest}>
        {children}
      </Link>
    </LinkContainer>
  );
};
