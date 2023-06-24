/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()


/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root


/* ***********************
 * Routes
 *************************/
app.use(require("./routes/static"))
//Index route
app.get("/", function(req, res){
  res.render("index",{title:"HomePage"})
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
// const port = process.env.PORT
// const host = process.env.HOST
const port = process.env.PORT || 3000;

/* ***********************
 * Log statement to confirm server operation
 *************************/
// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`)
// })
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
