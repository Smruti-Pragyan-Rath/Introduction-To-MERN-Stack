const express= require("express");
const app= express();

app.get("/", (req, res)=>{
  res.status(200).send("Hello World");
});

app.get("/home", (req, res)=>{
  res.status(200).send("Welcome Home");
});

const PORT= 3000;

app.require(PORT, ()=>{
  console.log(`The port is running at ${PORT}`);
})
