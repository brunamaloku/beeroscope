import LikedItem from "./LikedItem";

const Likes = ({ likedItems, setLikedItems }) => {
    const listItems = likedItems.map(item => {
        return (<div className="m-2 like-item" key={item.id}><LikedItem item={item} likedItems={likedItems} setLikedItems={setLikedItems} /></div>)
    });
    return (
        <div className="" id="beer-cards">{listItems}</div>
    )

}

export default Likes;