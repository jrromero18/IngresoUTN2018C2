function mostrar()
{


var notas;
var sexo;
var cantidad=0;
var acunotas=0;


 notas = parseInt(prompt("Ingrese una nota"));

while (notas<0 || notas>=10)
{

  notas = parseInotasnt(prompt("ERROR!! Ingrese una nota"));

}

sexo = (prompt("Ingrese un sexo"));

while (!(sexo=="f" || sexo=="m"))
{

    sexo = (prompt("ERROR!! Ingrese una sexo valido"));

}
acunotas = notas + acunotas;
cantidad ++


alert("nota " + acunotas + "sexo " +sexo);






//sexo = prompt("ingrese un sexo");





}
