input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    start = 0
    ende = 0
})
let zeit = 0
let ende = 0
let start = 0
start = 0
ende = 0
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        start = input.runningTime()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    while (input.pinIsPressed(TouchPin.P1)) {
        ende = input.runningTime()
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.pause(100)
        zeit = (ende - start) / 1000
        basic.showNumber(zeit)
        start = 0
        ende = 0
    }
})
