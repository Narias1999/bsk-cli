const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');
const { package, cumulocityJSON, webpack, babel, controller } = require('./boilerplate');

function generateScafolding (options, config) {
  const { name } = options
  try {
    let path = `${process.cwd()}/plugins/${name}`;
    if (fs.existsSync(path)) {
      console.log(chalk.red('Error'));
      console.log(`The plugin with name ${name} already exits in your app`);
      process.exit(0);
    }

    // package json generator
    fileGenerator('package.json', package(options), name);
    fileGenerator('cumulocity.json', cumulocityJSON(options, config),name);
    fileGenerator('.babelrc', babel, name);
    fileGenerator('webpack.config.js', webpack, name);

    // generate folders views and src

    shell.mkdir(`${path}/src/controllers`);
    shell.mkdir(`${path}/src/modules`);
    shell.mkdir(`${path}/views`);

    // genearte controller

    fileGenerator('src/controllers/controllerApp.js', controller, name);
    fileGenerator('views/app.html', controller, name);


  } catch (error) {
    console.log(chalk.red('Error'));
    console.error(error);
    process.exit(0);
  }
}

function fileGenerator (fileName, content, pluginName) {
  const path = `./plugins/${pluginName}`;
    shell.mkdir('-p', path);
    shell.touch(`./plugins/${pluginName}/${fileName}`);

    fs.writeFileSync(`${process.cwd()}/plugins/${pluginName}/${fileName}`, content);
}

module.exports = generateScafolding;
