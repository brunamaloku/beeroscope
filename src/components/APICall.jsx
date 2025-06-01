import { useEffect, React, useState } from 'react'
import axios from 'axios'
import BeerItem from './BeerItem';

const GetData = ({ date, setLikedItems, likedItems, setFormSent }) => {

    if (date == undefined) {
        setFormSent(false);
        return (
            <div></div>
        )
    }

    const year = date.substring(0,4)
    const month = date.substring(5,7);
    const day = date.substring(8);


    const [response, setResponse] = useState([]);
    const URL = `http://localhost:5001/?year=${year}&month=${month}&day=${day}`;

    console.log(URL)

    const getResponse = async () => {
        try {
            const { data } = await axios.get(URL);
            setResponse(data);
        } catch (error) {
            console.log(error);
            setFormSent(false);
        return (
            <div></div>
        )
        }
    }

    useEffect(() => {
        const loadData = async () => {
            await getResponse();
        }
        loadData();
    }, []);

    return <BeerItem data={response} setLikedItems={setLikedItems} likedItems={likedItems}/>
}

export default GetData