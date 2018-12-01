module.exports = class Controller {
    constructor(ioc) {
        this.ioc = ioc;
    }

    middleware(Middleware) {
        const middleware = new Middleware(this.ioc);

        return middleware.check();
    }

    validate(obj, ClassValidator) {
        const v = new ClassValidator();
        return v.check(obj);
    }
}