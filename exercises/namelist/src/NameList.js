import React,{Component} from "react";
import Name from "./Name";

class NameList extends Component {
    constructor(){
      super();
      this.state ={
        input: "",
        names: []
      }
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


}


export default NameList;
