'use strict'

let attractDB = require ("./db-calls");
let attractDOM = require ("./attractionDOM");

let attractionInfo = {};

attractDB.fetchAttractions()
// THEN getting the result
.then((result) => {
    // and setting it inside of parkInfo
   attractionInfo = result;
//    console.log("fetchAreaInfo:", areaInfo);
   // use function from parkInfoDOM
    attractDOM(attractionInfo);
});