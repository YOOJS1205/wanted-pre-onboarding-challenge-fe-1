import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authAPI } from "../../api/api";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { FormLabel, FormText } from "./FormElement";

interface UserForm {
  id: string;
  password: string;
}

export default function LoginHookForm() {
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onSuccess = useCallback(
    async (data: { id: string; password: string }) => {
      try {
        await authAPI.post("/create", {
          email: data.id,
          password: data.password,
        });
        navigate("/auth/login");
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
  );

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <Container isFlex={false}>
        <FormLabel>아이디</FormLabel>
        <Input
          {...register("id", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        <FormText>{errors?.id?.message}</FormText>
        <FormLabel>비밀번호</FormLabel>
        <Input
          {...register("password", {
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상이여야 합니다.",
            },
          })}
        />
        <FormText>{errors?.password?.message}</FormText>
        <Button
          buttonText="회원가입"
          onClick={null}
          isActive={true}
          size={null}
        />
      </Container>
    </form>
  );
}

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
