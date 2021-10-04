import React, { InputHTMLAttributes } from "react";
import { Input } from "./style";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
  height: string;
  placeholderColor?: string;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  borderType?: string;
  spacing?: number;
}

export const InputAtom: React.FC<IInput> = ({
  width,
  height,
  placeholderColor,
  color,
  borderSize,
  borderColor,
  borderType,
  spacing,
  children,
  ...props
}) => {
  return (
    <Input
      width={width}
      height={height}
      color={color}
      placeholderColor={placeholderColor}
      borderColor={borderColor}
      borderSize={borderSize}
      borderType={borderType}
      spacing={spacing}
    >
      {children}
      <input {...props}></input>
    </Input>
  );
};
