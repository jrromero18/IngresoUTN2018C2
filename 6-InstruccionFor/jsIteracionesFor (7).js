function mostrar()
{

var numero;
var contadordivisores=0;

numero = parseInt(prompt("ingrese un numero"));

for(  var i=1; i<=numero;i++    )
{
    
     if(numero % i == 0){
      console.log(i)
      contadordivisores++;
     }
}
console.log("cantidad de divisores: "+ contadordivisores);




}//FIN DE LA FUNCIÓN