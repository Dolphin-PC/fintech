var parseString = require('xml2js').parseString;
const request = require('request');

request('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json', function (error, response, body) {
    var object = JSON.parse(body)
    console.dir(object.stores[0])
});



