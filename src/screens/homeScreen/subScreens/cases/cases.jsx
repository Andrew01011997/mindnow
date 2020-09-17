import React from "react";

import { Container, SectionName, Text, Box } from "./_components";
import data from "./data";
import Case from "../../../../components/case/case";
import Button from "../../../../components/button/button";

const Cases = () => {
  return (
    <Container>
      <SectionName>Featured Cases</SectionName>
      {data.map((el, id) => (
        <Case {...el} key={id} />
      ))}
      <Box>
        <Text>Möchten Sie mehr von Case Studies sehen?</Text>
        <Button>All Case Studies</Button>
      </Box>
    </Container>
  );
};

export default Cases;
