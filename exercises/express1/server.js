const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const port = process.env.PORT || 8000

app.use(bodyParser.json())

app.get("/candy", (req, res)=>{
  return res.send(data.candy)
})

app.get("/fruit", (req, res)=>{
    return res.send(data.candy)
})

app.post("/fruit", (req, res)=>{
  data.push(req.body)
  return res.send(data.fruit)
})

app.listen(8000, ()=>{
  console.log("Your server is running")
})

const data = {fruit: [], candy: []}
