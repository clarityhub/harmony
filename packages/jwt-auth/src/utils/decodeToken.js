const jwt = require('jsonwebtoken');
const promisify = require('promisify-node');

const verify = promisify(jwt.verify);

module.exports = async (key, token, options) => {
    const decoded = jwt.decode(token);

    if (!decoded) {
        throw new Error('A valid token was not provided');
    }

    return await verify(token, key, options);
};
