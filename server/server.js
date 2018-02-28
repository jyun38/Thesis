var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var mysql = require('mysql');
var router = express.Router();

//database information
var connection = mysql.createConnection({
	host: 'localhost', 
	user: 'root', 
	password: 'dbswldud', 
	database: 'MentalHealth'
});

var app = express();
var compiler = webpack(config);
// app.use(express.bodyParser());
// can load files in public directory
app.use(express.static('./public'));

// whenever a middleware function is mounted on / path
// executed for any type of HTTP request on / path
app.use('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
})

//A GET to the root of a resource returns a list of that resource
router.get('/next', function(req, res, next) {
 	connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
 		function (error, results, fields) {
 			if (error) throw error;
			res.send(JSON.stringify(results));
	});
});

connection.connect(function(err){
	if(err) {
			throw(err);
			console.log("Error in connecting database...");
		}	
	console.log("Database is connected...");
});
connection.end();


//localhost 4000
var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Listening on http://localhost:", port);
});
// connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
// 	function (err, rows, fields) {
//   	if (err) throw err
//   		// console.log(connection)
//   	//console.log('The solution is: ', rows)
// })


// var id = '111'

// app.post('/', function(req, res) {
// 	connection.query('SELECT * FROM MentalHealth.category_description WHERE from_ID= ?', id, 
// 	function(err, result){
// 		console.log(result);
// 	});
// })

// var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE from_ID= ?', id, 
	// function(err, result){
	// 	console.log(query.sql);
	// 	console.log(result);
	// });



// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + './index.html')
// })

// connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
// 	function (err, rows, fields) {
//   	if (err) throw err
//   		// console.log(App.q_Data)
//   	//console.log('The solution is: ', rows)
// })


// app.post('/results', function(req, res) {
//   // Get sent data.
//   var user = req.body;
//   // Do a MySQL query.
//   var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
//   	user, 
//   	function(err, result) {
//   		console.log(result);
//   	});
//   res.end('Success');
// });
 

 
// app.get("/query",function(req,res){
// 	connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
// 	function(err, rows) {
// 		// connection.end();
// 	  if (!err){
// 	  	res.send(rows);
// 	    console.log('The rows are being returned.');
// 	  }	
// 	  else {
// 	    console.log('Error while performing Query.');
// 	  }
// 	 });
// });

// app.get('/interface', function (req, resp) {
// 		resp.sendFile('index.html', {root: path.join(__dirname, '../client')})
// });
//Listen to POST requests to /users.


// // 		console.log("Database is connected.");
// app.post('/results', function(req, res){
// 	var user = req.body;

// 	var query = 'SELECT * FROM MentalHealth.category_description WHERE category="sleep"'
// 	});
// 	res.end('Success!');


		// connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"',
		// 	function (err, rows){
		// 		if(!err){
		// 			// console.log(rows);
		// 			// res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
		// 			res.send(rows);
		// 			// res.render('client/index.html', {rows: rows});
		// 			// return callback(err, rows);
		// 		}
		// 		else{
		// 			throw(err);
		// 			console.log('Error while performing Query.');
		// 		}
		// 	// console.log("wtf is this shit");
		// });
		// res.end('Success!');
	// 	// connection.end();
	// });

// });



// app.get('/', function (req, resp) {
// 		resp.sendFile('index.html', {root: path.join(__dirname, '../client')})
// 	});
// 	app.post('/', function (req, resp) {
// 		var user = req.body;
// 	  // Do a MySQL query.
// 	  var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', user, function(err, result) {
// 	    // Neat!
// 	  });
// 	  res.end('Success');


