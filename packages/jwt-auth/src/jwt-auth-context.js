const { Auth } = require('@clarityhub/harmony-server');
const decodeToken = require('./utils/decodeToken');

module.exports = (key, options, cb) => {
    return async ({ req }) => {
        const { authorization } = req.headers;

        if (!authorization) {
            return cb(Auth.NoAuth);
        }

        // TODO better parsing
        const token = authorization.split(' ')[1];

        const decoded = await decodeToken(key, token, options);
        const auth = new Auth(decoded);

        return cb(auth);
    }
}