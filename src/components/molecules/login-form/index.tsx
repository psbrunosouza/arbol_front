import React from "react";
import { InputAtom } from "../../atoms/input";
import { ButtonAtom } from "../../atoms/button";
import { LinkAtom } from "../../atoms/link";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";

export const LoginFormMolecule: React.FC = () => {
  return (
    <form>
      <InputAtom
        width="100%"
        height="24px"
        color="#9373ed"
        placeholderColor="#9373ed"
        placeholder="email"
        borderColor="#9373ed"
        borderSize={3}
        borderType="solid"
        spacing={14}
      >
        <AiOutlineUser color="#9373ed" />
      </InputAtom>
      <InputAtom
        width="100%"
        height="24px"
        color="#9373ed"
        placeholderColor="#9373ed"
        placeholder="password"
        borderColor="#9373ed"
        borderSize={3}
        borderType="solid"
        spacing={14}
      >
        <AiFillLock color="#9373ed" />
      </InputAtom>
      <ButtonAtom
        color="#fff"
        backgroundColor="#9373ed"
        width="100%"
        height="24px"
        borderSize={3}
        borderType="solid"
        borderColor="#9373ed"
        spacing={14}
      >
        LOGIN
      </ButtonAtom>
      <LinkAtom color="#9373ed" href="" spacing={6} textAlign="center">
        Create new account
      </LinkAtom>
      <LinkAtom color="#9373ed" href="" spacing={6} textAlign="center">
        OMG, Forget access?
      </LinkAtom>
    </form>
  );
};
