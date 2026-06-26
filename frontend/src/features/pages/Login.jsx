import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth/auth.form.scss";
import { useAuth } from "../auth/hooks/useauth";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const { loading, handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await handleLogin({
      email,
      password,
    });

    if (success) {
      navigate("/");
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button type="submit" className="button button-primary">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;