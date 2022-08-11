import React, { memo } from "react";
import styled from "styled-components";

export default memo(function Button({ buttonText, onClick, isActive, size }) {
  return (
    <Btn
      onClick={onClick}
      disabled={!isActive && "disabled"}
      isActive={isActive}
      size={size}
    >
      {buttonText}
    </Btn>
  );
});

const Btn = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  background-color: ${(props) =>
    props.isActive ? "#000" : "rgba(0, 0, 0, 0.3)"};
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "extra-small"
      ? "70px"
      : "100%"};
  font-weight: 600;
`;
