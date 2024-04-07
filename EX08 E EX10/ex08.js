function alterarNome() {
    let novoNome = prompt('Digite o novo Nome:');
    if (novoNome !== null && novoNome !== '') {
        document.getElementById('nomeusuario').textContent = novoNome;
        alert('Nome alterado com sucesso!');
    } else {
        alert('Por favor, insira um nome.');
    }
}

function alterarBio() {
    let novaBio = prompt('Digite sua nova Bio:');
    if (novaBio !== null && novaBio!== '') {
        document.getElementById('bio').textContent = novaBio;
        alert('Nova bio atualizada com sucesso!');
    } else {
        alert('Por favor, insira sua bio.');
    }
}

function alterarIdade() {
    let novaIdade = prompt('Digite a nova idade:');
    if (novaIdade !== null && novaIdade !== '') {
        document.getElementById('idade').textContent = novaIdade + ' anos';
        alert('Idade alterada com sucesso!');
    } else {
        alert('Por favor, insira uma idade válida.');
    }

}
function alterarLocal() {
    let novoLocal = prompt('Digite a nova Localização:');
    if (novoLocal !== null && novoLocal !== '') {
        document.getElementById('local').textContent = novoLocal;
        alert('Localização alterada com sucesso!');
    } else {
        alert('Por favor, insira uma localização válida.');
    }
}

function alterarFoto() {
    let novoLink = prompt('Cole o URL da foto de perfil:');
    if (novoLink !== null && novoLink !== '') {
        document.getElementById('fotoperfil').src = novoLink;
        alert('Foto de perfil alterada com sucesso!');
    } else {
        alert('Por favor, insira um URL válido para a foto de perfil.');
    }
}

