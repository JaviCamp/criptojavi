function cesar (msg: string, code: boolean) {
    if (code) {
        desplaza = desplaza_ini
    } else {
        desplaza = desplaza_ini * -1
    }
    resultado = ""
    long_msg = msg.length
    for (let index = 0; index <= long_msg - 1; index++) {
        letra = msg.charAt(index)
        pos_letra_abcd = abcd.indexOf(letra)
        nueva_posicion = pos_letra_abcd + desplaza
        if (nueva_posicion > abcd.length) {
            nueva_posicion = nueva_posicion - abcd.length
        } else if (nueva_posicion < 0) {
            nueva_posicion = abcd.length + nueva_posicion
        }
        nueva_letra = abcd.charAt(nueva_posicion)
        resultado = "" + resultado + nueva_letra
    }
    serial.writeLine(resultado)
}
let nueva_letra = ""
let nueva_posicion = 0
let pos_letra_abcd = 0
let letra = ""
let long_msg = 0
let resultado = ""
let desplaza = 0
let desplaza_ini = 0
let abcd = ""
abcd = "abcdefghijklmnñopqrstuvwxyz1234567890 "
desplaza_ini = 3
let prueba = "krñdcoxpgr"
serial.redirectToUSB()
basic.forever(function () {
    cesar("krñdcoxpgr", false)
})
