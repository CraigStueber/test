const Homepage = ({ token }) => {
  return (
    <>
      <h1>Welcome Back {token.user.user_metadata.full_name}</h1>
    </>
  );
};

export default Homepage;
