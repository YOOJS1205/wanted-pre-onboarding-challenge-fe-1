import React from "react";
import styled from "styled-components";

export default function Detail({ postData }) {
  return (
    <Container>
      <Title>{postData.title}</Title>
      <Content>{postData.content}</Content>
    </Container>
  );
}

const Container = styled.section`
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const Title = styled.h2``;

const Content = styled.p``;
