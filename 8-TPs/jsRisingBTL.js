/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;

    edad = parseInt(prompt("Ingrese su edad entre 18 y 90 años"));


    while(!(edad>=18 && edad<=90)){
    
        edad = parseInt(prompt("ERROR. Ingrese su edad entre 18 y 90 años"));

    }

    sexo = prompt("Ingrese su sexo F o M");


    while (sexo!="F" && sexo!="M"){
        sexo = prompt("ERROR. Ingrese su sexo f o m");
    }

    if (sexo=="F"){
        sexo="Femenimo";
    }else
    {
        sexo="Masculino";
    }

     estadoCivil = parseInt(prompt("Ingrese estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
     
     while(!(estadoCivil>=1 && estadoCivil<=4)){
        
        estadoCivil = parseInt(prompt("ERROR. Ingrese estaso civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
     }
     if (estadoCivil==1){
         estadoCivil="soltero";
     }else if (estadoCivil ==2){
         estadoCivil="casado";
     }else if(estadoCivil==3){
         estadoCivil="divorciados";
     } else
     {
         estadoCivil="viudo";
     }

     sueldoBruto=parseInt(prompt("Ingrese el sueldo"));

     while(sueldoBruto<8000){
        sueldoBruto=parseInt(prompt("ERROR. Sueldo bruto, no menor a 8000"));
     }

     legajo = parseInt(prompt("Ingrse numero de legajo"));

     while  (!(legajo >= 1000 && legajo<=9999)){

        legajo = parseInt(prompt("ERROR. Ingrse numero de legajo DE 4 dijitos"))
     }

     nacionalidad = prompt("Ingrese la Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

     while (nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N"){
        nacionalidad = prompt("ERROR. Ingrese la Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
     }
     if (nacionalidad=="A"){
         nacionalidad="Argentino";
     }else if (nacionalidad=="E"){
         nacionalidad="Extranjero";
     }else{
         nacionalidad="nacionalizados";
     }



document.getElementById("Edad").value = edad + " Años";
document.getElementById("Sexo").value = "Sexo: "+sexo;
document.getElementById("EstadoCivil").value = "Estado civil: "+estadoCivil;
document.getElementById("Sueldo").value = "Sueldo Bruto: "+sueldoBruto;
document.getElementById("Legajo").value = "Numero de legajo: "+legajo;
document.getElementById("Nacionalidad").value ="Nacionalidad: " +nacionalidad;


}
