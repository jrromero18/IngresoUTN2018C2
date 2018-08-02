/*


a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/

function mostrar()
{
var letra;
var numero;
var cantidadNumerosPares=0;
var cantidadNumerosImpares=0;
var cantidadDeCeros=0;
var catidaNumeroDePositivos=0;
var acumuladorPositivos=0;
var sumaNumerosNegativos;
var numMaximo;
var numMinimo;
var letraMaximo;
var letraMinima;
var salir;
var flag =0;
var promedioPos=0;


do
{
letra=prompt("Ingrese una letra");

numero =parseInt(prompt("Ingrse un numero"));

while(numero<-100  || numero>100){
numero =parseInt(prompt("ERROR. Ingrse un numero"));
}

if (numero % 2 == 0){
    cantidadNumerosPares++;
}else{
    cantidadNumerosImpares++;
}

if(numero>0){
    acumuladorPositivos = acumuladorPositivos+numero;
    catidaNumeroDePositivos++
}else if(numero<0){

    sumaNumerosNegativos = sumaNumerosNegativos+ numero;

}

if (numero>numMaximo || flag ==0){
      
      numMaximo=numero;
      letraMaximo=letra;
}
if (numero<numMinimo || flag ==0){
    numMinimo=numero;
    letraMinima=letra;
}


salir=prompt("Continuar?");
}while(salir=="si");


if (catidaNumeroDePositivos !=0){
promedioPos = acumuladorPositivos/catidaNumeroDePositivos;
}


document.write("La cantidad de números pares." +cantidadNumerosImpares +"<br>")
document.write("La cantidad de números impares. ." +cantidadNumerosImpares +"<br>")
document.write("La cantidad de ceros. ." +cantidadNumerosImpares +"<br>")
document.write("El promedio de todos los números positivos ingresados.." +cantidadNumerosImpares +"<br>")
document.write("La suma de todos los números negativos. .." +cantidadNumerosImpares +"<br>")
document.write("El promedio de todos los números positivos ingresados.." +cantidadNumerosImpares +"<br>")
document.write("El promedio de todos los números positivos ingresados.." +cantidadNumerosImpares +"<br>")
}document.write("El promedio de todos los números positivos ingresados.." +cantidadNumerosImpares +"<br>")
