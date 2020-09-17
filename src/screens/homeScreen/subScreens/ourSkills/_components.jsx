import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 50px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "auto"};
  margin: 0;
  padding: 0;
  margin-bottom: ${({marginBottom}) => marginBottom || 0}
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 50px;
`;

export const Text =styled.p`
    line-height: 2;
    color: #0f0f0f;
    font-weight: 400;
    word-break: break-word;
    font-size: 1.1em;
    font-weight: 100;
`
