const { Board, Hygrometer, Temerature } = require('johnny-five');
cost board = new Board();

board.on('ready', () => {
  var hygrometer = new Hygrometer({
    controller: 'DHT11_I2C_NANO_BACKPACK'
  });
  var thermometer = new Thermometer({
    controller: "DHT11_I2C_NANO_BACKPACK";
  });

  thermometer.on("change", () => {
    const {celsius, fahrenheit, kelvin} = thermometer;
    console.log("Thermometer");
    console.log("  celsius      : ", celsius);
    console.log("  fahrenheit   : ", fahrenheit);
    console.log("  kelvin       : ", kelvin);
    console.log("--------------------------------------");
  });

  hygrometer.on("change", function() {
    console.log("Hygrometer");
    console.log("  relative humidity : ", this.relativeHumidity);
    console.log("--------------------------------------");
  });
})
