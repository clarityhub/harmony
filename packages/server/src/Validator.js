const validate = require('validate.js');

const ValidationError = require('./ValidationError');

module.exports = class Validator {
    check(obj) {
        const resp = validate(obj, this.getConstraints());

        if (resp) {
            throw new ValidationError(resp);
        } else {
            return true;
        }
    }
}