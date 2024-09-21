document.addEventListener('DOMContentLoaded', function() {
    // Obtém o tipo de usuário do sessionStorage
    const userType = sessionStorage.getItem('userRole') || 'aluno';
    const sidebar = document.getElementById('sidebar');

    const alunoOptions = `
        <h2>Menu Aluno</h2>
        <a href="#" id="homeLink">Home</a>
        <a href="#" id="meuLink">Meu Boletim</a>
        <a href="#" id="supportLink">Suporte</a>
    `;

    const professorOptions = `
        <h2>Menu Professor</h2>
        <a href="#" id="homeLink">Home</a>
        <a href="#" id="boletimLink">Boletim Alunos</a>
        <a href="#" id="inserirNotasLink">Inserir Notas</a>
        <a href="#" id="supportLink">Suporte</a>
    `;

    // Define o menu lateral de acordo com o tipo de usuário
    sidebar.innerHTML = userType === 'professor' ? professorOptions : alunoOptions;

    const welcomeBox = document.getElementById('welcomeBox');
    const insertBox = document.getElementById('insertBox');
    const supportBox = document.getElementById('supportBox');
    const tableContainer = document.getElementById('tableContainer');
    const tableContainer2 = document.getElementById('tableContainer2');
    const homeLink = document.getElementById('homeLink');
    const boletimLink = document.getElementById('boletimLink');
    const meuLink = document.getElementById('meuLink');
    const inserirNotasLink = document.getElementById('inserirNotasLink');
    const supportLink = document.getElementById('supportLink');

    // Inicializa as exibições
    welcomeBox.style.display = 'block';
    insertBox.style.display = 'none';
    supportBox.style.display = 'none';
    tableContainer.style.display = 'none';
    tableContainer2.style.display = 'none';

    homeLink.addEventListener('click', function() {
        welcomeBox.style.display = 'block';
        insertBox.style.display = 'none';
        supportBox.style.display = 'none';
        tableContainer.style.display = 'none';
        tableContainer2.style.display = 'none';
    });

    if (boletimLink) {
        boletimLink.addEventListener('click', function() {
            welcomeBox.style.display = 'none';
            insertBox.style.display = 'none';
            supportBox.style.display = 'none';
            tableContainer.style.display = 'none';
            tableContainer2.style.display = 'block'; // Exibe a tabela de boletim
        });
    }

    if (meuLink) {
        meuLink.addEventListener('click', function() {
            welcomeBox.style.display = 'none';
            insertBox.style.display = 'none';
            supportBox.style.display = 'none';
            tableContainer.style.display = 'block'; // Exibe a tabela de boletim (para alunos)
            tableContainer2.style.display = 'none'; // Esconde a tabela de boletim (para professores)
        });
    }
    

    if (inserirNotasLink) {
        inserirNotasLink.addEventListener('click', function() {
            welcomeBox.style.display = 'none';
            insertBox.style.display = 'block';
            supportBox.style.display = 'none';
            tableContainer.style.display = 'none';
            tableContainer2.style.display = 'none';
        });
    }

    if (supportLink) {
        supportLink.addEventListener('click', function() {
            welcomeBox.style.display = 'none';
            insertBox.style.display = 'none';
            supportBox.style.display = 'block';
            tableContainer.style.display = 'none';
            tableContainer2.style.display = 'none';
        });
    }

    const calculateAverageButton = document.getElementById('calculateAverage');
    const grade1Input = document.getElementById('grade1');
    const grade2Input = document.getElementById('grade2');
    const grade3Input = document.getElementById('grade3');
    const averageInput = document.getElementById('average');
    const situacaoInput = document.getElementById('situacao');

    const submitNotesButton = document.getElementById('submitNotes');

    submitNotesButton.addEventListener('click', function() {
        document.getElementById('insertNotesForm').reset();
        alert('Notas foram incluídas com sucesso!');
    });

    calculateAverageButton.addEventListener('click', function() {
        const grade1 = parseFloat(grade1Input.value);
        const grade2 = parseFloat(grade2Input.value);
        const grade3 = parseFloat(grade3Input.value);

        // Validações
        if (grade1 < 0 || grade1 > 10) {
            alert('A nota da Prova 1 deve estar entre 0 e 10.');
            return;
        }
        if (grade2 < 0 || grade2 > 10) {
            alert('A nota da Prova 2 deve estar entre 0 e 10.');
            return;
        }
        if (grade3 < 0 || grade3 > 1) {
            alert('A participação deve estar entre 0 e 1.');
            return;
        }

        // Cálculo da média
        const average = ((grade1 + grade2) / 2) + grade3;
        const finalAverage = Math.min(average, 10).toFixed(1);
        averageInput.value = finalAverage;

        // Determina a situação
        let situacao;
        if (finalAverage >= 6) {
            situacao = 'Aprovado';
        } else if (finalAverage >= 4) {
            situacao = 'Recuperação';
        } else {
            situacao = 'Reprovado';
        }

        situacaoInput.value = situacao;
    });

    // Enviar suporte
    const sendSupportButton = document.getElementById('sendSupport');
    sendSupportButton.addEventListener('click', function() {
        const reason = document.getElementById('reason').value;
        const description = document.getElementById('description').value;

        if (!reason || !description) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Seu suporte foi enviado com sucesso!');
        document.getElementById('supportForm').reset();
    });
});

