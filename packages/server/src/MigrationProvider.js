module.exports = class MigrationProvider {
    constructor(options) {
        this.options = options;
    }

    close() {
        throw new Error('close() not implemented');
    }

    pending() {
        throw new Error('pending() not implemented');
    }

    up() {
        throw new Error('up() not implemented');
    }

    down() {
        throw new Error('down() not implemented');
    }
};
