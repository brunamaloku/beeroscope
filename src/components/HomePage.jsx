import { useState, useEffect, React } from 'react'
import axios from 'axios'

const HomePage = () => {

  const [beers, setBeers] = useState([]);
  const [date, setDate] = useState();
  const [name, setName] = useState("");

  const getBeers = async () => {

    try {

      const { data } = await axios.get('http://localhost:5001/getBeers');
      setBeers(data);


    } catch (error) {
      console.log(error);
    }

  }

  const submitForm = async () => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/getBeers', {
        name: [name],
        date: date
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  useEffect(() => {

    const loadData = async () => {
      await getBeers();
    }
    loadData();
  }, []);


  return (
    <>
      <ul>
        {beers?.map(b => {
          <li>{b.name}</li>
        })}
      </ul>
    </>
  )

}



export default HomePage
