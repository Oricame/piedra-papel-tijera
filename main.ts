radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    tu_mano = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mi_mano = cuento % 1
    if (mi_mano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mi_mano == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (mi_mano == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
radio.onReceivedString(function (receivedString) {
    tu_mano = 0
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mi_mano)
})
let escogido = false
let tu_mano = 0
let recibido = false
let cuento = 0
let mi_mano = 0
radio.setGroup(1)
mi_mano = 0
cuento = 0
basic.forever(function () {
    escogido = false
    escogido = false
    if (mi_mano == tu_mano) {
        basic.showIcon(IconNames.No)
    } else {
        if (mi_mano == 1 && tu_mano == 2) {
            basic.showIcon(IconNames.Sad)
        } else {
            if (mi_mano == 1 && tu_mano == 3) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (mi_mano == 2 && tu_mano == 1) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    if (mi_mano == 2 && tu_mano == 3) {
                        basic.showIcon(IconNames.Sad)
                    } else {
                        if (mi_mano == 3 && tu_mano == 1) {
                            basic.showIcon(IconNames.Sad)
                        } else {
                            if (mi_mano == 3 && tu_mano == 2) {
                                basic.showIcon(IconNames.Happy)
                            } else {
                            	
                            }
                        }
                    }
                }
            }
        }
    }
})
