import inke2 from './images/inke-1-opt.jpg';
import inkeBig from './images/inke-1-opt.jpg';
import './App.css';
import {Container, Row,Col} from 'react-bootstrap';
import SplashVideo from "./Resources/splash-video.mp4";
import Social from "./components/socialmedia.js";
import Logo from "./Resources/logo.svg";

import virta from "./images/virta-logo.png";
var pedroSite = "https://bergamocreations.com/";
var YouTube = "https://www.youtube.com/watch?v=519_RdUYz_A";

function App() {
  return (
      <div className="App">
        <div className="splash-video">
        <video className="splash-video" autoPlay loop muted>
          <source src={SplashVideo} type="video/mp4"/>
        </video>

        <div className="logo">
          <img src={Logo} width="50%" alt=""/>
        </div>

        <div className="virta-logo">
          <img src={virta} width="50%" alt=""/>

        </div>

          <div className="video-button">
              <a href={YouTube} target= "_blank">
              <button type="button">Katso nyt</button>  </a>
              
        </div>
      </div>

      <Container className="keikat">
        <h1>Keikat</h1>
        <Row>
          <Col>
            <h2>24.2</h2>
          </Col>
          <Col>
            <p>Pub Virasto</p>
            <p>Lahti</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>25.2</h2>
          </Col>
          <Col>
            <p>Oranssi</p>
            <p>Helsinki</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>03.3</h2>

          </Col>
          <Col>
            <p>Kaivuri</p>
            <p>Kuopio</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>04.3</h2>
          </Col>
          <Col>
            <p>Tuba</p>
            <p>Oulu</p>
          </Col>
        </Row>
        <Row className="info">
        <Col xs={12} lg={6}>

        </Col>


        </Row>
      </Container>

      <Container className="container">
        <Row>
        <Col xs={12} lg={8} className="col">
        <div className='about'>
          <h1>BIO</h1>
          <p>
          Inke Launi on alternative rock -bändi melankolisille sieluille, jotka kaipaavat orgaanista soundia ja omaperäisyyttä. Yhtyeen runolliset tekstit ja jylhän traagiset kappaleet luovat tilan suurien tunteiden kokemiseen. Inke Launi keinuttelee kummittelevan tunnelman, sensitiivisen ilmaisun sekä räjähtävän energian välillä, ja luottaa tummanpuhuvan mystiseen estetiikkaan.
          Helsinkiläinen yhtye sai alkunsa tammikuussa 2022, kun laulaja-lauluntekijänä debyyttisinglensä julkaissut Launimaa halusi viedä musiikkiaan rouheampaan suuntaan. Launimaa keräsi ympärilleen persoonallisia ja luovia muusikoita, joiden esteettinen näkemys eroaa valtavirrasta. Yhtye julkaisee helmikuussa 2023 esikoisalbuminsa Maailmojen välissä, joka käsittelee mielen kahtiajakautuneisuutta peilaten tunteita luonnon ilmiöihin. Albumi nauhoitettiin pääosin livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Hiomaton estetiikka tekee albumista tämän hetken musiikkimarkkinoilla rohkean ja erottuvan.</p>
          <h2>
          KOKOONPANO
          </h2>
          <p style={{textAlign: 'center'}}>
          Elina Launimaa – laulu<br/>
          Pedro Bergamo – sähkökitara <br/>
          Nuutti Autio – basso<br/>
          Niilo Suihko – rummut<br/>
          </p>
        </div>
        </Col>

        <Col xs={12} lg={4} style={{padding: '2rem'}}>
        <img width="100%" src={inke2} alt='inke1'/>
        <p style={{textAlign: 'center'}}> Lataa<a className="link"
        download="inke-launi.png" href={inkeBig} rel="noreferrer"
        target="_blank" > valokuva</a>.</p>

        <iframe title="spotify" className="spotify"
        src="https://open.spotify.com/embed/track/67WNo0w28KmkzBwIUlbIb1?utm_source=generator&theme=0"
        width="100%" height="152" frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"></iframe>
        <h2>Tiedotus ja haastattelupyynnöt:</h2>
        <p style={{textAlign: 'center'}}>
          Juha Juoni / PressHopper<br/>
          juha.juoni@presshopper.fi<br/>
          www.presshopper.fi<br/>
        </p>
        </Col>
        </Row>
      </Container>

        <div className="footer">
          <h3 style={{color: 'black'}}>inkelauni@gmail.com</h3>
          <Social/>
          <p style={{color: 'black'}}>Suunnitellut ja kehittänyt
          <a className="link" href={pedroSite}
          target="_blank" rel="noreferrer" style={{color: 'black'}}> Bergamo Creations</a></p>
          <p style={{color: 'black'}}>©️ 2023 Inke Launi</p>
        </div>

  </div>
  );
}

export default App;
