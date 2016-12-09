var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
	id_empleado: Number,
	nombre: String,
	a_paterno: String,
    a_materno: String,
    genero: String,
    fecha_de_nacimiento: String,
    puesto: String,
    numss: String,
    direccion: String,
    tipo_sanguineo: String,
    foto: String
});

module.exports = mongoose.model('Employee', employeeSchema);
