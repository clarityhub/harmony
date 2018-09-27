const { Auth } = require('@clarityhub/harmony-server');

module.exports = (cb) => {
    return async ({ req }) => {
        const { authorization } = req.headers;

        // Todo, need Different Auth types, like NotAuthed for when no jwt is provided
        const auth = new Auth({ id: authorization });

        return cb(auth);
    }
}