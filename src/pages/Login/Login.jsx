import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/Form/LoginForm";
import Title from "../../components/Title/Title";

export default function Login() {
  return (
    <Container>
      <Title titleText="로그인" />
      <LoginForm />
    </Container>
  );
}

const Container = styled.article``;
