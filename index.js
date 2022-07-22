const Numeros = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor solo debe ser de tipo numero ")
}

const prueba= "10"
try {
    console.log("El programa está ejecutándose de manera correcta")
    const doble = Numeros(prueba)
    console.log(doble)
} catch (e) {
    // En caso de fallar ejecutara:
    console.error(`${e}`)
    console.error("ERROR!")
} finally {
    console.log("Continue...")
}