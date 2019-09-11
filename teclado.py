#! /usr/bin/python
#-*- coding: utf-8 -*-

import RPi.GPIO as gpio
import time

def imprime_linha_coluna(x, y):
	res = ""
	if x == 24 and y == 1: return "1"
	elif x == 24 and y == 2: return "2"
	elif x == 24 and y == 3: return "3"
	elif x == 24 and y == 4: return "A"
	elif x == 17 and y == 1: return "4"
	elif x == 17 and y == 2: return "5"
	elif x == 17 and y == 3: return "6"
	elif x == 17 and y == 4: return "B"
	elif x == 11 and y == 1: return "7"
	elif x == 11 and y == 2: return "8"
	elif x == 11 and y == 3: return "9"
	elif x == 11 and y == 4: return "C"
	elif x == 4 and y == 1: return "*"
	elif x == 4 and y == 2: return "0"
	elif x == 4 and y == 3: return "#"
	elif x == 4 and y == 4: return "D"
	else: pass
	time.sleep(0.01)
	return res


# Configura GPIO
gpio.setmode(gpio.BCM)

#Configura o GPIO 14 como saída
gpio.setup(26, gpio.OUT)
gpio.setup(19, gpio.OUT)
gpio.setup(13, gpio.OUT)
gpio.setup(6, gpio.OUT)

gpio.setup(1, gpio.IN)
gpio.setup(7, gpio.IN)
gpio.setup(8, gpio.IN)
gpio.setup(25, gpio.IN)

pinos = [26, 19, 13, 6]

try:
	while (1):
		for i in pinos:
			gpio.output(26, gpio.LOW)
			gpio.output(19, gpio.LOW)
			gpio.output(13, gpio.LOW)
			gpio.output(6, gpio.LOW)
			gpio.output(i, gpio.HIGH)
			if gpio.input(1):
				imprime_linha_coluna(i - 2, 1)
				while gpio.input(1): pass
			
			if gpio.input(7):
				imprime_linha_coluna(i - 2, 2)
				while gpio.input(7): pass
			
			if gpio.input(8):
				imprime_linha_coluna(i - 2, 3)
				while gpio.input(8): pass
			
			if gpio.input(25):
				imprime_linha_coluna(i - 2, 4)
				while gpio.input(25): pass
		time.sleep(0.01)
except KeyboardInterrupt:
	gpio.cleanup()
