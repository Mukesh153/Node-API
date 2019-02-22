var express = require('express'),
  app = express(),
  port = process.env.PORT || 4001,
  mongoose = require('mongoose'),
  Task = require('./api/models/toDoListModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// var uri = 'mongodb+srv://admin:*Mukesh15*@cluster0-eu52t.mongodb.net/nodeapi?retryWrites=true';
var uri = "mongodb+srv://Mukesh153:\*Mukesh15\*@cluster0-eu52t.mongodb.net/nodeapi?retryWrites=true";
var options = {
  useNewUrlParser: true
};

mongoose.connect(uri, options).catch(function(err){
  if (err)
   {
      console.log('Error'+err);
  }});
 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

