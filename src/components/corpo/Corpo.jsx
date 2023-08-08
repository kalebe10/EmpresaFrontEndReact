import React, { useContext, useEffect } from "react";

import { CorpoContext } from "../../store/corpo";
import { GlobalContext } from "../../store/global";
import { HttpContext } from "../../store/http";
import CorpoDiv, { CorpoConteudo } from "./style";
import Menu from "../menu/Menu";
import * as Pages from "../../pages/pages";

export default function Corpo({ sidebar, showSidebar }) {
  const { corpo, saveCorpo } = useContext(CorpoContext);
  const { http } = useContext(GlobalContext);
  const { get } = useContext(HttpContext);
  return (
    <CorpoDiv>
      <CorpoConteudo sidebar={sidebar}>{corpo.component}</CorpoConteudo>
    </CorpoDiv>
  );
}
