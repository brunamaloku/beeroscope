import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const signMap = new Map();
const beerMap = new Map();

const body = {
        "name": [""],
        "category": ["Öl & Cider", "Vin"],
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


async function getImage(URL) {
    //scraping via URL här
    //return "https://cmxsapnc.cloudimg.io/fit/1534x1534/fbright5/_img_/20907/abro-brygg-mastarens-premium-gold-59.jpg"
    return "https://cmxsapnc.cloudimg.io/fit/1200x1200/fbright5/_img_/1423/abro-original-52.jpg";
}

async function getBeer(sign) {
    
    const beers = beerMap.get(sign);
    const index = Math.round(Math.random() * beers.length);

    return beers[index];

}

const loadMaps = () =>{

    signMap.set(1, 'Pisces');
    signMap.set(2, 'Leo');
    signMap.set(3, 'Sagittarius');
    signMap.set(4, 'Aries');
    signMap.set(5, 'Libra');
    signMap.set(6, 'Gemini');
    signMap.set(7, 'Cancer');
    signMap.set(8, 'Aquarius');
    signMap.set(9, 'Scorpio');
    signMap.set(10, 'Virgo');
    signMap.set(11, 'Taurus');
    signMap.set(12, 'Capricorn');

}


const loadBeer = async () => {

    const {data} = await axios.post('https://api.apkollen.se', body);

    data.sort((a,b) => a.apk - b.apk);

    const size = data.length / signMap.size;
    var j = 0;

    for (var i  = 1; i <= signMap.size; i++){

        const sign = signMap.get(i);
        const filteredBeer = data.slice(j, (j+size));
        beerMap.set(sign, filteredBeer);
        
        j+=size;
    }

}   

loadMaps();
loadBeer();

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
        const image = await getImage(beerdata.url);
        const date = new Date();
        const id = sign + beerdata.url + date.getDate();

        // let respons = JSON.stringify();


        res.json({
            'sign' : sign,
            'beer' : beerdata,
            'image' : image,
            'date' : date,
            'id' : id
        });

    } catch (error) {
        console.log(error);
    }

})

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Example app listening on port ${port}`)
})