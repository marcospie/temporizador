
let tempo = Number(prompt("Digite quantos segundos você  quer"));
const cronometro = document.querySelector("#cronometro");
let idIntervalo;
const body = document.querySelector("body");
cronometro.innerHTML= tempo;

function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function trocarfundo(){
    let cor1 = aleatorio(0,255);
    let cor2 = aleatorio(0,255);
    let cor3 = aleatorio(0,255);
    body.style.backgroundColor = `rgb(${cor1},${cor2},${cor3})`;
}


function diminuir (){
    tempo--;
    cronometro.innerHTML=tempo;
    if (tempo==0){
        clearInterval(idIntervalo);
        setInterval(trocarfundo,333);
    }
}
idIntervalo = setInterval(diminuir, 1000);

