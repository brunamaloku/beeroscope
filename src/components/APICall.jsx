import { useEffect, React, useState } from 'react'
import axios from 'axios'
import BeerItem from './BeerItem';

//const GetData = ({ date, setLikedItems, likedItems, setFormSent, setResponseItem }) => {
const GetData = async (date) => {


    if (date == undefined) {
        //setFormSent(false);
        // return (
        //     <div></div>
        // )
        return;
    }

    const year = date.substring(0, 4)
    const month = date.substring(5, 7);
    const day = date.substring(8);

    const today = new Date()
    const inte = today.getDay();
    console.log(inte);

    // const [response, setResponse] = useState([]);
    const URL = `http://localhost:5001/?year=${year}&month=${month}&day=${day}&index={}`;

    console.log(URL)
    var data;

    axios.get(URL)
    .then(function (response) {
        // handle success
        console.log(response);
        data = response;
        return data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log("Hallåja!");
    });

    //const axios = require('axios').default;



  

    //const getResponse = async () => {
    // try {
    //     data = await axios.get(URL);
    //     //setResponse(data);
    // } catch (error) {
    //     console.log(error);
    //     //setFormSent(false);
    //     // return (
    //     //     <div></div>
    //     // )
    // }
    //}

    // useEffect(() => {
    // const loadData = async () => {
    //     await getResponse();
    // }
    // loadData();
    //}, []);

    //console.log(data);
    //return data;


    //return <BeerItem data={response} setLikedItems={setLikedItems} likedItems={likedItems}/>
}

export default GetData