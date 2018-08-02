'use strict'


let area = document.querySelector("#put-attractions-here");

function newAttractionCard (name, description, color) {
        return `<div id='attraction-container' style='background-color: #${color}'>
        <h2 id='attraction-h2'>
        ${name} 
        </h2>
        <p id='attraction-description'>
        ${description}
        </p>`

}

module.exports = newAttractionCard;