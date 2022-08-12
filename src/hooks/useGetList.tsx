import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useGetList() {
  const [list, setList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const getList = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8080/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setList(res.data.data);
      res.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getList();
  }, [isSuccess]);

  return list;
}
