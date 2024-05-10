function mostrarHora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    var horaActual = hora + ":" + minutos + ":" + segundos;
    document.getElementById("hora").textContent = horaActual;
}

setInterval(mostrarHora, 1000);