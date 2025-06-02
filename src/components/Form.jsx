import { useState, useEffect, React, use } from 'react'
import axios from 'axios'
import GetData from './APICall';

const Form = ({setDate, date, setName, setResponseItem, responseItem}) => {

    function ButtonClick(e, offSet) {
        e.preventDefault();

        if (date == undefined) {
            return;
        }
        console.log()
    
        const year = date.substring(0, 4)
        const month = date.substring(5, 7);
        const day = date.substring(8);

        if (year == "" || month == "" || day == "") {
            return;
        }
    
        var today = new Date();
        today.setDate(today.getDate() + offSet);
        const number = today.getDate();

        
    
        const URL = `http://localhost:5001/?year=${year}&month=${month}&day=${day}&offSet=${offSet}`;
    
        console.log(URL)
        var data;
    
        axios.get(URL).then(function (response) {
            console.log(response);
            data = response.data;
            setResponseItem([data]);
        }).catch(function (error) {
            console.log(error);
        })
        console.log("hej");
    }

    return (
        <>
            <div>
                <form className="form-inline form-center mb-2" action="submit">
                {/* <label htmlFor="name" className="sr-only">Namn</label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="name"
                    placeholder="Witchy Bitchy"
                    onChange={(e) => setName(e.target.value)}></input> */}
                <label htmlFor="date" className="sr-only">Födelsedatum</label>
                <input
                    type="date"
                    className="form-control mb-2 mr-sm-2"
                    id="date"
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}></input>
                    <div>
                <button type="submit" className="btn mb-2 mx-2" onClick={(e) => ButtonClick(e, -1)}>Igår</button>
                <button type="submit" className="btn mb-2 mx-2" onClick={(e) => ButtonClick(e, 0)}>Idag</button>
                <button type="submit" className="btn mb-2 mx-2" onClick={(e) => ButtonClick(e, 1)}>Imorgon</button>
                </div>
                </form>
            </div>
        </>
    )

}

export default Form;