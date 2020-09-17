import React from "react";

import Button from "../../../../components/button/button";
import {Container, Block, AboutImage, TitleText, Text} from './_components'

const About = () => {
  return (
    <Container>
      <Block justifyContent="left">
        <Block width="50%">
          <AboutImage />
        </Block>
        <Block flexDirection="column" width="50%" alignItems='flex-start'>
          <TitleText marginBottom='50px'>About Us</TitleText>
          <Text>mindnow is convinced that great things can only be created with the right systems and lean approaches. That’s why we live by a clear corporate code which is reflected in our manifesto. Since market environments are changing faster and faster, it is not expedient for our customers to manage static processes. That is why we attach great importance to absolute agility. All our processes mirror exactly that. Let us create great things.</Text>
          <Button>LEARN MORE</Button>
        </Block>
      </Block>
    </Container>
  );
};

export default About;
