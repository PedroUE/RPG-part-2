//NIVEL 1

//1. 🔹 CRIAÇÃO DAS VARIÁVEIS PRINCIPAIS
let nomeVilao = "Baidu o magnifico";
let nome = "Frodo Bolseiro";
let classe = "Hobbit";
let nivel = 14;
let vida = 100;
let ouro = 190;
let xp = 50;
let manaMaxima = 70;
let manaAtual = 50;
let nivelMantoVPN = 10;


//2. 🔸 DEFINIÇÃO DE CONSTANTES MÁGICAS
const NOMEARMA = "Espada de Hobbit";
const DANOBASE = 55;
const ARMADURA = "Armadura Elfica";
const DEFESA = 25;
const TECLADOENCANTADO = "qwerty o impiedoso";

//3. ⚙️ APLICAÇÃO DE OPERADORES DE ATRIBUIÇÃO.

//Treinou e ganhou 150 pontos de xp.
xp += 150;

//comprou poção por 30 moedas.
ouro -= 30

//Usou a poção e recuperou 40 pontos de vida.
vida += 40

//A arma foi encantada, e seu dano foi dobrado.
let danoTotal = DANOBASE * 2


//4. ➕ CÁLCULO DE ATRIBUTOS FINAIS.

let ataqueTotal = nivel + DANOBASE;
let defesaTotal = DEFESA  + (nivel / 2);



//5. 🔐 AVALIAÇÃO DE PRONTIDÃO COM OPERADORES LÓGICOS.

let vidaSulficiente = vida > 70;
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSulficiente && (ataqueForte || nivelAvancado);


//6 📜 GERAÇÃO DA LORE DO PERSONAGEM

console.log("🪪 lore do personagem");
console.log("-------------------------------------");

console.log("Desde jovem", nome, "via o mundo não como algo fixo, mas como um grande sistema aguardando para ser decifrado.");
console.log("Filho de um antigo arquivista e de uma engenheira arcana, cresceu entre livros de linguagens antigas e máquinas encantadas.");
console.log("Com o tempo, aprendeu a traduzir códigos arcanos em estruturas lógicas, unindo magia e tecnologia com precisão cirúrgica.");
console.log("Durante o Grande Eclipse dos Servidores", nome, "criou um firewall encantado que salvou toda uma cidade de um vírus etéreo que ameaçava apagar suas memórias coletivas.");
console.log("Desde então, ficou conhecido como o Programador do Véu, capaz de compilar feitiços e debugar maldições como ninguém");
console.log("Atualmente, viaja pelos reinos em busca do Código-Fonte Primordial, uma sequência lendária escrita pelos deuses, que, segundo rumores, permitiria reiniciar a realidade ou atualizá-la.");
console.log("Calmo, analítico e movido pela curiosidade, frodo empunha espadas e teclas rúnicas e scripts mágicos, desafiando monstros e bugs com a mesma frieza de quem lê logs de erro.");
console.log("Mas por irônia de Java (Nome de Deus da terra script)", nome, "já sabio de todos os erros possiveis não esperava por algo inusitado e improvável.");
console.log("Sim, ele mesmo,", nomeVilao, "tinha voltado depois de anos adormecido nas desconhecidas terras de Página dois. ");
console.log("Agora sozinho e preparado,", nome, "precisara atravessar as terras nets para chegar no reino maligno de Baidu. Para sim colocar fim em um mundo de crueldade e farsas.");
console.log("------------------------------------------------------------------------------------------");
//Fim do nivel 1

//NIVEL 2

// Novos atributos para batalha

let forca = 20;
let defesa = 30;
let agilidade = 55;
let combatesVencidos = 0;

//Prologo

console.log("🧾 Prologo:");
console.log(" Logo após", nome, "retornar para as terras nets, ele ficou sabendo da volta de ", nomeVilao, "Que havia retornado de Java.");
console.log("Obsecado por resolver problemas,", nome, "Embarca em uma aventura de problemas e soluções para derrotar seu inimigo.");
console.log("Mas sempre tomando cuidado pois o caminho é cheio de reviravoltas.");
console.log("------------------------------------------------------------------------------------------");

//⚔️ Capítulo 1 - Primeira Decisão

console.log("⚔️ Capítulo 1 - Primeira Decisão");
console.log("------------------------------------------------------------------------------------------");
console.log("Ao viajar para net,", nome,"sabia que o caminho não era fácil e que háveria muitos obstáculos perigosos no caminho.");
console.log("Então ele decide viajar pelas estradas pois o caminho seria mais curto, mas por controversas háveria muito mais perigos.");
console.log("Só que ele chega em sua primeira escolha, uma encruzilhada com uma placa que dizia: Cuidado! fishings há frente, Apenas MantosVPN nivel 5 passaram.");
console.log("----------------------------------------------------------");

if (nivelMantoVPN >= 5) {
    console.log("RESPOSTA:",nome, "passou sem ser percebido.");
} else {
    console.log("RESPOSTA: melhore seu manto ou você morrera.");
}
console.log("----------------------------------------------------------");
console.log(nome, "Passa sem ser percebido, mas acaba tropeçando e cando de cara no chão, perdendo 10 de vida.");
console.log("----------------------------------------------------------")
vida -= 10

//🛡️ Capítulo 2 - Escolha Estratégica

console.log("🛡️ Capítulo 2 - Escolha Estratégica");
console.log("----------------------------------------------------------")
console.log("Ao passar pela estrada,", nome, "chega a uma loja clandetina na beira da estrada.");
console.log("E ao entrar, ele se depara com um elfo baixo e ranzinza que olha para", nome, "e diz:");
console.log("bem-vindo andarilho, sei que está indo atrás de", nomeVilao, "e tenho a chave universal, ela é capaz de abrir qualquer porta de toda terra de net.");
console.log("A chave custa 200 de ouro, mas também posso vendela por 1000 de mana.");
console.log(nome, "então olha para seu bolso e vê que não tinha dinheiro o suficiente.")
console.log("----------------------------------------------------------")

if (ouro >= 200) {
    console.log("RESPOSTA: Parabéns, você adquiriu a chave universal.");
} else if (xp >= 1000) {
    console.log("RESPOSTA: Parabéns, você adquiriu a chave universal");
} else {
    console.log("RESPOSTA: Desculpa andarilho, mas você não tem ouro e nem mana.");
}

console.log("----------------------------------------------------------");
console.log(nome, "Sai da loja clandestina e segue seu caminho rumo ao reino.");
console.log("----------------------------------------------------------");