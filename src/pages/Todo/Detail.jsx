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

const Title = styled.h2`
  border-bottom: 1px solid #bdbdbd;
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const Content = styled.p`
  padding: 20px;
`;
