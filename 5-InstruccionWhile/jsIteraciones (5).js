function mostrar()
{

var sexo;

sexo = (prompt("Ingrese f o m")).toLowerCase();


while (!(sexo =="f"|| sexo=="m"))

{
    sexo = (prompt("Sexo incorrecto. Ingrese f o m")).toLowerCase();

}

if (sexo =="f")
{
   sexo = "Femenino";
   document.getElementById("Sexo").value=sexo ;
}
else

sexo = "Masculino";
document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN



/*var sexo;


sexo = prompt("ingrese f ó m .");

if (sexo == "f")
{
sexo = "Femenino";
document.getElementById("Sexo").value=sexo;
    
}

else

{
sexo = "Maculino";
document.getElementById("Sexo").value=sexo;
}*/