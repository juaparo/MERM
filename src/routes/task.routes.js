const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//Routes
router.get('/', async (req, res) => {
   const tasks = await Task.find();
   res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const tasks = new Task({title, description});
  await tasks.save();
  res.json({status: 'Task Saved'});
});

module.exports = router;
