import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainHeader justifyContent="space-around">
          <Block />
          <Block width="40%">
            <Block>
              <TextMenu>CASE STUDIES</TextMenu>
            </Block>
            <Block>
              <TextMenu>SKILLS</TextMenu>
            </Block>
            <Block>
              <TextMenu>ABOUT US</TextMenu>
            </Block>
          </Block>
          <Block>
            <TextMenu>lng</TextMenu>
          </Block>
        </MainHeader>
    )
}

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  flex-direction: row;
  padding: 60px;
`;
const TextMenu = styled.span`
  position: relative;
  color: white;
  font-family: Gotham Pro, sans-serif;
  font-weight: 500;
  font-size: 0.9em;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.82;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  padding-bottom: 5px;
  transition: border-bottom 1s;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    content: "";
    transition: width 0.8s ease-out;
  }
  &:hover:after {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    content: "";
    transition: width 0.8s ease-out;
  }
`;
const Block = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
`;

export default Header