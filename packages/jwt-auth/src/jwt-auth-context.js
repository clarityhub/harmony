const Auth = require('@clarityhub/harmony-server');

module.exports = (bottle) => {
    return async ({ req }) => {
        const { authorization } = req.headers;

        const auth = new Auth({ id: authorization });

        if (bottle) {
            bottle.service('Auth', () => auth);
        }

        return {
            bottle,
            auth,
        };

    }
}