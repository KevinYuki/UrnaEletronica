const Gpio = require('pigpio').Gpio;

module.exports = () => {
	const buzzer = new Gpio(12, {mode: Gpio.OUTPUT})
	function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
		  break;
		}
	  }
	}


	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(60)
	sleep(100)
	buzzer.pwmWrite(180)
	sleep(100)
	buzzer.pwmWrite(0)
}
