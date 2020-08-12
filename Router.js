const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./model/Model')
const app = express();

app.get('/', async (req, res) => {
    res.send('Hello World Default route!!!');
});


app.get('/users', async(req, res) => {
    const users = await userModel.find({})
    res.status(200).send(users);
});

app.post('/user', async(req,res) => {
    const user = new userModel(req.body)
    try {
        await user.save()
        res.status(200).send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})

app.delete('/user/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch('/user/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
        userModel.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = app