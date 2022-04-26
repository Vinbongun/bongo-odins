'use strict';
const fs = require('fs');

module.exports = async function saveJson(jsonData, filename) {
    let data = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(`${filename}.json`, data);
    return console.log("Saved to json file")
}
