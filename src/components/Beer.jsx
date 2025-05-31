import {useEffect, useState, React} from 'react'
import axios from 'axios'

const Beer = ({sign}) => {

const [beers, setBeers] = useState([]);

const getBeer = async () => {

try {

const {data} = await axios.get('http://localhost:5001/getBeers');
const filteredBeer = data.filter(b => b.apk >= 2 && b.apk <= 3);
setBeers(data);

    
} catch (error) {
    console.log(error);
}

}

useEffect(() => {

    const loadData = async () => {
      await getBeer();
    }
    loadData();
  }, []);


  return (
    <div>
      <ul>
        {beers.map(b =>{
            return <li key={b.rank}>{b.apk}</li>
        })}
      </ul>
    </div>
  )
}

export default Beer
