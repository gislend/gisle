OSOYOO_IR.onPressEvent(RemoteButton.num5, function () {
    basic.showNumber(5)
})
OSOYOO_IR.onPressEvent(RemoteButton.num4, function () {
    basic.showNumber(4)
})
OSOYOO_IR.onPressEvent(RemoteButton.left, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.up, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.ok, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # # . .
        . # # . .
        . # . # .
        . # . . #
        `)
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(100)
})
OSOYOO_IR.onPressEvent(RemoteButton.num6, function () {
    basic.showNumber(6)
})
OSOYOO_IR.onPressEvent(RemoteButton.right, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.redR, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.num8, function () {
    basic.showNumber(8)
})
OSOYOO_IR.onPressEvent(RemoteButton.num7, function () {
    basic.showNumber(7)
})
OSOYOO_IR.onPressEvent(RemoteButton.redL, function () {
    basic.showLeds(`
        . . # . .
        # . # . #
        . # # # .
        . # . # .
        # . . . #
        `)
})
OSOYOO_IR.onPressEvent(RemoteButton.num0, function () {
    basic.showNumber(0)
})
OSOYOO_IR.onPressEvent(RemoteButton.num1, function () {
    basic.showNumber(1)
})
OSOYOO_IR.onPressEvent(RemoteButton.num2, function () {
    basic.showNumber(2)
})
OSOYOO_IR.onPressEvent(RemoteButton.num9, function () {
    basic.showNumber(9)
})
OSOYOO_IR.onPressEvent(RemoteButton.num3, function () {
    basic.showNumber(3)
})
OSOYOO_IR.init(Pins.P3)
pins.digitalWritePin(DigitalPin.P7, 0)
