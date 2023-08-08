import React from "react";

import * as Pages from "../../pages/pages";

const iconsProps = {
  color: "purple",
  fontSize: "2rem",
};

const MenuData = [
  {
    id:1,
    title: "KAS Gerencial",
    path: "",
    navbarType: "brand",
    component: <Pages.Dashboard />,
  },
  {
    id:4,
    title: "Empresa",
    path: "",
    navbarType: "brand",
    component: <Pages.Empresa />,
  },
  {
    id:3,
    title: "Relatorio",
    path: "",
    navbarType: "Brand",
    component: <Pages.Relatorio />,
  },
];

export default MenuData;
