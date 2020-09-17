import React from "react";
import styled from "styled-components";

export default function Button({ children, btnColor, textColor, noTextOpacity }) {
  return (
    <ButtonContainer borderColor={btnColor}>
      <CircleTransformed bg={btnColor} />
      <TextButton color={textColor} noTextOpacity={noTextOpacity}>{children}</TextButton>
    </ButtonContainer>
  );
}

const CircleTransformed = styled.span`
  display: flex;
  width: ${({ width }) => width || "50px"};
  height: 50px;
  border-radius: 30px;
  background-color: ${({ bg }) => bg || "rgba(255, 255, 255, 0.07)"};
  transition: all 1s ease;
`;
const TextButton = styled.span`
  position: absolute;
  font-size: 0.9em;
  font-family: Gotham Pro, sans-serif;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.82;
  letter-spacing: 2px;
  display: block;
  text-align: center;
  width: 100%;
  color: ${({ color }) => color || "#ffffff"};
  top: 33%;
  transition: all 1s ease;
  opacity: ${ ({noTextOpacity})=> (noTextOpacity && 1) || 0.7};
  text-transform: uppercase;
  white-space: nowrap;
`;
const ButtonContainer = styled.div`
  border-radius: 30px;
  border: solid 1px
    ${({ borderColor }) => borderColor || "rgba(255, 255, 255, 0.15)"};
  display: flex;
  display: flex;
  padding: 4px 5px;
  min-width: 200px;
  position: relative;
  cursor: pointer;
  &:hover ${CircleTransformed} {
    width: 100%;
    transition: all 1s ease;
  }
  &:hover ${TextButton} {
    opacity: 1;
    transition: all 1s ease;
  }
`;
