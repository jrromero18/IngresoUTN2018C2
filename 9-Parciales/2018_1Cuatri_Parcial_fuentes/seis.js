function mostrar()
{
    
var hora

hora = parseInt(document.getElementById("laHora").value);

switch (hora) 
{
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:  
    alert("es de mañana");  
    break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    alert("es de tarde");
    break;
     

    default:
    
    if (hora>0 && hora <=5 || hora>=20 && hora <= 24)
{
    alert ("Es de noche");
    alert("A dormir");
    break;
}


      alert("la hora es incorrecta");

    break;
}




}
