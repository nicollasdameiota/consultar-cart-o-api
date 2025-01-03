const resultadoDiv = document.getElementById('resultado');

function consultarCartao() {
  fetch('cartoes.json')
    .then(response => response.json())
    .then(data => {
      resultadoDiv.innerHTML = '';
      data.forEach(cartao => {
        const cartaoHTML = `
          <p>ID: ${cartao.id}</p>
          <h2>${cartao.nome}</h2>
          <p>${cartao.descricao}</p>
          <hr>
        `;
        resultadoDiv.innerHTML += cartaoHTML;
      });
    })
    .catch(erro => console.error('Erro ao carregar cartões:', erro));
}

// Iniciar consulta ao carregar página
document.addEventListener('DOMContentLoaded', consultarCartao);
