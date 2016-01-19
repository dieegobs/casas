var mongoose = require('mongoose');

// Evento Schema

var eventosSchema = mongoose.Schema({
	title:{
		type: String,
		require: true
	},
	genre:{
		type: String,
		require: true
	},
	description:{
		type: String,
		require: true
	},
	image_url:{
		type: String,
		require: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Evento = module.exports = mongoose.model('evento', eventosSchema);

//Get Eventos
module.exports.getEventos = function(callback, limit){
	Evento.find(callback).limit(limit);
}

//Get Evento
module.exports.getEventoById = function(id, callback){
	Evento.findById(id, callback);
}

//Post Add Evento
module.exports.addEvento = function(evento, callback){
	Evento.create(evento, callback);
}

//Update Evento
module.exports.updateEvento = function(id, evento, options, callback){
	var query = {_id: id};
	var update = {
		title: evento.title,
		genre: evento.genre,
		description: evento.description,
		image_url: evento.image_url
	}
	Evento.findOneAndUpdate(query, update, options, callback);
}

//Delete Casa
module.exports.removeEvento = function(id, callback){
	var query = {_id: id};
	Evento.remove(query, callback);
}
