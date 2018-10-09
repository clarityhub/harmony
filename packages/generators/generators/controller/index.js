const colors = require('colors');
const ClarityHubGenerator = require('../app/utils/ClarityHubGenerator');

module.exports = class extends ClarityHubGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('directory', {
      type: String,
      desc: 'The directory to create the controller',
      default: `${process.cwd()}/src/controllers`
    });
    this.argument('controllerName', {
      type: String,
      desc: 'The name of the controller (ex: TodoController)',
      required: true
    });

    this.thisDir = __dirname;
  }
};

module.exports.usage = `${colors.green('./src/controllers')} ${colors.blue(
  'TodoController'
)}`;
