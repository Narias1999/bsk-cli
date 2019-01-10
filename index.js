#! /usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const generate = require('./src');
const argv = require('argv');
const fs = require('fs');

// read the cli args
const { options } = argv.option([
  {
    name: 'name',
    short: 'n',
    type: 'string'
  },
  {
    name: 'description',
    short: 'd',
    type: 'String'
  }
]).run();

async function init() {
  console.log(
    `Welcome to the ${chalk.blue('bismark-cli')} for cumulocity ES6 plugins and widgets \n`
  )

  const { choice } = await inquirer.prompt({
    message: 'What do you want to generate?',
    name: 'choice',
    type: 'list',
    choices: ['Plugin', 'Widget']
  });

  let config = false;
  if (choice === 'Widget') {
    config = await inquirer.prompt({
      message: 'Do you want a config module?',
      name: 'choice',
      type: 'list',
      choices: ['Yes', 'No']
    });
    if (config.choice === 'Yes') config = true;
    else config = false
  }

  generate(options, choice, config);
}

// check if a cumulocity.json exists
if (fs.existsSync(`${process.cwd()}/cumulocity.json`)) {
  if (options.name) {
    init();
  } else {
    console.log(`Set the plugin/widget name: ${chalk.blue('bismark -n project-name')}`);
  }
} else {
  console.log('You should be in a cumulocity project');
}

