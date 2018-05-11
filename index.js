const express = require("express");
var request = require('request');
const app = express();

app.get("/SanFSB", function(req, res){
	request('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  res.send(body);
});
})

app.listen(8000, () => console.log('Example app listening on port 8000!'))