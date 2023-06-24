input.onPinPressed(TouchPin.P0, function () {
    makerbit.setAnalogPin(5, makerbit.touchSensor())
    power.fullPowerOn(FullPowerSource.P0)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(
    WaveShape.Square,
    5000,
    1,
    255,
    255,
    5000,
    SoundExpressionEffect.Tremolo,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
})
WaitUntilBlocks.waitUntilButtonPressed(Button.B)
power.fullPowerOn(FullPowerSource.A)
plenbit.stdMotion(plenbit.StdMotions.WalkForward)
game.startCountdown(10000)
makerbit.setLedPins(makerbit.level(PinLevel.High))
pins.servoWritePin(AnalogPin.P1, 180)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
let haloDisplay = plenbit.sensorLR(plenbit.DataPin.AButtonSide)
let strip2 = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB_RGB)
robotbit.GeekServo(robotbit.Servos.S1, -45)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
kittenwifi.wifi_init_pw(kittenwifi.SerialPorts.PORT1)
joyfrog.joyfrog_init()
display.rotateTo(display.Direction.LogoToRight)
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        `)
})
