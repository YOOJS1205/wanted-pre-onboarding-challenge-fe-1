import React from "react";
import styled from "styled-components";
import UserInfoInput from "./UserInfoInput";

export default function JoinForm() {
  return (
    <Container>
      <UserInfoInput />
      <UserInfoInput />
    </Container>
  );
}

const Container = styled.article``;
