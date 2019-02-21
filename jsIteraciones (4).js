function Mostrar()
{

	var numero = parseInt(prompt ("Ingrese un numero del 0 al 10"));

/*while (!(numero >= 0 && numero <=10 ))
while (numero < 0 || numero > 10) || isNaN(numero) == true)*/
     
	  while (numero < 0 || numero > 10)
	  {
 
     numero = parseInt(prompt ("Numero incorrecto. Reingrese el numero:  "));
} 
document.getElementById("Numero").value = numero


}//FIN DE LA FUNCIÓN