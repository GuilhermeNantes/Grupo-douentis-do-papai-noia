let contador = document.getElementById("contador");
let contDias = document.getElementById("contDias");
let teste = new Date();

contDias.innerHTML = `${teste.getDate()}`

contador.innerHTML = `${teste.getHours()}:${teste.getMinutes()}:${teste.getSeconds()}`

setInterval(teste,1000);