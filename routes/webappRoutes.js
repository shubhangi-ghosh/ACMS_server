require('dotenv').config();
var express  = require("express"),
    User     = require("../models/user"),
    Building = require("../models/building"),
    router   = express.Router();

//Locations of all users from DBS of building id :building
router.get("/view/:building/allUsers", function(req, res){
    User.find({buildingId:req.params.building},{ _id : 0,id : 1,name : 1, longitude : 1, latitude : 1 },function(err, users){
        if(err){
            console.log("Error in find all users");
            res.status(404).send();
        }
        else{
            console.log(users);
            res.status(200).send(users); 
        }
    });
});

//All users name in a building
router.get("/view/:building/allUserName", function(req, res){
    User.find({buildingId : req.params.building}, {_id : 0, id : 1,name : 1,}, function(err, user){
        if(err){
            console.log("Error in find all users name");
            res.status(404).send();
        }
        else{
            console.log(user);
            res.status(200).send(user);
        }
    });
});


//center of building route :: Anisha's home
//lat-28.7112, long-77.1222 
//added through seed.js 

router.get("/view/:building/center", function(req, res){
    Building.find({id : req.params.building},{ _id:0,longitude : 1, latitude : 1 }, function(err, center){
        if(err){
            console.log("Error in find center");
            res.status(404).send();
        }
        else{
            console.log(center);
            res.status(200).send(center);
        }
    });
});

//All building name
router.get("/view/allBuildingName", function(req, res){
    Building.find({}, {_id : 0, id : 1, name : 1}, function(err, building){
        if(err){
            console.log("error in find building");
            res.status(404).send();
        }
        else{
            console.log(building);
            res.status(200).send(building);
        }

    });
});

//search  user in a building.
router.get("/view/:building/:userId", function(req, res){
    User.find({buildingId : req.params.building, id : req.params.userId}, {_id : 0, longitude : 1, latitude : 1}, function(err, user){
        if(err){
            console.log("Error in find user");
            res.status(404).send();
        }
        else{
            console.log(user);
            res.status(200).send(user);
        }
    });
});


/*
//Load building form for manager
router.get("/addbuilding", function(req, res){
    res.send("building form");
});


//Get all building details from manager
router.post("/addbuilding", function(req, res){
    Building.create({
        name : req.body.name,
        address : req.body.address,
        latitude : req.body.latitude,
        longitude : req.body.longitude
    }, function(err, building){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send("building info saved");
        }
    })
});
*/

module.exports = router;