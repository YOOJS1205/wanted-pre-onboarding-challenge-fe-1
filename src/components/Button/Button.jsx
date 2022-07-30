import React from "react";
import styled from "styled-components";

export default function Button({ buttonText, onClick, isActive }) {
  return (
    <Btn
      onClick={onClick}
      disabled={!isActive && "disabled"}
      isActive={isActive}
    >
      {buttonText}
    </Btn>
  );
}

const Btn = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  background-color: ${(props) =>
    props.isActive ? "#000" : "rgba(0, 0, 0, 0.3)"};
  width: 100%;
  font-weight: 600;
`;
