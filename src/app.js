import Dotenv from 'dotenv';
Dotenv.config();

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import Api from './routes/index.js'
app.use('/api', Api)

app.get('/test', (req, res) => {
    return res.status(200).send("Website OK!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is on at ${process.env.HOST}`)
})