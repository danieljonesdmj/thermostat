'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powersavingmode = true;
}

Thermostat.prototype.up = function() {
  if (this.powersavingmode === true && this.temperature < 25) {
    this.temperature += 1;
    return this.temperature;
} else if (this.powersavingmode !== true && this.temperature < 32) {
    this.temperature += 1;
    return this.temperature;
} else {
  throw new Error ('At maximum temperature');
}
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
    return this.temperature;
  } else {
    throw new Error ('NOOO ITS COLD');
  }
};

Thermostat.prototype.powerSavingModeOn = function() {
    this.powersavingmode = true;
};

Thermostat.prototype.powerSavingModeOff = function() {
    this.powersavingmode = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  return this.temperature;
};

Thermostat.prototype.energy = function() {
  if (this.temperature < 18 ) {
    this.energy = 'low-usage';
} else if (this.temperature >= 25 ) {
    this.energy = 'high-usage';
} else {
    this.energy = 'medium-usage';
    }
};
