import React from "react";

import { Container, PartnerItem, Image } from "./_components";
import Button from "../../../../components/button/button";

import cocaCola from "../../../../img/Logo__CocaCola.png";
import chicoree from "../../../../img/Logo__Chicoree.png";
import kuoni from "../../../../img/Logo__Kuoni.png";
import chronoswiss from "../../../../img/Logo__Chronoswiss.png";
import ecatch from "../../../../img/Logo__Ecatch.png";
import cornercard from "../../../../img/Logo__Cornercard.png";
import lattesso from "../../../../img/Logo__Lattesso.png";

const Partners = () => {
  const partnersData = [
    chicoree,
    chronoswiss,
    cocaCola,
    cornercard,
    "",
    ecatch,
    kuoni,
    lattesso,
  ];
  return (
    <Container>
      {partnersData.map((el, ind) => (
        <PartnerItem key={ind}>
          <Image src={el} />
        </PartnerItem>
      ))}
      <Button btnColor="rgba(15,15,15,0.15)" textColor="#000000" noTextOpacity>
        show more
      </Button>
    </Container>
  );
};

export default Partners;
