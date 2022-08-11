import React, { memo } from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

export default memo(function WarningText({ text }: IProps) {
  return <Text>{text}</Text>;
});

const Text = styled.p`
  color: red;
  font-size: 10px;
  margin-top: -15px;
  margin-bottom: 15px;
`;
