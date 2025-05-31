import { useState, useEffect, React } from 'react'
import axios from 'axios'

const GetAstro = ({year, month, day}) => {

    const [astro, setAstro] = useState("");
    const URL = `http://localhost:5001/getAstro?year=${year}&month=${month}&day=${day}`;
    console.log(URL);

    const getAstro = async () => {
        try {
            const { data } = await axios.get(URL);
            setAstro(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const loadData = async () => {
            await getAstro();
        }
        loadData();
    }, []);

    return (
        <>
            <p>{astro}</p>
        </>
    )
}

export default GetAstro
