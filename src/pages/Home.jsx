import Nav from "../components/Nav";
const Home = () => {
  const authToken = true;

  return (
    <>
      <Nav />
      <div className="Home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
