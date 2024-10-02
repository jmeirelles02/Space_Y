// Função para gerar CAPTCHA
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

function validateCaptcha(input, captcha) {
    return input === captcha;
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('leaderLoginForm');
    let captchaValue = generateCaptcha(); // Gera e exibe o CAPTCHA

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const captchaInput = document.getElementById('captchaInput').value;
        const messageDiv = document.getElementById('message');

        // Reset any previous message
        messageDiv.textContent = '';

        if (!validateCaptcha(captchaInput, captchaValue)) {
            messageDiv.textContent = 'Captcha incorreto, tente novamente.';
            messageDiv.style.color = 'red';
            captchaValue = generateCaptcha(); // Reset captcha
            return;
        }

        // Simulação de login
        if (email === "lider@ibmec.com" && password === "lider123") {
            // Login bem-sucedido, redireciona para a página de líderes
            window.location.href = "lideres.html";
        } else {
            messageDiv.textContent = 'E-mail ou senha incorretos.';
            messageDiv.style.color = 'red';
        }
    });
});
