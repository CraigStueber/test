import React, { useState, useEffect } from "react";
import { supabase } from "../client";

const Homepage = ({ token }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*");
    setUsers(UserProfile);
    console.log(error);
  }
  console.log(users);
  return (
    <>
      <h1>Welcome Back {token.user.user_metadata.full_name}</h1>
    </>
  );
};

export default Homepage;
