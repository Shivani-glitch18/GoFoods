const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const mongoDB = require("./db")
// Import User model and CreateUser router
const User = require('./models/User');
const createUserRouter = require('./Routes/CreateUser');



app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
mongoDB();
// Middleware to parse JSON
app.use(express.json());
app.use('/api', createUserRouter);
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});