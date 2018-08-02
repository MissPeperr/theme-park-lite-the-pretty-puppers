let db = require("./db-calls.js");
let typeDOM = require("./typeDOM");

let typeInfo = {};

// this function is going to db-calls.js and getting the fetchParkInfo function
db.fetchTypes()
// THEN getting the result
.then((result) => {
    // and setting it inside of typeInfo
   typeInfo = result;
   // use function from typeInfoDOM
    typeDOM(typeInfo);
    console.log("typeinfor",typeInfo)
});