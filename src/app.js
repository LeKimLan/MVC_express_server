import Dotenv from 'dotenv';
Dotenv.config();

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Website OK"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is on at ${process.env.HOST}`)
})