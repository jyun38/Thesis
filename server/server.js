var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var mysql = require('mysql');
var router = express.Router();
// var myApp = require('../components/App.js');
// console.log(myApp);
//database information
var connection = mysql.createConnection({
	host: 'localhost', 
	user: 'root', 
	password: 'dbswldud', 
	database: 'MentalHealth'
});

connection.connect(function(err){
	if(err) {
			throw(err);
			console.log("Error in connecting database...");
		}	
	console.log("Database is connected!");
});

var app = express(); // main app
// var admin = express(); // the sub app

var compiler = webpack(config);
// app.use(express.bodyParser());

// can load files in public directory
// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(router);

// whenever a middleware function is mounted on / path
// executed for any type of HTTP request on / 
app.get('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
})

// router.get('/res', function(req, res, next){
// 	// console.log(req.body);
// 		var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category=?',
// 		'attachment', 
// 		function(error, results, fields){
// 			connection.end();
// 			if (error) throw error;
// 			res.send(results);
// 		});	
// });

router.get('/res2', function(req,res,next){
	// 	var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category=?',
	// 	req.body.id, 
	// 	function(error, results, fields){
	// 		connection.end();
	// 		if (error) throw error;
	// 		//console.log(results);
	// 		res.send(results);
	// //		console.log(results);
	// 	});	 
	//console.log(req.body.id)
	// res.send(res);
	// var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category=?',
	// req.body.id, 
	// function(error, results, fields){
	// 	connection.end();
	// 	if (error) throw error;
	// 	console.log(results);
	// 	res.send(results);
	// });
})

app.post('/res2', (req,res) =>{
	var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category=?',
		req.body.id, 
		function(error, results, fields){
			connection.end();
			if (error) throw error;
			//console.log(results);
			res.send(results);
			//console.log(results);
		});	 
})

//localhost 4000
var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Listening on http://localhost:", port);
});


 

// connection.end();



