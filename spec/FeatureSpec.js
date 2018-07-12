'use strict';

describe('Feature test:', () => {
  it('should start at 20 degrees',() => {
    var thermostat = new Thermostat;
    expect(thermostat.temperature).toEqual(20);
  });
  it('The temperature can be increased', () => {
    var thermostat = new Thermostat;
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  })
  it('The temperature can be decreased', () => {
    var thermostat = new Thermostat;
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  })
  it('Has a minimum temperature of 10 degrees', () => {
    var thermostat = new Thermostat;
    spyOn(thermostat, 'temperature').and.returnValue(9)
    expect(function() {thermostat.down();}).toThrowError('NOOO ITS COLD');
  })
});
