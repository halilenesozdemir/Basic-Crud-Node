const express = require('express');
const router = express.Router();
const Rapper = require('../models/rapper');

// get a list of rappers from the database
router.get('/rappers',function(req,res,next){
    Rapper.find({}).then(function(rappers){
        res.send(rappers);
    }).catch(next);
});

// add a new rapper to database
router.post('/rappers',function(req,res,next){
    Rapper.create(req.body).then(function(rappers){
        res.send(rappers);
    }).catch(next);
});

// update a rapper in the database
router.put('/rappers/:id',function(req,res,next){
    Rapper.findOneAndUpdate({_id: req.params.id},req.body).then(function(rapper){
        Rapper.findOne({_id: req.params.id}).then(function(rapper){
            res.send(rapper);
        });
    });
});

// delete a rapper in the database
router.delete('/rappers/:id',function(req,res,next){
    Rapper.findOneAndDelete({_id: req.params.id}).then(function(rapper){
        res.send(rapper);
    });
});

module.exports = router;