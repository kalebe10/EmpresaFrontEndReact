import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store/global";
import CorpoProvider from "../../store/corpo";
import Button from "react-bootstrap/Button";
import MenuComponent from "../menu/Menu";
import LayoutColumn from "./style";
import Corpo from "../corpo/Corpo";
import Menu from "../menu/Menu";
import ModalLogin from "../modalLogin/ModalLogin";
import AlertToast from "../alertToast/AlertToast";
import ModalGeneric from '../modalGeneric/ModalGeneric';

export default function Layout() {
  const { http } = useContext(GlobalContext);

  return (
    <CorpoProvider>
      <LayoutColumn>
        <Menu />
        <Corpo />
        <ModalLogin />
        <AlertToast />
        <ModalGeneric />
      </LayoutColumn>
    </CorpoProvider>
  );
}
