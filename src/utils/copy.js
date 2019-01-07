const ncp = require('ncp');
const path = require('path')
const { promisify } = require('util')

const source = path.dirname(require.main.filename) + '/src/boilerplate';

const ncpPromise = promisify(ncp);

module.exports = destination => ncpPromise(source, destination);
