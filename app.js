// create an express app
const express = require("express")
const app = express()
const path = require('path');
app.use(express.static("dist"));


// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
//   res.send('./index.html')
  res.sendFile(path.join(__dirname, '/dist/index.html'));
 
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));