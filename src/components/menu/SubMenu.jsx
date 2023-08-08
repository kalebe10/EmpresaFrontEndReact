import React, { useState, useContext, useEffect } from "react";
import { CorpoContext } from "../../store/corpo";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import MenuData from "./MenuData";

const SubMenu = () => {
  const { saveCorpo } = useContext(CorpoContext);
  const [menuLink, setMenuLink] = useState([]);
  const [menuCollapse, setMenuCollapse] = useState([]);
  const [menuBrand, setMenuBrand] = useState([]);

  const handleClick = (elm, subNav = true) => {
    saveCorpo({
      component: elm.component,
    });
  };

  const setStateLink = (item) => {
    setMenuLink((oldArray) => [...oldArray, item]);
  };
  const setStateCollapse = (item) => {
    setMenuCollapse((oldArray) => [...oldArray, item]);
  };
  const setStateBrand = (item) => {
    setMenuBrand((oldArray) => [...oldArray, item]);
  };

  const preparaMenu = () => {
    MenuData.map((item) => {
      if (item.navbarType == "collapse") {
        setStateCollapse(
          <NavDropdown
            style={{ cursor: "pointer" }}
            id={item.id}
            key={item.id}
            title={item.title}
            menuVariant="dark"
          >
            {item.subNav.map((item, index) => {
              return (
                <NavDropdown.Item
                  onClick={() => {
                    handleClick(item, false);
                  }}
                  key={item.id}
                  style={{ paddingTop: "0" }}
                >
                  {item.title}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        );
      } else if (item.navbarType == "link") {
        setStateLink(
          <Nav.Link
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(item, false);
            }}
            id={item.id}
            key={item.id}
          >
            {item.title}
          </Nav.Link>
        );
      } else {
        setStateBrand(
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(item, false);
            }}
            id={item.id}
            key={item.id}
          >
            {item.title}
          </Navbar.Brand>
        );
      }
    });
  };

  useEffect(() => {
    if (menuBrand.length <= 0) {
      preparaMenu();
    }
  }, []);

  //
  return (
    <Container>
      {menuBrand}
      <Nav>{menuCollapse}</Nav>
      <Nav className="me-auto">{menuLink}</Nav>
    </Container>
  );
};

export default SubMenu;
