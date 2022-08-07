import React from "react";
import styled from "styled-components";

export default function WarningText({ text }) {
  return <Text>{text}</Text>;
}

const Text = styled.p`
  color: red;
  font-size: 10px;
  margin-top: -15px;
  margin-bottom: 15px;
`;