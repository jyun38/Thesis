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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(router) 

// whenever a middleware function is mounted on / path
// executed for any type of HTTP request on / 
app.get('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
})

databaseQuery = (req, res) => {

	var MYIDS = JSON.parse(req.body.id, "");
	// console.log(typeof(MYIDS))
		var query = connection.query('SELECT DISTINCT symptom, question_ID FROM MentalHealth.questions_tbl LEFT JOIN symptom_tbl ON questions_tbl.SE_ID = symptom_tbl.symptom_ID WHERE SymptomOrEvidence = "S" AND question_ID IN (?);',
	[MYIDS],
	function(error, results, fields){
		if (error) throw error;
		newResults = JSON.stringify(results);
	});
	
}

router.post('/res2', (req,res) => {
	databaseQuery(req, res);

})

router.get('/res2', function(req,res,next){
	var obj = {table:[]};
	// console.log(newResults);
	obj.table.push(newResults);
	// console.log(obj);
	// var json = JSON.stringify(obj);
	res.send(obj);
	

})

//localhost 4000
var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Listening on http://localhost:", port);
});



