"use strict";

let createAreaHTML = require("./areaHTML");

function listAreaInfo (areaKey) {
    areaKey.forEach(prop => {
        // let divCreator = `<div class='area${prop.id}'></div>`
        // for each item in the parkInfo, use the createParkHTML function we made on the parkInfoHTML.js file
        let areaComponent = createAreaHTML(prop.colorTheme, prop.name, prop.description);
        // if the id is equal to any of those numbers, create a div and assign it an ID related to its number
        console.log("id of area", prop.id);
        writeAreaInfoToDOM(areaComponent);
    });
}

function writeAreaInfoToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#parkAreas").innerHTML += prop;
}

module.exports = listAreaInfo;