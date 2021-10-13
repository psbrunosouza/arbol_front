import React from "react";
import { Container } from "../../../globalstyles";
import { HeaderMolecute } from "../../molecules/header";
import { MenuMolecule } from "../../molecules/menu";
import { SidebarMolecule } from "../../molecules/sidebar";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <SidebarMolecule></SidebarMolecule>
      <MenuMolecule></MenuMolecule>
      <HeaderMolecute title="Current tasks"></HeaderMolecute>
    </Container>
  );
};
