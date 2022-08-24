import { useQuery } from "@tanstack/react-query";
import { readTodo } from "../api/todo";

export default function useGetTodos() {
  // 두번째 인자로 들어가는 queryFunc 은 반드시 promise를 반환해야한다.
  const { data } = useQuery(["todos"], readTodo, {
    // 다시 브라우저로 돌아왔을 때 함수 재실행 여부
    refetchOnWindowFocus: false,
    retry: 0,
  });
  return data;
}
