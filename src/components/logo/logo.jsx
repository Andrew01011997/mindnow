import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoSvgWhite } from "../../img/mn-logo-white.svg";
import { ReactComponent as LogoSvgBlack } from "../../img/mn-logo-black.svg";

export default function Logo() {
  return (
    <LogoBlock>
      <LogoWhite />
      <LogoBlack />
    </LogoBlock>
  );
}

const LogoBlock = styled.div`
  mix-blend-mode: overlay;
  position: relative;
`;
const LogoWhite = styled(LogoSvgWhite)`
  position: absolute;
  display: block;
  mix-blend-mode: multiply;

`;
const LogoBlack = styled(LogoSvgBlack)`
  position: absolute;
  display: block;
  mix-blend-mode: multiply;

  `;
