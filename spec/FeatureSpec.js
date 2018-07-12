'use strict';

describe('Feature test:', () => {
  var thermostat;
  var count;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('should start at 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('The temperature can be increased', () => {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('The temperature can be decreased', () => {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('Has a minimum temperature of 10 degrees', () => {
    for (count = 0; count < 10; count++) {
      thermostat.down();
    }
    expect(function() {thermostat.down();}).toThrowError('NOOO ITS COLD');
  });

  it('Does not throw an error when the temperature is 10 or above', () => {
     for (count = 0; count < 9; count++) {
       thermostat.down();
     }
     expect(function() {thermostat.down();}).not.toThrowError('NOOO ITS COLD');
   });

  it('It has a power saving mode, which is on at default', () => {
    expect(thermostat.powersavingmode).toBeTruthy();
  });

  it('Power saving mode can be turned off', () => {
    thermostat.powerSavingModeOff();
    expect(thermostat.powersavingmode).toBeFalsy();
  });

  it('Power saving mode sets the maximum temperature at 25', () => {
    thermostat.temperature = 25;
    expect(function() {thermostat.up();}).toThrowError('At maximum temperature');
  });

  it('Maximum temperature is 32 degrees when power saving mode is on', () => {
    thermostat.powerSavingModeOff();
    thermostat.temperature = 32;
    expect(function() {thermostat.up();}).toThrowError('At maximum temperature');
  });

  it('Can reset the temperature to 20 degrees', () => {
    thermostat.temperature = 22;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('Displays current energy usage', () => {
    thermostat.energy();
    expect(thermostat.energy).toEqual('medium-usage');
  });

  it('Displays low-usage when temperature below 18 degrees', () => {
    thermostat.temperature = 16;
    thermostat.energy();
    expect(thermostat.energy).toEqual('low-usage');
  });

  it('Displays low-usage when temperature below 18 degrees', () => {
    thermostat.temperature = 27;
    thermostat.energy();
    expect(thermostat.energy).toEqual('high-usage');
  });
});
