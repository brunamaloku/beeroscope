import LikedItem from "./LikedItem";

const Likes = ({likedItems}) => {
    const listItems = likedItems.map(item =>

        <li key={item.beer.url}>
            <LikedItem item={item} />
        </li>
    );
    return (
        <ul id="liked-items">{listItems}</ul>
    )

}

export default Likes;