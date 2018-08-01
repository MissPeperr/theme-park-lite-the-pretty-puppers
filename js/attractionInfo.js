"use strict";

let attractDB = require("./db-calls.js");


attractDB.fetchAttractions()
// THEN getting the result
.then((result) => {
    // and console logging it
   console.log("fetchAttractions:", result);
   // use function from parkInfoDOM
    // parkInfoDOM(parkInfo);
});


module.export = fetchAttractions;