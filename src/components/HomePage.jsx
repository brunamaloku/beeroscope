import {useState, useEffect, React} from 'react'
import axios from 'axios'

const HomePage = () => {

const [beers, setBeers] = useState([]);

const getBeers = async () => {

try {

const {data} = await axios.get('http://localhost:5001/getBeers');
setBeers(data);

    
} catch (error) {
    console.log(error);
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
      {beers?.map(b =>{
        return <li>{b.name}</li>
      })}
    </ul>
    </>
  )
}

export default HomePage
