import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Button from "../Button/Button";
import UserInfoInput from "./UserInfoInput";
import ToJoin from "../../pages/Login/ToJoin";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function onHandleId(e) {
    setId(e.target.value);
  }

  function onHandlePassword(e) {
    setPassword(e.target.value);
  }

  async function onClickLoginButton() {
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        email: id,
        password: password,
      });
      console.log(res);
      if (res.data.message === "성공적으로 로그인 했습니다") {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <UserInfoInput labelText="아이디" onChange={onHandleId} />
      <UserInfoInput labelText="비밀번호" onChange={onHandlePassword} />
      <Button buttonText="로그인" onClick={onClickLoginButton} />
      <ToJoin />
    </Container>
  );
}
