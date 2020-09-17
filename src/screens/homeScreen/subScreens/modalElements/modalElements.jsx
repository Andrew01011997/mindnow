import React from "react";

import Logo from "../../../../components/logo/logo";
import {
  Container,
  ModalHeader,
  Header,
  FixedBlock,
  Image,
  ImageBox,
  Block,
  AbsoluteBlock,
  Text
} from "./_components";

const ModalElements = () => {
  return (
    <Container>
      <ModalHeader>
        <Header>
          <Block>
            <Logo />
            <Block></Block>
          </Block>
        </Header>
      </ModalHeader>
      <FixedBlock left="50px" bottom="50px">
        <ImageBox>
          <Image
            width="120px"
            height="120px"
            src="https://mindnow.io/wp-content/themes/mindnow-theme/img/Our_Case_Studies.svg"
          />
          <AbsoluteBlock top="48.5px" left="48.5px">
            <Image src="https://mindnow.io/wp-content/themes/mindnow-theme/img/catalog-icon.svg" />
          </AbsoluteBlock>
        </ImageBox>
      </FixedBlock>
      <AbsoluteBlock bottom="60px" left="0">
      </AbsoluteBlock>
    </Container>
  );
};

export default ModalElements