radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    tumano = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mimanita = cuento % 3
    if (mimanita == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mimanita == 1) {
        basic.showIcon(IconNames.Square)
    } else if (mimanita == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimanita)
})
let escogido = false
let tumano = 0
let recibido = false
let cuento = 0
let mimanita = 0
radio.setGroup(146)
mimanita = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        recibido = false
        escogido = false
        if (mimanita == tumano) {
            basic.showIcon(IconNames.No)
        } else {
            if (mimanita == 0 && tumano == 1) {
                basic.showIcon(IconNames.Sad)
            } else {
                if (mimanita == 0 && tumano == 2) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    if (mimanita == 1 && tumano == 0) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (mimanita == 1 && tumano == 2) {
                            basic.showIcon(IconNames.Sad)
                        } else {
                            if (mimanita == 2 && tumano == 0) {
                                basic.showIcon(IconNames.Sad)
                            } else {
                                if (mimanita == 2 && tumano == 1) {
                                    basic.showIcon(IconNames.Happy)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
