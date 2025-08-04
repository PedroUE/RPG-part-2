let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

if (vida >= 80) {
    console.log("Ayla Está em ótima forma!");
} else if (vida >= 40) {
    console.log("Ayla está ferida, mas pode lutar");
} else {
    console.log("Ayla está em estado crítico, recue!");
}

if (vida >= 50 && energia >= 50){
    console.log("Ayla entra no calabouço");
} else {
    console.log("Ayla não pode seguir para o calabouço!");
}


if (xp >= 1000) {
    nivel++;
    console.log(`Ayla subiu de nivel ${nivel}.`);
} else {
    console.log("Adquira mais xp para subir de nível");
}


if (ouro >= 300) {
    console.log("Ayla comprou a armadura mágica"); 
} else {
    console.log("Ayla não tem ouro suficiente");
}