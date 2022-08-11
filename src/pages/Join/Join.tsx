import React from "react";
import styled from "styled-components";
import JoinForm from "../../components/Form/JoinForm";
import Title from "../../components/Title/Title";

export default function Join() {
  return (
    <Container>
      <Title titleText="회원가입" />
      <JoinForm />
    </Container>
  );
}

const Container = styled.article``;
