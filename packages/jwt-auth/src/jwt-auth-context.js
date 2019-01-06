const { Auth } = require('@clarityhub/harmony-server');
const decodeToken = require('./utils/decodeToken');

module.exports = (key, options, cb) => {
    return async ({ req }) => {
        const { authorization, Authorization } = req.headers;

        // Normalize name
        const a = Authorization || authorization;

        if (!a) {
            return cb(Auth.NoAuth);
        }

        // TODO better parsing
        const token = a.split(' ')[1];

        const decoded = await decodeToken(key, token, options);
        const auth = new Auth(decoded);

        return cb(auth);
    }
}