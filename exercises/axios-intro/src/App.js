import React, {Component} from "react";
import axios from "axios";

class App extends Component{
    constructor (){
        super()
        this.state = {
            people: []
        }
    }
//Take note of .then before "response".  It's a "promise" due to asynchronous stuff.
//Consider the father/son/weather analogy.  The son promises to "response" to Father with the weather data,
//once he goes outside and sees what the weather is.
    componentDidMount(){
        axios.get("https://swapi.co/api/people").then((response)=>{
            this.setState({people: response.data.results});
        })

    }
        render(){
            return this.state.people.map(person=>{
              return<Person info={person}/>
            })
        }
}

export default App;
