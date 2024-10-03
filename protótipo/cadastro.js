document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        messageDiv.textContent = "As senhas não coincidem!";
        messageDiv.style.color = "red";
        return;
    }

    // Salvar os dados no localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    messageDiv.textContent = "Cadastro realizado com sucesso!";
    messageDiv.style.color = "green";

    // Limpar o formulário após o cadastro
    document.getElementById('signupForm').reset();
    window.location.href = "index.html";
});
