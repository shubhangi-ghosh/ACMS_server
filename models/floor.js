var mongoose = require("mongoose");

//A rough schema of single floor in a building
//id is primary key that uniquely identifies a floor
//building_id is foreign key that  determines a particular building
var floorSchema = new mongoose.Schema({
    id : String,
    name : String,
    //floorplan
});

var Floor = mongoose.model("Floor", floorSchema);

module.exports = Floor;