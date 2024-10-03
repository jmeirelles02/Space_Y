document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;
    const captcha = document.getElementById('captcha').textContent;
    const messageDiv = document.getElementById('message');

    // Pega os dados de cadastro armazenados no localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verificação do Captcha
    if (captchaInput !== captcha) {
        messageDiv.textContent = "Captcha incorreto!";
        messageDiv.style.color = "red";
        return;
    }

    // Verifica se o email e a senha correspondem aos armazenados no localStorage
    if (email === storedEmail && password === storedPassword) {
        messageDiv.textContent = "Login realizado com sucesso!";
        messageDiv.style.color = "green";
         window.location.href = 'colaboradores.html';
    } else {
        messageDiv.textContent = "E-mail ou senha incorretos!";
        messageDiv.style.color = "red";
    }
});

// Função para gerar o Captcha
function generateCaptcha() {
    const captchaElement = document.getElementById('captcha');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    captchaElement.textContent = captcha;
    return captcha;
}

// Gera o captcha ao carregar a página
window.onload = generateCaptcha;
