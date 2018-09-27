module.exports = class Middleware {
    constructor(ioc) {
        this.ioc = ioc;
    }

    check() {
        throw new Error('check not implemented');
    }
}
