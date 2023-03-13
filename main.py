nueva_letra = ""
nueva_posicion = 0
pos_letra_abcd = 0
letra = ""
long_msg = 0
resultado = ""
abcd = "abcdefghijklmnñopqrstuvwxyz1234567890 "
desplaza_ini = 5
prueba = "hola mundo"
serial.redirect_to_usb()

def on_forever():
    global resultado, long_msg, letra, pos_letra_abcd, nueva_posicion, nueva_letra
    resultado = ""
    long_msg = len(prueba)
    index = 0
    while index <= long_msg - 1:
        letra = prueba.char_at(index)
        pos_letra_abcd = abcd.index_of(letra)
        nueva_posicion = pos_letra_abcd + desplaza_ini
        nueva_letra = abcd.char_at(nueva_posicion)
        resultado = "" + resultado + nueva_letra
        index += 1
    serial.write_line(resultado)
basic.forever(on_forever)
