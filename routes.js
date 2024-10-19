const express= require("express");
const router= express.Router();
routes.get("/", (req, res)=>{
    res.status(200).send("Welcome to routes");

});

module.exports= routes;
