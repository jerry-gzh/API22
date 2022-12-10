const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require ("./routes/user.js");

const app = express(); 
const port = process.env.PORT || 9000;

//middleware
app.use(express.json()); //Transforma de Json a JS 
app.use('/api', userRoutes)

// routes 
app.get('/', (req, res) => {
  res.send("welcome to my API");
});

//mongo db connection 
mongoose
  .connect(process.env.MONGODB_URI)
  .then( () => console.log("Connected to MongoDB Atlas 🔰"))
  .catch( (error) => console.error(error))

app.listen(port, () => console.log('🤖 Server listening on port', port))