import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function List({ getPost }) {
  const [postList, setPostList] = useState([]);
  const [postData, setPostData] = useState({ title: "", content: "" });

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

  useEffect(() => {
    getPost(postData);
  }, [postData]);

  function getPostData(e) {
    if (e.target.parentNode.nodeName === "ARTICLE") {
      setPostData({
        title: e.target.parentNode.childNodes[0].innerText,
        content: e.target.parentNode.childNodes[1].innerText,
      });
    }
  }

  return (
    <Container onClick={getPostData}>
      <p className="ir">할일 목록입니다.</p>
      {/* {postList && postList.map((item) => <Item key={item.createdAt} />)} */}
      <Item>
        <Title>빨래하기1</Title>
        <Content>빨래1을 합시다.</Content>
      </Item>
      <Item>
        <Title>빨래하기2</Title>
        <Content>빨래2를 합시다.</Content>
      </Item>
      <Item>
        <Title>빨래하기3</Title>
        <Content>빨래3을 합시다.</Content>
      </Item>
      <Item>
        <Title>빨래하기4</Title>
        <Content>빨래4를 합시다.</Content>
      </Item>
    </Container>
  );
}

const Container = styled.section`
  width: 30%;
`;

const Item = styled.article`
  margin-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
  word-break: keep-all;
`;

const Title = styled.h2``;

const Content = styled.p``;
