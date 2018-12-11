module.exports = ({name, description}, config) => `{
  "name": "${name}",
  "description": "${description ? description : ''}",
  "ngModules": [
    "app.module"${config ? ',\n   "config.module"' : ''}
  ],
  "js": [
    "dist/bundle.js"
  ],
  "imports": [],
  "css": [],
  "copy": []
}`;
