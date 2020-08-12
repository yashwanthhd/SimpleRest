const express = require('express');
const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017/admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}


module.exports = connectToMongo