'use strict'

let createAttractionHTML = require("./attractionHTML");

let parkDIV = document.querySelector("#parkAttractions");

function listAttractionInfo (attractionKey) {
    attractionKey.forEach(prop => {
        // for each item in the parkInfo, use the createParkHTML function we made on the parkInfoHTML.js file
        let attractionComponent = createAttractionHTML(prop.name, prop.description);
        writeAttractionInfoToDOM(attractionComponent);
    });
}

function writeAttractionInfoToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#parkAttractions").innerHTML += prop;
}

module.exports = listAttractionInfo;