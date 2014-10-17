
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/startCampaign', function(req, res) {
  res.render('startCampaign');
});

app.get('/contribute', function(req, res) {
  res.render('contribute', { campaignId: req.query.campaignId });
});

app.get('/campaignProgress', function(req, res) {
  res.render('campaignProgress', { campaignId: req.query.campaignId });
});

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();
