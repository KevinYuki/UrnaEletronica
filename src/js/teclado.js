const wpi = require("wiringpi-node")
wpi.setup("gpio")

wpi.pinMode(26, wpi.OUTPUT)
wpi.pinMode(19, wpi.OUTPUT)
wpi.pinMode(13, wpi.OUTPUT)
wpi.pinMode(6, wpi.OUTPUT)


wpi.pinMode(1, wpi.INPUT)
wpi.pinMode(7, wpi.INPUT)
wpi.pinMode(8, wpi.INPUT)
wpi.pinMode(25, wpi.INPUT)

const pinos = [26,19,13,6]

watcher = () => { 
	pinos.forEach((value, index) => {
		wpi.digitalWrite(26, wpi.LOW)
		wpi.digitalWrite(19, wpi.LOW)
		wpi.digitalWrite(13, wpi.LOW)
		wpi.digitalWrite(6, wpi.LOW)
		wpi.digitalWrite(value, wpi.HIGH)
		
		if (wpi.digitalRead(1))
			imprime_linha_coluna(value - 2, 1)
			while (wpi.digitalRead(1)) {}
		
		if (wpi.digitalRead(7))
			imprime_linha_coluna(value - 2, 2)
			while (wpi.digitalRead(7)) {}
		
		if (wpi.digitalRead(8))
			imprime_linha_coluna(value - 2, 3)
			while (wpi.digitalRead(8)) {}
		
		if (wpi.digitalRead(25))
			imprime_linha_coluna(value - 2, 4)
			while (wpi.digitalRead(25)) {}
	})
}


imprime_linha_coluna = (x, y) => {
	res = ""
	if (x == 24 && y == 1) res = "1"
	else if (x == 24 && y == 2) res = "2"
	else if (x == 24 && y == 3) res = "3"
	else if (x == 24 && y == 4) res = "A"
	else if (x == 17 && y == 1) res = "4"
	else if (x == 17 && y == 2) res = "5"
	else if (x == 17 && y == 3) res = "6"
	else if (x == 17 && y == 4) res = "B"
	else if (x == 11 && y == 1) res = "7"
	else if (x == 11 && y == 2) res = "8"
	else if (x == 11 && y == 3) res = "9"
	else if (x == 11 && y == 4) res = "C"
	else if (x == 4 && y == 1) res = "*"
	else if (x == 4 && y == 2) res = "0"
	else if (x == 4 && y == 3) res = "#"
	else if (x == 4 && y == 4) res = "D"
	console.log(res)
}

const timerWatcher = setInterval(watcher, 100)
	
