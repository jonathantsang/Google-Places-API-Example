var request = require('request')

/* API Key: AIzaSyAdD7p_vY24Bm22xCvpmxtNQ-Aco900tc8 */

var place = process.argv.slice(2);

var url_request = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + place + '&key=AIzaSyAdD7p_vY24Bm22xCvpmxtNQ-Aco900tc8'

console.log(url_request)

request(url_request, function(err, resp, body) {

	if(!err) {
		var data = JSON.parse(body)
		console.log(data.results[0].opening_hours.open_now)
		if (data.results[0].opening_hours.open_now){
			console.log(place + " is open now")
		}
		else {
			console.log(place + " is closed now")
		}
		

	}
	else if(err) {
		console.log("There was an error")
	}

});

/* console.log(results.text()) */
