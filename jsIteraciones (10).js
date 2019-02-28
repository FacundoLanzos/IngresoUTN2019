function Mostrar()
{
var numero
var seguir
var acumuladorPos =0
var acumuladorNeg =0
var contadorPos = 0
var contadorNeg = 0
var contadorPares = 0
var contadorCeros = 0
var diferencia
var promPos
var promNeg = 0
	
do{
	numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

	}
	
	if (numero > 0 ) {
		//positivos
		acumuladorPos = acumuladorPos + numero;
		contadorPos++;
	} else if ( numero == 0) {
		//cero
		contadorCeros++;

		
	} else {
		//negativo
		acumuladorNeg = acumuladorNeg + numero;
		contadorNeg++; 
    } 

    if( numero % 2 == 0){
		contadorPares++;
    } 
	


	seguir = confirm("Quiere ingresar otro numero?: ");
	} while (seguir);
 
 if(contadorNeg != 0){

promNeg = acumuladorNeg / contadorNeg
}
 
 if(contadorPos != 0){
promPos = acumuladorPos / contadorPos
}

diferencia = contadorPos - contadorNeg;

document.write ("1-Suma de los negativos: " + acumuladorNeg + "<br>")
document.write ("1-Suma de los positivos: " + acumuladorPos + "<br>")
document.write ("1-Cantidad del os  positivos: " + contadorPos + "<br>")
document.write ("1-Cantidad  de los negativos: " + contadorNeg + "<br>")
document.write ("1-Cantidad de ceros: " + contadorCeros + "<br>")
document.write ("1-Cantidad de numeros pares: " + contadorPares + "<br>")
document.write ("1-Promedio de positivos: " + promPos + "<br>")
document.write ("1-Promedio de negativos: " + promNeg + "<br>")
document.write ("1-Diferencia entre positivos y negativos: " + diferencia + "<br>")


}//FIN DE LA FUNCIÓN