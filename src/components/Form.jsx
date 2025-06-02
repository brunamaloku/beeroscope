import { useState, useEffect, React, use } from 'react'
import axios from 'axios'
import GetData from './APICall';

const Form = ({setDate, date, setName, setResponseItem, responseItem}) => {

    function ButtonClick(e) {
        e.preventDefault();
        //setFormSent(true);
        console.log("Button")
        //const data = GetData(date);



        if (date == undefined) {
            return;
        }
    
        const year = date.substring(0, 4)
        const month = date.substring(5, 7);
        const day = date.substring(8);
    
    
        // const [response, setResponse] = useState([]);
        const URL = `http://localhost:5001/?year=${year}&month=${month}&day=${day}`;
    
        console.log(URL)
        var data;
    
        axios.get(URL)
        .then(function (response) {
            // handle success
            console.log(response);
            data = response.data;
            //console.log(data + "form");
            setResponseItem(v => [data, ...v]);
            //return data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            console.log("Hallåja!");
        });
        console.log("hej");
    }

    return (
        <>
            <div>
                <form className="form-inline form-center" action="submit">
                <label htmlFor="name" className="sr-only">Namn</label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="name"
                    placeholder="Witchy Bitchy"
                    onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="date" className="sr-only">Födelsedatum</label>
                <input
                    type="date"
                    className="form-control mb-2 mr-sm-2"
                    id="date"
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}></input>
                <button type="submit" className="btn mb-2" onClick={(e) => ButtonClick(e)}>Submit</button>
                </form>
            </div>
        </>
    )

}

export default Form;