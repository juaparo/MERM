const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// Routes tasks
router.get('/', async (req, res) => {
   const tasks = await Task.find();
   res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const taskOne = await Task.findById(req.params.id);
  res.json(taskOne);
})

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const tasks = new Task({title, description});
  await tasks.save();
  res.json({status: 'Task Saved'});
});

router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTasks = {title, description};
  await Task.findByIdAndUpdate(req.params.id, newTasks);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted!'});
});

module.exports = router;
