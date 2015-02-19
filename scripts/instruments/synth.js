var config = require('./../config');

var volume = 1;
var env = {
  attack: 0.02,
  release: 0.02,
  hold: config.beat * 5
};

var tremolo = {
  shape: 'sine',
  magnitude: 3,
  speed: 4,
  attack: 0
};

var filter = [
  { type : 'bandpass', frequency : 500, q : 1 }
];

var compressor = {
  attack: .003,
  knee: 30,
  ratio: 12,
  release: .25,
  threshold: -24
};

var synth1 = new Wad({
  source: 'sine',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 20,
  vibrato: {
    shape: 'sine',
    magnitude: 4,
    speed: 4,
    attack: 0
  }
});

var synth1Detune = new Wad({
  source: 'sawtooth',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 15,
  vibrato: {
    shape: 'sine',
    magnitude: 4,
    speed: 4,
    attack: 0
  }
});

var synth2Detune = new Wad({
  source: 'square',
  volume: volume,
  env: env,
  globalReverb: true,
  compressor: compressor,
  filter: filter,
  detune: config.beat * 10 * 10,
  vibrato: {
    shape: 'sine',
    magnitude: 4,
    speed: 4,
    attack: 0
  }
});


var play = function (options) {
  synth1.play(options);
  synth1Detune.play(options);
  synth2Detune.play(options);
};

var stop = function (options) {
  synth1.stop(options);
  synth1Detune.stop(options);
  synth2Detune.stop(options);
};

module.exports = {
  play: play,
  stop: stop,
  sources: [
    synth1,
    synth1Detune,
    synth2Detune
  ]
};