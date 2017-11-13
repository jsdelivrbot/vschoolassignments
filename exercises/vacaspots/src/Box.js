import React from "react";

function Box(props) {
// first we declare the styles variable/object.  Is this a class?
// review why the syntax is different: quotes and commas instead of no quotes
//and semicolons like in CSS.  It's because it's NOT CSS.  It's React or JSX.
  const styles = {
      box: {
        backgroundColor: props.backgroundColor,
        border: "solid black 2px",
        width: "20%",
        height: "300px",
        display: "inline-block",
        verticalAlign: "top",
        position: "relative",
        padding: "10px",
      },
      info: {
        overflow: "auto",
        height: "70px",
        bottom: "39px",
        position: "absolute"
      }
  }
    return (
      <div style={styles.box}>
          <h2>{props.place}</h2>
          <h3>{props.price}</h3>
          <div style={styles.info}>
              <p>{props.timeToGo}</p>
          </div>
      </div>
    )
};

export default Box;
