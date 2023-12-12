import React, { useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      alert("Check Your Email for Verification link");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
        />
        <input placeholder="Email" name="email" onChange={handleChange} />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>
        Already have an account? <Link to="/">Login</Link>
      </h1>
    </>
  );
};

export default SignUp;
