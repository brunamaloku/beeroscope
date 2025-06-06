import { useEffect } from "react";

const HeartButton = ({ setLikedItems, likedItems, item, setResponseItem }) => {
    function Like() {
        if (!likedItems.some(liked => liked.id === item.id)) {
            setLikedItems([
                item,
                ...likedItems
            ]);
            setResponseItem([]);
        }
        console.log(likedItems);
    }

    useEffect(() => { console.log(likedItems)}, [likedItems]);
    return (
        <button type="button" className="heart-button btn btn-outline-danger" onClick=
        {Like}
        // {<AddItemToList setLikedItems={setLikedItems} likedItems={likedItems} item={item}/>
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"></path>
            </svg>
        </button>
    );
}

export default HeartButton;