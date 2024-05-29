const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    releaseDate:{
        type: Number,
        required: true
    },
    postUrl:{
        type: String,
    }


})

module.exports = mongoose.model("movies" , movieSchema);