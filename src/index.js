const scafoldingGenerator = require('./generateScaffolding');
/**
 * 
 * @param {Object} options
 * @param {String} options.name
 * @param {String} options.description
 * @param {String} type 
 * @param {boolean} config 
 */
function generator (options, type, config) {
  scafoldingGenerator(options, config);
  if (type === 'Plugin') {

  } else if (type === 'Widget') {
    if (config) {

    } else {
      
    }
  }
}

module.exports = generator;