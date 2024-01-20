import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from 'react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const authToken = false;

  const handleClick = () => {
    console.log('Click');
    setShowModal(true);
    setIsSignedUp(true);
  }

  return (
      <div className="overlay">
      <Nav minimal={false} 
      setShowModal={setShowModal} 
      showModal={showModal} 
      setIsSignedUp={setIsSignedUp}
      />
      <div className="Home">
        <h1 className="primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign Out" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignedUp={isSignedUp}/>
        )}
      </div>
      </div>
  );
};

export default Home;
