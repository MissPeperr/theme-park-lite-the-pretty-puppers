'use strict'

let db = require("./db-calls");
let createAttractionHTML = require("./attractionHTML");

let parkDIV = document.querySelector("#parkAttractions");
let area = document.querySelector("#put-attractions-here")


function listAttractionInfo (attractionKey) {
    attractionKey.forEach(prop => {
        let areaColor = "";
        let attractionType = "";
        // for each item in the parkInfo, use the createParkHTML function we made on the parkInfoHTML.js file
        let attractionTypes = db.getTypes();
        attractionTypes.forEach((item) => {
            if(item.id === prop.type_id) {
                attractionType = item.name;
            }
        });

        let attractionAreas = db.getAreas();
        attractionAreas.forEach((item) => {
            if(item.id === prop.area_id) {
                areaColor = item.colorTheme;
            }

        });
        let attractionComponent = createAttractionHTML(prop.name, prop.description, areaColor, attractionType);
        writeAttractionInfoToDOM(attractionComponent);
    });
}

function writeAttractionInfoToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#parkAttractions").innerHTML += prop;
}

module.exports = listAttractionInfo;