var nombres = ["Lucas","Pedro","Juan",'Carlos']
// Buscar el valor en el indice 2
console.log(nombres[2]);

// agregar valores
nombres.push('Naine')
console.log(nombres);
console.log(" Ver uno a uno");
console.log("Recorrido 1");
for (var i =0;i<nombres.length;i++){
    var nombre = nombres[i];
    console.log(nombre);
}

// otra forma de recorrerlo
console.log("Recorrido 2");
for( var name of nombres){
    console.log(name);
}