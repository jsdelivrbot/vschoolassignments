import React, {Component} from "react";
import axios from "axios";

import {ListGroupItem} from "react-bootstrap";

class Todo extends Component{
    constructor(props){
      super(props);
      this.state = {
          completed: props.info.completed
      }
      this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    toggleCompleted(){
        console.log("yo");
        // THIS IS GOING TO BE AN ISSUE
        axios.put("https://api.vschool.io/bobbygarcia/todo/" +
        this.props.info._id , {completed: !this.state.completed})
        .then(response=>{
            this.setState(prevState=>{
              return {completed: response.data.completed}
            })
        })
    }

    render(){
        const {title, description, imgURL, price, completed, _id} =
        this.props.info;
        return (
            <div>
              <ListGroupItem header={title}>{description}
                <button id={_id} onClick=
                  {this.props.delete}>Delete</button>Completed?
                  <input onChange={this.toggleCompleted}
                    type="checkbox" checked={this.state.completed}/>
              </ListGroupItem>
            </div>
        )
    }
}
export default Todo;
