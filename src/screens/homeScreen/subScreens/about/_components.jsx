import styled from 'styled-components'
import { ReactComponent as AboutSvg } from "../../../../img/about.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 200px 150px;
  background-color: #0f0f0f;
`;
export const Block = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
  margin: 0;
  padding: 0;
`;
export const AboutImage = styled(AboutSvg)`
  width: 380px;
  height: auto;
  & path {
    stroke: #232323;
    stroke-dasharray: 150;
    stroke-dashoffset: 1500;
    -webkit-animation: draw 60s infinite linear;
    animation: draw 60s infinite linear;
  }
`;
export const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.1em;
  color: #ffffff;
  font-family: Gotham Pro, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-style: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.5;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 50px;
`;
export const TitleText = styled.span`
  display: flex;
  align-items: center;
  font-size: 3.2em;
  color: #ffffff;
  font-family: Gotham Pro, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  font-style: normal;
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
`;