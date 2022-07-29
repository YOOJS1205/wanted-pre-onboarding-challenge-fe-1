import React from "react";
import styled from "styled-components";

export default function Button({ buttonText, onClick }) {
  return <Btn onClick={onClick}>{buttonText}</Btn>;
}

const Btn = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  background-color: #000;
  width: 100%;
  font-weight: 600;
`;
