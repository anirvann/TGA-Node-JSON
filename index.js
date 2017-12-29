var fs = require('fs'),
  es = require('event-stream'),
  JSONStream = require('JSONStream');

var generateSize = require('./helpers/generate-size'),
  generateYAML = require('./helpers/generate-yaml');

fs
  .createReadStream('data/sample.json')
  .pipe(JSONStream.parse('*'))
  .pipe(es.map(generateSize))
  .pipe(es.writeArray(generateYAML));
