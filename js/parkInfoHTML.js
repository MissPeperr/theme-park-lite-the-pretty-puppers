"use strict";

let makeParkHTML = (name, description, location, openHours, closeHours) => {
    return `<h1 id='parkName'>
            Welcome to the ${name}!
            </h1>
            <div id='park-info-container'>
                <p id='park-description'>
                ${description}
                </p>
                <div id='park-location-container'>
                    <p id='park-location'>
                    ${location}
                    </p>
                    <p id='park-hours'>
                    Hours: ${openHours}am-${closeHours}pm
                    </p>
                </div>
            </div>`
}

module.exports = makeParkHTML;