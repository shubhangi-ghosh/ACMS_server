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
2. Enter URL: https://github.com/Shrutikatyal/iExplore.git
3. Click **Clone**.
4. Open terminal (**ctrl+`**) > Move to server folder(**cd server**).
5. Run **npm install**.
6. Run **node app.js**.

## Database
USER TABLE:
 id       | latitude          | longitude  | buildingId
 ------------- |:-------------:| :-------------:| -----
 string | string | string | string
 
BUILDING TABLE:
 id        | address  | latitude       | longitude          | radius  
 ------------- | :-------------:| :-------------:| :-------------:| -----
 string | string | string | string | string 
 
## Routes
ANDROID ROUTES:
 Route        | Type          | Desc  
 ------------- |:-------------:| -----
 **/updateLocation/:userID** | PUT request | To update user location in user DB (sent from android app) 
 **/buildingsInfo** | GET request | To send building data (id, lat, long, radius) for geofencing 
 
WEBAPP ROUTES:
 Route        | Type          | Desc  
 ------------- |:-------------:| -----
 **/building/:id/center** | GET request | To send building center of corressponding id (in params)
 **/view/:building/allUsers** | GET request | To send users of specific buildingid (in params)

## References
- https://www.youtube.com/watch?v=ycja50TzjoU  
- https://www.youtube.com/watch?v=B8RSMBSzFuA&t=120s 
- https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate 
- https://malcoded.com/posts/angular-backend-express/ 
- https://www.udemy.com/course/the-web-developer-bootcamp/
- https://stackoverflow.com/questions/33305623/mongoose-create-document-if-not-exists-otherwise-update-return-document-in
- https://www.youtube.com/watch?v=iJtOoeM_fS8&feature=youtu.be&t=368