import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Detail from "./Detail";
import List from "./List";
import Modal from "../../components/Modal/Modal";

export default function Todo() {
  const [postList, setPostList] = useState([]);
  const [postData, setPostData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [postKey, setPostKey] = useState("");

  // 질문: 데이터 불러오기 함수 선언, 자식 요소에도 전달
  async function getList() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8080/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getList();
  }, []);

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
        <List getPost={getPost} postList={postList} getPostKey={getPostKey} />
        <Detail
          postData={postData}
          postKey={postKey}
          getList={getList}
          postList={postList}
        />
      </Container>
      <Modal
        modalOpen={modalOpen}
        onClick={closeModal}
        getList={getList}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

const FuncBox = styled.article`
  padding: 20px;
  text-align: right;
`;
