require("dotenv").config();
const express= require("express");
const cors = require("cors");
const constants = require("./constants");
const dbconfig = require("./db/config");
const userRoutes = require('./routes/userRoutes');
const moviesRoutes = require("./routes/moviesRoutes");
const {port} = constants;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users/', userRoutes);
app.use('/api/movies/', moviesRoutes);
app.listen(port, ()=>{
    console.log("server is runnig at port " + port);
})