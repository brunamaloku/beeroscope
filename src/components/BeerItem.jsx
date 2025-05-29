const BeerItem = ({ data }) => {

    if(data.beer == undefined)
        return

    const date = new Date();
    let dateString = date.getDate();
    dateString += dateString.toString().slice(-1) < 3 ? 'a ' : 'e ';
    dateString += date.toLocaleString("sv-SE", { month: "long" })

    const sign = data.sign;
    const beer = data.beer;
    return (
        <>
            <div className="beer-item">
                <h3>{sign} den {dateString}</h3>
                <img src={data.image} alt="ölburk/flaska" className="beerImage" />
                <p>Just idag behöver du som {sign} en stärkande {beer.subcategory}. En {beer.volume}cl  {beer.name} kommer passa dig utmärkt en dag som denna!</p>
            </div>
        </>
    )
}
export default BeerItem