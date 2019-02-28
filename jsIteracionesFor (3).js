function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"))

 while (isNaN(repeticiones)){
     repeticiones = parseInt(prompt("Eso no es un numero. Ingrese un nuevo numero: "))

}

for ( var i = repeticiones ; i > 0 ; i--){
    console.log("Hola UTNFRA ")
     
}



}//FIN DE LA FUNCIÓN