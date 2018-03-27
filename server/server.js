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
	var stringMYIDS = JSON.stringify(MYIDS); 
	var cleanLeft = stringMYIDS.replace("[", "");
	var cleanedMYIDS = cleanLeft.replace("]", ""); 

	// var query1 = 'SELECT distinct `code_ICD10`, dx_name, chapter, chapter_name FROM '
	// var query2 = '(SELECT symptom, code_ID, IF(dx_criteria IS NULL, "N/A", "MET") AS `dx_criteria_result` FROM '
	// var query3 = '(SELECT distinct symptom, code_ID FROM MentalHealth.symptom_description WHERE code_ID IN '
	// var query4 = '(SELECT code_ID FROM MentalHealth.symptom_description WHERE symptom_ID IN '
	// var query5 = '(SELECT DISTINCT SE_ID FROM MentalHealth.questions_tbl '
	// var query6 = 'LEFT JOIN symptom_tbl ON questions_tbl.SE_ID = symptom_tbl.symptom_ID '
	// var query7 = 'WHERE SymptomOrEvidence = "S" AND question_ID IN ('

	// var query8 = ')))) AS `A`'
	// var query9 = 'LEFT JOIN '
	// var query10 = '(SELECT distinct dx_criteria FROM MentalHealth.questions_tbl '
	// var query11 = 'LEFT JOIN symptom_tbl ON questions_tbl.SE_ID = symptom_tbl.symptom_ID '
	// var query12 = 'WHERE SymptomOrEvidence = "S" AND question_ID IN ('

	// var query13 = ')) AS `B` ON A.symptom = B.dx_criteria) AS C '
	// var query14 = 'LEFT JOIN dx_info ON C.code_ID = dx_info.code_ID '
	// var query15 = 'WHERE dx_criteria_result = "MET";'
	var query1 = 'SELECT D.code_ID, totalNum, selectedNum, accuracy, dx_name, code_ICD10, chapter, chapter_name, URL FROM '
	var query2 = '(SELECT code_ID, count(dx_criteria) AS totalNum, count(symptom) AS selectedNum, Round((count(symptom)/count(*))*100, 2) AS accuracy FROM '
	var query3 = '(SELECT DISTINCT symptom, dx_criteria, code_ID, IF(dx_criteria IS NULL, "N/A", "MET") AS `dx_criteria_result` FROM '
	var query4 = '(SELECT DISTINCT symptom AS dx_criteria, code_ID FROM MentalHealth.symptom_info  '
	var query5 = 'WHERE code_ID IN '
	var query6 = '(SELECT code_ID FROM MentalHealth.symptom_info WHERE symptom_ID IN '
	var query7 = '(SELECT DISTINCT SE_ID FROM MentalHealth.questions_tbl '
	var query8 = 'LEFT JOIN symptom_info ON questions_tbl.SE_ID = symptom_info.symptom_ID '
	var query9 = 'WHERE SymptomOrEvidence = "S" AND question_ID IN ('

	var query10 = ')))) AS `A` LEFT JOIN '
	var query11 = '(SELECT symptom FROM MentalHealth.questions_tbl '
	var query12 = 'LEFT JOIN symptom_info ON questions_tbl.SE_ID = symptom_info.symptom_ID '
	var query13 = 'WHERE SymptomOrEvidence = "S" AND question_ID IN ('

	var query14 = ')) AS `B` ON A.dx_criteria = B.symptom) AS `C` '
	var query15 = 'GROUP BY code_ID) AS `D` '
	var query16 = 'LEFT JOIN dx_info ON D.code_ID = dx_info.code_ID '
	var query17 = 'ORDER BY accuracy DESC; '
	// console.log(MYIDS);
	// var query5 = ')))) AS A LEFT JOIN (SELECT DISTINCT dx_criteria FROM MentalHealth.questions_tbl '
	// var query6 = 'LEFT JOIN symptom_tbl ON questions_tbl.SE_ID = symptom_tbl.symptom_ID WHERE SymptomOrEvidence = "S" AND question_ID IN ('
	// var query7 = ')) AS B ON A.symptom = B.dx_criteria'
	// var query7 = ' WHERE dx_criteria <> "null";'

	var newQuery = query1+query2+query3+query4+query5+query6+query7+
		query8+query9+cleanedMYIDS+query10+query11+query12+query13+cleanedMYIDS+query14+query15+query16+query17; 
	console.log(newQuery);

	var query = connection.query(newQuery,
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

	// console.log(obj);
	// var json = JSON.stringify(obj);
	// console.log(typeof(obj));
	// console.log(typeof(obj.table));

	if(obj != null){
		obj.table.push(newResults);
		res.send(obj);
	}

	

})

//localhost 4000
var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Listening on http://localhost:", port);
});



