//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {

    let nomeAmigo = document.querySelector('input').value;

    if (!nomeAmigo.length) {
        return alert('Ops! Parece que você não inseriu um nome válido.');
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        limparCampo();
        return alert(`O nome de ${nomeAmigo} já está incluído na lista.`);
    }

    listaDeAmigos.push(nomeAmigo);
    listarNomeInserido();
    limparCampo();

}

function sortearAmigo() {

    if (listaDeAmigos.length < 2) return alert('Por favor, insira no mínimo 2 nomes para realizar o sorteio.');

    let escolherItem = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[escolherItem];

    let campoSorteado = document.getElementById('resultado')
    campoSorteado.innerHTML = '🎉 ' + amigoSorteado;

    document.getElementById('sortear').setAttribute('disabled', true);
    document.getElementById('adicionar').setAttribute('disabled', true);
    document.getElementById('reiniciar').hidden = false;

}

function listarNomeInserido() {    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    document.getElementById('sortear').removeAttribute('disabled');
    document.getElementById('adicionar').removeAttribute('disabled');
    document.getElementById('reiniciar').hidden = true;
}