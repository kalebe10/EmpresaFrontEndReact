import React, { useState, useContext } from "react";
import MenuData from "./MenuData";
import SubMenu from "./SubMenu";
import { DeslogarButton } from "./style";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../../store/global";

const Menu = ({ sidebar, showSidebar }) => {
  const { setLogout } = useContext(GlobalContext);
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <SubMenu />
      <DeslogarButton variant="outline-danger" size="sm" onClick={setLogout}>
        Deslogar
      </DeslogarButton>
    </Navbar>
  );
};

export default Menu;
