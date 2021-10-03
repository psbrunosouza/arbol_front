import React from "react";
import { Link } from "./style";

interface ILink {
  href: string;
  color?: string;
  spacing?: number;
  textAlign?: string;
}

export const LinkAtom: React.FC<ILink> = ({
  href,
  color,
  spacing,
  textAlign,
  children,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: textAlign }}>
      <Link color={color} spacing={spacing} href={href}>
        {children}
      </Link>
    </div>
  );
};
