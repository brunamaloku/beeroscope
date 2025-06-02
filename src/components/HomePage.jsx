import { useState, useEffect, React, use } from 'react'
import axios from 'axios'
import Beer from './Beer'
import GetAstro from './GetAstro'
import Form from './Form'
import GetData from './APICall'
import Likes from './Likes'
import LoadingSpinner from './LoadingSpinner'
import BeerItem from './BeerItem'


const HomePage = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [likedItems, setLikedItems] = useState(() => {
    const storedItems = localStorage.getItem('likedItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [responseItem, setResponseItem] = useState([]);

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  function Beer() {
    return (
      <BeerItem data={responseItem} setLikedItems={setLikedItems} likedItems={likedItems} />
      // responseItem != {} ? (
      //   // <GetData setLikedItems={setLikedItems} likedItems={likedItems} date={date} setFormSent={setFormSent} />
      //   <BeerItem data={responseItem} setLikedItems={setLikedItems} likedItems={likedItems} />
      // ) : (
      //   <div></div>
      // )
    )
  }

  return (
    <>
            <div className="row container-fluid">
        <div className="xs-col-12">
          <h1 className="beeroscope">Beeroscope</h1>
          <h2 className="rec">Rekommendera öl</h2>
          <p>Ange födelsedatum för att få en öl baserat på ditt horoskop för dagen</p>
          <Form setDate={setDate} setName={setName} setResponseItem={setResponseItem} date={date} responseItem={responseItem} />
          {responseItem.map(response => { console.log(response);
            return <div key={response.id}><BeerItem data={response} setLikedItems={setLikedItems} likedItems={likedItems} /></div>})}
          {/* <Button /> */}
          <h2 className="fav">Sparad öl</h2>
          <Likes likedItems={likedItems} setLikedItems={setLikedItems}/>
        </div>
      </div>
          
      
    </>

  )

}



export default HomePage
