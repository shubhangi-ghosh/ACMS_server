require('dotenv').config();
var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    seedDb      = require("./seed"),
    app         = express();

/**********CORS COMMANDS *************/
const cors = require('cors');

/*
//http://localhost:3000 origin
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204,
}*/

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(cors(corsOptions));
/***********************************/

//Require models
var User                    = require("./models/user");
var Building                = require("./models/building");
var Floor                   = require("./models/floor");


//Require routes
var webappRoutes        = require("./routes/webappRoutes"),
    androidRoutes       = require("./routes/androidRoutes");

app.use(bodyParser.json());  //re.body undefined

//To use routes/routefile.js
app.use(webappRoutes);
app.use(androidRoutes);

//USE extras
//app.use(bodyParser.urlencoded({extended: true}));  //check
//app.use(express.json()); //enable json parsing for POST request from android

//Essential mongoose commands
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//MONGOOSE_URL = mongodb+srv://ACMS:BobTheBuilder@acms-olj66.mongodb.net/test?retryWrites=true&w=majority 
//ADD THIS TO .env
var databaseUrl = process.env.MONGOOSE_URL //|| "mongodb://localhost/ducsdatastore"

mongoose.connect(databaseUrl, function (err) {
    if(err){
        console.log("DB not connected: " + err.message);
    }
    else{
        console.log("DB connected");
    }
}); 

//=========================================
//To initialize db: seedDB 
//seedDb();
//=========================================

app.listen(3000, function(){
    console.log("Server listening on port 3000");
});