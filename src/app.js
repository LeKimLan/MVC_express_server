import Dotenv from 'dotenv';
Dotenv.config();

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is on at ${process.env.HOST}:${process.env.PORT}`)
})