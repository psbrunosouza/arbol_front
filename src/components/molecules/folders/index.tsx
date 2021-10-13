import React from "react";
import { ButtonAtom } from "../../atoms/button";
import { ItemMenuAtom } from "../../atoms/folder";
import { MenuContainer } from "./styles";
import { BsFolder } from "react-icons/bs";

export const MenuMolecule: React.FC = () => {
  return (
    <MenuContainer style={{ paddingTop: "28px" }}>
      <ButtonAtom
        style={{ marginBottom: "24px" }}
        color="#fff"
        height="24px"
        width="70%"
        backgroundColor="#9373ED"
      >
        Add Folder
      </ButtonAtom>
      <ItemMenuAtom title="Current folder" quantity={2}>
        <BsFolder />
      </ItemMenuAtom>
      <ItemMenuAtom title="Current folder" quantity={2}>
        <BsFolder />
      </ItemMenuAtom>
    </MenuContainer>
  );
};
