import React, { useState, useCallback } from "react";

type UserInputProps = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = (initialValue: string): UserInputProps => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;
