var config = require('./../config');

var hihat = new Wad({
  source: '/samples/hat2.wav',
  volume: .75,
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