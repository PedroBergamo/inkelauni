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
        <h1>About</h1>
        <p>
        Inke Launi on tammikuussa 2022 perustettu helsinkiläinen alternative rock -bändi. Bändin laulaja työsti pitkään kappaleitaan laulaja-lauluntekijä –otteella, mutta kaipasi debyyttisinglensä julkaisun jälkeen rouheampaa soundia ja bändin ympärilleen. Jäsenten valinnassa tärkeäksi tekijäksi nousi yhteinen halu tehdä jotakin erilaista ja riipivää. Vastakohdat täydentävät toisiaan, kun bändin rock-soundi kietoutuu laulajan runollisen tulkinnan ympärille tummia tarinoita kannattelemaan.
        Yhtyeen esikoisalbumin julkaisu on parhaillaan työn alla. Maailmojen Välissä –esikoisalbumilla käsitellään sisäisen maailman ristiriitoja ja kahtiajakautuneisuutta. Albumi nauhoitettiin lähes kokonaan livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Musiikin luonnolliset vivahteet ja säröt saavat kuulua, mikä tekee albumista rohkean ja erottuvan.
        Livenä Inke Launi tarjoaa shown, joka vie yleisön riemun ja tuskan rajamaille. Orgaanisessa estetiikassa jokainen elementti merkitsee ja sama raa’an muhkea soundi on läsnä niin livenä kuin levylläkin. Bändin dynamiikkaa on kuvailtu hyvin erityiseksi ja kappaleita luonnehdittu traagisen jylhiksi. Inke Launin musiikki on spirituaalinen kokemus, joka todella pysäyttää hetken.
        </p>
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

          <p>Website designed and developed by
          <a className="link" href={pedroSite}
            target="_blank" rel="noreferrer"> Pedro Bergamo</a>    </p>
      </div>

    </div>


  );
}

export default App;
