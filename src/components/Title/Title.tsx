import React from "react";
import styled from "styled-components";

interface IProps {
  titleText: string;
}

export default function Title({ titleText }: IProps) {
  return <H1>{titleText}</H1>;
}

const H1 = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  padding-top: 150px;
`;
