import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { authAPI } from "../../api/api";
import Container from "../Container/Container";
import Button from "../Button/Button";
import ToJoin from "../../pages/Login/ToJoin";

interface UserForm {
  id: string;
  password: string;
}

export default function LoginHookForm() {
  // 아이디 비밀번호 일치 여부
  const [isWrong, setIsWrong] = useState(false);
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onSuccess = useCallback(
    async (data: { id: string; password: string }) => {
      try {
        const res = await authAPI.post("/login", {
          email: data.id,
          password: data.password,
        });

        if (res.data.message === "성공적으로 로그인 했습니다") {
          localStorage.setItem("token", res.data.token);
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.details === "로그인에 실패했습니다") {
          setIsWrong((prev) => !prev);
        }
      }
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <Container isFlex={false}>
        <Label>아이디</Label>
        <Input
          {...register("id", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        <Text>{errors?.id?.message}</Text>
        <Label>비밀번호</Label>
        <Input
          {...register("password", {
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상이여야 합니다.",
            },
          })}
        />
        <Text>
          {errors?.password?.message ||
            (isWrong && "아이디와 비밀번호가 일치하지 않습니다.")}
        </Text>
        <Button
          buttonText="로그인"
          onClick={null}
          isActive={true}
          size={null}
        />
        <ToJoin />
      </Container>
    </form>
  );
}

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  padding: 8px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: rgb(0, 0, 0);
  }
  background-color: #fff;
  width: 350px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 15px;
`;
