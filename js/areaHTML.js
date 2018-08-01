"use strict";

let populateAreaDIV = (color, name, description) => {
    return `<div style='background-color: #${color}'>
            <h3>${name}</h3>
            <p>${description}</p></div>`
}

module.exports = populateAreaDIV;