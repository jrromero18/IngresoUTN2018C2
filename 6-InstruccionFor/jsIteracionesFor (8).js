function mostrar()
{
    var numero;
    var esPrimo=true;

        numero = parseInt( prompt("ingrese un numero"))

    for (var i= 2; i < numero; i++ )
    {
           
        if (numero % i == 0)
        {
           esPrimo = false
           break;
        }
        
    }
  
    if (esPrimo)
    {
        alert (numero + " Es PRIMO")
    }
    else
    {
        alert(numero+" No es Primo")
    }


}//FIN DE LA FUNCIÓN