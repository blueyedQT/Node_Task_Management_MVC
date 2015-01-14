var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
	index: function(req, res){
		Task.find({}, function(err, task_array) {
			if(err) {
				console.log(err);
				res.render('index', {title: 'Task Management'});
			} else {
				res.render('tasks/index', {title: 'Task Management', tasks: task_array});
			}
		});	
		// res.render('tasks/index', {title: 'Welcome Page'});
	},
	// index_json: function(req, res){
	// 	Task.find({}, function(req, res){
	// 		res.send(JSON.stringify(results));
	// 	});
	// },
	create: function(req, res){
		var a = new Task(req.body);
		a.save(function(err){
			if(err){
				res.send(JSON.stringify(err));
			} else{
				res.send('sucess');
			}
		});
	},
	remove: function(req, res){
		Task.remove({_id: req.params.id}, function(err) {
			if(err) {
				res.send(JSON.stringify(err));
			} else {
				res.send('deleted');
			}
		});
	}	
}