import React, { useState } from "react";

export default function useInput(initialState: string) {
  const [value, setValue] = useState(initialState);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, onChange];
}
