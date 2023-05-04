const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNameContact = document.getElementById('name-contact');
    const inputNumContact = document.getElementById('num-contact');

    let linha = '<tr>';
    linha += `<td>${inputNameContact.value}</td>`;
    linha += `<td>${inputNumContact.value}</td>`;
    linha += '</tr>'

    linhas += linha;
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}