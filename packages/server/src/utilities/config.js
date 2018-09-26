const fs = require('fs');

function getConfig() {
    const path = `${process.cwd()}/config.js`;
    if (fs.existsSync(path)) {
        const config = require(path);
        return config;
    } else {
        throw new Error(`No configuration found at ${path}`);
    }
}

module.exports = getConfig;