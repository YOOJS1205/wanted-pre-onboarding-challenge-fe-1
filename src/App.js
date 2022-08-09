import React from "react";
import "./styles/app.css";
import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Todo from "./pages/Todo/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/join" element={<Join />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
