import React, { Component} from "react";
import WishList from "./WishList";
import WishForm from "./WishForm";
import DATA from "../data";
import "./style.css";

class WishBox extends Component {
  constructor(props){
    super(props);
    this.state = { data: []};
  }
  render() {
    return (
      <div className="wishBox">
      <h2>Wishes</h2>
      <WishList data={ DATA }/>
      <WishForm />
    </div>
    )
  }
}

export default WishBox;
