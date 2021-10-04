import React, { AnchorHTMLAttributes } from "react";
import { Link } from "./style";

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
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
    <div style={{ display: "flex", justifyContent: textAlign }}>
      <Link {...rest} color={color} spacing={spacing}>
        {children}
      </Link>
    </div>
  );
};
