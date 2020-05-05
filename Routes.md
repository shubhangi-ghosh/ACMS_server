#ROUTES
ANDROID‌ ‌ROUTES:‌ ‌
1. /updateLocation/:userID‌          ‌PUT‌ ‌        :To update user location in user DB (sent from android app)
2. /buildingsInfo                        GET         :To send building data (id, lat, long, radius) for geofencing
 
WEBAPP‌ ‌ROUTES:‌ ‌
1. /building/:id/center             GET         :To send building center of corressponding id (in params)
2. /view/:building/allUsers‌ ‌        GET‌         :To send users of specific buildingid (in params)


// /searchUser‌ ‌                    ‌ ‌POST‌ ‌
// /addBuilding                     GET
// /addBuilding                     POST