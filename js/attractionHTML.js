'use strict'



function newAttractionCard (name, description) {
        return `<div id='attraction-container'>
        <h2 id='attraction-h2'>
        ${name} 
        </h2>
        <p id='attraction-description'>
        ${description}
        </p>`

}


module.exports = newAttractionCard;