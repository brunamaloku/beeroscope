import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Beer from './Beer'
import GetAstro from './GetAstro'
import Form from './Form'
import GetData from './APICall'
import Likes from './Likes'

const HomePage = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [likedItems, setLikedItems] = useState([{"sign":"Scorpio","beer":{"url":"https://www.bordershop.com/se/ol-cider/svensk-ol/abro-brygg-mastarens-premium-gold-59-2041193","name":"Åbro Brygg Mästarens Premium Gold 5,9%","category":"Öl & Cider","subcategory":"Svensk Öl","volume":33,"alcvol":5.9,"price":4.78,"apk":4.0717735,"articleNbr":2041193,"rank":24},"image":"https://cmxsapnc.cloudimg.io/fit/1534x1534/fbright5/_img_/20907/abro-brygg-mastarens-premium-gold-59.jpg","date":"2025-05-29T19:44:43.375Z","id":"Scorpiohttps://www.bordershop.com/se/ol-cider/svensk-ol/abro-brygg-mastarens-premium-gold-59-204119329"}]);


  function Beer() {
    return (
      formSent ? (
        <GetData setLikedItems={setLikedItems} likedItems={likedItems} />
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
          <Form setDate={setDate} setName={setName} setFormSent={setFormSent} />
          <Beer />
          {/* <Button /> */}
          <h2>Sparad öl</h2>
          <Likes likedItems={likedItems} setLikedItems={setLikedItems}/>
        </div>
      </div>
    </>

  )

}



export default HomePage
