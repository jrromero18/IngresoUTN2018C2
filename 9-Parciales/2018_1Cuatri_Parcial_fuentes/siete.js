function mostrar()
{


var notas;
var sexo;
var acumuladordeNOTAS=0;
var notaBaja;
var sexoNotaBaja;
var cantidadVaronesBAJO=0;
var flag=0;
var promedio;


for(var i=0; i<4;i++)
 {

notas = parseInt(prompt("Ingrese una nota"));
while (notas<0 || notas>=10)
{
  notas = parseInt(prompt("ERROR!! Ingrese una nota"));
}

sexo = (prompt("Ingrese un sexo"));
while (sexo!="f" && sexo!="m")
{
    sexo = (prompt("ERROR!! Ingrese una sexo valido"));
}

acumuladordeNOTAS=acumuladordeNOTAS+notas;

if(notas<notaBaja || flag==0){

    notaBaja=notas;
    sexoNotaBaja=sexo;
    flag=1;
}
if(sexo="f" && notas>=6){
cantidadVaronesBAJO;

}

}

 promedio=acumuladordeNOTAS/5;


alert("El promedio de las notas totales es " + promedio+ "\n La nota más baja y el sexo de esa persona es: "+ notaBaja + " "+sexoNotaBaja +"\n La cantidad de varones que su nota haya sido mayor o igual a 6 " + cantidadVaronesBAJO+"\n");






//sexo = prompt("ingrese un sexo");





}
