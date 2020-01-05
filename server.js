const logger = require('./logger');

const express = require('express');
const app = express();

app.use(function (req, res, next) {
	logger.log(req.originalUrl, "Middleware");
	next()
});

app.get('/', (req, res) => {
	console.log("Hello work");
	res.send('Hello World!');
});

app.get('/info', (req, res) => {
	console.log("Info");
	res.send('This is info!');
});

app.listen(8080, function () {
	console.log("Server is running");
});