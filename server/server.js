import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());


app.post('/getBeers', async (req, res) => {

    try {

        const body =  {
            "name": [""],
            "category": ["Öl & Cider"],
            "subcategory": [],
            "volume": [],  // [], [min] eller [min, max], större returnerar fel
            "alcvol": [0],
            "price": [],
            "apk": [0],  // Endast ett värde => inget max
            "rank": [1],  // Hur produkten rankas i vår databas just nu
            "articlenbr": [], // (Inte interval)
            "sortOrder": ["name", "asc"], // Anger hur resultatet ska sorteras; Första är ett värde (en av de andra
                                         // parametrarna utom maxItems) och andra är antingen "desc" (sjunkande)
                                         // eller "asc" (stigande). Default är ["apk", "desc"]. Endast värde ger "desc"
            "maxItems": 0  // maxItems = 0 ger alla produkter
            }

        //const resp = await fetch('https://api.apkollen.se', JSON.stringify(body));

    const {data} = await axios.post('https://api.apkollen.se', body);

    res.json(data);
        
    } catch (error) {
        
    }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})