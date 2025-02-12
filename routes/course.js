const express = require("express");
const courseRouter = express.Router();

courseRouter.post("/purchase",(req,res)=>{
  res.json({
    message:"signup endpoint"
  })
})

courseRouter.get("/preview",(req,res)=>{
  res.json({
    message:"course preview endpoint"
  })
})

module.exports = courseRouter;