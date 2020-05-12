# INDOOR NAVIGATION SYSTEM SERVER
Server for GPS viewer application developed under ACMS (Amazon Campus Mentorship Series) project.

### DESCRIPTION
Build a web tool which shows a building boundary and all the people moving inside that building. It will capture the movement data using an app which will be installed on the mobile devices of all those people, and that app will keep sending location information to a server periodically. The location accuracy should not be more than 5 meters

### Built With
* [Node.js](https://nodejs.org/en/) Express Framework
* [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F5e8343fb691e4543801d0978&nextHash=%23metrics%2FreplicaSet%2F5e8351951b6cc014eb2fd163%2Fexplorer%2Ftest%2Fposts%2Ffind)

### Prerequisites
1. Node.js
2. [mongoDB live Account](https://account.mongodb.com/account/login?n=%2Fv2%2F5e8343fb691e4543801d0978&nextHash=%23metrics%2FreplicaSet%2F5e8351951b6cc014eb2fd163%2Fexplorer%2Ftest%2Fposts%2Ffind)

### Installation
To run this server into [VScode](https://code.visualstudio.com/), proceed as follows:

1. Open command palette (**ctrl+shift+p**) > git clone.
2. Enter URL: https://github.com/shubhangi-ghosh/ACMS_server.git
3. Click **Clone**.
4. Open terminal (**ctrl+`**) > Move to server folder(**cd server**).
5. Run **npm install**.
6. Run **node app.js**.

## Database
USER TABLE:
 id       |  name | latitude          | longitude  | buildingId
 ------------- |:-------------:|:-------------:| :-------------:| -----
 String | String | Number | Number | String
 
BUILDING TABLE:
 id        | name | address  | latitude       | longitude          | radius  
 ------------- | :-------------:| :-------------:| :-------------:| :-------------: | ------
 String | String | String | Number | Number | Number 
 
## Routes
ANDROID ROUTES:
 Route        | Type          | Desc  
 ------------- |:-------------:| -----
 **/updateLocation/:userID** | PUT request | To update user location in user DB  
 **/buildingsInfo** | GET request | To send building info for geofencing 
 
WEBAPP ROUTES:
 Route        | Type          | Desc  
 ------------- |:-------------:| -----
 **/view/:building/center** | GET request | To send building center of corressponding building id
 **/view/:building/allUsers** | GET request | To send all users info of specific building id
 **/view/:building/allUserName** | GET request | To get all users name and id in a particular building
 **/view/allBuildingName** | GET request | To get all building id's along with their name
 **/view/:building/:userId** | GET request | To get location of single user in a building by searching on the basis of user id

### Development Decisions
*(Click to expand)*
<details>
  <summary><b>Database</b></summary>
  <br />
  There are two types of databases SQL and NOSQL <br />

  1. <b>SQL </b> <br />
     - SQL databases are primarily referred to as Relational Databases (RDBMS).They are table-based databases.<br />
     - SQL databases use structured query language (SQL) for defining and manipulating data.They have predefined schema.<br />
     - Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.<br />
  2. <b> NOSQL </b> <br />
     - NoSQL databases are primarily referred to as Non-relational or Distributed Databases.They are document based, key-value pairs, graph databases.<br />
     - NoSQL database stands for "Not Only SQL" or "Not SQL.”.They  have dynamic schema.<br />
     - MongoDB, Redis, etc use NOSQL.
<br/> <br />

  <b><u>Our solution:</u></b><br />
 We are using NoSQL database MongoDB Atlas.<br />
 <ul>
   <li> NOSQL gives the flexibility to change data schema without modifying any of the existing data.</li>
   <li> The database doesn’t require a database administrator.</li>
   <li> It’s high-performing for simple queries.</li>
   <li> Highly flexible as new columns or fields can be added on MongoDB without affecting existing rows or application performance.</li>
</ul>
    
  <br /><br />
</details>

<details>
  <summary><b>NodeJS Frameworks</b></summary>
  <br />
  Node.js frameworks are mostly used because of their productivity, scalability and speed. There are many frameworks available.
<br/> <br />

  <b><u>Our solution:</u></b><br />
        We are using EXPRESS framework:
<br />
 <ul>
   <li> Express.js is a fast, minimalist web framework built on Node.js which behaves like a middleware to help manage our servers and routes.</li>
   <li> It’s robust API allows users to configure routes to send/receive requests between the front-end and the database (acting as a HTTP server framework). </li>
   <li> It supports a lot of other packages and other template engines such as Pug, Mustache, EJS.
</li>
   <li> It is probably the most popular Node.js framework available for the JavaScript community on GitHub with over 41,000 stars [Github stars: 41,036].
</li>
</ul>
    
  <br /><br />
</details>

<details>
  <summary><b>Access mongoDB in NodeJs</b></summary>
  <br />
  MongoDB is a NoSQL database system which stores data in the form of BSON documents.
 <br />

  1. In terms of Node.js, there are 2 options mongodb the native driver for interacting with a mongodb instance and mongoose an Object modeling tool for MongoDB.<br />
  2. Mongoose is built on top of the MongoDB driver to provide programmers with a way to model their data,  and gives us functionality to access the mongoDB data with easily understandable queries.
<br/> <br />

  <b><u>Our solution:</u></b><br />
 We are using MONGOOSE for easier access and manipulation.
    
  <br /><br />
</details>

<details>
  <summary><b>CORS: </b>Cross-Origin Resource Sharing </summary>
  <br />
  We are developing the frontend web app in angular and so the webapp is running on  a different port from our backend server. To enable CORS for a general CORS request, we are adding the following headers: <br />

  1. Access-Control-Allow-Origin<br />
  2. Access-Control-Allow-Methods<br />
  3. Access-Control-Allow-Headers<br />
<br/> <br />
</details>

## References
- https://www.youtube.com/watch?v=ycja50TzjoU  
- https://www.youtube.com/watch?v=B8RSMBSzFuA&t=120s 
- https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate 
- https://malcoded.com/posts/angular-backend-express/ 
- https://www.udemy.com/course/the-web-developer-bootcamp/
- https://stackoverflow.com/questions/33305623/mongoose-create-document-if-not-exists-otherwise-update-return-document-in
- https://www.youtube.com/watch?v=iJtOoeM_fS8&feature=youtu.be&t=368
- https://medium.com/@xinganwang/a-practical-guide-to-cors-51e8fd329a1f
