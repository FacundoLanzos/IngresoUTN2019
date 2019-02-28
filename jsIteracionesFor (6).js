function Mostrar()
{
var contador
var numero
 
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "))
} 

for (var i = 1; i <= numero; i++){

    if (i % 2  == 0) {
        contador++
        console.log(i)       
    }
}


}//FIN DE LA FUNCIÓN