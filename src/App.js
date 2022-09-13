import logo from './logo.svg';
import inke1 from './images/inke-1.jpg';
import inke2 from './images/inke-2.jpg';
import './App.css';

import Social from "./components/socialmedia.js";

var pedroSite = "https://pedrobergamo.com/";

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <img className="logo" src={logo} alt='logo'/>
      <img width='100%' src={inke2} alt='inke2'/>
      <div className='about'>
      <h1>About</h1>
        <img width="100%" src={inke1} alt='inke1'/>

        <p style={{textAlign: 'center'}}>
        Download <a className="link" download="inke-launi.png" href={inke1} rel="noreferrer" target="_blank" >photo</a>.
        </p>
        <p style={{textAlign: 'center'}}>
        Credits: Samuel Järvinen.
        </p>
        <p>
        Inke Launi on tammikuussa 2022 perustettu helsinkiläinen alternative rock -bändi. Bändin laulaja työsti pitkään kappaleitaan laulaja-lauluntekijä –otteella, mutta kaipasi debyyttisinglensä julkaisun jälkeen rouheampaa soundia ja bändin ympärilleen. Jäsenten valinnassa tärkeäksi tekijäksi nousi yhteinen halu tehdä jotakin erilaista ja riipivää. Vastakohdat täydentävät toisiaan, kun bändin rock-soundi kietoutuu laulajan runollisen tulkinnan ympärille tummia tarinoita kannattelemaan.
        Yhtyeen esikoisalbumin julkaisu on parhaillaan työn alla. Maailmojen Välissä –esikoisalbumilla käsitellään sisäisen maailman ristiriitoja ja kahtiajakautuneisuutta. Albumi nauhoitettiin lähes kokonaan livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Musiikin luonnolliset vivahteet ja säröt saavat kuulua, mikä tekee albumista rohkean ja erottuvan.
        Livenä Inke Launi tarjoaa shown, joka vie yleisön riemun ja tuskan rajamaille. Orgaanisessa estetiikassa jokainen elementti merkitsee ja sama raa’an muhkea soundi on läsnä niin livenä kuin levylläkin. Bändin dynamiikkaa on kuvailtu hyvin erityiseksi ja kappaleita luonnehdittu traagisen jylhiksi. Inke Launin musiikki on spirituaalinen kokemus, joka todella pysäyttää hetken.
        </p>
        <p style={{textAlign: 'center'}}>
        KOKOONPANO
        </p>
        <p style={{textAlign: 'center'}}>
        Elina Launimaa – laulu
        </p>
        <p style={{textAlign: 'center'}}>
        Pedro Bergamo – sähkökitara
        </p>
        <p style={{textAlign: 'center'}}>
        Nuutti Autio – basso
        </p>
        <p style={{textAlign: 'center'}}>
        Niilo Suihko – rummut
        </p>

        </div>
        <h1>Contact</h1>
        <Social/>
        <p className="link">inkelauni@gmail.com</p>
        <div className="footer">
        <p>Made with s2 by
        <a className="link" href={pedroSite}
          target="_blank" rel="noreferrer"> Pedro Bergamo</a>
        </p>
        </div>
        </header>
    </div>


  );
}

export default App;
