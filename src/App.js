import './css/App.css';
import Footer from "./components/Footer.js"
import Bio from "./components/bio.js"
import Splash from "./components/splashScreen.js"
import Gigs from "./components/gigs.js"

function App() {
  return (
      <div className="App">
      <Splash/>
      <div className="container">
        <Gigs/>
        <Bio/>
      </div>
      <Footer/>
  </div>
  );
}

export default App;
