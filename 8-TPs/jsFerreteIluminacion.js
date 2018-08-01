/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

var cantidad;
var precio = 35;
var marca;
var preciofin;
var descuento;
var preciocondescuento;
var preciofinacoDES;
var iibb;
var flag=false;

cantidad = parseInt(document.getElementById("Cantidad").value);
marca = document.getElementById("Marca").value;


switch (cantidad)
{
case 1:
case 2:
    descuento = 0.5;
    break;
case 3:
    if (marca=="ArgentinaLuz")
    {
        descuento=0.15;
    }
    else if (marca =="FelipeLamparas")
    {
         descuento = 0.1;
    }
    else{
        descuento=0.05;
    }
    break;
case 4:
    if (marca=="ArgentinaLuz" ||marca=="FelipeLamparas" )
    {
        descuento = 0.25;
    }
    else
    {
        descuento = 0.2
    }
    break;

case 5:
    if (marca=="ArgentinaLuz")
    {
        descuento= 0.4
    }
    else
    {
        descuento=0.3
    }
    break;

default:

descuento = 0.5

        break;
}

preciocondescuento = precio*descuento;
preciofin= precio - preciocondescuento;
preciofinacoDES= cantidad *preciofin;


if (preciofinacoDES>120)
{
iibb=preciofinacoDES*0.1
preciofinacoDES = preciofinacoDES*1.1;
flag=true;

 
document.getElementById("precioDescuento").value = preciofinacoDES.toFixed(2);
}
if(flag){
    alert("IIBB Uste pago " +iibb);
}

}




//parseInt(document.getElementById("precioDescuento").value) = preciofin;

