"use strict";

let areaDB = require ("./db-calls");
let areaDOM = require ("./areaDOM");

let areaInfo = {};

areaDB.fetchAreas()
// THEN getting the result
.then((result) => {
    // and setting it inside of parkInfo
   areaInfo = result;
   console.log("fetchAreaInfo:", areaInfo);
   // use function from parkInfoDOM
    // areaDOM(areaInfo);
});

