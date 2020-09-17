import styled from "styled-components";

export const Container = styled.div`
height:100%;
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
export const ModalHeader = styled.div`
  position: fixed;
  top: 0;
  leftL 0;
  width: 100%;
  `;
export const FixedBlock = styled.div`
  position: fixed;
  top: ${({ top }) => top || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  right: ${({ right }) => right || "unset"};
  z-index: 2;
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

export const ImageBox = styled.div`
  width: ${({ width }) => width || "auto"}
  height: ${({ height }) => height || "auto"}
  position: ${({ position }) => position || "relative"}
  `;
export const Image = styled.img`
  width: ${({ width }) => width || "100%"}
  height: ${({ height }) => height || "100%"}
  `;

  export const Text = styled.p`
  color: ${({color}) => color || 'white'};
  `