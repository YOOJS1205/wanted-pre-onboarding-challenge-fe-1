import React, { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Container from "../Container/Container";
import UserInfoInput from "./UserInfoInput";

export default function JoinForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function onHandleId(e) {
    setId(e.target.value);
  }

  function onHandlePassword(e) {
    setPassword(e.target.value);
  }

  async function onClickJoinButton() {
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
        email: id,
        password: password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <UserInfoInput labelText="아이디" onChange={onHandleId} />
      <UserInfoInput labelText="비밀번호" onChange={onHandlePassword} />
      <Button buttonText="회원가입" onClick={onClickJoinButton} />
    </Container>
  );
}
