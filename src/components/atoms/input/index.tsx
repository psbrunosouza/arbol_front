import React from "react";
import { Input } from "./style";

interface IInput {
  width: string;
  height: string;
  placeholder?: string;
  placeholderColor?: string;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  borderType?: string;
  spacing?: number;
}

export const InputAtom: React.FC<IInput> = ({
  placeholder,
  width,
  height,
  placeholderColor,
  color,
  borderSize,
  borderColor,
  borderType,
  spacing,
  children,
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
      <input placeholder={placeholder}></input>
    </Input>
  );
};
