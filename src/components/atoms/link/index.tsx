import React from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "./style";

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
  ...rest
}) => {
  return (
    // <div style={{ display: "flex", justifyContent: textAlign }}>

    // </div>
    <Link {...rest} color={color} spacing={spacing}>
      {children}
    </Link>
  );
};
