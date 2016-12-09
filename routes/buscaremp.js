var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee.js');

  router.post('/', function(req, res) {

	var id = req.body.bnum_emp;
	// datos de la base de datos
	//var id = req.param.id;
	//id="584a38784511df29c27595b2";
	Employee.findById(id, function(error, employeeList){
		if(error){
			res.send(500, error.message);
		}

		//Devuelvo
		res.render('buscaremp', { title: 'Buscar Empleados', employeebuscar: employeeList });
	})

});

module.exports = router;
