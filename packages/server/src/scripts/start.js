const nodemon = require('nodemon');

module.exports = function () {
    nodemon({
        // TODO allow override
        script: `${process.cwd()}/src/index.js`,
    });

    nodemon.on('start', function () {
        console.log('Listening for changes');
    }).on('quit', function () {
        console.log('Exiting');
        process.exit();
    });
}
