function checkAvailable(
  id: string,
  pw: string,
  setId: (id: boolean) => void,
  setPassword: (password: boolean) => void
) {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!regExp.test(id)) {
    setId(false);
  } else {
    setId(true);
  }

  if (pw.length < 8) {
    setPassword(false);
  } else {
    setPassword(true);
  }
}

function checkActive(
  id: string,
  pw: string,
  isId: boolean,
  isPassword: boolean,
  setFunc: (func: boolean) => void
) {
  if (id && pw && isId && isPassword) {
    setFunc(true);
  } else {
    setFunc(false);
  }
}

export { checkAvailable, checkActive };
