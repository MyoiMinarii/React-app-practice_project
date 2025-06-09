import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Members from "./members.JSX";
import Input_display from "./members.JSX";

function App() {
  return (
    <div>
      <Header />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
