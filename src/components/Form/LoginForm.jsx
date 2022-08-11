import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkAvailable } from "../../util/check";
import { checkActive } from "../../util/check";
import Container from "../../components/Container/Container";
import Button from "../Button/Button";
import UserInfoInput from "./UserInfoInput";
import WarningText from "./WarningText";
import ToJoin from "../../pages/Login/ToJoin";

export default function LoginForm() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isId, setIsId] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const onHandleId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onHandlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  useEffect(() => {
    checkAvailable(id, password, setIsId, setIsPassword);
  }, [id, password]);

  useEffect(() => {
    checkActive(id, password, isId, isPassword, setIsActive);
  }, [id, password, isId, isPassword]);

  const onClickLoginButton = useCallback(async () => {
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        email: id,
        password: password,
      });

      if (res.data.message === "성공적으로 로그인 했습니다") {
        localStorage.setItem("token", res.data.token);
        navigate("/todo");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.details === "로그인에 실패했습니다") {
        setIsWrong(true);
      } else {
        setIsWrong(false);
      }
    }
  }, [id, password, navigate]);

  return (
    <Container>
      <UserInfoInput labelText="아이디" onChange={onHandleId} />
      {!isId && id && <WarningText text="* 올바른 이메일 형식이 아닙니다." />}
      {isWrong && (
        <WarningText text="* 아이디와 비밀번호가 일치하지 않습니다." />
      )}
      <UserInfoInput labelText="비밀번호" onChange={onHandlePassword} />
      {!isPassword && password && (
        <WarningText text="* 비밀번호는 8자리 이상이여야 합니다." />
      )}
      <Button
        buttonText="로그인"
        onClick={onClickLoginButton}
        isActive={isActive}
      />
      <ToJoin />
    </Container>
  );
}
