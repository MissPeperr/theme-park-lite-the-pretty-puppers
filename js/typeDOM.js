"use strict";

let createTypeHTML = require("./typeHTML");

let typeArray = [];

function listTypeInfo (typeKey) {
    typeKey.forEach(prop => {
        // for each item in the typeInfo, use the createtypeHTML function we made on the tppeInfoHTML.js file
        let typeComponent = createTypeHTML(prop.name);

        typeArray.push(prop.name);
        writeAreaTypeToDOM(typeComponent);
    });
}

function writeAreaTypeToDOM(prop){
    // going to the DOM and getting the id #contact-list and adding each contact to the page
    document.querySelector("#attractionType").innerHTML += prop;
}

console.log("type array", typeArray);

// let newArray = typeArray.map((item) =>{
//     let letterArray =  item.split("");
//     let capital = letterArray[0].toUpperCase();
//     return capital;
//     console.log("letterarray", capital);
// });

let newArray = typeArray.forEach((index) => {
    index.split("");
});

console.log("testin array stuff:", newArray);



module.exports = listTypeInfo;