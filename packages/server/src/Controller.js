module.exports = class Controller {
    constructor(ioc) {
        this.ioc = ioc;
    }

    async middleware(Middleware) {
        const middleware = new Middleware(this.ioc);

        await middleware.check();
    }

    validate(obj, ClassValidator) {
        const v = new ClassValidator();
        return v.check(obj);
    }
}