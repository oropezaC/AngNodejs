const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 3000 ;

const server = require('http');

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


const usuarios = require('./routes/users');
app.use('/usuarios',usuarios);


server.createServer(app).listen(port,()=>{
	console.log("listen in port :: " + port);
});
