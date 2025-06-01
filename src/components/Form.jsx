import { useState, useEffect, React } from 'react'
import axios from 'axios'

const Form = ({setDate, setName, setFormSent}) => {

    function ButtonClick() {
        console.log()
        setFormSent(true);
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
                <button type="submit" className="btn mb-2" onClick={ButtonClick}>Submit</button>
                </form>
            </div>
        </>
    )

}

export default Form;