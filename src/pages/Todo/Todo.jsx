import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Detail from "./Detail";
import List from "./List";

export default function Todo() {
  const [postData, setPostData] = useState({});

  function getPost(data) {
    setPostData(data);
  }

  return (
    <>
      <Button buttonText="할 일 추가" isActive={true} />
      <Container isFlex={true}>
        <List getPost={getPost} />
        <Detail postData={postData} />
      </Container>
    </>
  );
}
