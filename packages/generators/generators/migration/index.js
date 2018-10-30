const colors = require('colors');
const ClarityHubGenerator = require('../app/utils/ClarityHubGenerator');

module.exports = class extends ClarityHubGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.option('directory', {
      type: String,
      alias: 'd',
      desc: 'The directory to create the migration',
      default: `${process.cwd()}/database/migrations`
    });
    this.option('table', {
      type: String,
      desc: 'Create a table migration',
      default: false
    });
    this.argument('migrationName', {
      type: String,
      desc: 'The name of the middleware (ex: create-todo-table)',
      required: true
    });

    this.thisDir = __dirname;

    this.options.timestamp = Number(new Date());
  }
};

module.exports.usage = `${colors.green('./database/migrations')} ${colors.blue(
  'create-todo-table'
)}`;
