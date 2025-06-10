import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";
import Footer from "./Footer.jsx";
import Members from "./members.JSX";
import Cards from "./members.JSX";
import Header from "./Header.jsx";
import input_display from "./members.JSX";
import Login_ui from "./Login.JSX";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login_ui />
  </StrictMode>
);
