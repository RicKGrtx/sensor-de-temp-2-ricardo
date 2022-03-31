input.onButtonPressed(Button.A, function () {
    radio.sendString("temp:" + input.temperature() + "c")
    basic.showString("temp:" + input.temperature() + "c")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("temp actual:" + input.temperature() + "C")
    basic.showString("temp:" + input.temperature() + "c")
})
radio.setGroup(1)
basic.forever(function () {
	
})
