import { todoAPI } from "./api";

// Create Todo
export const createTodo = async (data: any) => {
  try {
    return await todoAPI.post("/", data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Read Todo
export const readTodo = async () => {
  try {
    const res = await todoAPI.get("/");
    return res.data.data;
  } catch (error) {
    return error;
  }
};

// Delete Todo
export const deleteTodo = async (postKey: string) => {
  try {
    return await todoAPI.delete(`/${postKey}`);
  } catch (error) {
    return error;
  }
};
