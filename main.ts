led.setBrightness(255)
loops.everyInterval(60000, function () {
    basic.showNumber(input.runningTime())
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
