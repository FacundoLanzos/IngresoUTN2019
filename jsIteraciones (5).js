function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
 sexo = sexo.toLowerCase();
while (!( sexo == "f" || sexo == "m" ))/*|| sexo == "F" || sexo == "M"))*/ { 
    sexo = prompt ("Error. Ingrese f o m");

}
document.getElementById('Sexo').value=sexo;
/*{
if sexo == "f"
   sexo = "Femenino"
}
   
   {
   else sexo == "m"
        sexo = "Masculino"
 }     */  
}//FIN DE LA FUNCIÓN