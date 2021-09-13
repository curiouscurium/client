import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid credential");
    } else {
      window.alert("Login succesful");
      window.localStorage.setItem("token", data.token);
      history.push("/home");
    }
  };

  return (
    <>
      <form method="POST">
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </div>
        <div>
          <input
            type="submit"
            name="login"
            id="signin"
            className="form-submit"
            value="Login"
            onClick={loginUser}
          />
          {/* <div>
          <NavLink to="/">P</NavLink>
        </div> */}
        </div>
      </form>
    </>
  );
};

export default Login;
