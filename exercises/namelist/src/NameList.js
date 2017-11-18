import React,{Component} from "react";
import Name from "./Name";

class NameList extends Component {
    constructor(){
      super();
      this.state ={
        input: "",
        names: []
      }
      // Just note that all the 'bind' things here are connected to functions below.
      this.submitName = this.submitName.bind(this)
      this.onInputChange = this.onInputChange.bind(this)
      this.deleteName = this.deleteName.bind(this)

    }
    submitName(){
        this.setState((prevState)=>{
          const names = [...prevState.names]
          names.push(prevState.input)
          return {names, input: ""}
        })
    }
onInputChange(event){
    this.setState({input: event.target.value})
}

deleteName(index){
    this.setState(prevState=>{
      const names = [...prevState.names];
      names.splice(index, 1)
      return {names}
    })
}
render(){
    const namesList = this.state.names.map((name, i)=>{
        return <Name name={name} key={name + i} index={i} delete={()=>this.deleteName(i)}/>
    })
    return (
        <div>
          <input onChange={this.onInputChange} value={this.state.input}/>
          <button onClick={this.submitName}>submit</button>
          {namesList}
        </div>
        )
    }
}

export default NameList;
