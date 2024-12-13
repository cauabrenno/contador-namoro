// Data do início do namoro (formato: ano, mês-1, dia)
const dataInicio = new Date(2022, 12, 10); // Exemplo: 15 de outubro de 2023

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `
        ${anos} ano, ${meses} meses, ${dias} dias, 
        ${horas} horas, ${minutos} minutos, 
        ${segundos} segundos
    `;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Iniciar o contador ao carregar a página
atualizarContador();
