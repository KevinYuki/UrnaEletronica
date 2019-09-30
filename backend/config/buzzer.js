const wpi = require('wiringpi-node')

module.exports = () => {

	wpi.setup("gpio")

	wpi.pinMode(12, wpi.OUTPUT)

	wpi.softToneCreate(12)

	//wpi.digitalWrite(12, wpi.HIGH)
	//wpi.delay(1000)
	wpi.softToneWrite(12, 2600)
	wpi.delay(100)
	wpi.softToneWrite(12, 2200)
	wpi.delay(100)
	wpi.softToneWrite(12, 2600)
	wpi.delay(100)
	wpi.softToneWrite(12, 2200)
	wpi.delay(100)
	wpi.softToneWrite(12, 2600)
	wpi.delay(100)
	wpi.softToneWrite(12, 2200)
	wpi.delay(100)
	wpi.softToneWrite(12, 2600)
	wpi.delay(100)
	wpi.softToneWrite(12, 2200)
	wpi.delay(100)
	wpi.softToneWrite(12, 2600)
	wpi.delay(500)
	wpi.softToneWrite(12,0)
//wpi.digitalWrite(12, wpi.LOW)
	}
