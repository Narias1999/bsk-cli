
function check () {
  return fs.existsSync('./cumulocity.json')
}

module.exports = check;