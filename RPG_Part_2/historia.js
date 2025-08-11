//NIVEL 1

//1. 🔹 CRIAÇÃO DAS VARIÁVEIS PRINCIPAIS
let nomeVilao = "Baidu o magnifico";
let nome = "Frodo Bolseiro";
let classe = "Hobbit";
let nivel = 14;
let vida = 100;
let ouro = 190;
let xp = 50;
let nivelMantoVPN = 10;
let escalada = 40;
let iluminacaoHobbit = 12;
let vidaVilao = 200
let mana = 200;

//2. 🔸 DEFINIÇÃO DE CONSTANTES MÁGICAS
const NOMEARMA = "Espada de Hobbit";
const DANOBASE = 55;
const ARMADURA = "Armadura Elfica";
const DEFESA = 25;
const TECLADOENCANTADO = "qwerty o impiedoso";
const ARROMBAMENTO = "Gazua encantada"

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
console.log("Só que ele chega em sua primeira escolha, uma encruzilhada com uma placa que dizia: Cuidado! fishings há frente, Apenas MantosVPN passaram.");
console.log("----------------------------------------------------------");

if (nivelMantoVPN) {
    console.log("RESPOSTA:",nome, "passou sem ser percebido.");
} 
console.log("----------------------------------------------------------");
console.log(nome, "Passa sem ser percebido, mas acaba tropeçando e cando de cara no chão, perdendo 10 de vida.");
console.log("----------------------------------------------------------")

//caiu de cara e perdeu vida.
vida -= 10;

console.log(nome, "precisou descansar, assim ganhando 10 de mana");

//mana recuperada
mana += 10;

console.log(nome, "encontrou uma pedra de encantamento mágico, mas era necessário nivel 5 para usa-la");

if (nivel >= 5) {
    console.log("ganhou nível");

    //aumento de nivel
    nivel += 2
}
//🛡️ Capítulo 2 - Escolha Estratégica

console.log("🛡️ Capítulo 2 - Escolha Estratégica");
console.log("----------------------------------------------------------")
console.log("Ao passar pela estrada,", nome, "chega a uma loja clandetina na beira da estrada.");
console.log("E ao entrar, ele se depara com um elfo baixo e ranzinza que olha para", nome, "e diz:");
console.log("bem-vindo andarilho, sei que está indo atrás de", nomeVilao, "e tenho a chave universal, ela é capaz de abrir qualquer porta de toda terra de net.");
console.log("A chave custa 200 de ouro.");
console.log(nome, "então olha para seu bolso e vê que não tinha dinheiro o suficiente.")
console.log("----------------------------------------------------------")

if (ouro >= 200) {
    console.log("RESPOSTA: Parabéns, você adquiriu a chave universal.");
} else {
    console.log("RESPOSTA: Desculpa andarilho, mas você não tem ouro.");
}




console.log("----------------------------------------------------------");
console.log(nome, "Sai da loja clandestina e segue seu caminho rumo ao castelo.");
console.log("----------------------------------------------------------");

console.log(nome, "encontra um ninho de águia com moedas");
if (ataqueForte === true) {
    console.log("você destruiu o ninho e ganhou 5 moedas");
}    
    ouro += 5;

console.log("----------------------------------------------------------");
console.log(nome, "Encontra um livro de feitiços e decide arrombar o cadeado para ganhar xp");
console.log("----------------------------------------------------------");

if (ARROMBAMENTO === true) {
    console.log ("Você leu o livro e ganhou a habilidade de esquiva.")
}
//Ganhou esquiva
let esquiva = 1;

console.log("----------------------------------------------------------");
//🎭 Capítulo 3

console.log("🎭 Capítulo 3 - o castelo")
console.log("----------------------------------------------------------");
console.log(nome, "finalmente chega ao castelo de", nomeVilao, "e se depara com uma porta gigante.");
console.log("Mas ao se lembrar da chave,", nome, "entra em sedespero pois não conseguia passar pela porta.");
console.log("Porem ao olhar para cima, ele vê uma janela entreaberta e uma fresta ao lado da porta.");
console.log("Então", nome, "precisa tomar uma decisão");
console.log("----------------------------------------------------------");

if (escalada >= 30) {
    console.log(nome, "escala a janela e entra na sala de seu arque inimigo.");
} else if(iluminacaoHobbit >= 20) {
    console.log(nome, "cai em um buraco e acaba ficando preso para sempre.");
} else {
   console.log(nome, "não conseque nenhuma das opções, volte quando estiver em um nível maior.");
}

