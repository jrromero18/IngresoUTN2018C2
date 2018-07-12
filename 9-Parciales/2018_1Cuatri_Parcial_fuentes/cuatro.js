function mostrar()
{

var num1;
var num2;
var resultado;

num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));


if (num1 == num2)
{
alert(num1 +"" +num2);
}

else  if (num1>num2)
{
alert(num1-num2);

}

else
{
    resultado = num1+num2;
    alert (num1+num2);

if (resultado>10)
{
    alert ("la suma es " + resultado+" y supero 10");
}
}
}
