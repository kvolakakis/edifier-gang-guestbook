const express = require('express');
const router = express.Router();
const path = require("path");
const PostModel = require(path.resolve("api", "posts", "post.model.js")).Post;
const modelRepository = require(path.resolve("database", "model-repository.js"));

router.get('/', async (req, res) => {
    try{
        const posts = await modelRepository.find(PostModel, {});
        res.send(posts);
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const post = await modelRepository.findById(PostModel, req.params.id, req.query);
        res.send(post);
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
});

router.post('/', async (req, res) => {
    try {
        const post = new PostModel();
        post.user = req.body.user;
        post.title = req.body.title;
        post.description = req.body.description;
        post.files = req.body.files;
        const savedPost = await modelRepository.create(PostModel, post);
        res.send(savedPost);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const post = await modelRepository.update(PostModel, req.params.id, req.body);
        res.send(post);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.delete('/', async (req, res) => {
    try {
        const response = await modelRepository.deleteAll(PostModel, req.query);
        res.send(response);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const response = await modelRepository.deleteById(PostModel, req.params.id);
        res.send(response);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;