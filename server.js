const env = require('dotenv');
env.config();
const express = require('express');
const app = express();
const products = require('./src/routes/productRoute');

console.log(process.env.PORT);
app.use(express.json());
app.use('/products', products);
app.listen(process.env.PORT);