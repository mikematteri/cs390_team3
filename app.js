var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/comciergedb';
var str = "";

app.set('view engine', 'jade');

app.route('/allcomics').get(function(req,res){
	
	MongoClient.connect(url, function(err, db) {
			var cursor = db.collection('comics').find();
		
			cursor.each(function(err, item){
			
				if(item != null)
				{
					str = str + item.comicID + ".<a href=" + item.comicURL + ">" 
						+ item.comicName + "</a></br>";
				}
			});
		
			res.send(str);
		});
});

app.get('/test',function(req,res)
{
	res.render('test',
			{title:'Test Title', message:'Test test test'})
});
	
var server = app.listen(3000,function() {});