const express = require('express');
const router = express.Router();

// importar el modelo de nota
const Nota = require('../models/nota');

// Agregar una nota
router.post('/nueva-nota', async(req, res) => {
  const body = req.body;
  try{
    const notaDB = await Nota.create(body);
    res.status(200).json(notaDB);
  } catch(err){
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

// obtener notas
router.get('/nota', async(req, res) => {
  try {
    const notasDB = await Nota.find();
    res.json(notasDB);
  } catch (err) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

// obtener una nota

router.get('/nota/:id', async(req, res) => {
  const _id = req.params.id;
  try{
    const notaDB = await Nota.findOne({_id});
    res.json(notaDB)
  } catch(error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

// eliminar nota

router.delete('/nota/:id', async(req, res) => {
  const _id = req.params.id;
  try{
    const notaDbDelete = await Nota.findByIdAndDelete({_id})
    res.json(notaDbDelete);
  } catch(err){
    res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

// editar una nota

router.put('/nota/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    // new true nos envia la nota actualizada inmediatamente
    const editNota = await Nota.findByIdAndUpdate(_id, body, { new: true });
    res.json(editNota);
  } catch(err) {
    res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

module.exports = router;