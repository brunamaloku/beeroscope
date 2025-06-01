import { useState, useEffect, React, use } from 'react'
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
  // const [likedItems, setLikedItems] = useState(() => {
  //   const storedItems = localStorage.getItem('likedItems');
  //   return storedItems ? JSON.parse(storedItems) : [];
  // });

  const [likedItems, setLikedItems] = useState([{"sign":"Scorpio","beer":{"url":"https://www.bordershop.com/se/ol-cider/svensk-ol/abro-original-52-2035394","name":"Åbro Original 5,2%","category":"Öl & Cider","subcategory":"Svensk Öl","volume":33,"alcvol":5.2,"price":4.46,"apk":3.8461537,"articleNbr":2035394,"rank":39},"image":"https://cmxsapnc.cloudimg.io/fit/1200x1200/fbright5/_img_/1423/abro-original-52.jpg","date":"2025-06-01T13:03:55.268Z","id":"Scorpiohttps://www.bordershop.com/se/ol-cider/svensk-ol/abro-original-52-203539411"}])


  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

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
      <div className="container">
          <h1>Beeroscope</h1>
          <h2>Rekommendera öl</h2>
          <p>Ange födelsedatum för att få en öl baserat på ditt horoskop för dagen (OBS detta är lögn...)</p>
          <Form setDate={setDate} setName={setName} setFormSent={setFormSent} />
          <Beer />
          {/* <Button /> */}
          <h2>Sparad öl</h2>
          <Likes likedItems={likedItems} setLikedItems={setLikedItems}/>
      </div>
    </>

  )

}



export default HomePage
