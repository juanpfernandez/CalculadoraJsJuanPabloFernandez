let numero1 = parseInt (prompt("Ingrese un numero"));
let operacion = prompt("elegí el tipo de operación que querés realizar: +, -, * o /");
let numero2 = parseInt (prompt("Ingrese otro numero"));

let resultado;

switch (operacion) {
    case "+":
        resultado=(numero1 + numero2)
        alert ("El resultado es " + resultado);
        break;
    case "-":
        resultado=(numero1 - numero2)
        alert ("El resultado es " + resultado);
        break;
    case "*":
        resultado=(numero1 * numero2)
        alert ("El resultado es " + resultado);
        break;
     case "/": 
        resultado=(numero1 / numero2)
        if (numero2<=0) {
            alert ("No se puede dividir por 0"); 
        }else{
            alert ("El resultado es " + resultado);
        }        
        default: 
        alert ("Error, ingrese una operacion valida");
        break;  
}