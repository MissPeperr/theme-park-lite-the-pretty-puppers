"use strict";

let createParkHTML = require("./parkInfoHTML");

let parkDIV = document.querySelector("#parkInfo");

// 1. get information from parkInfo
// 2. iterate over them
// 3. render them to the DOM
function listParkInfo(taco){
    taco.forEach(prop => {
        // for each item in the parkInfo, use the createParkHTML function we made on the parkInfoHTML.js file
        let hoursArray = [];
        prop.operating_hours.forEach(item => {
            hoursArray.push(item.opening);
            hoursArray.push(item.closing);
        })
        console.log("array", hoursArray);
        let parkComponent = createParkHTML(prop.name, prop.description, prop.location, hoursArray[0], hoursArray[1]);
        console.log("parkComponent", parkComponent);
        writeParkInfoToDOM(parkComponent);
    });
}

function writeParkInfoToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#parkInfo").innerHTML += prop;
}


module.exports = listParkInfo;