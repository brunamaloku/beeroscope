import { useState, useEffect, React } from 'react'
import axios from 'axios'

const Form = ({setDate, setName}) => {

    return (
        <>
            <div>
                <form className="form-inline" action="submit" />
                <label htmlFor="name" className="sr-only">Namn</label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="name"
                    placeholder="Namn"
                    onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="date" className="sr-only">Födelsedatum</label>
                <input
                    type="date"
                    className="form-control mb-2 mr-sm-2"
                    id="date"
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}></input>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                {/* saknar onclick */}
            </div>
        </>
    )

}

export default Form;