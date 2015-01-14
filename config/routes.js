var tasks = require('./../server/controllers/tasks.js');
module.exports = function Routes(app){
	app.get('/', function(req, res){
		tasks.index(req, res);
	});
	app.get('/tasks', function(req, res){
		tasks.index(req, res);
	});
	// app.get('/tasks/index.json', function(req, res){
	// 	tasks.index_json(req, res);
	// });
	// app.get('/tasks/new', function(req, res){
	// 	tasks.new(req, res);
	// });
	app.post('/create', function(req, res){
		tasks.create(req, res);
	});
	app.get('/tasks/:id', function(req, res){
		tasks.remove(req, res);
	});	
	// app.post('/tasks/newTask_json', function(req, res){
	// 	tasks.newTask_json(req, res);
	// });
};