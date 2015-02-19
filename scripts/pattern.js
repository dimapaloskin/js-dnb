var config = require('./config');
var _ = require('underscore');

var getPatternLength = function (instrument, pattern) {
  var maxLength = 0;
  _.each(pattern, function (item) {
    var hold = item[2] || 1;
    if (item[1] + hold > maxLength) {
      maxLength = item[1] + hold;
    }
  });

  return maxLength;
};

var playPattern = function (options, pattern) {
  var patternLength = options.patternLength || getPatternLength(options.instrument, pattern);
  var wait = options.wait || 0;
  if (options.loop) {
    var opt = _.clone(options);
    var loopCount = opt.loop;
    delete opt.loop;
    for (var i = 1; i < loopCount; i++) {
      //opt.wait = (i * patternLength) + wait;
      var tt = (i * patternLength) + wait;
      opt.wait = 0;
      tt = tt * config.beat * opt.step;
      setTimeout(function () {
        playPattern(opt, pattern);
      }, tt * 1000);
    }
  }

  _.each(pattern, function (item) {

    var wait = config.beat * options.step * item[1];
    if (options.wait) {
      wait = wait + config.beat * options.step * options.wait;
    }

    var env = {};
    if (item[2]) {
      env = {
        hold: config.beat * options.step * item[2]
      };
    }
    if (item[0] === 'drum') {
      options.instrument.play({
        pitch: item[0],
        wait: wait,
        env: env
      });
    } else {
      options.instrument.play({
        pitch: item[0],
        wait: wait,
        env: env
      });
    }
  });
};

module.exports = playPattern;