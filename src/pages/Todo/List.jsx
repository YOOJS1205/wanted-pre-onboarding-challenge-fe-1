import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

export default function List({ getPost, postList, getPostKey }) {
  const [postData, setPostData] = useState({ title: "", content: "" });
  const [postKey, setPostKey] = useState("");

  useEffect(() => {
    getPostKey(postKey);
  }, [postKey, getPostKey]);

  useEffect(() => {
    getPost(postData);
  }, [postData, getPost]);

  const getPostData = useCallback((e) => {
    if (e.target.parentNode.nodeName === "ARTICLE") {
      setPostData({
        title: e.target.parentNode.childNodes[0].innerText,
        content: e.target.parentNode.childNodes[1].innerText,
      });
    }
  }, []);

  return (
    <Container onClick={getPostData}>
      <p className="ir">할일 목록입니다.</p>
      {postList &&
        postList.map((item) => (
          <Item key={item.id} onClick={() => setPostKey(item.id)}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </Item>
        ))}
    </Container>
  );
}

const Container = styled.section`
  width: 30%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #c4c4c4;
    border-right: 4px solid transparent;
  }
`;

const Item = styled.article`
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid;
  padding: 10px;
  word-break: keep-all;
  margin-right: 20px;
  cursor: pointer;
  border-color: ${(props) => (props.isFocus ? "black" : "rgba(0, 0, 0, 0.3)")};
`;

const Title = styled.h2``;

const Content = styled.p``;
