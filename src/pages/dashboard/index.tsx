import React from "react";
import { Container } from "../../theme";
import { HeaderMolecute } from "../../components/molecules/header";
import { MenuMolecule } from "../../components/molecules/folders";
import { SidebarMolecule } from "../../components/molecules/sidebar";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <SidebarMolecule></SidebarMolecule>
      <MenuMolecule></MenuMolecule>
      <HeaderMolecute title="Current tasks"></HeaderMolecute>
    </Container>
  );
};
