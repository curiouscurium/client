import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import axios from "axios";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    // const res = await axios.post("http://localhost:9002/register", user);
    // console.log(res);

    // };
    // axios({
    //   method: "POST",
    //   url: "http://localhost:9002/register",
    //   // data: { tokenId: response.tokenId },
    // })
    //   .then((res) => {
    //     console.log("Google Login Success", res);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const { name, email, password, confirmPassword } = user;
    const res = await fetch("http://localhost:9002/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
    console.log("This is response", res);
    const data = await res.json();

    if (!data) {
      window.alert("Invalid Registration");
      // console.log();
    } else {
      window.alert(" Registration done");
      console.log(data);

      history.push("/login");
    }
  };

  return (
    <>
      <form method="POST">
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            name="password"
            id="password"
            placeholder="Your Password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <input
            type="password"
            autoComplete="off"
            value={user.confirmPassword}
            onChange={handleInputs}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-Enter Password"
          />
        </div>
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
            onClick={PostData}
          />
        </div>
        <div>
          <NavLink to="/login">I am already registered</NavLink>
        </div>
      </form>
    </>
  );
};

export default Signup;
