import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const signMap = new Map();
const intervalMap = new Map();

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

const loadMaps = () =>{

    signMap.set(1, 'Capricorn');
    signMap.set(2, 'Taurus');
    signMap.set(3, 'Virgo');
    signMap.set(4, 'Scorpio');
    signMap.set(5, 'Aquarius');
    signMap.set(6, 'Cancer');
    signMap.set(7, 'Gemini');
    signMap.set(8, 'Libra');
    signMap.set(9, 'Aries');
    signMap.set(10, 'Sagittarius');
    signMap.set(11, 'Leo');
    signMap.set(12, 'Pisces');




}


const getBeer = async (sign) => {

    const {data} = await axios.post('https://api.apkollen.se', body);

    data.sort((a,b) => b.apk - a.apk);

    const max = data[0].apk;

    const interval = max/12;

    for (var i  = 0; i <= max; i+=interval){
        console.log(i);
    }

    return data;


}   

getBeer();

async function getSign({ month, year, day }) {
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

    //const { data } = await axios.post('https://json.freeastrologyapi.com/western/planets', body, headers);
    // return data.output[1].zodiac_sign.name.en;

    return "Scorpio";
}


app.get('/get', async (req, res) => { //döp om till bara "/" o så har vi bara en endpoint?
    try {
        const year = parseInt(req.query.year);
        const month = parseInt(req.query.month);
        const day = parseInt(req.query.day);

        const sign = await getSign(year, month, day);
        const beerdata = await getBeer(sign);

        res.json({
            'sign' : sign, 
            'beer' : beerdata
        });

    } catch (error) {
        console.log(error);
    }

})

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Example app listening on port ${port}`)
})