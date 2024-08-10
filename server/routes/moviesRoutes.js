const router = require("express").Router();
const Movies = require('../models/movieModel');
const authMiddleware = require('../middlewars/authMiddleware');

router.get('/get-all-movies', authMiddleware , async (req,res)=>{
  try {
    const movies = await Movies.find().select('title description postUrl');
    res.send({
        success: true,
        message: "movies fatched",
        data: movies 
    })
    
  } catch (error) {
    res.send({
        success: false,
        meaasge: error.message
    })
  }
})

router.get('/get-movie-by-id/id',authMiddleware , async(req,res)=>{
    try {
        const movie = await Movies.findById(req.params.id);
        res.send({
            success: true,
            message: "movie fatched",
            data: movie
        })
    } catch (error) {
        res.send({
            success: false,
            message : error.message
        })
    }

})



router.post('/add-movie'  , async(req,res)=>{
   try {
       const movie = new Movies(req.body);
       await movie.save();
       res.send({
        success: true,
        message: "movie added"
       })
   } catch (error) {
    res.send({
        success: false,
        message: error.message
       })
   }
})


router.post('/update-movie' ,authMiddleware , async(req,res)=>{
    try {
        await Movies.findByIdAndUpdate(req.body.movieId , req.body);
    res.send({
        success: true,
        message : "Movie updated"
    })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})
    

router.post('/delete-movie' ,authMiddleware , async(req,res)=>{
    try {
        await Movies.findByIdAndDelete(req.body.movieId);
        res.send({
            success:true,
            message : "Movie deleted"
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;