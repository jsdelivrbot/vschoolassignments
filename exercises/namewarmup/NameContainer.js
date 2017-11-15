import React from "react";

import Name from "./Name"// Note that "./Name.js" is not necessary

function NameContainer(){

  const names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew", "Brandon",
  "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin", "Dan"]

  return names.map((name) =>{
      return<Name name={name} key={index + name} />
      //note that "key" stuff is optional here; it's just for practice, but
      //figure out what it's for.  It will be used in other problems.
      //Name is our presentational component.
//This is the presentational component way:
      // return (
      //   <span>
      //     <Name firstName={names[0]}>
      //     <Name firstName={names[1]}>
      //       etc., etc.
      //   </span>
      //
      // )
      //
  })
}
export default NameContainer;


//This is a presentational component example:
//import React, {Component} from "react";
class Name extends Component{
      render(){
        return<h1>{this.props.firstName}</h1>
      }
}

  const mappedNames = names.mp((name)=>{
      return<Name firstName={name key={name + i} />
  })
  return mappedNames


  //class based component

  class NameContainer extends Component {
      render(){
        const names = ["Bobby", "Derek", "Frank"]
        return names.map((name, i)=>{
            return <Name firstName={ name } key={name+i}/>
        })
      }
     
  }
