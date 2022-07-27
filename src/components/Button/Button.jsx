import React from "react";
import styled from "styled-components";

export default function Button({ buttonText }) {
  return <Btn>{buttonText}</Btn>;
}

const Btn = styled.button`
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 20px;
  background-color: #000;
`;
