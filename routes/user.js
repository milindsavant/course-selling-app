const express = require('express');
const userRouter = express.Router();

userRouter.post("/signup",(req,res)=>{
  res.json({
    message:"signup endpoint"
  })
})

userRouter.get("/signin",(req,res)=>{
  res.json({
    message:"signin endpoint "
  })
})

userRouter.get("/purchases",(req,res)=>{
  res.json({
    message:"signup endpoint"
  })
})

module.exports = userRouter;