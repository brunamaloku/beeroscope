import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());


app.get('/getBeers', async (req, res) => {

    try {

        const body = {
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

    } catch (error) {

    }

})


app.get('/getAstro/:year', async (req, res) => {
    const {year} = req.params["year"];

    console.log(year);
    try {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'QzktiGgKjA4pJ9cUkscEr2M51omF1OoM1A8S6dS4'
            }
        };
        const body = {
            "year": 1998,
            "month": 3,
            "date": 3,
            "hours": 10,
            "minutes": 30,
            "seconds": 0,
            "latitude": 17.38405,
            "longitude": 78.45636,
            "timezone": 5.5,
            "config": {
                "observation_point": "topocentric",
                "ayanamsha": "tropical",
                "language": "en"
            }
        }
        const { data } = await axios.post('https://json.freeastrologyapi.com/western/planets', body, headers);

        res.json(data);

    } catch (error) {

    }

})

app.get('/:id', function (req, res) {
    console.log(req.params['id']);
    res.send();
});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Example app listening on port ${port}`)
})