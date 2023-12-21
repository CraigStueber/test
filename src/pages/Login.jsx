import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";
const Login = ({ setToken, setUserInfo }) => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  console.log(loginData);
  function handleChange(event) {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;

      setToken(data);
      navigate("/homepage");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Your Password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>
        Don't have an account? <Link to="/signup">Signup</Link>
      </h1>
    </>
  );
};

export default Login;
