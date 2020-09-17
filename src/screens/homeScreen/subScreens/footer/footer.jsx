import React from "react";

import { FooterContainer, Block, Title, Description } from "./_components";
import Button from "../../../../components/button/button";

const Footer = () => {
  return (
    <FooterContainer>
      <Block>
        <Title>Wollen Sie echte Lösungen?</Title>
        <Description>
          Erzählen Sie uns von Ihrem Business, ihren Hürden und wir zeigen Ihnen
          in 30 Minuten auf, wie es weiter geht.
        </Description>
        <Button>Jetzt 30 Minuten Beratungsgespräch mit unserem CEO buchen</Button>
      </Block>
    </FooterContainer>
  );
};

export default Footer;
