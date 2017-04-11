var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var Utils = require('./utils');

var ObjectID = require('mongodb').ObjectID;

var findFavorites = function(db, callback){
	var cursor = db.collection('favorites').find();
	cursor.each(function(err, doc){
		if (doc != null)
		{
			console.dir(doc);
		}
		else
		{
			callback();
		}
	});
};

var findComics = function(db, callback){
	var cursor = db.collection('comics').find();
	cursor.each(function(err, doc){
		if (doc != null)
		{
			console.dir(doc);
		}
		else
		{
			callback();
		}
	});
};

var findComics2 = function(db, callback) {
	var cursor = db.collection('comics').find({}).project({_id:0});
	
	cursor.each((err, doc) => {
		assert.equal(err,null);
		
		if(doc != null){
			console.dir(doc);
		}
		else
		{
			callback();
		}
	});
};

var sumTags = function(db, callback){
	var agr = [{$group: {_id: 1, all: { $sum: "$appliedToComicCount" } } }];
	
	var cursor = db.collection('tags').aggregate(agr).toArray( (err, res) => {
		
		assert.equal(err, null);
		console.log(res);
		
		callback(res);
	});
};

var url = 'mongodb://localhost:27017/comciergedb';

MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server!");
	//findFavorites(db, function() {
	//	db.close;
	//});
	
	/*
	db.listCollections().toArray(function (err, collections) {
		assert.equal(err, null);
		
		console.dir(collections);
		
		db.close;
	});
	*/
	
	/*
	findComics(db, function() {
		db.close();
	});
	*/
	
	/*
	db.collection('comics').find({}).count().then((n) => {
		
		console.log('There are ' + n + ' documents');
		db.close();
	});
	*/
	
	var collection = db.collection('comics');
	var query = { comicName: 'Three Panel Soul' }
	
	/*
	collection.findOne ((query), (err, doc) => {
		if (err) {
			console.log(err);
		}
		else
		{
			console.log(doc);
		}
		
		db.close();
	});
	*/
	
	/*
	findComics2(db, () => {
		db.close();
	});
	*/
	
	/*
	sumTags(db, () => {
		db.close();
	});
	*/
	
	/*
	Utils.toggleFavorite(db, () => {
		db.close();
	});
	*/
	
	/*
	MongoClient.connect(url, function(err, db) {
		var cursor = db.collection('comics').find().project({_id: 0});
		cursor.each(function(err, doc){
			console.log(doc);
		});
		
		db.close();
	});
	*/
	
	db.close();
	
});