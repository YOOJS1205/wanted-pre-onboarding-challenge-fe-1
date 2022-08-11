import React from "react";
import styled from "styled-components";

interface Iprops {
  children: any;
  isFlex: boolean;
}

interface IInnerScreen {
  isFlex: boolean;
}

export default function Container({ children, isFlex }: Iprops) {
  return <Box isFlex={isFlex}>{children}</Box>;
}

const Box = styled.section<IInnerScreen>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border: 2px solid #bdbdbd;
  border-radius: 20px;
  background-color: #fff;
  display: ${(props) => props.isFlex && "flex"};
  gap: ${(props) => props.isFlex && "40px"};
  width: ${(props) => props.isFlex && "70%"};
  height: ${(props) => props.isFlex && "70%"};
`;
