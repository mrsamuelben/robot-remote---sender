input.onButtonPressed(Button.A, function () {
    Direction2 += 1
    if (Direction2 == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Direction2 == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Direction2 == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Direction2 == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        Direction2 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Direction2)
})
let Direction2 = 0
radio.setGroup(1)
Direction2 = 0
basic.forever(function () {
	
})
