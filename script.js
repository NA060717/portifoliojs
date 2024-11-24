document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio real do formulário

    // Obtendo valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Mensagem enviada com sucesso!');

        // Limpar o formulário após o envio
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
