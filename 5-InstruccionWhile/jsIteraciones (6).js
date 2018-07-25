function mostrar()
{

var contador=1;
var acumulador=0;
var numero;
var promedio;

while (contador<=5)
{
numero = parseInt(prompt("ingrese un numero"));
acumulador = acumulador + numero;
contador ++;

}

promedio = acumulador / 5;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN