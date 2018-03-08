var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var mysql = require('mysql');
var router = express.Router();
let newResults;
var fs = require('fs');

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

router.post('/res2', (req,res) => {
	 var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category=?',
		req.body.id, 
		function(error, results, fields){
			if (error) throw error;
			// res.send(results);
			newResults = results; 
		});
	 console.log(req.body.id);
})

router.get('/res2', function(req,res,next){
		var obj = {table:[]};
		obj.table.push(newResults);
		var json = JSON.stringify(obj);
		res.send(json);
 })

//localhost 4000
var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Listening on http://localhost:", port);
});



