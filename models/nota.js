const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre obligatorio']
  },
  descripcion: {
    type: String
  },
  usuarioId: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;