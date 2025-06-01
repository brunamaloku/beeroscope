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
  const [likedItems, setLikedItems] = useState(() => {
    const storedItems = localStorage.getItem('likedItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

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
