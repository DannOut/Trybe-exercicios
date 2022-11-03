const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    throw err.sqlMessage;
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await peopleDB.findById(id);
    if (result) return res.status(200).json(result);
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } catch (err) {
    throw { message: err.sqlMessage, status: 404 };
  }
});

router.post('/', async (req, res) => {
  const person = req.body;
  console.log('antes', person);
  if (!person || !person.firstName) { 
    throw { message: 'Ocorreu um erro ao cadastrar uma pessoa', status: 500 }; 
  }

  const [result] = await peopleDB.insert(person);
  res.status(201).json({
    message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`,
  });
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDB.update(person, id);

    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    throw err.sqlMessage;
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    throw err.sqlMessage;
  }
});
module.exports = router;
