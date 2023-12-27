import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Link } from "react-router-dom";

const Homepage = ({ token }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [session, setSession] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await fetchUsers();
      setUserInfo(allUsers);
    };
    getUsers();
    setSession(token);
    console.log(token);
  }, []);
  async function fetchUsers() {
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*")
      .eq("UserID", token.user.id);

    if (error) {
      console.error("Error fetching:", error);
      return;
    } else {
      return UserProfile;
    }
  }
  const userProfile = userInfo.map((profile) => (
    <div key={profile.id}>
      <h1>Welcome Back {profile.UserName}</h1>
      <h2>
        {profile.FirstName} {profile.LastName}
      </h2>
      <p>City: {profile.City}</p>
      <p> State: {profile.State}</p>
      <h2>Description</h2>
      <p>{profile.Description}</p>
    </div>
  ));

  return (
    <>
      {userProfile}
      <Link to="/happenings">Happenings</Link>
    </>
  );
};

export default Homepage;
