function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	var promedio;

do
{
numero = parseInt(prompt("Ingrese un numero"));
acumulador = acumulador + numero;
contador ++;
respuesta = prompt("continuar si o no?");


}
while(respuesta =="si");

promedio = acumulador/contador;




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN

/*do
{
numero = parseInt(prompt("Ingrese un numero"));
acumulador = acumulador + numero;
contador ++;
respuesta = prompt("continuar si o no?");


}
while(respuesta =="si")
{
promedio = acumulador/contador;
}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;*/