import axios from "axios";

export default async function getList(setFunc: (list: any) => void) {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:8080/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFunc(res.data.data);
  } catch (error) {
    return error;
  }
}
