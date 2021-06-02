const express = require('express');

// const Hubs = require('./hubs-model.js');

const router = express.Router();

//GET ('SELECT')
// router.get("/", (req, res) => {
//   db
//     .select('*').from('posts') 
    // .then(users => {
    //   if (users.length) {
    //    res.json(users);
    //   } else {
    //     res.status(404).json({ message: 'Could not find user with given id.' });
    //   })
    // .catch (err => {
    //   res.status(500).json({ message: 'Failed to get user' });
    // });
    // });

router.get('/:id', (req, res) => {
  db('posts')
    .where('id', '=', req.params.id)
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(error => {
      res.status(500).json({ error: error.message})
    });
  });

//POST (
router.post('/', (req, res) => {
const postData = req.body;
db('posts')
  .insert(postData, 'id')
});

//PUT
router.put('/:id', (req, res) => {
const changes = req.body;
db('posts')
  .where({ id: req.params.id }) 
  .update(changes)
});

//DELETE
router.delete('/:id', (req, res) => {
db('posts')
  .where({ id: req.params.id })
  .del()
});

module.exports = router;