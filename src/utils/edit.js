const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

/**
 * 
 * @param {String} source 
 * @param {String} replacement 
 * @param {RegExp} regex 
 */
async function editFile (source, replacement, regex) {
  if (!regex) return writeFile(source, replacement);
  try {
    const lastData = await readFile(source, 'utf8');
    const newData = lastData.replace(regex, replacement);
    
    return writeFile(source, newData);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = editFile;
