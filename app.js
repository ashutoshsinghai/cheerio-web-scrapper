let request = require("request");
var cheerio = require('cheerio');

let serv = require("http");

let states = []

serv.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(states));
    res.end();
}).listen(5005)

let data = [];
let total = 0
let deaths = 0
let meta = {}

console.log("listening to port 5005")

request('https://www.mohfw.gov.in/#cases', function(err, resp, html) {
    if (!err) {
        const $ = cheerio.load(html);
        //console.log(html);
        let data = $(".site-update .data-table table tbody tr")
        data = data.slice(0,35)
        data.each((e,i)=>{
            let d = $(i).text().trim().replace(/[\n\t]/ig, ' ').split("  ")
            // console.log(d)
             states.push({
                id:Number(d[0]),
                state: d[1],
                active:Number(d[2]),
                recovereries: Number(d[3]),
                deaths: Number(d[4]),
                confirmed_total: Number(d[5]),
            })
        })
        console.log(states)
            /*var t = [];
            let d = $(i).text().trim().replace(/[\n\t]/ig, '').replace(/ {6}/g, '  ').replace(/ {4}/g, '  ').split("  ").slice(1);
            data.push({
                state: d[0],
                confirmed_total: Number(d[1]),
                recovereries: Number(d[2]),
                deaths: Number(d[3])
            })
            total += Number(d[1])
            deaths += Number(d[3])*/
        /*
                meta["last_updated_date"] = $(".content p:first-child").text().match(/\d?\d:\d\d/)[0];
                meta["last_updated_time"] = $(".content p:first-child").text().match(/\d?\d\.\d?\d\.\d\d\d?\d?/)[0]
                meta["total_confirmed"] = total;
                meta["total_deaths"] = deaths;
                data = data.slice(0, data.length - 2)
                console.table(meta);
                console.table(data);*/
    }
});