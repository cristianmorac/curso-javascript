console.log("Ejercicio for");

console.log("Tablas de multiplicar");
for (var i=1; i <=3;i++){
    console.log("Tabla del "+i);
    for (var j=1; j<=10;j++){
        
        console.log(j+"X"+i+"="+j*i);
    }   
}

console.log("Numero par o impar");
for (var i=1; i <=3;i++){
    if (i%2 == 0){
        console.log("Es par: "+i);
    }else{
        console.log("Es impar: "+i);
    }
}

console.log("Calcular sumatoria de numeros pares hasta 1000");
var sumatoria = 0;
for (var i =0;i<=1000;i++){
    if (i%2 ==0){
        sumatoria+=i
    }
}
console.log("la sumatoria de los números pares es: "+sumatoria);