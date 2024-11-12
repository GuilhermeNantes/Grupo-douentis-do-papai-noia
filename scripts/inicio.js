const dataAtual = new Date();
const newyeartime = new Date(dataAtual.getTime() + (new Date('2024-12-25T00:00:00').getTime() - dataAtual.getTime()));

const atualizarContador = () => {
    let currentTime = new Date()
    let difference = newyeartime - currentTime;
    let dias = Math.floor(difference / 1000 / 60 / 60 / 24);
    let horas = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutos = Math.floor(difference / 1000 / 60) % 60;
    let segundos = Math.floor(difference / 1000) % 60;

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    
    contDias.innerHTML = `${dias}`;
    contador.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarContador, 1000);