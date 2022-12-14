import React, { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { deleteTodo } from "../../api/todo";
import { IPostData } from "./Todo";
import Button from "../../components/Button/Button";

interface IProps {
  postData: IPostData;
  postKey: string;
}

export default function Detail({ postData, postKey }: IProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteTodolist } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const onClickDeleteButton = useCallback(() => {
    deleteTodolist(postKey);
  }, [deleteTodolist, postKey]);

  return (
    <Container>
      <Title>{postData.title}</Title>
      <Content>{postData.content}</Content>
      <ButtonContainer>
        <Button
          buttonText="수정"
          isActive={true}
          size="extra-small"
          onClick={null}
        />
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
