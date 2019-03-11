const scafoldingGenerator = require('./generateScaffolding');
const putInCumulocityJSON = require('./putInCumulocityJSON')
/**
 * 
 * @param {Object} options
 * @param {String} options.name
 * @param {String} options.description
 * @param {String} type 
 * @param {boolean} config 
 */
async function generator (options, type, config) {
  await scafoldingGenerator(options, config)
  putInCumulocityJSON(options.name)
}

module.exports = generator;