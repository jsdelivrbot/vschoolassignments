var axios = require("axios");
var LukeSkywalker = axios.get('https://swapi.co/api/people/1');
console.log(lukeSkywalker);

function assignResponseToVariable(response){
  console.log(response.data);
}
// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable);

axios.get('https://swapi.co/api/people/1').then(function(response)){console.log(response.data);});



axios.get("https://api.vschool.io/ericnatejones/todo/")
.then(function(response){
    console.log(response.data)
})




var newTodo = {title: "get milk", description: "2%"}

axios.post("url", newTodo).then(function(response){
    var newTodo = response.data;
})

//ERic's Slack solution
axios.get("https://api.vschool.io/ericnatejones/todo/")
.then(function(response){
    var todos = response.data;
    todos.map(function(todo){
        document.getElementById("todos").innerHTML += `<h1>${todo.title}</h1>`;
    })

})
