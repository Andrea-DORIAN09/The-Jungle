var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee.js');

  router.post('/', function(req, res) {

	var id = req.body.id;
	res.send('Empleado eliminado <a href="/employee">Regresar</a>');
	// datos de la base de datos

	Employee.findById(id, function(error, employee){
		if(error){
			res.send(500, error.message);
		}

		//Devuelvo
		employee._id = id;
		employee.remove(employee, function(error, employeeUpdate){
			if(error){
				res.send(500, error.message);
			}
			res.status(200,"ok");
		})
		}) //Agarro product actualiza nmbre

});

module.exports = router;
