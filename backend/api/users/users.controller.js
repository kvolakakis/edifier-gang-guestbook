const express = require('express');
const router = express.Router();
const path = require("path");
const UserModel = require(path.resolve("api", "users", "user.model.js")).User;
const modelRepository = require(path.resolve("database", "model-repository.js"));

router.get('/', async (req, res) => {
    try{
        const users = await modelRepository.find(UserModel, {});
        res.send(users);
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const user = await modelRepository.findById(UserModel, req.params.id, req.query);
        res.send(user);
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
});

router.post('/', async (req, res) => {
    try {
        const user = new UserModel();
        user.username = req.body.username;
        const savedUser = await modelRepository.create(UserModel, user);
        res.send(savedUser);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await modelRepository.update(UserModel, req.params.id, req.body);
        res.send(user);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.delete('/', async (req, res) => {
    try {
        const response = await modelRepository.deleteAll(UserModel, req.query);
        res.send(response);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const response = await modelRepository.deleteById(UserModel, req.params.id);
        res.send(response);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;