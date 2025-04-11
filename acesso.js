document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const setor = document.getElementById('setor').value;
    const password = document.getElementById('password').value;

    
    const erroMensagemDiv = document.getElementById('MensagemdeErro');
    const produtoDiv = document.getElementById('produto');
    const loginForm = document.getElementById('loginForm');
    const titulo = document.querySelector('h1');
    const verCargosSalariosBtn = document.getElementById('verCargosSalarios');
    const tabelaCargosSalariosDiv = document.getElementById('tabelaCargosSalarios');
    const tiConverterDiv = document.getElementById('tiConverter');
    const rhContentDiv = document.getElementById('rhContent'); 

    const ControleDeAcesso = {
        Comercial: { user: 'CMCL12', pass: 'Com&c1@l' },
        RH: { user: '98HR', pass: 'RH!@2025' },
        TI: { user: 'DEV4567TI', pass: 'IT&&||==2025' }
    };

    produtoDiv.style.display = 'none';
    verCargosSalariosBtn.style.display = 'none';
    tabelaCargosSalariosDiv.style.display = 'none';
    tiConverterDiv.style.display = 'none';
    erroMensagemDiv.style.display = 'none';
    rhContentDiv.style.display = 'none'; 

    if (ControleDeAcesso[setor] && ControleDeAcesso[setor].user === username && ControleDeAcesso[setor].pass === password) {
        alert(`Login bem-sucedido! Bem-vindo ao setor ${setor}!`);
        titulo.textContent = setor;
        loginForm.style.display = 'none';

        switch (setor) {
            case "Comercial":
                document.getElementById('produtoImagem').src = "https://media.ambito.com/p/9db8f0c465df0f5134267372ffb550ae/adjuntos/239/imagenes/039/404/0039404820/730x0/smart/imagepng.png";
                document.getElementById('produtoNome').textContent = "Notebook Ultra";
                document.getElementById('produtoValor').textContent = "2.499,00";
                produtoDiv.style.display = 'block';
                break;
            case "RH":
                rhContentDiv.style.display = 'block'; 
                verCargosSalariosBtn.style.display = 'block';
                break;
            case "TI":
                tiConverterDiv.style.display = 'block';
                break;
        }
    } else {
        erroMensagemDiv.textContent = 'Usuário ou senha incorretos para o setor escolhido.';
        erroMensagemDiv.style.display = 'block';
        erroMensagemDiv.style.color = 'red';
    }
});


document.getElementById('converterBtn').addEventListener('click', function () {
    const numero = document.getElementById('numeroInput').value;
    const resultadoBinario = document.getElementById('resultadoBinario');

    if (numero === '' || isNaN(numero)) {
        resultadoBinario.textContent = 'Por favor, insira um número válido';
        return;
    }

    const binario = parseInt(numero).toString(2);
    resultadoBinario.textContent = `O número ${numero} em binário é: ${binario}`;
});


document.getElementById('verCargosSalarios').addEventListener('click', function () {
    const dados = [
        { nome: "João Silva", setor: "RH", cargo: "Analista", salario: "4.500,00" },
        { nome: "Maria Oliveira", setor: "RH", cargo: "Coordenadora", salario: "6.800,00" },
        { nome: "Carlos Santos", setor: "RH", cargo: "Assistente", salario: "3.200,00" }
    ];

    const tabela = document.querySelector('#tabelaCargosSalarios tbody');
    tabela.innerHTML = dados.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.setor}</td>
            <td>${item.cargo}</td>
            <td>${item.salario}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaCargosSalarios').style.display = 'block';
    this.style.display = 'none';
});
