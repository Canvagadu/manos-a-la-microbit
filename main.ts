let salida_analógica = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, salida_analógica)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (salida_analógica >= 1023) {
        salida_analógica = 0
    }
    salida_analógica += 3
})
