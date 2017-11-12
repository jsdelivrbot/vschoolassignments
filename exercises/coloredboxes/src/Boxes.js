import React from "react";
import Box from "./Box";

function Boxes (){

  return (
    <div>
            <Box title="First" subtitle="box" info="The first box" backgroundColor="pink"/>
            <Box title="Second" subtitle="box" info="the second box" backgroundColor="cadetblue"/>
            <Box title="Third" subtitle="box" info="the third box" backgroundColor="aliceblue"/>
            <Box title="Fourth" subtitle="box" info="the fourth box" backgroundColor="cadetblue"/>
            <Box title="Fifth" subtitle="box" info="the fifth box" backgroundColor="aliceblue"/>
            <Box title="Sixth" subtitle="box" info="the sixth box" backgroundColor="pink"/>
            <Box title="Seventh" subtitle="box" info="the seventh box" backgroundColor="aliceblue"/>
            <Box title="Eigth" subtitle="box" info="the eigth box" backgroundColor="pink"/>
            <Box title="Ninth" subtitle="box" info="the ninth box" backgroundColor="cadetblue" info2="Some extra info"/>

        </div>

  )
};
export default Boxes;
