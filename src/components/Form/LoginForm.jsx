import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Button from "../Button/Button";
import UserInfoInput from "./UserInfoInput";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  console.log(id, password);

  function onHandleId(e) {
    setId(e.target.value);
  }

  function onHandlePassword(e) {
    setPassword(e.target.value);
  }

  async function onClickLoginButton() {
    try {
      const res = axios.post("http://localhost:8080/users/login", {
        body: {
          email: id,
          password: password,
        },
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
      <Button buttonText="로그인" onClick={onClickLoginButton} />
    </Container>
  );
}
