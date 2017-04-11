// var fs = require("fs");

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program ended");

//var fs = require("fs");
//
//fs.readFile('input.txt', function (err, data){
//	if (err)
//	{
//		return console.error(err);
//	}
//	console.log(data.toString());
//	
//}
//
//);

//console.log("ENDUT!  HOCH HECH!");

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//import {recommender, compareUsers, toggleFavorite, addTag, addRating} from 'utils';
//import {toggleFavorite} from 'utils';
var toggleFavorite = require('toggleFavorite');

var url = 'mongodb://localhost:27017/comciergedb';
MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server!");
	
	Utils.toggleFavorite();
	
	db.close;
});