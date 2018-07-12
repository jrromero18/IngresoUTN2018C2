function mostrar()
{
var precio;
var porsentaje;
var descuento;
var resultado;

precio = parseInt(prompt("Ingrese el precio"));
porsentaje = parseInt(prompt("Ingrese el descuento"));

porsentaje = (porsentaje/100)

descuento = precio*porsentaje

resultado = precio - descuento;


document.getElementById("elPrecioFinal").value = resultado;



}
