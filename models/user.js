var mongoose              = require("mongoose");

//Creating a rough schema outline for our table in database ACMS_Database
//Schema name: userSchema
//Table name: users
//Singlar variable object to insert/update : user
var userSchema= new mongoose.Schema({
    id: String,
    name: String,
    latitude: Number,
    longitude: Number,
    buildingId: String
});
//attach schema and create a structure User object model
var User= mongoose.model("User", userSchema);

module.exports = User;