import { useEffect } from "react";

const RemoveButton = ({ setLikedItems, likedItems, item }) => {
    function Remove() {
        setLikedItems(likedItems.filter(liked => liked.id !== item.id));
    }

    useEffect(() => { console.log(likedItems) }, [likedItems]);
    return (
        <a className="btn btn-primary" onClick={Remove}>Ta bort som favorit</a>
    );
}

export default RemoveButton;