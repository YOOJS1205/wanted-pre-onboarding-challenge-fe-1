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

  useEffect(() => {
    (async function getList() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8080/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        setPostList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getPost = useCallback((data) => {
    setPostData(data);
  }, []);

  const onClickAddButton = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback((e) => {
    if (e.target.nodeName === "ARTICLE") {
      setModalOpen(false);
    }
  }, []);

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
        <Detail postData={postData} postKey={postKey} />
      </Container>
      <Modal modalOpen={modalOpen} onClick={closeModal} />
    </>
  );
}

const FuncBox = styled.article`
  padding: 20px;
  text-align: right;
`;
