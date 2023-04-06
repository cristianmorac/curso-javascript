window.onload = iniciar;

// Objeto
var persona = {
    'nombre': 'naine',
    'apellido': 'padu',
    'telefono': 322342345,
    'empleo': {
        'profesion': 'Ingeniera',
        'puesto': 'analista 3'
    }
}

// visualizar solo el apellido
console.log("apellido: "+persona.apellido);

// visualizar un objeto dentro de otro objeto
console.log('Profesion: '+persona.empleo.profesion);

// cambiar campo
persona.telefono = "no tiene"

// visualizar objeto
console.log(persona);

var usuarios = []

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener('click',clickbtnAgregar);
}

function clickbtnAgregar(){
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var telefono = document.getElementById('txtTelefono').value;

    // crear objeto
    var usuario = {
        'nombre':nombre,
        'apellido': apellido,
        'telefono': telefono,
    }

    usuarios.push(usuario);
    console.log(usuarios);
    mostrarPersonas()
}

function mostrarPersonas(){
    var listado = document.getElementById('listado');
    var html = ""
    for (var usuario of usuarios){
        html+=` Nombre: ${usuario.nombre} <br/> Apellido: ${usuario.apellido} <br/> Telefono: ${usuario.telefono} <br/>`;
    }

    listado.innerHTML = html;
}
