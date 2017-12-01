import React from "react";

const styles = {
      textAlign: "center",
      background: "#3494e6",
      background: "-webkit-linear-gradient(to right, #3494e6, #ec6ead)",
      background: "linear-gradient(to right, #3494e6, #ec6ead)"
    }


export default function Header(props){
      return (
          <header style={styles}>
            <h1>Vice City Contacts</h1>
          </header>
      )
}
