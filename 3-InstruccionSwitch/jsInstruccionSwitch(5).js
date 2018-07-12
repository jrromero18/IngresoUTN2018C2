function mostrar()
{
//tomo la edad  


var laHora;

laHora = parseInt(document.getElementById('hora').value);

/*if (laHora>=7 && laHora<=11)

{
    alert("Es de mañana");
}
*/
switch (laHora)
{
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert ("Es de mañana");
    break;
}	



}//FIN DE LA FUNCIÓN