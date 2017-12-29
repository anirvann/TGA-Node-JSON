module.exports = function (stream, callback) {
  stream.size = JSON.stringify(stream).length;
  callback(null, stream);
};

