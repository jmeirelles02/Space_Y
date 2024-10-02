document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const messageDiv = document.getElementById('message');

        messageDiv.textContent = '';

        // Validação de senha
        if (password !== confirmPassword) {
            messageDiv.textContent = 'As senhas não coincidem.';
            messageDiv.style.color = 'red';
            return;
        }

        // Simulação de cadastro bem-sucedido
        messageDiv.textContent = 'Cadastro realizado com sucesso!';
        messageDiv.style.color = 'green';
        signupForm.reset();
    });
});
