const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const dividir = (num1, num2)  => num1 / num2
const multiplicar = (num1, num2) => num1 * num2

let numero1 = parseFloat(prompt("Ingrese un numero"))
let operacion = prompt("Ingrese una operacion (+,-,*,/)")
let numero2 = parseFloat(prompt("Ingrese otro numero"))


if(operacion === "+") {
    console.log(sumar(numero1, numero2))
} else if(operacion === "-") {
    console.log(restar(numero1, numero2))
} else if(operacion === "/") {
    console.log(dividir(numero1, numero2))
} else if(operacion === "*") {
    console.log(multiplicar(numero1, numero2))
} else {
    console.log("Operacion no valida")
}