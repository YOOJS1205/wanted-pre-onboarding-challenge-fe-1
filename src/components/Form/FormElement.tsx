import React from "react";
import styled from "styled-components";

interface IProps {
  children: string;
}

export const FormLabel = ({ children }: IProps) => {
  return <Label>{children}</Label>;
};

export const FormInput = () => {
  return <Input />;
};

export const FormText = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  padding: 8px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: rgb(0, 0, 0);
  }
  background-color: #fff;
  width: 350px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 15px;
`;
