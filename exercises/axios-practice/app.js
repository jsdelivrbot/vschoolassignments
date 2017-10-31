var axios = require("axios");
var LukeSkywalker = axios.get('https://swapi.co/api/people/1');
console.log(lukeSkywalker);

function assignResponseToVariable(response){
  console.log(response.data);
}
// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable);

axios.get('https://swapi.co/api/people/1').then(function(response)){console.log(response.data);});
