let db = require("./db-calls.js");
let parkInfoDOM = require("./parkInfoDOM");

let parkInfo = {};

// this function is going to db-calls.js and getting the fetchParkInfo function
db.fetchParkInfo()
// THEN getting the result
.then((result) => {
    // and setting it inside of parkInfo
   parkInfo = result;
   console.log("fetchParkInfo:", parkInfo[0].description);
   // use function from parkInfoDOM
    parkInfoDOM(parkInfo);
});

// use a forEach loop to get access to each item inside of each attraction

