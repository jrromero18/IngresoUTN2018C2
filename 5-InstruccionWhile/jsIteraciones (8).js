function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;
	var contador =0;
	

do
{
numero = parseInt(prompt("Ingrese un numero"));

if(numero>0)
{
	positivo = positivo + numero;
}
else
{
negativo=negativo * numero;

}

respuesta = prompt("continuar si o no?");
}
while (respuesta=="si");


document.getElementById('suma').value=positivo;
if (contador ==0)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN