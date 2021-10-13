import React, { AllHTMLAttributes, HTMLProps } from "react";
import * as Style from "./styles";

interface ITitle extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  quantity: number;
}

export const ItemMenuAtom: React.FC<ITitle> = ({
  quantity,
  title,
  children,
}) => {
  return (
    <Style.ItemMenuAtomContainer>
      <div>{children}</div>
      <p>{title}</p>
      <Style.TagQuantity>{quantity}</Style.TagQuantity>
    </Style.ItemMenuAtomContainer>
  );
};
