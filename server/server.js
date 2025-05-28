import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());


app.get('/getBeers', async (req, res) => {

    try {

        const body =  {
            "name": [""],
            "category": ["Öl & Cider"],
            "subcategory": [],
            "volume": [],
            "alcvol": [0],
            "price": [],
            "apk": [0],
            "rank": [1],
            "articlenbr": [],
            "sortOrder": ["name", "asc"],
            "maxItems": 0 
            }

    const {data} = await axios.post('https://api.apkollen.se', body);

    data.sort((a, b) => {return b.apk - a.apk });

    res.json(data);
        
    } catch (error) {
        
    }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})