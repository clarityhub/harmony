const { Middleware } = require('@clarityhub/harmony-server');

module.exports = class <%= middlewareName %> extends Middleware {
  check() {
    throw new Error('Not Allowed');
  }
};
