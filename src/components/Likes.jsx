import LikedItem from "./LikedItem";

const Likes = ({ likedItems, setLikedItems }) => {
    const listItems = likedItems.map(item => {
        //console.log(JSON.stringify(item))
        return (<div className="m-2" key={item.id}><LikedItem item={item} likedItems={likedItems} setLikedItems={setLikedItems} /></div>)
    });
    return (
        <div className="card-group col-lg justify-content-center" id="movie-cards">{listItems}</div>
    )

}

export default Likes;