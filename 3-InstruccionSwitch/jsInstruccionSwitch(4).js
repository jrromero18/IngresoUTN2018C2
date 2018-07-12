function mostrar()
{
//tomo la edad  
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Febrero":
    alert("El mes : " + mesDelAño + " y tiene 28 dias");
    break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert ("Este mes tiene 30 dias");
    break;

default:


if (mesDelAño == "Diciembre")
{
    alert("es el mes de NAVIDAD");
    break;
}

alert("EL mes de: " +mesDelAño+  " y tiene 31 dias");
}

}//FIN DE LA FUNCIÓN