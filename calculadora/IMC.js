window.onload = iniciar;
function iniciar(){
    var btnCalcular = document.getElementById("btnCalcular")
    /* 
    btnCalcular = Guarda el id btnCalcular
    .addEventListener = genera un evento ("click")
    al hacer clic ejecuta la función clickbtnCalcular
    */
    btnCalcular.addEventListener("click", clickbtnCalcular)
}

function clickbtnCalcular(){
    var txtPeso = document.getElementById("txtPeso")
    var peso = txtPeso.value;

    var txtAltura = document.getElementById("txtAltura")
    var altura = txtAltura.value;

    var imc = peso / (altura * altura)
    
}