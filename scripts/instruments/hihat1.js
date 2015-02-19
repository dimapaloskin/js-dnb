var config = require('./../config');

var hihat = new Wad({
  source: '/samples/hat1.wav',
  volume: 1,
  globalReverb: true
});

var play = function (options) {
  hihat.play(options);
};

module.exports = {
  play: play,
  sources: [
    hihat
  ]
};