import React, { useCallback, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../Button/Button";

export default function Modal({ modalOpen, onClick, getList, setModalOpen }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onHandleTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onHandleText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickAddButton = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8080/todos",
        {
          title: title,
          content: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getList();
      setModalOpen(false);
    } catch (error) {}
  }, [title, text, getList, setModalOpen]);

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

const Container = styled.article`
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
