import React from "react";
import styled from "styled-components";

export default function UserInfoInput({ labelText, onChange }) {
  return (
    <Container>
      <p className="ir">유저 정보 Input</p>
      <Label>{labelText}</Label>
      <Input onChange={onChange} />
    </Container>
  );
}

const Container = styled.article``;

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
  margin-bottom: 25px;
`;
