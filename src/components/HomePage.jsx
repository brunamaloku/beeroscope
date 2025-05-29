import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Beer from './Beer'
import GetAstro from './GetAstro'
import Form from './Form'
import GetData from './APICall'

const HomePage = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [formSent, setFormSent] = useState(false);

  function Beer() {
    return (
      formSent ? (
          <GetData />
      ) : (
        <div></div>
      ) 
    )
  }

  return (
    <>
      <div className="row container-fluid">
        <div className="xs-col-12">
          <h1>Beeroscope</h1>
          <h2>Rekommendera öl</h2>
          <p>Ange födelsedatum för att få en öl baserat på ditt horoskop för dagen (OBS detta är lögn...)</p>
          <Form setDate={setDate} setName={setName} setFormSent={setFormSent}/>
          <Beer />
          <h2>Sparad öl</h2>

        </div>
      </div>
    </>

  )

}



export default HomePage
