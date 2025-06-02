import { useState } from "react";
import HeartButton from "./HeartButton";

const BeerItem = ({ data, setLikedItems, likedItems, setResponseItem }) => {
    //const [beer, setBeerItem] = useState({});

    if(data.beer == undefined)
        return

    const date = new Date(data.date);
    let dateString = date.getDate();
    dateString += dateString.toString().slice(-1) < 3 ? 'a ' : 'e ';
    dateString += date.toLocaleString("sv-SE", { month: "long" });
    dateString += " ";
    dateString += date.getFullYear();

    const sign = data.sign;
    const beer = data.beer;
    //setBeerItem(data.beer);
    return (
        <>
        {!data ? (
          <div></div>
          ) : (<div className="beer-item" key={data.id}>
                <h3>{sign} den {dateString}</h3>
                <img src={data.image} alt={beer.name} className="beerImage" />
                <div className="like-div d-flex p-2 bd-highlight align-items-center">
                <p className="mb-0">Just idag behöver du som {sign} en stärkande {beer.subcategory}. En {beer.volume}cl  {beer.name} kommer passa dig utmärkt en dag som denna!</p>
                <HeartButton setLikedItems={setLikedItems} likedItems={likedItems} item={data} setResponseItem={setResponseItem}/>
                </div>
            </div>)}
        </>
    )
}
export default BeerItem