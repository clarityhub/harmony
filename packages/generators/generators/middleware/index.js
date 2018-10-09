const colors = require('colors');
const ClarityHubGenerator = require('../app/utils/ClarityHubGenerator');

module.exports = class extends ClarityHubGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('directory', {
      type: String,
      desc: 'The directory to create the middleware',
      default: `${process.cwd()}/src/middleware`
    });
    this.argument('middlewareName', {
      type: String,
      desc: 'The name of the middleware (ex: IsAuthenticatedMiddleware)',
      required: true
    });

    this.thisDir = __dirname;
  }
};

module.exports.usage = `${colors.green('./src/middleware')} ${colors.blue(
  'IsAuthenticatedMiddleware'
)}`;
