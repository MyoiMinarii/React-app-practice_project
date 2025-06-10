function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form id="register_form">
        <input id="register_input1" type="text" placeholder="Username" />
        <input id="register_input2" type="password" placeholder="Password" />
        <input id="register_input3" type="email" placeholder="Email" />
        <button id="register_btn" type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/Login_ui">Login</a>
      </p>
    </div>
  );
}

export default Register;
