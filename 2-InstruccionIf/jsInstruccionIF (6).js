function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if
(edad>=13 && edad<=17)
{
alert("Es adolecente");
}
else if
(edad<= 12)
{
alert ("Es NIÑO");
}
else 
{
alert ("Es MAYOR de edad");
}


}//FIN DE LA FUNCIÓN