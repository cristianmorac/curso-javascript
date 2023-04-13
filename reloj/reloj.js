setInterval(()=>{
    /* obtener el texto del primer elemento */
    let reloj = document.getElementsByClassName("reloj")[0];
    /* Cambiar la información por el reloj actual*/
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    if (minutos < 10){
        minutos = `0${minutos}`
    }
    let segundos = tiempoActual.getSeconds();
    if (segundos < 10){
        segundos = `0${segundos}`
    }
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`
  },1000);