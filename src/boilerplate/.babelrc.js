module.exports = `{
  "env": {
    "production": {
      "plugins": [
        "transform-remove-console"
      ]
    }
  },
  "plugins": ["syntax-async-functions", "transform-regenerator"]
}`