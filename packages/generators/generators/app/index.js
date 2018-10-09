'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const yosay = require('yosay');
const { name: packageName } = require('../../package.json');

module.exports = class extends Generator {
  initializing() {
    this.log(
      yosay(`Welcome to ${chalk.red('@clarityhub/generator-harmony')} generator!`)
    );

    const done = this.async();
    const cmd = packageName.replace('generator-', '');

    fs.readdir(path.resolve(__dirname, '..'), (err, data) => {
      if (err) {
        console.error(err);
        done();
      }

      console.log('You can run the following commands:');
      console.log();
      data.filter(d => d !== 'app' && d !== '.DS_Store').forEach(d => {
        const { usage } = require(path.resolve(__dirname, '..', d));

        console.log(colors.yellow(`\t${cmd}:${d} ${usage || ''}`));
      });
      console.log();
      done();
    });
  }
};
