import React from "react";

function Box(props) {

    const styles = {
        backgroundColor: props.backgroundColor,
        display: "inline-block",
        width: "30%",
        border: "solid blue 2px",
        margin: "10px"
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
            <p>{props.info2}</p>
        </div>
    )
};

export default Box;
