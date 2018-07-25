function mostrar()
{

	var numMax=0;
	var numMIN=0;
	var numero;
	var flag=1;
    var contiunuar;



	do
{
numero = parseInt(prompt("Ingrese un numero"));

if (numMax<numero || flag ==1)
{
numMax =numero;
flag = 0;
}
else 
{
	numMIN = numero;
}

continuar = prompt("continuar si o no?");
}

while (continuar=="si"  );

document.getElementById("maximo").value = numMax;
document.getElementById("minimo").value = numMIN;



}//FIN DE LA FUNCIÓN