var write = require('write'),
  yaml = require('js-yaml');

module.exports = function(err, arr) {
  write('output/output.yml', yaml.dump(arr, { flowLevel: -1 }));
};
