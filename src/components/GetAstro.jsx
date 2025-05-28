import { useState, useEffect, React } from 'react'
import axios from 'axios'

const GetAstro = () => {

    const [astro, setAstro] = useState("");

    const getAstro = async () => {

        try {

            

            const { data } = await axios.get('http://localhost:5001/getAstro?year=2000&month=10&day=26');
            

            console.log(data)
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
