function mostrar()
{

	var numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));

while (numero<0 || numero >10 || isNaN(numero))
//while (!(numero>=0 && numero <=10))

{
	numero = prompt("ingrese un unumero correcto");

}
document.getElementById("Numero").value = numero + (" el dato es correcto");



}//FIN DE LA FUNCIÓN