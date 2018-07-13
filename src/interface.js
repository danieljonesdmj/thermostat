$( document ).ready(function() {

  thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=71f4a5c204011ce9c84b911255605e19&units=metric', function(data) {
    $('#current-temp').text(data.main.temp + 'degrees');
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temp').text(data.main.temp + 'degrees');
    });
  });

  thermostat.updateTemp = function() {
    $( ".current-temp" ).text(thermostat.temperature + 'degrees');

  };

  $( ".current-temp" ).text(thermostat.temperature + 'degrees');

  $( "#temperature-up" ).click(function( event ) {
    if (thermostat.temperature >= 25 && thermostat.powersavingmode === true || thermostat.temperature >= 32 && thermostat.powersavingmode === false) {
      alert('Maximum Temperature!');
    } else {
      thermostat.up();
      thermostat.updateTemp();
    }
  });

  $( "#temperature-down" ).click(function( event ) {
    if (thermostat.temperature <= 10) {
      alert('Minimum Temperature!');
    } else {
      thermostat.down();
      thermostat.updateTemp();
    }
  });

  $( "#temperature-reset" ).click(function( event ) {
    thermostat.reset();
    thermostat.updateTemp();
  });

  $( "#powersaving-on" ).click(function( event ) {
    thermostat.powerSavingModeOn();
    $( ".power-saving" ).text('powersavingmodeison');
    thermostat.updatePSM();
  });

  $( "#powersaving-off" ).click(function( event ) {
    thermostat.powerSavingModeOff();
    $( ".power-saving" ).text('powersavingmodeisoff');
    thermostat.updatePSM();
  });

});
