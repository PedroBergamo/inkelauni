import logo from './logo.svg';
import inke1 from './images/inke-1-opt.jpg';
import inke2 from './images/inke-2-opt.jpg';
import './App.css';

import Social from "./components/socialmedia.js";

var pedroSite = "https://pedrobergamo.com/";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt='logo'/>
        <img width="100%" src={inke1} alt='inke1'/>
      </header>
      <div className='about'>
        <h1>BIO</h1>
        <p>
        Inke Launi on alternative rock -bändi melankolisille sieluille, jotka kaipaavat orgaanista soundia ja omaperäisyyttä. Yhtyeen runolliset tekstit ja jylhän traagiset kappaleet luovat tilan suurien tunteiden kokemiseen. Inke Launi keinuttelee kummittelevan tunnelman, sensitiivisen ilmaisun sekä räjähtävän energian välillä, ja luottaa tummanpuhuvan mystiseen estetiikkaan.
Helsinkiläinen yhtye sai alkunsa tammikuussa 2022, kun laulaja-lauluntekijänä debyyttisinglensä julkaissut Launimaa halusi viedä musiikkiaan rouheampaan suuntaan. Launimaa keräsi ympärilleen persoonallisia ja luovia muusikoita, joiden esteettinen näkemys eroaa valtavirrasta. Yhtye julkaisee helmikuussa 2023 esikoisalbuminsa Maailmojen välissä, joka käsittelee mielen kahtiajakautuneisuutta peilaten tunteita luonnon ilmiöihin. Albumi nauhoitettiin pääosin livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Hiomaton estetiikka tekee albumista tämän hetken musiikkimarkkinoilla rohkean ja erottuvan.</p>
        <h2>
        KOKOONPANO
        </h2>
        <p >
        Elina Launimaa – laulu
        </p>
        <p >
        Pedro Bergamo – sähkökitara
        </p>
        <p >
        Nuutti Autio – basso
        </p>
        <p >
        Niilo Suihko – rummut
        </p>

        <img width="100%" src={inke2} alt='inke1'/>
        <p style={{textAlign: 'center'}}><a className="link"
        download="inke-launi.png" href={inke2} rel="noreferrer"
        target="_blank" >Photo</a> by Samuel Järvinen.</p>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <Social/>
        <p>inkelauni@gmail.com</p>
        <p>Web design by
          <a className="link" href={pedroSite}
            target="_blank" rel="noreferrer"> Bergamo Creations</a>
        </p>
      </div>

    </div>


  );
}

export default App;
