import React from "react";
import LoginHookForm from "../../components/Form/LoginHookForm";
import Title from "../../components/Title/Title";

export default function Login() {
  return (
    <>
      <Title titleText="로그인" />
      <LoginHookForm />
    </>
  );
}
