const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');
const copy = require('./utils/copy');
const edit = require('./utils/edit')

async function generateScafolding (options, config) {
  const { name, description } = options;
  console.log(name, description);
  try {
    console.log(config);
    const path = `${process.cwd()}/plugins/${name}`;
    if (fs.existsSync(path)) {
      console.log(chalk.red('Error'));
      console.log(`The plugin with name ${name} already exits in your app`);
      process.exit(0);
    }

    // Create the plugin/widget folder
    shell.mkdir('-p', path);
    await copy(path);

    // edit the folders with the correct name
    let dashSeparated = name.replace(/[A-Z]+/g, (letter, position) => {
      return position != 0 ? '-' + letter.toLowerCase() : letter.toLowerCase()
    })
    edit(`${path}/package.json`, dashSeparated, 'nameToReplace');
    edit(`${path}/cumulocity.json`, name, 'nameToReplace');


  } catch (error) {
    console.log(chalk.red('Error'));
    console.error(error);
    process.exit(0);
  }
}

module.exports = generateScafolding;
