module.exports = function singletonify(func) {
    let singleton;

    return function (...args) {
        if (singleton) {
            return singleton;
        }

        const result = func(...args);

        singleton = result;

        return result;
    }
}