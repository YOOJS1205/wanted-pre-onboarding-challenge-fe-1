import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Detail from "./Detail";
import List from "./List";
import Modal from "../../components/Modal/Modal";

export default function Todo() {
  const [postData, setPostData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  function getPost(data) {
    setPostData(data);
  }

  function onClickAddButton() {
    setModalOpen(true);
  }

  function closeModal(e) {
    if (e.target.nodeName === "ARTICLE") {
      setModalOpen(false);
    }
  }

  return (
    <>
      <FuncBox>
        <Button
          buttonText="할 일 추가"
          isActive={true}
          size="small"
          onClick={onClickAddButton}
        />
      </FuncBox>
      <Container isFlex={true}>
        <List getPost={getPost} />
        <Detail postData={postData} />
      </Container>
      <Modal modalOpen={modalOpen} onClick={closeModal} />
    </>
  );
}

const FuncBox = styled.article`
  padding: 20px;
  text-align: right;
`;
