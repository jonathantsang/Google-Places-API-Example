var request = require('request');
var fs = require('fs');

/* API Key: AIzaSyAdD7p_vY24Bm22xCvpmxtNQ-Aco900tc8 */

var place = process.argv.slice(2);

var url_request = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + place + '&key=AIzaSyAdD7p_vY24Bm22xCvpmxtNQ-Aco900tc8'
//console.log(url_request)

request(url_request, function(err, resp, body) {

	if(!err && resp.statusCode == 200) {
		//console.log(resp.statusCode)
		var data = JSON.parse(body);
		console.log(data.results[0].opening_hours.open_now);
		console.log(data.results[0].formatted_address);
		some(body);
	}
	
	else if (err) {
		console.log("There was an error")
	}

});

function some (data){
	//console.log(data.results[1].formatted_address);
	console.log(data)
	fs.writeFile("test.txt", data, function(err) {
    if(err) {
       return console.log('error');
    }

   console.log("The file was saved!");
}); 
}



/* console.log(results.text()) */
