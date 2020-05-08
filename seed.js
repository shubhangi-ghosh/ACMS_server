 var mongoose    = require("mongoose");
 var Building     = require("./models/building");

 building_array=[
    {
        id : "1",             
        address: "Anishas home", 
        latitude : 28.7112,
        longitude : 77.1222,
        radius: 20
    },
    {
        id : "2",             
        address: "Priyankas home", 
        latitude : 28.5754,
        longitude : 77.2425,
        radius: 100
    },
    {
        id : "3",
        address: "Shubhangis home",
        latitude : 28.6009,
        longitude : 77.3146,
        radius : 150
    },
    {
        id : "4",
        address: "Shrutis home",
        latitude : 28.6198,
        longitude : 77.0506,
        radius : 50
    }

 ]

 function seedDB(){
    Building.deleteMany({}, function(err){
        if(err){
            console.log("Building delete many not working");
            console.log(err); 
        }
        else{
            console.log("removed Buildings!") ; 
            
            Building.insertMany(building_array, function(err,buildings){
                if(err){
                    console.log("Buildings insert many error" + err);
                }
                else{
                    console.log(buildings);
                }
            });
        }
    });

    /*
    Building.create({
        id : "2",            
        name : "Initial hardcode 2", 
        address: "Priyankas home", 
        latitude : "28.5754",
        longitude : "77.2425",
        radius: "100"
        },function(err, building){
            console.log(building);
    });*/
 }  

 
module.exports = seedDB;

 
