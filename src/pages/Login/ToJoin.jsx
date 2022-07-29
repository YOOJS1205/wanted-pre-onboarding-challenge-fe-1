import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ToJoin() {
  return <Func to="/auth/join">회원가입하기</Func>;
}

const Func = styled(Link)`
  color: #bdbdbd;
  display: block;
  text-align: center;
  font-size: 14px;
  margin-top: 25px;
`;
