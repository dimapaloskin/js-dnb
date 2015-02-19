var config = require('./../config');

var volume = 20;
var env = {
  attack: 0.1,
  release: 0.1,
  hold: config.beat * 5
};

var delay = {
  delayTime: .5,
  wet: 1,
  feedback: 0.5
};

var filter = [
  { type : 'bandpass', frequency : 100, q : 1 },
  { type : 'bandpass', frequency : 600, q : 3 },
  { type : 'hightpass', frequency : 2500, q : 2 },
  { type : 'hightpass', frequency : 50, q : 0.05 }
];

var compressor = {
  attack: .3,
  knee: 30,
  ratio: 200,
  release: .25,
  threshold: -24
};

var nerobass = new Wad({
  source: 'sawtooth',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
});

var nerobassDetune10 = new Wad({
  source: 'sawtooth',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 10,
});

var nerobassDetune15 = new Wad({
  source: 'sawtooth',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 15,
});

var nerobassDetune20 = new Wad({
  source: 'sawtooth',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 20,
});

var play = function (options) {
  nerobass.play(options);
  nerobassDetune10.play(options);
  nerobassDetune15.play(options);
  nerobassDetune20.play(options);
};

var stop = function (options) {
  nerobass.stop(options);
  nerobassDetune10.stop(options);
  nerobassDetune15.stop(options);
  nerobassDetune20.stop(options);
};

module.exports = {
  play: play,
  stop: stop,
  sources: [
    nerobass,
    nerobassDetune10,
    nerobassDetune15,
    nerobassDetune20
  ]
};