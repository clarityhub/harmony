module.exports = (bottle) => {
    return async ({ req }) => {
        const { authorization } = req.headers;

        const auth = new Auth({ id });

        if (bottle) {
            bottle.service('Auth', () => auth);
        }

        return {
            bottle,
            auth,
        };

    }
}