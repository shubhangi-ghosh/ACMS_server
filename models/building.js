var mongoose = require("mongoose");

//All the building information will be collected using google map api when the supervisor searches for a particular building.
//name represents building name
//address represents building address which can be further divided into street, city, state, pincode
//for different buildings we will have different manager/owner, who will access the web portal and login to manage a particular building
//a building having multiple floor each having their own floor map...
//latitude and longitude 
var buildingSchema = new mongoose.Schema({
    id : String,  
    name : String,
    address: String,
    latitude : Number,
    longitude : Number,
    radius: Number
    // floor : {
    //     type : array,
    //     ref : 'Floor',
    //     required : true
    // }
});

var Building = mongoose.model("Building", buildingSchema);

module.exports = Building;