import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  return <Box>{children}</Box>;
}

const Box = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border: 2px solid #bdbdbd;
  border-radius: 20px;
  background-color: #fff;
`;
