import React from "react"
import {Row, Col} from "react-bootstrap"
import inke2 from '../images/inke-1-opt.jpg';
import "../css/components.css"

export default class Bio extends React.Component{
  render(){
    return (
      <Row>
      <Col xs={12} lg={6} className="band-photo" >
      <img className="band-photo" width="100%" src={inke2} alt='inke1'/>
      </Col>
      <Col xs={12} lg={6} className="col">
      <div>
        <h1>BIO</h1>
        <p style={{textAlign: 'left'}}>
        Inke Launi on alternative rock -bändi melankolisille sieluille, jotka kaipaavat orgaanista soundia ja omaperäisyyttä. Yhtyeen runolliset tekstit ja jylhän traagiset kappaleet luovat tilan suurien tunteiden kokemiseen. Inke Launi keinuttelee kummittelevan tunnelman, sensitiivisen ilmaisun sekä räjähtävän energian välillä, ja luottaa tummanpuhuvan mystiseen estetiikkaan.
        Helsinkiläinen yhtye sai alkunsa tammikuussa 2022, kun laulaja-lauluntekijänä debyyttisinglensä julkaissut Launimaa halusi viedä musiikkiaan rouheampaan suuntaan. Launimaa keräsi ympärilleen persoonallisia ja luovia muusikoita, joiden esteettinen näkemys eroaa valtavirrasta. Yhtye julkaisee helmikuussa 2023 esikoisalbuminsa Maailmojen välissä, joka käsittelee mielen kahtiajakautuneisuutta peilaten tunteita luonnon ilmiöihin. Albumi nauhoitettiin pääosin livenä ja soundimaailmassa pyrittiin palaamaan ajassa taaksepäin. Hiomaton estetiikka tekee albumista tämän hetken musiikkimarkkinoilla rohkean ja erottuvan.
        </p>
      </div>
      <h2>
      KOKOONPANO
      </h2>
      <p style={{textAlign: 'center'}}>
      Elina Launimaa – laulu<br/>
      Pedro Bergamo – sähkökitara <br/>
      Nuutti Autio – basso<br/>
      Niilo Suihko – rummut<br/>
      </p>
      </Col>

      </Row>
    )
  }
}
