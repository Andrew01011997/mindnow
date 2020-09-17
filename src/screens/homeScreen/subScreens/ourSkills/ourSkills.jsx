import React from "react";

import { Container, Block, Title, Text } from "./_components";
import Card from "../../../../components/card/card";

const OurSkills = () => {
  return (
    <Container>
      <Block marginBottom='100px'>
        <Block width="50%">
          <Title>Our Skills</Title>
        </Block>
        <Block width="50%">
          <Text>
            Our team of creatives, marketers, designers and developers helps you
            to digitally transform, redefine and drive your business. In order
            to create unique experiences for you and your customers, we rely on
            our following skills.
          </Text>
        </Block>
      </Block>
      <Block>
        <Card>Digital Strategy</Card>
        <Card>Digital Marketing</Card>
        <Card>Digital Design</Card>
      </Block>
    </Container>
  );
};

export default OurSkills;
