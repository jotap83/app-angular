const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

var qs = require('qs');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('API REST');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB

  axios.get(`${API}/posts/?` + qs.stringify(req.query))
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

// Get one post
router.get('/posts/:id', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB 

  axios.get(`${API}/posts/` + req.params.id + '/?' + qs.stringify(req.query), req.query)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;