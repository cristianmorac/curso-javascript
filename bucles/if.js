/*
> mayor
< menor
>= mayor o igual
<= menor o igual
== Igual
!= distinto
&& concatenar opciones (y)
|| concatenar opciones (o)
*/

var edad = 16;
var estatura = 1.1
var hijoDueno = 'si';
if (edad >= 15){
    if (estatura >= 1.2){
        console.log('puede ingresar al juego')
    }
    else {
        console.log('no puede ingresar al juego')
    }
} else {
    console.log("La edad debe ser superior a 15 años");
}

// opción corta
if (edad >=13 && estatura >=1.2){
    console.log('puede ingresar al juego')
}else {
    console.log('no puede ingresar al juego')
}

// condicional or y and concatenado

// tolowerCase() = convertir todo a minusculas

if (edad >=13 && estatura >=1.2 || hijoDueno.toLowerCase() == 'si'){
    console.log('puede ingresar al juego')
}else {
    console.log('no puede ingresar al juego')
}
