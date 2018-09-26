const Sequelize = require('sequelize');
const Umzug = require('umzug');

const MigrationProvider = require('./MigrationProvider');

module.exports = class SequelizeMigrationProvider extends MigrationProvider {
    constructor(options) {
        super(options);

        this.close = this.init();
    }

    init() {
        this.sequelize = new this.options.sequelize(Sequelize);
        this.umzug = new Umzug({
            storage: 'sequelize',
            storageOptions: {
                sequelize: this.sequelize,
            },
            migrations: {
                params: [this.sequelize.getQueryInterface(), this.sequelize.constructor],
                path: `${process.cwd()}/database/migrations`,
            },
            logging: function() {
                console.log.apply(null, arguments);
            },
        });

        return () => {
            this.sequelize.close();
        };
    }

    pending() {
        return this.umzug.pending();
    }

    up() {
        return this.umzug.up();
    }

    down() {
        return this.umzug.down();
    }
}