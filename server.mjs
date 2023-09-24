import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = new Todo({ text, completed });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text, completed },
      { new: true },
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndRemove(id);
    res.json({ message: 'Todo removed' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
