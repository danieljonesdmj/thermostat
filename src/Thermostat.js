'use strict';

function Thermostat() {
this.temperature = 20;
};

Thermostat.prototype.temperature = function() {
  this.temperature;
}

Thermostat.prototype.up = function() {
  this.temperature += 1
  return this.temperature
};

Thermostat.prototype.down = function() {
  if (this.temperature >= 10) {
    this.temperature -= 1
} else {
  throw new Error ('NOOO ITS COLD')
}
};
