import React from "react";
import { SquareButtonAtom } from "../../atoms/button-item";
import { TitleAtom } from "../../atoms/title";
import { HeaderContainer } from "./styles";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";

interface IHeader {
  title?: string;
}

export const HeaderMolecute: React.FC<IHeader> = ({ title }) => {
  return (
    <HeaderContainer>
      <TitleAtom>{title}</TitleAtom>
      <div>
        <SquareButtonAtom>
          <AiOutlinePlus size={16} />
        </SquareButtonAtom>
        <SquareButtonAtom>
          <AiOutlineArrowLeft size={16} />
        </SquareButtonAtom>
      </div>
    </HeaderContainer>
  );
};
