// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.errors) {
      setErrors(data.errors);
    } else {
      console.log(data);
      navigate('/dashboard');
    }
  }
  return (
    <>
      <h1 className="title">Login to your account</h1>
      <form
        action="post"
        className="w-1/2 mx-auto space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email[0]}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && <p className="error">{errors.password[0]}</p>}
        </div>

        <button className="primary-btn">Login</button>
      </form>
    </>
  );
};

export default Login;
