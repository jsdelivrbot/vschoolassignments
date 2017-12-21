import React, { Component } from "react";
import style from "./style.css";
import marked from "marked";

class Wish extends Component {
   rawMarkup() {
   let rawMarkup = marked(this.props.children.toString());
   return { __html: rawMarkup };
 }
 render() {
     return (
     <div className="wish">
     <h3>{this.props.author}</h3>
     <span dangerouslySetInnerHTML={ this.rawMarkup() } />
     </div>
     )
   }
}
export default Wish;
