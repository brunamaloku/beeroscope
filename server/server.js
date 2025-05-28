import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const scorpioRespons = {
    statusCode: 200,
    output: [
      {
        planet: [Object],
        fullDegree: 146.4742786377649,
        normDegree: 26.47427863776491,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 212.86496927741385,
        normDegree: 2.8649692774138487,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 196.5624266692047,
        normDegree: 16.56242666920471,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 174.3891961852873,
        normDegree: 24.38919618528729,
        isRetro: 'false',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 221.92942974132276,
        normDegree: 11.929429741322764,
        isRetro: 'true',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 70.07753404701995,
        normDegree: 10.077534047019952,
        isRetro: 'true',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 248.15947882688852,
        normDegree: 8.159478826888517,
        isRetro: 'false',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 59.372917992088595,
        normDegree: 29.372917992088595,
        isRetro: 'true',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 316.89715724865437,
        normDegree: 16.897157248654366,
        isRetro: 'true',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 303.81449258494155,
        normDegree: 3.814492584941547,
        isRetro: 'false',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 251.29570996280475,
        normDegree: 11.29570996280475,
        isRetro: 'false',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 228.14513321814516,
        normDegree: 18.145133218145162,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 299.3912497489919,
        normDegree: 29.391249748991925,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 314.6933688719758,
        normDegree: 14.693368871975792,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 204.12518584737904,
        normDegree: 24.125185847379043,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 255.1290727453629,
        normDegree: 15.12907274536289,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 296.58488786975806,
        normDegree: 26.584887869758063,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 109.23891292327312,
        normDegree: 19.23891292327312,
        isRetro: 'True',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 108.53477659395162,
        normDegree: 18.53477659395162,
        isRetro: 'True',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 326.4742786377649,
        normDegree: 26.474278637764883,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 42.69611441304024,
        normDegree: 12.696114413040242,
        isRetro: 'False',
        zodiac_sign: [Object]
      },
      {
        planet: [Object],
        fullDegree: 222.69611441304025,
        normDegree: 12.696114413040249,
        isRetro: 'False',
        zodiac_sign: [Object]
      }
    ]
  };


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
        console.log(scorpioRespons);
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