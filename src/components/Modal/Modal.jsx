import React from "react";
import styled from "styled-components";

export default function Modal({ modalOpen, onClick }) {
  return (
    <Container modalOpen={modalOpen} onClick={onClick}>
      <Inside>
        <Title placeholder="제목을 입력하세요." />
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
`;

const Title = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  padding: 20px;
  font-size: 24px;
`;
