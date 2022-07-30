function checkAvailable(id, pw, setId, setPassword) {
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

function checkActive(id, pw, isId, isPassword, setFunc) {
  if (id && pw && isId && isPassword) {
    setFunc(true);
  } else {
    setFunc(false);
  }
}

export { checkAvailable, checkActive };
