import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style/style";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  height: string;
  backgroundColor?: string;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  borderType?: string;
  spacing?: number;
  isLoading?: boolean;
}

export const ButtonAtom: React.FC<IButton> = ({
  width,
  height,
  color,
  backgroundColor,
  borderSize,
  borderColor,
  borderType,
  spacing,
  isLoading,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      borderSize={borderSize}
      borderType={borderType}
      borderColor={borderColor}
      spacing={spacing}
    >
      <button {...rest}>
        <span>{children}</span>
      </button>
    </ButtonContainer>
  );
};
