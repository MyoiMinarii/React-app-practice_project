import App from "./App";
import { useState } from "react";

function Login_ui() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="login">
      <h1>Login</h1>
      <form id="login_form">
        <input id="login_input1" type="text" placeholder="Username" />
        <input id="login_input2" type="password" placeholder="Password" />
        <button id="login_btn" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="">Register</a>
      </p>
    </div>
  );
}

export default Login_ui;
