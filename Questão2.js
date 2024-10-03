function mostrarLista(){
    const numeroInput = document.getElementById('numero').value;
    const nomeInput = document.getElementById('nome').value;
    const mensagemDiv = document.getElementById('mensagem');
    const listaDiv = document.getElementById('lista');
    listaDiv.innerHTML = ''; // Limpa a lista anterior

if (numeroInput.trim() === "" || isNaN(numeroInput) || numeroInput < 1) {
    mensagemDiv.textContent = "Por favor, insira um número válido.";
   } else {
    const numero = parseInt(numeroInput);
    mensagemDiv.textContent = ""; // Limpa a mensagem de erro
    let listaHtml = `<h2>Lista de ${numero} itens para ${nomeInput}:</h2><ol>`;
    for (let i = 1; i <= numero; i++) {
        listaHtml += `<li>Item ${i}</li>`;
    }
    listaHtml += '</ol>';
    listaDiv.innerHTML = listaHtml;
}
}
