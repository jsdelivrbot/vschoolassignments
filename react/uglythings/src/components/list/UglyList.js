import React from "react";
import {connect} from "react-redux";

const style = {
  height: "800px",
  margin: "auto",
  background: "#40E0D0", /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)",/* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)"/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

function UglyList(props){
  const items = props.items.map((item, i) => <li key={item.title + i}>
    {item.title}</li>)
  return(
      <ul style={style}>
        {items}
      </ul>

  )
}

function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps, null)(UglyList);
