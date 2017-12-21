import React, { Component } from "react";
import Wish from "./Wish";
import style from "./style.css";

class WishList extends Component {
  render() {
    let wishNodes = this.props.data.map(wish => {
      return (
    <Wish author={ wish.author } key={ wish.id }>
      { wish.text }
    </Wish>
      )
    })
    return (
      <div className="wishList">
        { wishNodes}
      </div>
    )
  }
}

export default WishList;
