import { React } from 'react'
import axios from 'axios'

const Form = ({ setDate, date, setResponseItem }) => {

    function ButtonClick(e, offSet) {
        e.preventDefault();

        if (date == undefined) {
            return;
        }

        const year = date.substring(0, 4)
        const month = date.substring(5, 7);
        const day = date.substring(8);

        const URL = `http://localhost:5001/?year=${year}&month=${month}&day=${day}&offSet=${offSet}`;

        axios.get(URL).then(function (response) {
            console.log(response);
            const data = response.data;
            setResponseItem([data]);
        }).catch(function (error) {
            console.log(error);
        })
    }

    const Button = ({ offSet, title }) => {
        return (<button type="submit" className="btn mb-2 mx-2" onClick={(e) => ButtonClick(e, offSet)}>{title}</button>)
    }

    return (
        <>
            <div>
                <form className="form-inline form-center mb-2" action="submit">
                    <label htmlFor="date" className="sr-only">Födelsedatum</label>
                    <input
                        type="date"
                        className="form-control mb-2 mr-sm-2"
                        id="date"
                        placeholder="Date"
                        onChange={(e) => setDate(e.target.value)}></input>
                    <div>
                        <Button offSet={-1} title={"Igår"} />
                        <Button offSet={0} title={"Idag"} />
                        <Button offSet={1} title={"Imorgon"} />
                    </div>
                </form>
            </div>
        </>
    )

}

export default Form;