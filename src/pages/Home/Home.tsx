import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container/Container";

export default function Home() {
  return (
    <Container isFlex={false}>
      <p className="ir">렌더링 후 첫 페이지입니다.</p>
      <Title>나만의 ToDoList를 만들어보세요.</Title>
      <FuncContainer>
        <p className="ir">페이지 이동 기능입니다.</p>
        <FirstFunc to="/auth/login">로그인</FirstFunc>
        <Func to="auth/join">회원가입</Func>
      </FuncContainer>
    </Container>
  );
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  word-break: keep-all;
  text-align: center;
`;

const FuncContainer = styled.article`
  text-align: center;
  padding: 30px 0 20px;
`;

const Func = styled(Link)`
  font-size: 16px;
`;

const FirstFunc = styled(Func)`
  &::after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 16px;
    margin: 0 12px;
    background-color: #c4c4c4;
  }
`;
