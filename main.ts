radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    tumano = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mimano = cuento % 5
    if (mimano == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mimano == 1) {
        basic.showIcon(IconNames.Square)
    } else if (mimano == 2) {
        basic.showIcon(IconNames.Scissors)
    } else if (mimano == 3) {
        basic.showIcon(IconNames.Snake)
    } else if (mimano == 4) {
        basic.showIcon(IconNames.Rabbit)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimano)
})
let escogido = false
let tumano = 0
let recibido = false
let cuento = 0
let mimano = 0
radio.setGroup(146)
mimano = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        recibido = false
        escogido = false
        if (mimano == tumano) {
            basic.showIcon(IconNames.No)
        } else {
            if (mimano == 0 && (tumano == 2 || mimano == 0 && tumano == 3)) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (mimano == 0 && (tumano == 1 || mimano == 0 && tumano == 4)) {
                    basic.showIcon(IconNames.Sad)
                } else {
                    if (mimano == 1 && (tumano == 0 || mimano == 1 && tumano == 4)) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (mimano == 1 && (tumano == 2 || mimano == 1 && tumano == 3)) {
                            basic.showIcon(IconNames.Sad)
                        } else {
                            if (mimano == 2 && (tumano == 1 || mimano == 2 && tumano == 3)) {
                                basic.showIcon(IconNames.Happy)
                            } else {
                                if (mimano == 2 && (tumano == 4 || mimano == 2 && tumano == 0)) {
                                    basic.showIcon(IconNames.Sad)
                                } else if (mimano == 2 && (tumano == 1 || mimano == 2 && tumano == 4)) {
                                    basic.showIcon(IconNames.Happy)
                                } else if (mimano == 3 && (tumano == 0 || mimano == 3 && tumano == 2)) {
                                    basic.showIcon(IconNames.Sad)
                                } else if (mimano == 4 && (tumano == 0 || mimano == 4 && tumano == 2)) {
                                    basic.showIcon(IconNames.Happy)
                                } else if (mimano == 4 && (tumano == 1 || mimano == 4 && tumano == 3)) {
                                    basic.showIcon(IconNames.Sad)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
