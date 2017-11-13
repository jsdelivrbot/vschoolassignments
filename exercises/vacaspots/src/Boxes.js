import React from "react";
import Box from "./Box";

function Boxes(){
  //this is an array
  const boxes = [
    {
      place: "Meridian, Idaho",
      price: "$40",
      timeToGo: "Spring",
      backgroundColor: "#FFAAC3"
    },{
      place: "Cancun",
      price: "$900",
      timeToGo: "Winter",
      backgroundColor: "white"
    },{
      place: "China",
      price: "$1200",
      timeToGo: "Fall",
      backgroundColor: "red"
    },{
      place: "Russia",
      price: "$1100",
      timeToGo: "Summer",
      backgroundColor: "cadetblue"
    },{
      place: "Lebanon",
      price: "$400",
      timeToGo: "Spring",
      backgroundColor: "yellow"
    }
   ]
   return boxes.map((box) => {
              return <Box
                place={box.place}
                price={box.price}
                backgroundColor={box.backgroundColor}
                timeToGo={box.timeToGo}
            />
          })
}
export default Boxes;
