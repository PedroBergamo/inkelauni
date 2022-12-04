import logo from './logo.svg';
import splash from './images/splash.png';
import inke2 from './images/inke-2-opt.jpg';
import './App.css';
import {Container, Row,Col} from 'react-bootstrap';

import Social from "./components/socialmedia.js";
var pedroSite = "https://bergamocreations.com/";

function App() {
  return (
    <Container className="App">
      <Row >
        <Col xs={12} md={2} className="col">
        <div className="splash">
          <iframe className="spotify"
          src="https://open.spotify.com/embed/track/2vKGiRjAUlYtcjeCgXRspC?utm_source=generator&theme=0"
          width="100%" height="152" frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"></iframe>
        </div>
        </Col>

        <Col xs={12} md={10} className="col">
        <div className='about'>
          <h1>BIO</h1>
          <p>
          Inke Launi on alternative rock -bändi melankolisille sieluille, jotka kaipaavat orgaanista soundia ja omaperäisyyttä. Yhtyeen runolliset tekstit ja jylhän traagiset kappaleet luovat tilan suurien tunteiden kokemiseen. Inke Launi keinuttelee kummittelevan tunnelman, sensitiivisen ilmaisun sekä räjähtävän energian välillä, ja luottaa tummanpuhuvan mystiseen estetiikkaan.
          Helsinkiläinen yhtye sai alkunsa tammikuussa 2022, kun laulaja-lauluntekijänä debyyttisinglensä julkaissut Launimaa halusi viedä musiikkiaan rouheampaan suuntaan. Launimaa keräsi ympärilleen persoonallisia ja luovia muusikoita, joiden esteettinen näkemys eroaa valtavirrasta. Yhtye julkaisee helmikuussa 2023 esikoisalbuminsa Maailmojen välissä, joka käsittelee mielen kahtiajakautuneisuutta peilaten tunteita luonnon ilmiöihin. Albumi nauhoitettiin pääosin livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Hiomaton estetiikka tekee albumista tämän hetken musiikkimarkkinoilla rohkean ja erottuvan.</p>
          <h2>
          KOKOONPANO
          </h2>
          <p>
          Elina Launimaa – laulu<br/>
          Pedro Bergamo – sähkökitara <br/>
          Nuutti Autio – basso<br/>
          Niilo Suihko – rummut<br/>
          </p>

          <img width="100%" src={inke2} alt='inke1'/>
          <p style={{textAlign: 'center'}}> Lataa<a className="link"
          download="inke-launi.png" href={inke2} rel="noreferrer"
          target="_blank" > valokuva</a>.</p>
        </div>
        </Col>

      </Row>
      <Row>
        <Col className="col">
        <div className="contact">
          <h2>Yhteystiedot</h2>
          <p>inkelauni@gmail.com</p>
          <Social/>
          <h2>Tiedotus ja haastattelupyynnöt:</h2>
          <p>
          Juha Juoni / PressHopper<br/>
          juha.juoni@presshopper.fi<br/>
          www.presshopper.fi<br/>
          </p>
        </div>
        <div className="footer">
        <p>Web design & dev. <br/>
        by
          <a className="link" href={pedroSite}
            target="_blank" rel="noreferrer"> Bergamo Creations</a>
        </p>
        </div>
        </Col>

      </Row>
    </Container>

  );
}

export default App;
