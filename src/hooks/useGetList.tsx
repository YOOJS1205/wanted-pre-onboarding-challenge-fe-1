import { useState, useEffect, useCallback } from "react";
import { customToDoAxios } from "../api/customToDoAxios";

export default function useGetList() {
  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    try {
      const res = await customToDoAxios.get("/");
      setList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getList();
  }, []);

  return list;
}
