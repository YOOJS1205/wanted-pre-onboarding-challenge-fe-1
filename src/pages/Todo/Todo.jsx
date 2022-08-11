import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Detail from "./Detail";
import List from "./List";
import Modal from "../../components/Modal/Modal";

export default function Todo() {
  const [postData, setPostData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [postKey, setPostKey] = useState("");

  // 자식 요소로부터 게시물 정보 받아오기
  const getPost = useCallback((data) => {
    setPostData(data);
  }, []);

  // 할 일 추가
  const onClickAddButton = useCallback(() => {
    setModalOpen(true);
  }, []);

  // 모달창 닫기
  const closeModal = useCallback((e) => {
    if (e.target.nodeName === "ARTICLE") {
      setModalOpen(false);
    }
  }, []);

  // 자식 요소로부터 게시물 id 받아오기
  const getPostKey = useCallback((key) => {
    setPostKey(key);
  }, []);

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
        <List getPost={getPost} getPostKey={getPostKey} />
        <Detail postData={postData} postKey={postKey} />
      </Container>
      <Modal
        modalOpen={modalOpen}
        onClick={closeModal}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

const FuncBox = styled.article`
  padding: 20px;
  text-align: right;
`;
