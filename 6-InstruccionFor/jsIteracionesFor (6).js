function mostrar()
{
var numero;
var contadorpares=0;

numero = parseInt(prompt("ingrese un numero"));

for(  var i=1; i<=numero;i++    )
{
    
     if(i % 2 == 0){
      console.log(i)
      contadorpares++;
     }
}
console.log("cantidad de pares: "+ contadorpares);



}//FIN DE LA FUNCIÓN