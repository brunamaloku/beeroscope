import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get('/getBeers', async (req, res) => {
    console.log("i get beers")

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
        console.log(error);
    }

})


app.get('/getAstro', async (req, res) => {
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month);
    const day = parseInt(req.query.day);

    console.log(year)
    try {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'wWNBWbaWhs1q5QDEo7LPM4RcaIm2Kv553ZWknDGE'
            }
        };
        const body = {
            "year": year,
            "month": month,
            "date": day,
            "hours": 1,
            "minutes": 30,
            "seconds": 0,
            "latitude": 55.58333,
            "longitude": 13.00073,
            "timezone": 2,
            "config": {
                "observation_point": "topocentric",
                "ayanamsha": "tropical",
                "language": "en"
            }
        }
        //console.log(scorpioRespons);
        //const { data } = await axios.post('https://json.freeastrologyapi.com/western/planets', body, headers);

        // const sign = data.output[1].zodiac_sign.name.en;

        const sign = "Scorpio"        

        res.json(sign);

    } catch (error) {

    }

})

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Example app listening on port ${port}`)
})