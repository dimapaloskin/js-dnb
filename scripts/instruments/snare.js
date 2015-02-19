var config = require('./../config');

var filter = [
  { type : 'bandpass', frequency : 200, q : 0.5 }
];

var snare = new Wad({
  source: '/samples/snare.wav',
  volume: 10,
  filter: filter,
  globalReverb: true
});

var play = function (options) {
  snare.play(options);
};

module.exports = {
  play: play,
  sources: [
    snare
  ]
};