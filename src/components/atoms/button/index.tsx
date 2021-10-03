import React from "react";
import { ButtonContainer } from "./style/style";

interface IButton {
  width: string;
  height: string;
  backgroundColor?: string;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  borderType?: string;
  spacing?: number;
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
  children,
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
      <button>
        <span>{children}</span>
      </button>
    </ButtonContainer>
  );
};
