const edit = require('./utils/edit')
const chalk = require('chalk')
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

/**
 * put the app in the cumulocityJSON
 * @param {string} appName 
 */
async function putInCumulocityJson (appName) {
  console.log('Putting plugin in cumulocityJSON')
  const path = process.cwd() + '/cumulocity.json'
  
  let lFile = await readFile(path)
  file = JSON.parse(lFile)

  let { contextPath } = file

  file.imports.unshift(`${contextPath}/${appName}`)

  file = JSON.stringify(file, null, 2)

  await edit(path, file, lFile)

  console.log(chalk.cyan(`Plugin ${appName} generated successfully`))
}

module.exports = putInCumulocityJson
