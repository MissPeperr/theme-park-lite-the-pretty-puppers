'use strict'


let area = document.querySelector("#put-attractions-here");

function newAttractionCard (name, description, color, type) {
        return `<div id='attraction-container' style='background-color: #${color}'>
        <h2 id='attraction-h2'>
        ${name} 
        </h2>
        <p id='attraction-description'>
        ${description}
        </p>
        <p class='type-info'>This attraction is a ${type}!</p>`

}

module.exports = newAttractionCard;