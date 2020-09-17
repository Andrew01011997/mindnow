import React from "react";
import Typist from "react-typist";

import VideoPlayerBackground from "../../../../components/videoPlayerBackground/videoPlayerBackground";
import Overlay from "../../../../components/overlay/overlay";
import HeaderTop from "../../../../components/header/header";
import {
  Container,
  Block,
  Text,
  TypistStyled,
  AbsoluteBlock,
  VerticalLine,
  VerticalLineLight,
} from "./_components";

const MainBanner = () => {
  return (
    <Container>
      <Block>
        <VideoPlayerBackground
          src="https://mindnow.imgix.net/2019/10/Future-2319.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <Overlay />

        <HeaderTop />
      </Block>
      <Block justifyContent="center" height="60vh" flexDirection="column">
        <Block>
          <Text>We are mindnow.</Text>
        </Block>
        <Block>
          <TypistStyled cursor={{ show: false }} avgTypingDelay={120}>
            <Text fontWeight="500">Some string.</Text>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={12} />
            <Text fontWeight="500">Welcome.</Text>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={8} />
            <Text fontWeight="500">String</Text>
          </TypistStyled>
        </Block>
      </Block>
      <AbsoluteBlock bottom="0" left="50%" overflow="hidden">
        <VerticalLine>
          <VerticalLineLight />
        </VerticalLine>
      </AbsoluteBlock>
    </Container>
  );
};

export default MainBanner;
