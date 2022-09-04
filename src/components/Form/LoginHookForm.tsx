import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { setCookieToken } from "../../util/cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authAPI } from "../../api/api";
import Container from "../Container/Container";
import Button from "../Button/Button";
import ToJoin from "../../pages/Login/ToJoin";
import { FormLabel, FormText } from "./FormElement";
interface UserForm {
  id: string;
  password: string;
}

export default function LoginHookForm() {
  const navigate = useNavigate();
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
          setCookieToken(res.data.token);
          navigate("/todo");
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.details === "로그인에 실패했습니다") {
          setIsWrong((prev) => !prev);
        }
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
        <FormText>
          {errors?.password?.message ||
            (isWrong && "아이디와 비밀번호가 일치하지 않습니다.")}
        </FormText>
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
