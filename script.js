// Aguarda o navegador carregar o HTML antes de ativar os botões
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção dos elementos
    const themeBtn = document.getElementById('theme-toggle');
    const actionBtn = document.getElementById('btn-action');
    const nameInput = document.getElementById('user-input');
    const mainTitle = document.getElementById('main-title');
    const feedback = document.getElementById('feedback-area');

    // REPARO DO BOTÃO DE TEMA (CLARO/ESCURO)
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Troca o texto do botão para informar o usuário
            if (document.body.classList.contains('dark-mode')) {
                themeBtn.textContent = "☀️ Modo Claro";
            } else {
                themeBtn.textContent = "🌓 Modo Escuro";
            }
        });
    }

    // REPARO DO BOTÃO DE AÇÃO (BOAS-VINDAS)
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            const nomeDigitado = nameInput.value.trim();

            if (nomeDigitado !== "") {
                // Altera o título dinamicamente (Manipulação do DOM)
                mainTitle.textContent = `Agro é Vida, ${nomeDigitado}!`;
                
                // Exibe feedback visual
                feedback.textContent = "✅ Projeto Carregado com Sucesso!";
                feedback.style.color = "var(--primary-color)";
                
                // Esconde os campos de entrada após o clique
                nameInput.style.display = "none";
                actionBtn.style.display = "none";
            } else {
                alert("Por favor, digite seu nome para continuar.");
            }
        });
    }
});
