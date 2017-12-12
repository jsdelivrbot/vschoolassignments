const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: String,
    age: Number,
    interests: [],
    friends: []
});

const Todo = mongoose.model("Todo", todoSchema);

const myTodo = new Todo({
    name: "clean guns",
    cost: 25,
    duration: 30,
    day: "Wednesday"
})

myTodo.save((err, new_todo) =>{
    console.log(new_todo, "Successfully added");
})
