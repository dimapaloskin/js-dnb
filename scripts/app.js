'use strict';

var config = require('./config');
var pattern = require('./pattern');
var globalReverb = require('./global-reverb');

var nerobass = require('./instruments/nerobass');
var synth = require('./instruments/synth');
var kick = require('./instruments/kick');
var snare = require('./instruments/snare');
var hihat1 = require('./instruments/hihat1');
var hihat2 = require('./instruments/hihat2');
var okay = new Wad({
  source: '/samples/okay.wav',
  volume: 3
});

var beat = config.beat;

Wad.setGlobalReverb(globalReverb);

var play = function () {
  pattern({
    instrument: nerobass,
    step: 5,
    wait: 0,
    loop: 8
  }, [
    ['C1', 0],
    ['D#1', 1],
    ['F1', 2, 2]
  ]);

  pattern({
    instrument: synth,
    step: 2.5,
    wait: 16,
    loop: 4,
    patternLength: 8
  }, [
    ['C3', 0, 0.5],
    ['D#3', 0.5, 0.5],
    ['F3', 1, 0.5],
    ['C3', 1.5, 0.5],
    ['G3', 4, 0.5],
    ['D#3', 4.5, 0.5],
    ['F3', 5, 0.5],
    ['C3', 5.5, 0.5],
    ['G3', 7, 0.125],
    ['F3', 7.125, 0.125],
    ['D#3', 7.25, 0.125],
    ['F3', 7.375, 0.5],
    ['C3', 7.5, 0.5]
  ]);

  pattern({
    instrument: synth,
    step: 2.5,
    wait: 48,
    loop: 2,
    patternLength: 8
  }, [
    ['G4', 0, 0.25],
    ['D#4', 0.25, 0.25],
    ['C4', 0.5, 0.5],
    ['G4', 2, 0.25],
    ['F4', 2.25, 0.25],
    ['D#4', 2.5, 0.5],
    ['F4', 4, 0.25],
    ['G4', 4.25, 0.25],
    ['C4', 4.5, 0.5]
  ]);

  pattern({
    instrument: synth,
    step: 5,
    wait: 24,
    loop: 2,
    patternLength: 4
  }, [
    ['G2', 0, 1],
    ['A#2', 1, 1],
    ['C3', 2, 2],
  ]);

  pattern({
    instrument: kick,
    step: 5,
    patternLength: 1,
    wait: 16,
    loop: 16
  }, [
    ['drum', 0],
    ['drum', 0.625]
  ]);

  pattern({
    instrument: kick,
    step: 1.25,
    patternLength: 0.5,
    wait: 126,
    loop: 4
  }, [
    ['drum', 0],
    ['drum', 0.125],
    ['drum', 0.25],
    ['drum', 0.375]
  ]);


  pattern({
    instrument: okay,
    step: 1.25,
    patternLength: 0.5,
    wait: 125
  }, [
    ['drum', 0]
  ]);

  pattern({
    instrument: snare,
    step: 5,
    patternLength: 1,
    wait: 16,
    loop: 16
  }, [
    ['drum', 0.25],
    ['drum', 0.75]
  ]);

  pattern({
    instrument: hihat1,
    step: 5,
    patternLength: 1,
    wait: 16,
    loop: 16
  }, [
    ['drum', 0.0625],
    ['drum', 0.1875],
    ['drum', 0.3125],
    ['drum', 0.4375],
    ['drum', 0.5625],
    ['drum', 0.6875],
    ['drum', 0.8125],
    ['drum', 0.9375],
  ]);

  pattern({
    instrument: hihat2,
    step: 5,
    patternLength: 1,
    wait: 16,
    loop: 16
  }, [
    ['drum', 0],
    ['drum', 0.125],
    ['drum', 0.25],
    ['drum', 0.375],
    ['drum', 0.5],
    ['drum', 0.625],
    ['drum', 0.75],
    ['drum', 0.875],
  ]);
};

var button = document.getElementById('play');
button.addEventListener('click', function () {
  play();
  button.setAttribute('disabled', 'disabled');
  button.innerHTML = '|'
});
