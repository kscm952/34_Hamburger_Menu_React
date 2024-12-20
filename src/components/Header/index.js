// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        className="popup-content"
        trigger={
          <button
            type="button"
            className="menu-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <ul className="popup-page">
            <li className="button-container">
              <button
                type="button"
                className="close-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </li>
            <li className="link-redirection-container">
              <Link to="/" className="link-item" onClick={() => close()}>
                <AiFillHome />
                <p className="name">Home</p>
              </Link>
              <Link to="/about" className="link-item">
                <BsInfoCircleFill />
                <p className="name">About</p>
              </Link>
            </li>
          </ul>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
