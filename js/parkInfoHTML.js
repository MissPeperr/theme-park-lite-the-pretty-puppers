"use strict";

let makeParkHTML = (name, description, location, openHours, closeHours) => {
    return `<h1>${name}</h1>
            <p>${description}</p>
            <p>${location}</p>
            <h4>Open: ${openHours}am</h4>
            <h4>Close: ${closeHours}pm</h4>`
}

module.exports = makeParkHTML;