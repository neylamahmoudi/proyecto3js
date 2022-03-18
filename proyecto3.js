const prompt = require('prompt-sync')();
var preguntar = true
var tipoOperacion

while (preguntar == true){
    preguntar = false
    console.log("Ingrese el tipo de operacion que desea realizar sabiendo que: numero1 (+,-,*,/) numero2");
    console.log("Para sumar inserte 1");
    console.log("Para restar inserte 2")
    console.log("Para multiplicar inserte 3")
    console.log("Para dividir inserte 4")
    tipoOperacion = prompt()

    if (tipoOperacion != "1" && tipoOperacion != "2" && tipoOperacion != "3" && tipoOperacion != "4"){
        console.log("El tipo de operacion no es valida");
        console.log ("")
        preguntar = true
    }
}

console.log("Ingrese primer valor");
const numero1 = prompt()

console.log("Ingrese segundo valor");
const numero2 = prompt()

if (tipoOperacion == 1){
    console.log("El resultado de la suma es: ", (parseInt(numero1) + parseInt(numero2)));
} else if (tipoOperacion == 2){
    console.log("El resultado de la resta es: ", (parseInt(numero1) - parseInt(numero2)));
} else if (tipoOperacion == 3){
    console.log("El resultado de la multiplicacion es: ", (parseInt(numero1) * parseInt(numero2)));
} else if (tipoOperacion == 4){
    if (numero2 == 0){
        console.log("No se puede dividir entre cero");
    } else {
        console.log("El resultado de la division es: ", (parseInt(numero1) / parseInt(numero2)));
    }
}