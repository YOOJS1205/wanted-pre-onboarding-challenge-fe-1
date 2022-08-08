import React, { useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../../components/Button/Button";

export default function Detail({ postData, postKey, getList, postList }) {
  const onClickDeleteButton = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/todos/${postKey}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getList();
    } catch (error) {
      console.log(error);
    }
  }, [postKey, getList]);

  return (
    <Container>
      <Title>{postList.length ? postData.title : null}</Title>
      <Content>{postList.length ? postData.content : null}</Content>
      <ButtonContainer>
        <Button buttonText="수정" isActive={true} size="extra-small" />
        <Button
          buttonText="삭제"
          isActive={true}
          size="extra-small"
          onClick={onClickDeleteButton}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
  article {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

const ButtonContainer = styled.article`
  button {
    margin: 0 10px;
  }
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
