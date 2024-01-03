import blackLogo from "../images/wt-black-nobg.png";
import colorLogo from "../images/RedVersion-removebg-preview.png";

const Nav = ({ minimal, authToken, setShowModal, showModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : blackLogo} />
      </div>

      {!authToken && !minimal && <button className="nav-btn" onClick={handleClick} disabled={showModal}>Login</button>}
    </nav>
  );
};

export default Nav;
