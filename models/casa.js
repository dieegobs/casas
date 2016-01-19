var mongoose = require('mongoose');

// Casa Schema

var casasSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Casa = module.exports = mongoose.model('casa', casasSchema);

//Get Casas
module.exports.getCasas = function(callback, limit){
	Casa.find(callback).limit(limit);
}

//Get Casa
module.exports.getCasaById = function(id, callback){
	Casa.findById(id, callback);
}

//POST Add Casa
module.exports.addCasa = function(casa, callback){
	Casa.create(casa, callback);
}

//Update Casa
module.exports.updateCasa = function(id, casa, options, callback){
	var query = {_id: id};
	var update = {
		name: casa.name	
	}
	Casa.findOneAndUpdate(query, update, options, callback);
}


//Add Casa
module.exports.addCasa = function(casa, callback){
	Casa.create(casa, callback);
}


//Delete Casa
module.exports.removeCasa = function(id, callback){
	var query = {_id: id};
	Casa.remove(query, callback);
}
