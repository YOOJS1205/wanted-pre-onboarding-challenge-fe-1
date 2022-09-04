import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookieToken = (accessToken: string) => {
  return cookies.set("access_token", accessToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getCookieToken = (): string => {
  return cookies.get("access_token");
};

export const removeCookieToken = () => {
  return cookies.remove("access_token", { sameSite: "strict", path: "/" });
};
