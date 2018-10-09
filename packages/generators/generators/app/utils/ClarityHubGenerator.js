const Generator = require('yeoman-generator');
const colors = require('colors');
const path = require('path');
const dir = require('node-dir');

module.exports = class NextivaGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.args = args;

    // We need to add ourselves to the extended prototype
    // Yeoman looks for `getOwnPropertyNames`
    Object.getPrototypeOf(this).writing = Object.getPrototypeOf(this).writing;
  }

  writing() {
    const done = this.async();
    const regexes = Object.keys(this.options).map(key => {
      return [key, new RegExp(`__${key}__`, 'gi')];
    });
    const searchDir = path.join(this.thisDir, './templates');

    dir.files(searchDir, (err, allFiles) => {
      if (err) {
        done(err);
        return;
      }

      allFiles.forEach(file => {
        const originalFileName = path.basename(file);
        const fileName = regexes.reduce((fileName, regex) => {
          return fileName.replace(regex[1], this.options[regex[0]]);
        }, originalFileName);

        const fileDirectory = file.slice(
          searchDir.length + 1,
          file.indexOf(originalFileName)
        );

        const fileIn = file;
        const fileOut = path.join(this.options.directory, fileDirectory, fileName);

        this.fs.copyTpl(
          this.templatePath(fileIn),
          this.destinationPath(fileOut),
          this.options
        );
      });

      done();
    });
  }

  end() {
    console.log(colors.green('Done!'));
  }
};
