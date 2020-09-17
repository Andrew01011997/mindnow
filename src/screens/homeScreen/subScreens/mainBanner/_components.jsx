import styled from "styled-components";
import Typist from "react-typist";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Block = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  flex-direction: row;
  padding: 60px;
`;
export const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: #ffffff;
  font-family: Gotham Pro, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-style: normal;
`;

export const TypistStyled = styled(Typist)`
  color: #ffffff;
  font-size: 5em;
  font-family: Gotham Pro, sans-serif;
  display: flex;
  flex-direction: row;
  height: 100px;
  &:after {
    content: "";
    height: 100px;
    background-color: white;
    line-height: 100px;
    width: 1px;
    margin-left: 5px;
    -webkit-animation: typing 1s steps(1) infinite;
    animation: typing 1s steps(1) infinite;
    display: inline-block;
    vertical-align: text-bottom;
  }
`;
export const AbsoluteBlock = styled.div`
  position: absolute;
  top: ${({ top }) => top || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  right: ${({ right }) => right || "unset"};
  z-index: 2;
  overflow: ${({ overflow }) => overflow || "unset"};
`;
export const VerticalLine = styled.div`
  width: 1px;
  height: 120px;
  background: rgba(255, 255, 255, 0.15);
`;
export const VerticalLineLight = styled.span`
  background: #fff;
  -webkit-animation: line_scroll 2s infinite;
  animation: line_scroll 2s infinite;
  position: absolute;
  top: 0;
  width: 1px;
  height: 60px;
`;
