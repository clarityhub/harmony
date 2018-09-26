module.exports = class Controller {
    constructor(ioc) {
        this.ioc = ioc;
    }

    validate(obj, ClassValidator) {
        const v = new ClassValidator();
        return v.check(obj);
    }
}