// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-mobile-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-desktop-img"
      />
    </div>
  </>
)

export default About
