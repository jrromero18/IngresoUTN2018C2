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


do 
{
numero = parseInt(prompt("Ingrese un numero"));

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
if (numero %2 ==0)

{
	cantnumPares ++
}


continuar = prompt ("continuar?");

} while (continuar == "si");

//nunc se puede dividir un numero por cero es ERROR !HAY QUE PREGUNTAR;
if (cantpos !=0){
	prompos = sumpos/cantpos;
}

if (cantneg !=0){
	pormneg = sumneg/cantneg;
}



dif= sumpos - sumneg;


document.write("1-Suma de los negativos: " + sumneg + "<br>" );
document.write("2-Suma de los positivos.: " + sumpos + "<br>" );
document.write("3-Cantidad de positivos.: " + cantpos + "<br>" );
document.write("4-Cantidad de negativos.: " + cantneg + "<br>" );
document.write("5-Cantidad de ceros. : " + cantceros + "<br>" );
document.write("6-Cantidad de números pares: " + cantnumPares + "<br>" );
document.write("7-Promedio de positivos. : " + prompos + "<br>" );
document.write("8-Promedio de negativos: " + pormneg + "<br>" );
document.write("9-dif:  " + dif + "<br>" );









}//FIN DE LA FUNCIÓN