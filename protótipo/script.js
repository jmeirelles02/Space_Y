
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
    const loginForm = document.getElementById('loginForm');
    let captchaValue = generateCaptcha();

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const captchaInput = document.getElementById('captchaInput').value;
        const messageDiv = document.getElementById('message');


        messageDiv.textContent = '';

        if (!validateCaptcha(captchaInput, captchaValue)) {
            messageDiv.textContent = 'Captcha incorreto, tente novamente.';
            messageDiv.style.color = 'red';
            captchaValue = generateCaptcha();
            return;
        }


        if (email === "spacey@ibmec.com" && password === "senha123") {
            messageDiv.textContent = 'Login realizado com sucesso!';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.textContent = 'E-mail ou senha incorretos.';
            messageDiv.style.color = 'red';
        }
    });
});
