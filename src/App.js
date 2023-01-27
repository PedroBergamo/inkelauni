import './css/App.css';
import SplashVideo from "./Resources/splash-video.mp4";
import Footer from "./components/Footer.js"
import Bio from "./components/bio.js"

import Gigs from "./components/gigs.js"
import Logo from "./Resources/logo.svg";

import virta from "./images/virta-logo.png";
var VirtaVideo = "https://www.youtube.com/watch?v=WcmWrsbxXYA";

function App() {
  return (
      <div className="App">
        <div className="splash-video">

        <video className="splash-video" autoPlay loop muted>
          <source src={SplashVideo} type="video/mp4"/>
        </video>

        <div className="logo">
          <img src={Logo} width="300px" alt=""/>
        </div>

          <div className="video-button">
          <img src={virta} width="50%" alt=""/>
              <a href={VirtaVideo} target= "_blank" rel="noreferrer">
              <button type="button">Katso nyt</button>  </a>
        </div>
      </div>
      <div className="container">
        <Gigs/>
        <Bio/>
      </div>

      <Footer/>
  </div>
  );
}

export default App;
