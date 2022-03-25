radio.onReceivedValue(function (name, value) {
    if (name == "left") {
        if (value > 10) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else if (value > -10) {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else if (name == "right") {
        if (value > 10) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else if (value > -10) {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else {
        basic.showString(name)
        basic.showString("" + (value))
    }
})
radio.setGroup(1)