console.log("----------------------------------------------------------");
console.log("ao entrar", nome, "foi pego de surpresa e tomou um golpe na cabeça e perdeu 30 de vida.");

//tomou golpe na cabeça;
vida -= 30;

console.log("ao puxar sua espada ele acerta seu inimigo em cheio");

//Frodo tira vida de baidu;

vidaVilao -= DANOBASE;

console.log("deixando assim ele com", vidaVilao, "de vida.");

//Baidu tira vida de frodo;
vida -= 20;

console.log("Então", nomeVilao, "usa seu feitiço de absorção de vida, assim deixando",nome, "com", vida, "de vida." );
console.log("Mas se", nome, "Estiver no nivel", nivel, "será possivel ultilizar o código mágico de ", TECLADOENCANTADO, "que matará baidu para sempre." );
console.log("ou então ele precisara estar com 1000 de mana para finalizalo com sua", NOMEARMA, "assim perderdo muita força.");
console.log("----------------------------------------------------------");

if (nivel >= 14) {
    console.log("Resposta:", nome, "ultiliza o código magico, assim matando", nomeVilao, "para sempre.");
} else if (mana >= 1000) {
    console.log(nome, "pula em cima da cabeça de", nomeVilao, "e o apunhala matando para sempre, mas perdendo toda sua força.");
} else {
    console.log(nome, "acaba sendo surpreendido e tomando o golpe final de seu inimigo, assim morrendo.");
}

//aumentou seu nivel pois derrotou seu inimigo.

nivel += 20;

console.log("🏆 Epílogo:");
console.log("---------------------------------------------------------");
console.log(nome, "se depara com uma escotilha no chão de seu inimigo, e por curiosidade acaba vendo o que tinha lá dentro.");
console.log("mas um portal se abre e acaba sugando", nome, "para dentro, assim levando-o para outra dimensão.");
console.log("---------------------------------------------------------");


//NIVEL 3

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===

//Ao entrar em uma nova dimensão você ganha 15 de mana e 200 de xp subindo de nivel

mana += 15;
xp += 200;
nivel += 1;

// === NOVOS ELEMENTOS PARA O NOVO MUNDO ===

let inventario = ["Espada de Hobbit", "Poção de mana", "Gazua encantada", "qwerty o impiedoso", "runa de invocação", "poção de vida 2x"];
let aliados = ["rafinha o barbaro", "mago jão"];
let inimigos = ["Fisinhgs", "Schrödinbug Fantasma", "Mandelbug"];
let tesouros = [];
let salasMina = ["Torre de carvão", "sala do equipamento", "sala de mineração"];

// === CAPÍTULO 1: Um novo mundo ===
console.log("");
console.log("🗺 CAPÍTULO 1: Um novo mundo");

//Menu de itens chaves 

let itensChave = ["chave de baidu", "pedra mágica"];

console.log(nome, "usa poção de cura e recupera 20 de vida",);
vida += 20;
//poção usada
let itemRemovido = inventario.pop();
console.log("🎒 Inventario atual:", inventario);
console.log("------------------------------------------------------");

console.log("agora em um novo mundo", nome, "se sente fragíl, assim convocan seus amigos para ajudalo.");
//usa a runa de invocação;
let runaUsada = inventario.pop();
console.log ("🎒 Inventario atual:", inventario);
console.log("------------------------------------------------------");

//descarta a pedra, pois não terá mais uso

let descarteDeItensChaves = itensChave.pop();
console.log("🎒 Inventario de itens chaves atual:", itensChave);
console.log("------------------------------------------------------");

//encontra um livro de encantamento
inventario.push("livro encantado");
console.log("📖 livro adicionado ao inventário:", inventario);


// === CAPÍTULO 2: as minas dos anões ===
console.log("");
console.log("⚔️ CAPÍTULO 2: as minas dos anões");

//Começo da exploração pelas minas

console.log("⛏️ começando a busca pela saida desse mundo");

for (let i = 0; i < salasMina.length; i++) {
console.log("sala", (i + 1), ":", salasMina.length[i]);

if (i === 0) {
    console.log(nome,"caiu em uma armadilha de pedras");
    vida -= 20;
} else if (i === 1) {
    console.log("🧨", nome, "encontrou uma barra de dinâmite")
} else {
    console.log("📚", nome, "encontra um livro de magia que duplica o dano total de sua arma");
    danoTotal *= 2
}
}

console.log("📊 Exploração completa! Vida:", vida, " dano total:", danoTotal);