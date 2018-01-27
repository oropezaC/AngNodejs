const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http');
const app = express();
const port = process.env.PORT || 3000 ;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use(express.static(path.join(__dirname, '..', 'dist')));


app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


const usuarios = require('./routes/users');
app.use('/usuarios',usuarios);


app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname, '..','dist/index.html'))
});

app.set('port',port);

const server = http.createServer(app);

server.listen(port,()=>console.log('Running on localhost::' + port))
