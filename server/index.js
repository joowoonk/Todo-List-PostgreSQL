const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware using cors
app.use(cors()); // this will allow local server from 5000 to 3000 to interact each other.

app.use(express.json()); // allow us to access the req.body

//Routes//

//get all Todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo"); //the reason why it's not returning because it uses select

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id =$1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, priority) VALUES ($1, $2) RETURNING *",
      [description, priority]
    ); //adding RETURNING * will help to see what's being inserted
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server is starting on port 5000");
});
