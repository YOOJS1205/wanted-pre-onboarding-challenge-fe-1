import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkAvailable } from "../../util/check";
import { checkActive } from "../../util/check";
import Button from "../Button/Button";
import Container from "../Container/Container";
import UserInfoInput from "./UserInfoInput";
import WarningText from "./WarningText";

export default function JoinForm() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isId, setIsId] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isActive, setIsActive] = useState(false);

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
  }, [isId, isPassword, id, password]);

  async function onClickJoinButton() {
    try {
      await axios.post("http://localhost:8080/users/create", {
        email: id,
        password: password,
      });

      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <UserInfoInput labelText="아이디" onChange={onHandleId} />
      {!isId && id && <WarningText text="* 올바른 이메일 형식이 아닙니다." />}
      <UserInfoInput labelText="비밀번호" onChange={onHandlePassword} />
      {!isPassword && password && (
        <WarningText text="* 비밀번호는 8자리 이상이여야 합니다." />
      )}
      <Button
        buttonText="회원가입"
        onClick={onClickJoinButton}
        isActive={isActive}
      />
    </Container>
  );
}
