const LikedItem = ({item}) => {
    const beer = item.beer;
    const date = new Date(item.date);
    let dateString = date.getDate();
    dateString += dateString.toString().slice(-1) < 3 ? 'a ' : 'e ';
    dateString += date.toLocaleString("sv-SE", { month: "long" });
    dateString += " ";
    dateString += date.getFullYear();

    return (
        <div className="card" style={{width: '18em'}}>
            <img src={item.image} className="card-img-top" alt={beer.name} />
                <div className="card-body" >
                    <h5 className="card-title" >{dateString}</h5>
                    <h6 className="beer-header">{beer.name}</h6>
                    <p className="card-text" >
                        
                    </p>
                    <a className="btn btn-primary">Ta bort som favorit</a>
                </div>
        </div>
    );
}

export default LikedItem;