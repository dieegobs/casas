var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Casa = require('./models/casa');
Evento = require('./models/evento');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/tickets');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Usar a /api/casas ou /api/eventos')
});


// get, post, put, delete CASAS
app.get('/api/casas', function(req, res){
	Casa.getCasas(function(err, Casas){
		if(err){
			throw err;
		}
		res.json(Casas);
	});
});

app.get('/api/casas/:_id', function(req, res){
	Casa.getCasaById(req.params._id, function(err, Casa){
		if(err){
			throw err;
		}
		res.json(Casa);
	});
});


app.post('/api/casas', function(req, res){
	var casa = req.body;
	Casa.addCasa(casa, function(err, Casa){
		if(err){
			throw err;
		}
		res.json(Casa);
	});
});

app.put('/api/casas/:_id', function(req, res){
	var id = req.params._id;
	var casa = req.body;
	Casa.updateCasa(id, casa, {}, function(err, Casa){
		if(err){
			throw err;
		}
		res.json(Casa);
	});
});

app.delete('/api/casas/:_id', function(req, res){
	var id = req.params._id;
	Casa.removeCasa(id, function(err, Casa){
		if(err){
			throw err;
		}
		res.json(Casa);
	});
});



// get, post, put, delete EVENTOS
app.get('/api/eventos', function(req, res){
	Evento.getEventos(function(err, Eventos){
		if(err){
			throw err;
		}
		res.json(Eventos);
	});
});

app.get('/api/eventos/:_id', function(req, res){
	Evento.getEventoById(req.params._id, function(err, Evento){
		if(err){
			throw err;
		}
		res.json(Evento);
	});
});

app.post('/api/eventos', function(req, res){
	var evento = req.body;
	Evento.addEvento(evento, function(err, Evento){
		if(err){
			throw err;
		}
		res.json(Evento);
	});
});

app.put('/api/eventos/:_id', function(req, res){
	var id = req.params._id;
	var evento = req.body;
	Evento.updateEvento(id, evento, {}, function(err, Evento){
		if(err){
			throw err;
		}
		res.json(Evento);
	});
});

app.delete('/api/eventos/:_id', function(req, res){
	var id = req.params._id;
	Evento.removeEvento(id, function(err, Evento){
		if(err){
			throw err;
		}
		res.json(Evento);
	});
});



app.listen(3000);
console.log('Running on Port 3000...');