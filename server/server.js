import express from 'express'
import cors from 'cors'
import axios from 'axios'
import puppeteer from 'puppeteer'
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


async function getImageFromWeb(beer) {
    const URL = beer.url;

    const webBrowser = await puppeteer.launch();
    const newPage = await webBrowser.newPage();
    await newPage.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 }); // 60 sekunder
    await newPage.waitForSelector('.image img');

    const imageUrl = await newPage.$eval('.image img', img => img.getAttribute('srcset'));

    let firstPic = imageUrl.split(',')[0].trim().split(' ')[0];
    firstPic = firstPic.slice(2);
    const completeUrl = 'https://' + firstPic;

    beer.image = completeUrl;

    return completeUrl;

}

async function getBeer(sign, index) {

    const beers = beerMap.get(sign);
    //const index = Math.round(Math.random() * beers.length);

    return beers[index];

}

const loadMaps = () => {

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

async function getImage(beer) {
    if (beer.image != undefined)
        return beer.image;
    console.log("going online")
    return await getImageFromWeb(beer);
}


async function loadImages() {
    console.log("starting scraping");
    for (var i = 1; i < 13; i++) {
        const beers = beerMap.get(signMap.get(i));
        console.log("starting with " + signMap.get(i))

        var date = new Date();
        date.setDate(date.getDate() - 1);

        for (var j = 0; j < 3; j++) { //detta utgår från att man startar om servern varje dag...
            const index = date.getDate();
            console.log(index);
            try {
                beers[index].image = await getImageFromWeb(beers[index]);
                console.log(beers[index]);
            } catch (error) {
                console.log("No image found for " + beers[index].name);
                console.log(error);
            }
            date.setDate(date.getDate() + 1);
        }

        console.log("done with " + signMap.get(i))
    }
    console.log("done with everything")
}

const loadBeer = async () => {

    const { data } = await axios.post('https://api.apkollen.se', body);

    data.sort((a, b) => a.apk - b.apk);

    const size = data.length / signMap.size;
    var j = 0;

    for (var i = 1; i <= signMap.size; i++) {

        const sign = signMap.get(i);
        const filteredBeer = data.slice(j, (j + size));
        beerMap.set(sign, filteredBeer);

        j += size;
    }

    loadImages();
}

loadMaps();
loadBeer();

async function getSign(year, month, day) {
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'cu1xWgV6D877WWsuegBR49nHsaKzsqOR130y3sXq'
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

    const { data } = await axios.post('https://json.freeastrologyapi.com/western/planets', body, headers);
    return data.output[1].zodiac_sign.name.en;

    // return "Scorpio";
}


app.get('/', async (req, res) => {
    try {
        const year = parseInt(req.query.year);
        const month = parseInt(req.query.month);
        const day = parseInt(req.query.day);
        const offSet = parseInt(req.query.offSet);

        var date = new Date();
        date.setDate(date.getDate() + offSet);
        const index = date.getDate();

        console.log(req.query)
        console.log(year);
        console.log(month);
        console.log(day)

        const sign = await getSign(year, month, day);
        const beerdata = await getBeer(sign, index);
        const image = await getImage(beerdata);
        const id = sign + beerdata.url + date.getDate();

        res.json({
            'sign': sign,
            'beer': beerdata,
            'image': image,
            'date': date,
            'id': id
        });

    } catch (error) {
        console.log(error);
    }

})

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Example app listening on port ${port}`)
})