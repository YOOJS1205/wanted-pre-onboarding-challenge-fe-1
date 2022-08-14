import React from "react";
import { GlobalStyles } from "./styles/globalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Todo from "./pages/Todo/Todo";

export default function App() {
  // react-query setting
  const queryClient = new QueryClient();
  // login token
  const token = localStorage.getItem("token");

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/join" element={<Join />} />
          <Route path="/todo" element={<Todo />} />
          <Route
            path="/"
            element={token ? <Navigate replace to="/todo" /> : <Home />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
