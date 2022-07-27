import React from "react";
import styled from "styled-components";
import UserInfoInput from "./UserInfoInput";

export default function LoginForm() {
  return (
    <Container>
      <UserInfoInput />
      <UserInfoInput />
    </Container>
  );
}

const Container = styled.article``;
