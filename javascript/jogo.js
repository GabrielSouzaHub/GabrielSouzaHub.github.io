/*************************************** 
            RadioButton 
***************************************/
function modoAventura() {
    document.body.style.backgroundImage = "url('./imagem/florestadia.gif')";
    document.querySelector('.conteudoPrincipal').style.backgroundColor = `rgb(230, 230, 177)`;
    document.getElementById('conteudoTexto').style.color = "black";
    document.getElementById('conteudoTexto').style.fontFamily = "'Syne Mono', monospace";
}
function modoInvest() {
    document.body.style.backgroundImage = "url('./imagem/florestanoite.jpg')";
    document.querySelector('.conteudoPrincipal').style.backgroundColor = `rgb(28, 25, 44)`;
    document.getElementById('conteudoTexto').style.color = "white";
    document.getElementById('conteudoTexto').style.fontFamily = "'Walter Turncoat', cursive";
}
/*************************************** 
            REMOVE BOTÃO 
***************************************/
function removeBotao() {
    document.getElementById('conteudoBotao').innerText = "";
}
/*************************************** 
            ADICIONA BOTÃO 
***************************************/
function addBotao(textob, func, id) {
    let escolha1 = document.createElement('button');
    escolha1.textContent = textob;
    escolha1.setAttribute('id', id);
    escolha1.setAttribute('class', 'btn');
    escolha1.setAttribute('onclick', func);
    document.getElementById('conteudoBotao').appendChild(escolha1);
}
/*************************************** 
            REMOVE TEXTO 
***************************************/
function removeTexto() {
    let texto = document.getElementById("texto");
    document.getElementById('conteudoTexto').removeChild(texto);
}
/*************************************** 
            ADICIONA TEXTO 
***************************************/
function addTexto(mensagem) {
    let texto = document.createElement('p');
    texto.textContent = mensagem;
    texto.setAttribute("id", "texto");
    document.getElementById('conteudoTexto').appendChild(texto);
}
/*************************************** 
            GERA NOME 
***************************************/
function geraNome() {
    let nome = document.getElementById('userName').value;
    if (nome != "" && nome != " ") {
        menuJogo(nome);
    }
    else {
        alert("Insira seu nome");
    }
}
/*************************************** 
            COMEÇO DO JOGO 
***************************************/
function menuJogo(nome) {
    removeBotao();
    removeTexto();
    addTexto(`${nome} você está \nlentamente abrindo seus olhos pesados, como se estivesse sentindo uma ressaca muito forte.
    Nas suas mãos, você sente uma terra úmida e lamacenta, já imaginando que estava estirado no chão, arremessado pra fora feito
    um bebado de um bar qualquer, porém se surpreende. Aquele lugar não era nem um pouco próximo de uma cidade.`);
    addBotao('Aventureiro', 'aventureiro()', 'botao');
    addBotao('Investigativo', 'investigativo()', 'botao2');
}
function aventureiro() {
    removeBotao();
    removeTexto();
    addTexto(` Você se vê em uma selva. Uma selva extremamente densa e esverdeada. O som dos grilos e dos passaros entorpece
    completamente seus ouvidos, enquanto que a umidade e o cheiro de seiva sobrepõem qualquer outro aroma.`);
    addBotao('Prosseguir', 'aventP()', 'botao');
}
function investigativo() {
    removeBotao();
    removeTexto();
    addTexto(` Você se vê em um pântano. Um pântano extremamente pesado e escuro. O som de feras desconhecidas e de um crocodilo próximo mexe
    totalmente com seu psicológico, enquanto você sente o clima frio e sua espinha arrepiar com tal situação.`);
    addBotao('Prosseguir');
}
/*************************************** 
        CAMINHO DO AVENTUREIRO 
***************************************/
function aventP() {
    removeBotao();
    removeTexto();
    addTexto(`Imediatamente você retoma o olhar para si. Enxergando as roupas rasgadas e sujas de lama, examina os seus bolsos e 
    não encontra nada de relevante alem de uma chave, carteira de identidade rasgada, algumas moedas, isqueiro e um cigarro. Sente
    que está sendo observado, mas deixa de lado, entretanto, o que realmente lhe intriga é que não lembra quem você é.`);
    addBotao('Levantar', 'aventP1()');
    addBotao('Acender cigarro', 'aventP11()');
}
function aventP11(){
    removeBotao();
    removeTexto();
    addTexto(`Você fuma seu cigarro pra tentar acalmar seus ânimos, na última tragada reflete um pouco mais sobre onde está, dá uma tossida
    e levanta(o sabor do cigarro te trás a memória que você tinha fumado antes de apagar e possuía uma arma apontando pra sua cabeça)`);
    addBotao('Prosseguir', 'aventP1()');
}
function aventP1(){
    removeBotao();
    removeTexto();
    addTexto(`Após levantar`);
}