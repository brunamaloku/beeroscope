import { useEffect } from "react";

const RemoveButton = ({ setLikedItems, likedItems, item }) => {
    function Remove() {
        console.log(item);
        console.log(likedItems);
        setLikedItems(likedItems.filter(liked => liked.id !== item.id));
        console.log(likedItems);
    }

    useEffect(() => { console.log(likedItems) }, [likedItems]);
    return (
        <a className="btn btn-primary" onClick={Remove}>Ta bort som favorit</a>
    );
}

export default RemoveButton;