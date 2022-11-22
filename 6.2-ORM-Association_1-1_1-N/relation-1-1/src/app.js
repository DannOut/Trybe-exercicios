const express = require('express');
const EmployeeRouter = require('./routers/employee.router');

const app = express();
app.use(express.json());

app.use('/employee', EmployeeRouter);

module.exports = app;


