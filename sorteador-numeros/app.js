function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numInicial = parseInt(document.getElementById('de').value);
    let numFinal = parseInt(document.getElementById('ate').value);
    
    if (numInicial >= numFinal){
        alert('O número inicial deve ser maior que o número final!');
        return;
    } else { 

        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAle(numInicial, numFinal);

            if (quantidade > (numFinal-numInicial+1)){
                alert('A quantidade de número sorteados não pode ser maior que o intervalo!');
                return;
            }

            while (sorteados.includes(numero)) {
                numero = obterNumeroAle(numInicial, numFinal);
            }

            sorteados.push(numero);
        }
            
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        alterarStatusBotao();
    }      
}

function obterNumeroAle(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}