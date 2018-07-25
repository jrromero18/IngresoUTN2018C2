/*
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
var sumneg = 0;
var sumpos = 0;
var cantpos=0;
var cantneg=0;
var cantceros=0;
var cantnumPares=0;
var prompos;
var pormneg;
var dif;
var numero;
var continuar;
var contador;

do 
{
numero = parseInt(prompt("Ingrese un numero"));
contador ++

if (numero>0)
{
	sumpos = sumpos + numero;
	cantpos ++

} else if (numero<0)
{
	sumneg = sumneg + numero;
	cantneg ++;
}
else 
{
	cantceros ++
}
if (numero /2 ==0)

{
	cantnumPares ++
}




continuar = prompt ("continuar?");

}
while (continuar == "si");


alert(sumneg + "  " +sumpos + "  " +cantpos+ "  "+ cantneg + "  "+cantceros );

document.write("suma neg " +sumneg + <br/ );











}//FIN DE LA FUNCIÓN