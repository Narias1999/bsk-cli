const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');
const copy = require('./utils/copy');

async function generateScafolding (options, config) {
  const { name } = options;
  try {
    const path = `${process.cwd()}/plugins/${name}`;
    if (fs.existsSync(path)) {
      console.log(chalk.red('Error'));
      console.log(`The plugin with name ${name} already exits in your app`);
      process.exit(0);
    }
    shell.mkdir('-p', path);
    await copy(path);
  } catch (error) {
    console.log(chalk.red('Error'));
    console.error(error);
    process.exit(0);
  }
}

module.exports = generateScafolding;
