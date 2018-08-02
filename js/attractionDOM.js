'use strict'

let attractDB = require("./db-calls");
let createAttractionHTML = require("./attractionHTML");

let parkDIV = document.querySelector("#parkAttractions");
let area = document.querySelector("#put-attractions-here")


function listAttractionInfo (attractionKey) {
    attractionKey.forEach(prop => {
        let areaColor = "";
        // for each item in the parkInfo, use the createParkHTML function we made on the parkInfoHTML.js file
        let attractionAreas = attractDB.getAttractionAreas();
        attractionAreas.forEach((item) => {
            if(item.id === prop.area_id) {
                areaColor = item.colorTheme;
            }

        });
        let attractionComponent = createAttractionHTML(prop.name, prop.description, areaColor);
        writeAttractionInfoToDOM(attractionComponent);
    });
}

function writeAttractionInfoToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#parkAttractions").innerHTML += prop;
}

module.exports = listAttractionInfo;