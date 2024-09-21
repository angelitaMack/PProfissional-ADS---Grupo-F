// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    if (authenticate(username, password, userType)) {
        localStorage.setItem('userRole', userType); // Armazena o tipo de usuário na sessão
        switch(userType) {
            case 'aluno':
            case 'professor':
                window.location.href = 'sistema.html'; // Página para ambos os tipos de usuário
                break;
        }
    } else {
        alert('Nome de usuário ou senha inválidos.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Tipo de usuário simulado para o exemplo
    // Substitua isso por uma lógica real para obter o tipo de usuário
    const tipoUsuario = localStorage.getItem('tipoUsuario') || 'aluno';

    const sidebar = document.querySelector('.sidebar');
    
    if (tipoUsuario === 'aluno') {
        sidebar.innerHTML = `
        <h2>Menu Aluno</h2>
        <a href="#" id="homeLink">Home</a>
        <a href="#" id="meuboletimLink">Meu Boletim</a>
        `;
    } else if (tipoUsuario === 'professor') {
        sidebar.innerHTML = `
        <h2>Menu Professor</h2>
        <a href="#" id="homeLink">Home</a>
        <a href="#" id="boletimLink">Boletim Alunos</a>
        <a href="#" id="inserirNotasLink">Inserir Notas</a>
        <a href="#" id="supportLink">Suporte</a>
        `;
    }
});

// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    if (authenticate(username, password, userType)) {
        sessionStorage.setItem('userRole', userType); // Armazena o tipo de usuário no sessionStorage
        window.location.href = 'sistema.html'; // Página para ambos os tipos de usuário
    } else {
       
    }
});

