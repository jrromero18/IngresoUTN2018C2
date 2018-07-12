function mostrar()
{

var planeta;

planeta = prompt("Ingrse un planeta");

switch (planeta)
{
case ("Mercurio"):
case ("Venus"):
alert ("Aca hace mas calor");
break;

case("Tierra"):
alert("Aca vivimos");
break;

case ("Marte"):
case ("Jupiter"):
case ("Saturno"):
case ("Pluton"):
alert("Aca hace mas frio");

break;

default:
alert("Ingreso un planeta incorrecto, ")



}


}
