import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customToDoAxios } from "../../api/customToDoAxios";
import styled from "styled-components";
import Button from "../Button/Button";

interface IProps {
  modalOpen: boolean;
  onClick: (e: any) => void;
  setModalOpen: (modalOpen: boolean) => void;
}

interface IContainer {
  modalOpen: boolean;
}

export default function Modal({ modalOpen, onClick, setModalOpen }: IProps) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onHandleTitle = useCallback((e: any) => {
    setTitle(e.target.value);
  }, []);

  const onHandleText = useCallback((e: any) => {
    setText(e.target.value);
  }, []);

  const addTodo = useCallback(async (data: any) => {
    try {
      return await customToDoAxios.post("/", data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, []);

  const { mutate: add } = useMutation(addTodo, {
    onSuccess: () => {
      // update 후에 get 함수를 재실행시켜줌 (새로고침 안 해도 됨)
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const onClickAddButton = useCallback(() => {
    add({ title: title, content: text });
    setModalOpen(false);
  }, [add, title, text, setModalOpen]);

  return (
    <Container modalOpen={modalOpen} onClick={onClick}>
      <Inside>
        <Title placeholder="제목을 입력하세요." onBlur={onHandleTitle} />
        <Content onBlur={onHandleText} />
        <Button
          size="extra-small"
          buttonText="추가"
          isActive={true}
          onClick={onClickAddButton}
        />
      </Inside>
    </Container>
  );
}

const Container = styled.article<IContainer>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.modalOpen ? "block" : "none")};
`;

const Inside = styled.section`
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  border-radius: 20px;
  border: 2px solid #bdbdbd;
  overflow: hidden;
  text-align: right;
  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

const Title = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  padding: 20px;
  font-size: 24px;
`;

const Content = styled.textarea`
  width: 100%;
  height: 72%;
  border: none;
  padding: 20px;
  font-size: 14px;
`;
