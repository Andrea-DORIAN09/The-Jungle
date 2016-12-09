var Employee = require('../models/Employee.js'); //Employee 

//Exportar funciones

exports.findAllEmployee = function(req, res) {
	console.log('GET All employee')
	 Employee.find(function(error, employeeList) {

  	if(error) {
  		res.send(500, error.message);
  	}

  	res.status(200).jsonp(employeeList);
  	  	});

};



//PUT
exports.findById = function(req, res) {
	var id = req.param.id;
	Employee.findById(id, function(error, found){
		if(error){
			res.send(500, error.message);
		}

		//Devuelvo
		res.status(200).jsonp(employeeList);
	})
};

//Hago GET
exports.addEmployee = function(req, res) {
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

		   	res.status(200).jsonp(employeeList);
				});

};
	
//UPDATE
exports.updateEmployee = function(req, res) {
	///Busca y actualiza
	var id = req.params.id;
	var name = req.body.name;
	Employee.findById(id, function(error, employee){
		if(error){
			res.send(500, error.message);
		}

		//Devuelvo
		employee.name = name;
		employee.save(employee, function(error, employeeUpdate){
			if(error){
				res.send(500, error.message);
			}
			res.status(200).jonp(employeeUpdate);
		})
		}) //Agarro product actualiza nmbre
};

//DELETE Nunca borrar datos, solo para fines educativos cambiar bandera de enable a disable.
exports.deleteEmployee = function(req, res) {
	res.send('Delete Employee');


var id = req.params.id;
	var name = req.body.name;
// datos de la base de datos

	Employee.findById(id, function(error, employee){
		if(error){
			res.send(500, error.message);
		}

		//Devuelvo
		employee.name = name;
		employee.remove(employee, function(error, employeeUpdate){
			if(error){
				res.send(500, error.message);
			}
			res.status(200).jonp(employeeUpdate);
		})
		}) //Agarro product actualiza nmbre
};
	//Find by edit buscar 
	//Campo activo inactivo
	//ACtualizamos campos 
 