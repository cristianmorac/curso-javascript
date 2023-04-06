window.onload = iniciar;

/* localstorage: capacidad para almacenar datos 
de manera local en el navegador que utiliza el usuario 
mientras navega */

function iniciar(){
    // agregar información localstorage con la accion click
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',clickbtnAgregar);
    // ejecutar funcion para mantener variable almacenada

    // eliminar información localstorage con la accion click
    var btnBorrar = document.getElementById('btnBorrar');
    btnBorrar.addEventListener('click', clickbtnBorrar);

    mostrarNotas()
}

function clickbtnAgregar(){

    var txtNota = document.getElementById('txtNota').value;

    // guardar un arreglo en localstorage
    var notas = [];

    // validar si hay notas
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }
    
    notas.push(txtNota);
    // convertir en texto y guardar
    localStorage.notas = JSON.stringify(notas)

    // almacenar en el navegador un solo string
    localStorage.nota = txtNota
    mostrarNotas()
}

function clickbtnBorrar(){
    // eliminar el localstorage
    localStorage.clear();
    mostrarNotas()
}

function mostrarNotas(){

    // trae el espacio del div en el html
    var divnotas = document.getElementById('notas');
    
    var notas = [];
    if (localStorage.notas){
        // transformar de texto a un arreglo
        notas = JSON.parse(localStorage.notas);
    }
    // recorrer el arreglo
    var html = "";
    for (var nota of notas){
        html += `${nota} <br/>`
    }

    // mostrar la informacion en el html
    divnotas.innerHTML = html
}