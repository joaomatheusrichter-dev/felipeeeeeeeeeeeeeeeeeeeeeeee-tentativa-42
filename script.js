// Seleciona todos os botões que têm a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// Para cada botão, adiciona um evento de clique
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o passo atual (que tem a classe 'ativo')
        const atual = document.querySelector('.passo.ativo');
       
        // Obtém o número do próximo passo a partir do atributo data-proximo
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
       
        // Remove a classe 'ativo' do passo atual
        if (atual) {
            atual.classList.remove('ativo');
        }
       
        // Adiciona a classe 'ativo' ao próximo passo
        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        }
       
        // Rola a página para o topo para melhor experiência
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Verifica se a página foi carregada completamente
document.addEventListener('DOMContentLoaded', function() {
    // Garante que apenas o passo-0 esteja ativo no início
    const passos = document.querySelectorAll('.passo');
    passos.forEach(passo => {
        if (passo.id !== 'passo-0') {
            passo.classList.remove('ativo');
        }
    });
   
    // Mostra o passo-0 se ele não estiver ativo
    const passoZero = document.getElementById('passo-0');
    if (passoZero) {
        passoZero.classList.add('ativo');
    }
});
