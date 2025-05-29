import LikedItem from "./LikedItem";

const Likes = ({ likedItems }) => {
    const listItems = likedItems.map(item => {
        //console.log(JSON.stringify(item))
        return (<div key={item.id}><LikedItem item={item} /></div>)
    });
    return (
        <div className="card-group row" id="movie-cards">{listItems}</div>
    )

}

export default Likes;