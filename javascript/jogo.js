/*************************************** 
            RadioButton 
***************************************/
function modoAventura(){
    document.body.style.backgroundImage = "url('./imagem/florestadia.gif')";
    document.querySelector('.conteudoPrincipal').style.backgroundColor = `rgb(230, 230, 177)`;
    document.getElementById('texto').style.color = "black";
    
}
function modoInvest(){
    document.body.style.backgroundImage = "url('./imagem/florestanoite.jpg')";
    document.querySelector('.conteudoPrincipal').style.backgroundColor = `rgb(28, 25, 44)`;
    document.getElementById('texto').style.color = "white";
}
/*************************************** 
            REMOVE BOTÃO 
***************************************/
function removeBotao(){
    let divisoria = document.getElementById('conteudoBotao');
    divisoria.innerText = "";
}
/*************************************** 
            ADICIONA BOTÃO 
***************************************/
function addBotao(textob,func,id){
    let divisoria = document.getElementById('conteudoBotao');
    /* botão 1 */
    let escolha1 = document.createElement('button');
    escolha1.textContent = textob;
    escolha1.setAttribute('id', id);
    escolha1.setAttribute('class', 'btn');
    escolha1.setAttribute('onclick', func);
    divisoria.appendChild(escolha1);
}
/*************************************** 
            REMOVE TEXTO 
***************************************/
function removeTexto(){
    let texto = document.getElementById("texto");
    document.getElementById('conteudoTexto').removeChild(texto);
}
/*************************************** 
            ADICIONA TEXTO 
***************************************/
function addTexto(mensagem){
    let divisoria = document.getElementById('conteudoTexto');
    let texto = document.createElement('p');
    texto.textContent = mensagem;
    texto.setAttribute('id', 'texto');
    if(document.getElementById('radio1').checked == true){
        texto.style.color = 'black';
    }
    if(document.getElementById('radio2').checked == true){
        texto.style.color = 'white';
    }
    divisoria.appendChild(texto);
}
/*************************************** 
            GERA NOME 
***************************************/
function geraNome(){
    let input = document.getElementById('userName');
    let nome = input.value;
    if(nome!="" && nome!=" "){
    menuJogo(nome);
    }
    else{
        alert("Insira seu nome");
    }
}
/*************************************** 
            COMEÇO DO JOGO 
***************************************/
function menuJogo(nome){
    removeBotao();
    removeTexto();
    addTexto(`${nome} você está lentamente abrindo seus olhos pesados, como se estivesse sentindo uma ressaca muito forte.
    Nas suas mãos, você sente uma terra úmida e lamacenta, já imaginando que estava estirado no chão, arremessado pra fora feito
    um bebado de um bar qualquer, porém se surpreende. Aquele lugar não era nem um pouco próximo de uma cidade.`);
    addBotao('Aventureiro', 'aventureiro()', 'botao');
    addBotao('Investigativo', 'investigativo()', 'botao2');
}
function aventureiro(){
    removeBotao();
    removeTexto();
    addTexto(` Você se vê em uma selva. Uma selva extremamente densa e esverdeada. O som dos grilos e dos passaros entorpece
    completamente seus ouvidos, enquanto que a umidade e o cheiro de seiva sobrepõem qualquer outro aroma.`);
    addBotao('Prosseguir', );
}
function investigativo(){
    removeBotao();
    removeTexto();
    addTexto(` Você se vê em um pântano. Um pântano extremamente pesado e escuro. O som de feras desconhecidas e de um crocodilo próximo mexe
    totalmente com seu psicológico, enquanto você sente o clima frio e sua espinha arrepiar com tal situação.`);
    addBotao('Prosseguir');
}
/*************************************** 
        CAMINHO DO AVENTUREIRO 
***************************************/