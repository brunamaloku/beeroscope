import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [data, dataSet] = useState({});

  // function GetChart() {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     axios.post('https://json.freeastrologyapi.com/western/planets', {
  //       "year": 1998,
  //       "month": 3,
  //       "date": 3,
  //       "hours": 10,
  //       "minutes": 30,
  //       "seconds": 0,
  //       "latitude": 17.38405,
  //       "longitude": 78.45636,
  //       "timezone": 5.5,
  //       "config": {
  //         "observation_point": "topocentric",
  //         "ayanamsha": "tropical",
  //         "language": "en"
  //       }
  //     }, {
  //       withCredentials: false,
  //       params: {
  //         access_token: 'QzktiGgKjA4pJ9cUkscEr2M51omF1OoM1A8S6dS4',
  //       }
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //         'Accept-Encoding': 'gzip, deflate, br',
  //         'x-api-key': 'QzktiGgKjA4pJ9cUkscEr2M51omF1OoM1A8S6dS4'
  //       }
  //     }

  //     )
  //       .then(response => {
  //         setPosts(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, []);

  //   return (
  //     <ul>
  //       {posts.map(post => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  

  return (
    <>
      <p>Hello world!</p>
      <GetChartXML />
    </>
  )
}

export default App
