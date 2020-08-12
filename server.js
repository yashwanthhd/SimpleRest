const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Router');
const connectToMongo = require('./MongoConnection')
const port = 3000;
const app = express();

app.use(express.json())
connectToMongo()


app.use(Router)

app.listen(port, ()=> {
    console.log(`Server is listening at ${port}`)
});

