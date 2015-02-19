var config = require('./../config');

var filter = [
  { type : 'hightpass', frequency : 200, q : 0.2 }
];

var kick = new Wad({
  source: '/samples/kick.wav',
  volume: 10,
  filter: filter,
  globalReverb: true
});

var kick1 = new Wad({
  source: '/samples/kick.wav',
  volume: 3,
  globalReverb: true
});


var play = function (options) {
  kick.play(options);
  kick1.play(options);
};

module.exports = {
  play: play,
  sources: [
    kick,
    kick1
  ]
};