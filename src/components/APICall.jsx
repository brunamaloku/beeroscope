import { useEffect, React, useState } from 'react'
import axios from 'axios'
import BeerItem from './BeerItem';

const GetData = ({ year, month, day, setLikedItems, likedItems }) => {

    const [response, setResponse, ref] = useState([]);
    const URL = `http://localhost:5001/get?year=${year}&month=${month}&day=${day}`;

    

    const getResponse = async () => {
        try {
            const { data } = await axios.get(URL);
            setResponse(data);
        } catch (error) {
            console.log(error);
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