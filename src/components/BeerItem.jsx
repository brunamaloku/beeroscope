import HeartButton from "./HeartButton";

const BeerItem = ({ data, setLikedItems, likedItems, setResponseItem }) => {

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
    return (
        <>
           {!data ? (
          <div></div>
          ) : (<div className="beer-item bg-white px-1 py-2" key={data.id}>
                <h3>{sign} den {dateString}</h3>
                <img src={data.image} alt={beer.name} className="beerImage" />
                <div className="like-div d-flex p-2 bd-highlight align-items-center">
                <p className="mb-0 text-dark beer-text">Just idag behöver du som {sign} ett stärkande glas {beer.subcategory}. En {beer.volume}cl  {beer.name} kommer passa dig utmärkt en dag som denna!</p>
                <HeartButton setLikedItems={setLikedItems} likedItems={likedItems} item={data} setResponseItem={setResponseItem}/>
                </div>
            </div>)}
        </>
    )
}
export default BeerItem