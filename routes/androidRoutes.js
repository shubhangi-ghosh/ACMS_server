require('dotenv').config();
var express  = require("express"),
    User     = require("../models/user"),
    Building = require("../models/building"),
    router   = express.Router();


//Send buildings info
router.get("/buildingsInfo", function(req, res){
    Building.find({},{ _id: 0, id :1, longitude : 1, latitude : 1, radius:1, address:1 }, function(err, buildings){
        if(err){
            console.log("error in /buildingsInfo find");
            res.status(404).send();
        }
        else{
            console.log(buildings);
            res.status(200).send(buildings);     
        }
    });
});

//Update location of user
//altitude also available
router.put('/updateLocation/:userID', function(req,res){
    User.findOneAndUpdate({"id": req.params.userID}, {$set:{"name": req.body.name, "latitude": req.body.latitude, "longitude": req.body.longitude, "buildingId": req.body.buildingId}}, {upsert: true, new: true}, function(err, user){
        if (err) {
            console.log("android update location error");
            res.status(404).send();
        }
        else{
            console.log(user);
            res.status(200).send();   
        }
    });
});

module.exports = router;