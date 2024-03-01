let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

mensagemInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 a 10');
}


//arrumar o botão
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}! Parabéns!!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor!');
        } else {
            exibirTexto('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo()
    }
}

//gerar número aleatório
function gerarNumero() {
    let quantidadeNumerosLista = listaNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random() * numeroLimite+1);
    if (quantidadeNumerosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1; 
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}