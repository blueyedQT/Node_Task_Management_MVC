var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
	index: function(req, res){
		res.render('tasks/index', {title: 'Welcome Page'});
	},
	index_json: function(req, res){
		Task.find({}, function(req, res){
			res.send(JSON.stringify(results));
		});
	},
	create: function(req, res){
		var a= new Task(req.body);
		a.save(function(err){
			if(err){
				res.send(JSON.stringify(err));
			} else{
				res.send('sucess');
			}
		});
	},
	show: function(req, res){
		res.render('tasks/show', {title: 'Welcome Page'});
	},
	edit: function(req, res){
		res.render('tasks/edit', {title: 'Welcome Page'});
	}	
}