const { Auth } = require('@clarityhub/harmony-server');

module.exports = (cb) => {
    return async ({ req }) => {
        const { authorization } = req.headers;

        const auth = new Auth({ id: authorization });

        return cb(auth);
    }
}