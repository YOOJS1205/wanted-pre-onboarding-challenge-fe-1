import React from "react";
import styled from "styled-components";
import LoginHookForm from "../../components/Form/LoginHookForm";
import Title from "../../components/Title/Title";

export default function Login() {
  return (
    <Container>
      <Title titleText="로그인" />
      <LoginHookForm />
    </Container>
  );
}

const Container = styled.article``;
