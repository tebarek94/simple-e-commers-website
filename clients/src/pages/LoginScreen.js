import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };
    axios
      .post("http://localhost:5000/api/user/login", userData)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ marginTop: "40px" }}>Sign In</h1>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          placeholder="Password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
}

export default LoginScreen;
