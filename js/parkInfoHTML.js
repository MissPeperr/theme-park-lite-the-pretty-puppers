"use strict";

let makeParkHTML = (name, description, location, openHours, closeHours) => {
    return `<h1 style='font-family: "Mouse Memoirs", sans serif; font-size: 4em; color: snow; background-color: skyblue; padding: 10px; margin: 0 0 0 0; text-shadow: 4px 4px 10px #000000;'>
            Welcome to the ${name}!
            </h1>
            <div style='display: flex; flex-direction: column-reverse;'>
                <p style='font-family: "Questrial", sans serif; background-color: whitesmoke; border-radius: 15px; font-size: 18px; margin: 0 2em 2em 2em; padding: .5em .5em .5em .5em; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'>
                ${description}
                </p>
                <div style='display: flex; flex-direction: row'>
                    <p style='font-family: "Questrial", sans serif; color: snow; background-color: skyblue; margin-top: 0px; padding: 0px 5px 0px 5px'>
                    ${location}
                    </p>
                    <p style='font-family: "Questrial", sans serif; margin-top: 0px; padding: 0px 5px 0px 5px'>
                    Hours: ${openHours}am-${closeHours}pm
                    </p>
                </div>
            </div>`
}

module.exports = makeParkHTML;