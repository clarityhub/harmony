module.exports = class Auth {
    constructor({ id }) {
        this.id = id;
    }

    getUserId() {
        return this.id;
    }
}