const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getChocolateByName(name);
  if (chocolates.length === 0) res.status(404).json([]);
  res.status(200).json(chocolates);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolateByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolates = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolates)
    return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { name, brandId } = req.body;
  const updatedChocolates = await cacauTrybe.putUpdateChocolate(Number(id), {
    name,
    brandId,
  });
  if (chocolates) return res.status(200).json({ chocolates: updatedChocolates });
  res.status(404).json({ message: 'chocolate not found' });
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;
