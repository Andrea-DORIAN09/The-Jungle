var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	Employee.find(function(error, employeeList) {
  	if(error) {
  		res.send(500, error.message);
  	}

  	res.render('employee', { title: 'Listado de Empleados', employee: employeeList });
  });
});

router.post('/', function(req, res) {
	console.log(req.body);

	var employee = new Employee({
		id_empleado: req.body.id_empleado,
		nombre: req.body.nombre,
		a_paterno: req.body.a_paterno,
		a_materno: req.body.a_materno,
		genero: req.body.genero,
		fecha_de_nacimiento: req.body.fecha_de_nacimiento,
		puesto: req.body.puesto,
        numss: req.body.numss,
		direccion: req.body.direccion,
		tipo_sanguineo: req.body.tipo_sanguineo,
		foto: req.body.foto
	});

	employee.save(function(error, employee) {
		if(error) {
			res.send(500, error.message);
		}

		Employee.find(function(error, employeeList) {

			if(error) {
				res.send(500, error.message);
			}

			res.render('employee', { title: 'Empleados', employee: employeeList });
		});
	});
});

module.exports = router;
