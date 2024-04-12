const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const {router} = require("./Routes/rts")

//app.post("/register", async (req, res) =>{
   // try{
     //  const hashedpassword  = await bcrypt.hash(req.body.password, 10)
     //  res.redirect("/signin")
   // }catch{

  //  }
//})


app.use('/', router);

app.listen(3500)