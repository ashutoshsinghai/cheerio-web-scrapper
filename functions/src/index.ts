import * as functions from 'firebase-functions';
//let request = require("request");
//var cheerio = require('cheerio');
const cors = require('cors');
//let data:any[];

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

let express = require('express');

let apps = express();
apps.use(cors({ origin: true }));

let coronadata = [
{
    "state": "Andhra Pradesh",
    "confirmed_national": 11,
    "confirmed_total": 11,
    "confirmed_foreign": 0,
    "recovereries": 1,
    "deaths": 0
},
{
    "state": "Bihar",
    "confirmed_national": 3,
    "confirmed_total": 3,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 1
},
{
    "state": "Chhattisgarh",
    "confirmed_national": 3,
    "confirmed_total": 3,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Delhi",
    "confirmed_national": 34,
    "confirmed_total": 35,
    "confirmed_foreign": 1,
    "recovereries": 6,
    "deaths": 1
},
{
    "state": "Goa",
    "confirmed_national": 3,
    "confirmed_total": 3,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Gujarat",
    "confirmed_national": 37,
    "confirmed_total": 38,
    "confirmed_foreign": 1,
    "recovereries": 0,
    "deaths": 2
},
{
    "state": "Haryana",
    "confirmed_national": 16,
    "confirmed_total": 30,
    "confirmed_foreign": 14,
    "recovereries": 11,
    "deaths": 0
},
{
    "state": "Himachal Pradesh",
    "confirmed_national": 3,
    "confirmed_total": 3,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 1
},
{
    "state": "Karnataka",
    "confirmed_national": 41,
    "confirmed_total": 41,
    "confirmed_foreign": 0,
    "recovereries": 3,
    "deaths": 1
},
{
    "state": "Kerala",
    "confirmed_national": 110,
    "confirmed_total": 118,
    "confirmed_foreign": 8,
    "recovereries": 4,
    "deaths": 0
},
{
    "state": "Madhya Pradesh",
    "confirmed_national": 15,
    "confirmed_total": 15,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 2
},
{
    "state": "Maharashtra",
    "confirmed_national": 121,
    "confirmed_total": 124,
    "confirmed_foreign": 3,
    "recovereries": 1,
    "deaths": 3
},
{
    "state": "Manipur",
    "confirmed_national": 1,
    "confirmed_total": 1,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Mizoram",
    "confirmed_national": 1,
    "confirmed_total": 1,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Odisha",
    "confirmed_national": 2,
    "confirmed_total": 2,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Puducherry",
    "confirmed_national": 1,
    "confirmed_total": 1,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Punjab",
    "confirmed_national": 33,
    "confirmed_total": 33,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 1
},
{
    "state": "Rajasthan",
    "confirmed_national": 36,
    "confirmed_total": 38,
    "confirmed_foreign": 2,
    "recovereries": 3,
    "deaths": 0
},
{
    "state": "Tamil Nadu",
    "confirmed_national": 20,
    "confirmed_total": 26,
    "confirmed_foreign": 6,
    "recovereries": 1,
    "deaths": 1
},
{
    "state": "Telengana",
    "confirmed_national": 31,
    "confirmed_total": 41,
    "confirmed_foreign": 10,
    "recovereries": 1,
    "deaths": 0
},
{
    "state": "Chandigarh",
    "confirmed_national": 7,
    "confirmed_total": 7,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Jammu and Kashmir",
    "confirmed_national": 11,
    "confirmed_total": 11,
    "confirmed_foreign": 0,
    "recovereries": 1,
    "deaths": 0
},
{
    "state": "Ladakh",
    "confirmed_national": 13,
    "confirmed_total": 13,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "Uttar Pradesh",
    "confirmed_national": 36,
    "confirmed_total": 37,
    "confirmed_foreign": 1,
    "recovereries": 11,
    "deaths": 0
},
{
    "state": "Uttarakhand",
    "confirmed_national": 4,
    "confirmed_total": 5,
    "confirmed_foreign": 1,
    "recovereries": 0,
    "deaths": 0
},
{
    "state": "West Bengal",
    "confirmed_national": 9,
    "confirmed_total": 9,
    "confirmed_foreign": 0,
    "recovereries": 0,
    "deaths": 1
}]


/*function funExec(res)
{request('https://www.mohfw.gov.in/#cases', function(err, resp, html) {
    if (!err) {
        const $ = cheerio.load(html);
        //console.log(html);
        $(".content .table-responsive tbody tr").each((e, i) => {
            $(i).each((r, s) => {
                let d = $(s).text().trim().replace(/[\n\t]/ig, '').replace(/      /g, '  ').split("  ").slice(1)
                data.push({
                    state: d[0],
                    confirmed_national: Number(d[1]),
                    confirmed_total: Number(d[1]) + Number(d[2]),
                    confirmed_foreign: Number(d[2]),
                    recoveries: Number(d[3]),
                    deaths: Number(d[4])
                })
            })

        })
        data = data.slice(0, data.length - 2)
        res.send(JSON.stringify(data));
    }
});
}*/
apps.get('/data',function(req,res){
	res.send(coronadata);
})
export const app = functions.https.onRequest(apps);