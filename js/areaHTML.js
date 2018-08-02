"use strict";

let populateAreaDIV = (color, name, description) => {
    return `<div style='background-color: #${color}; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'>
                <h2 style='color: white; text-align: left; margin: 1em 0 .25em 0; padding: 5px 0 0 15px; text-shadow: 2px 2px 8px #000000; font-size: 2.5em; font-family: "Mouse Memoirs", sans serif'>
                ${name}
                </h2>
                <p style='font-family: "Questrial", sans serif; margin-top: 0; padding: 10px; color: snow; font-size: 18px'>
                ${description}
                </p>
            </div>`
}

module.exports = populateAreaDIV;