import blackLogo from '../images/wt-black-nobg.png'
import colorLogo from '../images/RedVersion-removebg-preview.png'

const Nav = ({ minimal, authToken }) => {

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : blackLogo}/>
      </div>

      {!authToken && <button className="nav-btn">Login</button>}
    </nav>
  )
}

export default Nav